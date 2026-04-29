import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { supabase, isSupabaseEnvConfigured } from "@/integrations/supabase/client";
import productsCollection from "@/assets/products-collection.jpg";
import productSacolas from "@/assets/product-sacolas.jpg";
import finishHotStamping from "@/assets/finish-hot-stamping.jpg";
import { blogPosts, postPath, type BlogPost as LocalBlogPost } from "@/data/blogPosts";

const featuredSeedSlug = blogPosts[0]?.slug ?? "";

const fallbackCategories = ["Estratégia de Embalagem", "Sacolas", "Acabamentos"];

const fallbackImages: Record<string, typeof productsCollection> = {
  "como-escolher-a-embalagem-ideal": productsCollection,
  "sacolas-personalizadas-o-que-considerar": productSacolas,
  "acabamentos-premium-percepcao-de-valor": finishHotStamping,
};

const BLOG_CANONICAL_URL = "https://printbag.com.br/blog";

type BlogCategory = {
  name: string;
  slug: string;
};

/** Linha unificada: Supabase ou fallback local. */
type BlogListPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover_image_url: string | null;
  cover_image_alt: string | null;
  read_time_minutes: number;
  published_at: string | null;
  published_label?: string | null;
  is_featured: boolean;
  keywords: string[] | null;
  blog_categories: { name: string; slug?: string } | null;
  fallback_image?: string;
};

function parseMinutesFromReadTime(readTime: string): number {
  const m = readTime.match(/(\d+)/);
  return m ? Number(m[1]) : 6;
}

const formatDate = (date: string | null) => {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
  })
    .format(parsed)
    .replace(/^./, (letter) => letter.toUpperCase());
};

function mapLocalToListPosts(posts: LocalBlogPost[]): BlogListPost[] {
  return posts.map((p, i) => ({
    id: `local-${p.slug}`,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    cover_image_url: null,
    cover_image_alt: p.title,
    read_time_minutes: parseMinutesFromReadTime(p.readTime),
    published_at: null,
    published_label: p.date,
    is_featured: i === 0,
    keywords: null,
    blog_categories: { name: p.category },
    fallback_image: p.image,
  }));
}

function normalizeListRemote(raw: unknown): BlogListPost {
  const r = raw as Record<string, unknown>;
  const cats = r.blog_categories as { name?: string; slug?: string } | null | undefined;
  const kwRaw = r.keywords;
  const keywords =
    Array.isArray(kwRaw) && kwRaw.every((x) => typeof x === "string")
      ? (kwRaw as string[])
      : null;

  return {
    id: String(r.id ?? r.slug ?? ""),
    slug: String(r.slug ?? ""),
    title: String(r.title ?? ""),
    excerpt: String(r.excerpt ?? ""),
    cover_image_url: typeof r.cover_image_url === "string" ? r.cover_image_url : null,
    cover_image_alt: typeof r.cover_image_alt === "string" ? r.cover_image_alt : null,
    read_time_minutes: typeof r.read_time_minutes === "number" ? r.read_time_minutes : 6,
    published_at: typeof r.published_at === "string" ? r.published_at : null,
    published_label: undefined,
    is_featured: Boolean(r.is_featured),
    keywords,
    blog_categories: cats?.name ? { name: cats.name, slug: cats.slug } : null,
  };
}

type BlogListOrderOnce = {
  order: (
    column: string,
    options?: { ascending?: boolean },
  ) => Promise<{ data: unknown[] | null; error: Error | null }>;
};

type BlogListSelectChain = {
  eq: (column: string, value: string | boolean) => BlogListSelectChain;
  lte: (column: string, value: string) => BlogListSelectChain;
  order: (column: string, options?: { ascending?: boolean }) => BlogListOrderOnce;
};

type BlogListQueryBuilder = {
  select: (columns: string) => BlogListSelectChain;
};

const blogListClient = supabase as unknown as {
  from: (table: "blog_posts") => BlogListQueryBuilder;
};

