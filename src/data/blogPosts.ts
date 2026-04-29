import productsCollection from "@/assets/products-collection.jpg";
import productSacolas from "@/assets/product-sacolas.jpg";
import finishHotStamping from "@/assets/finish-hot-stamping.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  paragraphs: string[];
};

/** Primeiro item é o destaque da listagem. */
export const blogPosts: BlogPost[] = [
  {
    slug: "como-escolher-a-embalagem-ideal",
    title: "Como escolher a embalagem ideal para valorizar sua marca",
    excerpt:
      "Critérios essenciais para alinhar material, acabamento, formato e experiência de compra em projetos de embalagem personalizados.",
    date: "Janeiro 2026",
    readTime: "6 min de leitura",
    category: "Estratégia de Embalagem",
    image: productsCollection,
    paragraphs: [
      "Embalagens deixaram de ser apenas um recipiente para o produto: no varejo e em pontos de venda estratégicos, elas são parte da primeira impressão da marca e do momento da decisão de compra. Escolher a embalagem ideal envolve equilibrar identidade visual, proteção do produto, custo industrial viável e aderência à legislação do seu segmento.",
      "Comece pelo papel ou superfície: gramatura, cor base e resistência determinam peso em punho, percepção de qualidade e desempenho logístico. Combine esse quadro com o formato da sacola ou da embalagem (altura de fundo, tipo de abertura, experiência de abrir/fechar) para garantir que a peça funcione bem tanto na loja quanto na reposição.",
      "Em seguida, avalie acabamentos e impressão — desde cores Pantone e provas até opcionais como hot stamping, laminação ou relevo — sempre com um olhar no custo por unidade e nas tiragens mínimas. Um projeto bem guiado costuma priorizar dois ou três diferenciais que comunicam valor sem sobrecarregar o investimento.",
      "Por fim, alinhe materiais e mensagens à sua estratégia de sustentabilidade e à experiência desejada na sacola (toque, rigidez, acabamento das alças). Documentar essas decisões com seu fornecedor ajuda a fixar prazo, provas e metas de qualidade ao longo da produção.",
    ],
  },
  {
    slug: "sacolas-personalizadas-o-que-considerar",
    title: "Sacolas personalizadas: o que considerar antes de produzir",
    excerpt:
      "Um guia prático sobre gramatura, alças, impressão e volume para marcas que buscam qualidade e consistência no ponto de venda.",
    date: "Dezembro 2025",
    readTime: "5 min de leitura",
    category: "Sacolas",
    image: productSacolas,
    paragraphs: [
      "Antes de fechar arte ou tiragem, defina o papel em função do peso médio da sacola cheia e da cadência de reposição na loja. Papel muito fino pode comprometer a estrutura com cargas maiores; papel mais robusto melhora a sensação premium, mas influencia custo e empilhamento.",
      "Alças são decisivas para ergonomia e durabilidade: opções em cordão, fita, papel torcido ou sintéticas mudam o uso diário no PDV e o perfil estético da peça. Vale validar comprimento, resistência e forma de fixação com um protótipo antes da produção em série.",
      "Impressão e cores devem conversar com sua identidade — incluindo margens de segurança na arte e possíveis correcções entre prova digital e prova física. Planejar volume por tiragem evita ruptura ou excesso de estoque e permite negociar melhor escala com o parceiro industrial.",
      "Por último, registre prazos de entrega e critérios de aceite (uniformidade de cor, posição de logotipo, acabamento das dobras). Um checklist simples na entrada da mercadoria protege o investimento e mantém a sacola alinhada ao posicionamento da marca.",
    ],
  },
  {
    slug: "acabamentos-premium-percepcao-de-valor",
    title: "Acabamentos premium que aumentam a percepção de valor",
    excerpt:
      "Hot stamping, relevo, laminação e verniz localizado aplicados com propósito para criar embalagens mais memoráveis.",
    date: "Novembro 2025",
    readTime: "4 min de leitura",
    category: "Acabamentos",
    image: finishHotStamping,
    paragraphs: [
      "Acabamentos não são apenas décor: eles orientam o olhar do consumidor e reforçam mensagens de exclusividade ou sustentabilidade. Hot stamping e laminações são ótimos exemplos em que o contraste entre superfícies transforma o mesmo formato estrutural em uma experiência diferente ao toque e à luz.",
      "Relevo seco ou combinado pode destacar logotipos e microtextos sem sobrecarregar a arte — desde que o projeto reserve espaço de respiro e respeite limites mínimos para evitar estourar em tiragens longas.",
      "Verniz localizado e laminações fosca ou soft touch criam pontos de foco e áreas com tactilidade distinta, úteis para guiar leitura ou destacar calls-to-action sutis na embalagem.",
      "O melhor resultado costuma vir da combinação intencional de poucos recursos bem executados com processos estáveis na produção — sempre validados em prova física e com critérios claros de aceitação entre marca e gráfica.",
    ],
  },
];

export function getBlogPostBySlug(slug: string | undefined): BlogPost | undefined {
  if (!slug) return undefined;
  return blogPosts.find((p) => p.slug === slug);
}

export function postPath(slug: string): string {
  return `/blog/${slug}`;
}
