import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { supabase, isSupabaseEnvConfigured } from "@/integrations/supabase/client";
import productsCollection from "@/assets/products-collection.jpg";
import productSacolas from "@/assets/product-sacolas.jpg";
import finishHotStamping from "@/assets/finish-hot-stamping.jpg";
import {
  getBlogPostBySlug,
  postPath,
  type BlogPost as LocalBlogPost,
} from "@/data/blogPosts";

/** Imagens de capa quando o post local não tem URL no Supabase (mesmos slugs que em blogPosts.ts). */
const fallbackImages: Record<string, typeof productsCollection> = {
  "como-escolher-a-embalagem-ideal": productsCollection,
  "sacolas-personalizadas-o-que-considerar": productSacolas,
  "acabamentos-premium-percepcao-de-valor": finishHotStamping,
};

export type ContentBlock = {
  type: "paragraph" | "heading";
  text: string;
};

export type BlogArticleRecord = {
  title: string;
  slug: string;
  excerpt: string;
  content: ContentBlock[];
  cover_image_url: string | null;
  cover_image_alt: string | null;
  read_time_minutes: number;
  published_at: string | null;
  /** Texto de data já formatado (posts vindos do fallback local). */
  published_label?: string | null;
  blog_categories: { name: string } | null;
};

type BlogPostQueryBuilder = {
  select: (columns: string) => BlogPostQueryBuilder;
  eq: (column: string, value: string) => BlogPostQueryBuilder;
  lte: (column: string, value: string) => BlogPostQueryBuilder;
  maybeSingle: () => Promise<{ data: unknown | null; error: Error | null }>;
};

const blogClient = supabase as unknown as {
  from: (table: "blog_posts") => BlogPostQueryBuilder;
};

const SITE_ORIGIN = "https://printbag.com.br";

function parseMinutesFromReadTime(readTime: string): number {
  const m = readTime.match(/(\d+)/);
  return m ? Number(m[1]) : 6;
}

function mapLocalToRecord(post: LocalBlogPost): BlogArticleRecord {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.paragraphs.map((text) => ({ type: "paragraph", text })),
    cover_image_url: null,
    cover_image_alt: post.title,
    read_time_minutes: parseMinutesFromReadTime(post.readTime),
    published_at: null,
    published_label: post.date,
    blog_categories: { name: post.category },
  };
}

function normalizeRemote(raw: unknown): BlogArticleRecord {
  const r = raw as Record<string, unknown>;
  const cats = r.blog_categories as { name?: string } | null | undefined;
  return {
    title: String(r.title ?? ""),
    slug: String(r.slug ?? ""),
    excerpt: String(r.excerpt ?? ""),
    content: Array.isArray(r.content) ? (r.content as ContentBlock[]) : [],
    cover_image_url: typeof r.cover_image_url === "string" ? r.cover_image_url : null,
    cover_image_alt: typeof r.cover_image_alt === "string" ? r.cover_image_alt : null,
    read_time_minutes: typeof r.read_time_minutes === "number" ? r.read_time_minutes : 6,
    published_at: typeof r.published_at === "string" ? r.published_at : null,
    published_label: undefined,
    blog_categories: cats?.name ? { name: cats.name } : null,
  };
}

const formatDate = (date: string | null) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
  })
    .format(new Date(date))
    .replace(/^./, (letter) => letter.toUpperCase());
};

async function fetchBlogPost(slug: string): Promise<BlogArticleRecord | null> {
  if (isSupabaseEnvConfigured()) {
    try {
      const { data, error } = await blogClient
        .from("blog_posts")
        .select(`
          title,
          slug,
          excerpt,
          content,
          cover_image_url,
          cover_image_alt,
          read_time_minutes,
          published_at,
          blog_categories(name)
        `)
        .eq("slug", slug)
        .eq("status", "published")
        .lte("published_at", new Date().toISOString())
        .maybeSingle();

      if (error) throw error;
      if (data) return normalizeRemote(data);
    } catch {
      /* fallback local abaixo */
    }
  }

  const local = getBlogPostBySlug(slug);
  return local ? mapLocalToRecord(local) : null;
}

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isPending } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: () => fetchBlogPost(slug!),
    enabled: Boolean(slug),
  });

  const headings = (post?.content ?? []).filter((block) => block.type === "heading");

  const heroSrc =
    post?.cover_image_url ||
    (slug && fallbackImages[slug]) ||
    productsCollection;

  useEffect(() => {
    if (!post) return;

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
  }, [post]);

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <article className="pt-32 md:pt-40 bg-background">
        <header className="container mx-auto px-4 pb-12">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
            </Link>
          </Button>

          {isPending ? (
            <div className="max-w-4xl space-y-4">
              <div className="h-4 w-52 bg-muted rounded animate-pulse" />
              <div className="h-14 w-full max-w-3xl bg-muted rounded animate-pulse" />
              <div className="h-6 w-full max-w-2xl bg-muted rounded animate-pulse" />
            </div>
          ) : !post ? (
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Publicação não encontrada
              </h1>
              <p className="text-muted-foreground mb-6">
                O conteúdo pode ter sido removido ou ainda não está publicado.
              </p>
              <Button variant="cta" asChild>
                <Link to="/blog">Ver publicações</Link>
              </Button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {post.blog_categories?.name ?? "Blog Printbag"}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mt-4 mb-6">
                {post.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-6">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.published_label ?? formatDate(post.published_at)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.read_time_minutes} min de leitura
                </span>
              </div>
            </motion.div>
          )}
        </header>

        {!isPending && post && (
          <>
            <div className="container mx-auto px-4">
              <img
                src={heroSrc}
                alt={post.cover_image_alt || post.title}
                className="w-full max-h-[520px] object-cover rounded-xl shadow-medium"
              />
            </div>

            <section className="container mx-auto px-4 py-12 md:py-16">
              <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
                <div className="max-w-3xl space-y-10">
                  {(post.content ?? []).map((block, index) =>
                    block.type === "heading" ? (
                      <section key={`${block.text}-${index}`}>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                          {block.text}
                        </h2>
                      </section>
                    ) : (
                      <p
                        key={`${block.text}-${index}`}
                        className="text-muted-foreground leading-relaxed text-lg"
                      >
                        {block.text}
                      </p>
                    ),
                  )}

                  <section className="border-t border-border pt-10">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                      Quer transformar sua embalagem em valor de marca?
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                      Fale com a equipe da Printbag para desenvolver projetos personalizados com qualidade,
                      consistência e acabamento adequado ao seu posicionamento.
                    </p>
                    <Button variant="cta" asChild>
                      <Link to="/contato">Fale com um especialista</Link>
                    </Button>
                  </section>
                </div>

                <aside className="bg-muted border border-border rounded-xl p-6 sticky top-28">
                  <h3 className="font-heading font-bold text-foreground mb-4">Nesta publicação</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {headings.length ? (
                      headings.map((heading) => (
                        <li key={heading.text}>{heading.text.replace(/^\d+\.\s*/, "")}</li>
                      ))
                    ) : (
                      <li>Conteúdo Printbag</li>
                    )}
                  </ul>
                </aside>
              </div>
            </section>
          </>
        )}
      </article>
    </Layout>
  );
}