type BlogCategoriesQB = {
  select: (columns: string) => {
    eq: (column: string, value: boolean) => {
      order: (
        column: string,
        options?: { ascending?: boolean },
      ) => Promise<{ data: unknown[] | null; error: Error | null }>;
    };
  };
};

const blogCategoriesClient = supabase as unknown as {
  from: (table: "blog_categories") => BlogCategoriesQB;
};

async function fetchBlogPostsRemote(): Promise<BlogListPost[]> {
  const { data, error } = await blogListClient
    .from("blog_posts")
    .select(
      `
      id,
      title,
      slug,
      excerpt,
      cover_image_url,
      cover_image_alt,
      read_time_minutes,
      published_at,
      is_featured,
      keywords,
      blog_categories(name, slug)
    `,
    )
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .order("is_featured", { ascending: false })
    .order("published_at", { ascending: false });

  if (error) throw error;
  const rows = Array.isArray(data) ? data : [];
  return rows.map((row) => normalizeListRemote(row));
}

async function fetchUnifiedBlogList(): Promise<BlogListPost[]> {
  if (isSupabaseEnvConfigured()) {
    try {
      const remote = await fetchBlogPostsRemote();
      if (remote.length > 0) return remote;
    } catch {
      /* fallback local */
    }
  }
  return mapLocalToListPosts(blogPosts);
}

async function fetchBlogCategories(): Promise<BlogCategory[]> {
  if (!isSupabaseEnvConfigured()) return [];
  try {
    const { data, error } = await blogCategoriesClient
      .from("blog_categories")
      .select("name, slug")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });

    if (error) throw error;
    const rows = Array.isArray(data) ? data : [];
    return rows
      .map((row) => ({
        name: String((row as Record<string, unknown>).name ?? ""),
        slug: String((row as Record<string, unknown>).slug ?? ""),
      }))
      .filter((c) => c.name);
  } catch {
    return [];
  }
}

/** Garante string para <img src> (imports de asset podem vir como objeto em alguns setups). */
function resolveImgSrc(value: unknown): string {
  if (typeof value === "string" && value.length > 0) return value;
  if (value && typeof value === "object" && "src" in value && typeof (value as { src: string }).src === "string") {
    return (value as { src: string }).src;
  }
  return typeof productsCollection === "string" ? productsCollection : String(productsCollection);
}

