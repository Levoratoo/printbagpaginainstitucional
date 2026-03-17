import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  Factory,
  ArrowRight,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import factoryAerial from "@/assets/factory-aerial.jpg";
import sobreHero from "@/assets/sobre-hero.jpg";
import timeline1980 from "@/assets/timeline-1980.jpg";
import timeline2010 from "@/assets/timeline-2010.jpg";
import timeline2011 from "@/assets/timeline-2011.jpg";
import timeline2015 from "@/assets/timeline-2015.jpg";
import timeline2024 from "@/assets/timeline-2024.jpg";
import timeline2025 from "@/assets/timeline-2025.jpg";


const timeline = [
  {
    year: "1980",
    title: "Fundação",
    description: "Início da trajetória da Printbag em Itajaí/SC como empresa familiar.",
    image: timeline1980
  },
  {
    year: "2010",
    title: "Aquisição",
    description: "Aquisição da Printbag pela holding Weisul, que passa a gerir a empresa, trazendo mais solidez financeira e confiabilidade à marca.",
    image: timeline2010
  },
  {
    year: "2011",
    title: "Nova Sede",
    description: "Início da construção da nova sede em Camboriú (SC).",
    image: timeline2011
  },
  {
    year: "2015",
    title: "Centro de Distribuição",
    description: "Aquisição de novo Centro de Distribuição dedicado ao armazenamento de produtos e insumos.",
    image: timeline2015
  },
  {
    year: "2024",
    title: "Expansão Logística",
    description: "Um novo Centro de Distribuição em Itajaí (SC) é contratado pela empresa, acomodando toda a operação logística.",
    image: timeline2024
  },
  {
    year: "2025",
    title: "Investimento em Tecnologia",
    description: "Investimento em novos equipamentos de última geração.",
    image: timeline2025
  }
];


export default function SobrePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy" src={sobreHero} alt="Fábrica Printbag ao pôr do sol" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary-foreground font-medium uppercase tracking-wider text-sm"
            >
              Sobre Nós
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mt-4 mb-6"
            >
              Mais de 40 Anos{" "}
              <span className="text-gradient-primary">Transformando</span>{" "}
              Marcas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/90"
            >
              Somos a Printbag, fabricante de embalagens e sacolas que combina 
              tradição, inovação e sustentabilidade para criar soluções que 
              elevam a experiência das maiores marcas do Brasil.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Factory Image Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className=""
            >
              <div className="rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src={factoryAerial} 
                  alt="Fábrica Printbag - Vista aérea" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <p className="text-muted-foreground mb-6">
                Fundada em 1980, a Printbag nasceu da visão de criar embalagens que 
                fossem mais do que simples invólucros – seriam extensões das marcas 
                que representam.
              </p>
              <p className="text-muted-foreground mb-6">
                Ao longo dos anos, investimos em tecnologia de ponta, equipe 
                especializada e processos sustentáveis para nos tornar referência 
                no mercado de embalagens personalizadas.
              </p>
              <p className="text-muted-foreground">
                Hoje, atendemos mais de 500 clientes em todo o Brasil, incluindo 
                marcas renomadas como Melissa, Usaflex, Claro e Milon, sempre com 
                o compromisso de entregar qualidade e inovação.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Nossa Trajetória
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`lg:flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"}`}>
                    <div className="bg-card rounded-xl p-6 border border-border shadow-medium">
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-heading font-bold text-primary">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={`${item.title} - ${item.year}`}
                          className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-primary border-4 border-background relative z-10" />
                  
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              O que nos <span className="text-primary">move</span> todo dia
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border shadow-medium p-8"
            >
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Missão</span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-3 mb-4">
                Por que existimos
              </h3>
              <div className="w-12 h-0.5 bg-primary mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Inovar, encantar e apaixonar pessoas: criando embalagens que traduzem a identidade de cada marca com precisão e cuidado.
              </p>
              <span className="inline-block border border-primary text-primary text-sm font-medium px-4 py-1.5 rounded-full">
                Propósito
              </span>
            </motion.div>

            {/* Visão */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl border border-border shadow-medium p-8"
            >
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Visão</span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-3 mb-4">
                Para onde vamos
              </h3>
              <div className="w-12 h-0.5 bg-primary mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ser a primeira escolha dos clientes: referência nacional em embalagens que unem design, sustentabilidade e excelência produtiva.
              </p>
              <span className="inline-block border border-primary text-primary text-sm font-medium px-4 py-1.5 rounded-full">
                Futuro
              </span>
            </motion.div>

            {/* Valores */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl border border-border shadow-medium p-8"
            >
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Valores</span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-3 mb-4">
                Como agimos
              </h3>
              <div className="w-12 h-0.5 bg-primary mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Justos socialmente, corretos ambientalmente e viáveis economicamente: equilíbrio que guia cada decisão, do chão de fábrica ao cliente.
              </p>
              <span className="inline-block border border-primary text-primary text-sm font-medium px-4 py-1.5 rounded-full">
                Princípios
              </span>
            </motion.div>
          </div>
        </div>
      </section>




    </Layout>
  );
}
