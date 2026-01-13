import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Factory,
  ArrowRight,
  Calendar,
  Building2,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import factoryAerial from "@/assets/factory-aerial.jpg";

const values = [
  {
    icon: Target,
    title: "Excelência",
    description: "Buscamos a perfeição em cada detalhe, desde o atendimento até a entrega final."
  },
  {
    icon: Heart,
    title: "Compromisso",
    description: "Honramos nossos acordos e prazos, construindo relações de confiança duradouras."
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Trabalhamos lado a lado com nossos clientes para entender e superar expectativas."
  },
  {
    icon: TrendingUp,
    title: "Inovação",
    description: "Investimos constantemente em tecnologia e processos para oferecer as melhores soluções."
  }
];

const timeline = [
  {
    year: "1980",
    title: "Fundação",
    description: "Início da trajetória da Printbag em Itajaí/SC como empresa familiar."
  },
  {
    year: "2010",
    title: "Aquisição",
    description: "Aquisição da Printbag pela holding Weisul, que passa a gerir a empresa, trazendo mais solidez financeira e confiabilidade à marca."
  },
  {
    year: "2011",
    title: "Nova Sede",
    description: "Início da construção da nova sede em Camboriú (SC)."
  },
  {
    year: "2015",
    title: "Centro de Distribuição",
    description: "Aquisição de novo Centro de Distribuição dedicado ao armazenamento de produtos e insumos."
  },
  {
    year: "2024",
    title: "Expansão Logística",
    description: "Um novo Centro de Distribuição em Itajaí (SC) é contratado pela empresa, acomodando toda a operação logística."
  },
  {
    year: "2025",
    title: "Investimento em Tecnologia",
    description: "Investimento em novos equipamentos de última geração."
  }
];


export default function SobrePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-muted" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium uppercase tracking-wider text-sm"
            >
              Sobre Nós
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mt-4 mb-6"
            >
              Mais de 10 Anos{" "}
              <span className="text-gradient-primary">Transformando</span>{" "}
              Marcas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Somos a Printbag, fabricante de embalagens e sacolas que combina 
              tradição, inovação e sustentabilidade para criar soluções que 
              elevam a experiência das maiores marcas do Brasil.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Factory Image Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src={factoryAerial} 
                  alt="Fábrica Printbag - Vista aérea" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-glow-primary">
                <Factory className="w-8 h-8 mb-2" />
                <div className="text-2xl font-heading font-bold">10.000 m²</div>
                <div className="text-sm text-primary-foreground/80">Área Fabril</div>
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
                Fundada em 2013, a Printbag nasceu da visão de criar embalagens que 
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

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Missão, Visão e Valores
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 border border-border text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Missão
              </h3>
              <p className="text-muted-foreground">
                Inovar, encantar e apaixonar pessoas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl p-8 border border-border text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Visão
              </h3>
              <p className="text-muted-foreground">
                Ser a primeira escolha dos clientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl p-8 border border-border text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Valores
              </h3>
              <p className="text-muted-foreground">
                Justos socialmente, corretos ambientalmente e viáveis economicamente.
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
              >
                <value.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              NOSSA TRAJETÓRIA
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />

            <div className="space-y-12">
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
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-card rounded-xl p-6 border border-border inline-block">
                      <div className="flex items-center gap-3 mb-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-heading font-bold text-primary">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
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


      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Faça Parte da Nossa História
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Junte-se às centenas de marcas que confiam na Printbag para suas embalagens.
            </p>
            <Button variant="heroPrimary" size="xl" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/contato">
                Fale Conosco
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