function cardImage(post: BlogListPost): string {
  const raw =
    post.cover_image_url ||
    fallbackImages[post.slug] ||
    post.fallback_image ||
    productsCollection;
  return resolveImgSrc(raw);
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  const { data: listPosts = [], isPending: isLoadingPosts } = useQuery({
    queryKey: ["blog-posts-index"],
    queryFn: fetchUnifiedBlogList,
  });

  const { data: databaseCategories = [] } = useQuery({
    queryKey: ["blog-categories-index"],
    queryFn: fetchBlogCategories,
    enabled: isSupabaseEnvConfigured(),
  });

  const categories = useMemo(() => {
    const names =
      databaseCategories.length > 0 ? databaseCategories.map((c) => c.name) : fallbackCategories;
    return ["Todos", ...names];
  }, [databaseCategories]);

  const filteredPosts = useMemo(() => {
    const normalizedSearch = activeSearch.trim().toLowerCase();
    return listPosts.filter((post) => {
      const categoryName = post.blog_categories?.name ?? "";
      const matchesCategory =
        selectedCategory === "Todos" || categoryName === selectedCategory;
      const dateStr = post.published_label ?? formatDate(post.published_at);
      const matchesSearch =
        !normalizedSearch ||
        [
          post.title,
          post.excerpt,
          categoryName,
          dateStr,
          ...(post.keywords ?? []),
        ].some((content) =>
          String(content ?? "")
            .toLowerCase()
            .includes(normalizedSearch),
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeSearch, listPosts, selectedCategory]);

  const featuredSlug = useMemo(() => {
    const featured = listPosts.find((p) => p.is_featured);
    return featured?.slug ?? listPosts[0]?.slug ?? featuredSeedSlug;
  }, [listPosts]);

  const showFeatured =
    Boolean(featuredSlug) && filteredPosts.some((p) => p.slug === featuredSlug);

  const gridPosts = showFeatured
    ? filteredPosts.filter((p) => p.slug !== featuredSlug)
    : filteredPosts;

  const featuredRow = listPosts.find((p) => p.slug === featuredSlug);

  const handleSearch = () => {
    setActiveSearch(searchTerm);
  };

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Blog — Printbag Embalagens";

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = BLOG_CANONICAL_URL;
    canonical.setAttribute("data-printbag-page", "blog");
    document.head.appendChild(canonical);

    return () => {
      document.title = prevTitle;
      document.head.querySelector('link[data-printbag-page="blog"]')?.remove();
    };
  }, []);

  return (
    <Layout>
      <section className="relative min-h-[560px] pt-32 pb-16 md:pt-40 md:pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/25 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-primary-foreground/70 font-medium uppercase tracking-wider text-sm mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Ideias para embalagens que fortalecem sua marca
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-8">
              Tendências, boas práticas e referências para marcas que querem transformar embalagens personalizadas em experiência, presença e valor no ponto de venda.
            </p>
            <form
              className="flex items-center gap-3 w-full max-w-md border border-primary-foreground/60 bg-background/10 backdrop-blur-sm rounded-lg px-4 py-3"
              onSubmit={(event) => {
                event.preventDefault();
                handleSearch();
              }}
            >
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Pesquise por temas, materiais ou acabamentos"
                className="min-w-0 flex-1 bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/70 outline-none"
                aria-label="Pesquisar publicações do blog"
              />
              <button
                type="submit"
                aria-label="Pesquisar"
                className="shrink-0 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {isLoadingPosts ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="h-96 rounded-xl bg-muted animate-pulse" />
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12 border border-border rounded-xl bg-card">
              <p className="text-foreground font-medium">Nenhum conteúdo encontrado.</p>
              <p className="text-sm text-muted-foreground mt-2">
                Tente pesquisar por outro tema, material ou acabamento.
              </p>
            </div>
          ) : (
            <>
              {showFeatured && featuredRow && (
                <motion.article
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-12 md:mb-16"
                >
                  <Link
                    to={postPath(featuredRow.slug)}
                    className="group grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow text-left"
                  >
                    <div className="aspect-[4/3] md:aspect-auto md:min-h-[280px] overflow-hidden">
                      <img
                        src={cardImage(featuredRow)}
                        alt={featuredRow.cover_image_alt || featuredRow.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <span className="text-sm font-medium text-primary">
                        {featuredRow.blog_categories?.name ?? "Blog Printbag"}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold mt-2 mb-4 text-foreground group-hover:text-primary transition-colors">
                        {featuredRow.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{featuredRow.excerpt}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 shrink-0" />
                          {featuredRow.published_label ?? formatDate(featuredRow.published_at)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-4 h-4 shrink-0" />
                          {featuredRow.read_time_minutes} min de leitura
                        </span>
                      </div>
                      <span className="mt-6 inline-flex items-center gap-2 text-primary font-medium">
                        Ler artigo
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {gridPosts.map((post, index) => {
                  const categoryName = post.blog_categories?.name ?? "Conteúdo";
                  return (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className="bg-card border border-border rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow"
                    >
                      <Link to={postPath(post.slug)} className="block h-full">
                        <img
                          src={cardImage(post)}
                          alt={post.cover_image_alt || post.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                            {categoryName}
                          </span>
                          <h3 className="text-xl font-heading font-bold text-foreground mt-3 mb-3">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-5">{post.excerpt}</p>
                          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-5">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {post.published_label ?? formatDate(post.published_at)}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              {post.read_time_minutes} min de leitura
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                            Ler publicação <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </Link>
                    </motion.article>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
