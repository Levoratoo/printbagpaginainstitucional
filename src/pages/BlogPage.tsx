import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import {
  blogPosts,
  postPath,
  getBlogPostBySlug,
  type BlogPost,
} from "@/data/blogPosts";

const featuredPost = blogPosts[0];
const posts = blogPosts;

const BLOG_CANONICAL_URL = "https://printbag.com.br/blog";
const SITE_ORIGIN = "https://printbag.com.br";

function slugFromSplat(splat: string | undefined): string {
  if (splat == null || splat === "") return "";
  const trimmed = splat.replace(/^\/+|\/+$/g, "");
  if (!trimmed) return "";
  return trimmed.split("/").filter(Boolean)[0] ?? "";
}

function BlogArticleBody({ post }: { post: BlogPost }) {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/85 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Voltar ao blog
          </Link>

          <p className="text-sm font-medium text-primary mb-3">{post.category}</p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.35rem] font-bold text-foreground leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-10 border-b border-border">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 shrink-0" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 shrink-0" />
              {post.readTime}
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-medium mb-12">
            <img src={post.image} alt="" className="w-full aspect-[21/9] md:aspect-[2/1] object-cover" />
          </div>

          <div className="space-y-6 text-base md:text-[1.05rem] leading-[1.75] text-foreground/90">
            {post.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-border">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Ver todas as publicações
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const params = useParams();
  const slugKey = slugFromSplat(params["*"]);

  const routePost = useMemo(
    () => (slugKey ? getBlogPostBySlug(slugKey) : undefined),
    [slugKey],
  );

  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedSearch = activeSearch.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "Todos" || post.category === selectedCategory;
      const matchesSearch =
        !normalizedSearch ||
        [post.title, post.excerpt, post.category, post.date].some((content) =>
          content.toLowerCase().includes(normalizedSearch),
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeSearch, selectedCategory]);

  const showFeatured = filteredPosts.some((p) => p.slug === featuredPost.slug);
  const gridPosts = showFeatured
    ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
    : filteredPosts;

  const handleSearch = () => {
    setActiveSearch(searchTerm);
  };

  useEffect(() => {
    if (slugKey) return;

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
  }, [slugKey]);

  useEffect(() => {
    if (!slugKey || !routePost) return;

    const post = routePost;
    const prevTitle = document.title;
    document.title = `${post.title} — Blog Printbag`;

    const canonicalHref = `${SITE_ORIGIN}${postPath(post.slug)}`;
    let link = document.querySelector<HTMLLinkElement>('link[data-printbag-page="blog-article"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      link.setAttribute("data-printbag-page", "blog-article");
      document.head.appendChild(link);
    }
    link.href = canonicalHref;

    return () => {
      document.title = prevTitle;
      document.head.querySelector('link[data-printbag-page="blog-article"]')?.remove();
    };
  }, [slugKey, routePost]);

  if (slugKey && !routePost) {
    return <Navigate to="/blog" replace />;
  }

  if (slugKey && routePost) {
    return (
      <Layout>
        <BlogArticleBody post={routePost} />
      </Layout>
    );
  }

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
            {["Todos", "Estratégia de Embalagem", "Sacolas", "Acabamentos"].map((cat) => (
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

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 border border-border rounded-xl bg-card">
              <p className="text-foreground font-medium">Nenhum conteúdo encontrado.</p>
              <p className="text-sm text-muted-foreground mt-2">
                Tente pesquisar por outro tema, material ou acabamento.
              </p>
            </div>
          ) : (
            <>
              {showFeatured && (
                <motion.article
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-12 md:mb-16"
                >
                  <Link
                    to={postPath(featuredPost.slug)}
                    className="group grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow text-left"
                  >
                    <div className="aspect-[4/3] md:aspect-auto md:min-h-[280px] overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <span className="text-sm font-medium text-primary">{featuredPost.category}</span>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold mt-2 mb-4 text-foreground group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 shrink-0" />
                          {featuredPost.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-4 h-4 shrink-0" />
                          {featuredPost.readTime}
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

              <div className="grid gap-8 md:grid-cols-2">
                {gridPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <Link
                      to={postPath(post.slug)}
                      className="group flex flex-col h-full rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow text-left"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-sm font-medium text-primary">{post.category}</span>
                        <h3 className="text-xl font-heading font-bold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium">
                          Ler artigo
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
