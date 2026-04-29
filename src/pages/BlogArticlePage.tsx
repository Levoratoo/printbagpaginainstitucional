import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { getBlogPostBySlug, postPath } from "@/data/blogPosts";

const SITE_ORIGIN = "https://printbag.com.br";

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);

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

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
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
              <img
                src={post.image}
                alt=""
                className="w-full aspect-[21/9] md:aspect-[2/1] object-cover"
              />
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
    </Layout>
  );
}
