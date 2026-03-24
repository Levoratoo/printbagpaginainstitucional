import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { 
  Leaf, 
  ArrowRight,
  Recycle,
  ShoppingBag,
  Sparkles,
  Utensils,
  Store,
  Package,
  TreePine,
  Gem,
  Zap,
  Award,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroFactory from "@/assets/hero-factory.jpg";
import seloFsc from "@/assets/selo-fsc-new.png";
import seloEnergia from "@/assets/selo-energia-renovavel.png";
import seloAbvtex from "@/assets/selo-abvtex.jpg";
import seloTwoSides from "@/assets/selo-two-sides.png";
import premioExcelencia from "@/assets/premio-excelencia-grafica.png";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";
import cardPrintmoda from "@/assets/card-printmoda.jpg";
import cardPrintfood from "@/assets/card-printfood.jpg";
import sectorModa from "@/assets/sector-moda.jpg";
import sectorSuperFarma from "@/assets/sector-supermercados-farmacias.jpg";
import sectorCosmeticos from "@/assets/sector-cosmeticos.jpg";
import sectorFoodService from "@/assets/sector-food-service.jpg";
import sectorJoias from "@/assets/sector-joias.jpg";
import sectorAtacado from "@/assets/sector-atacado.jpg";

// Client logos - Alphabetical order
import logoAramis from "@/assets/clients/aramis.png";


import logoClaro from "@/assets/clients/claro.png";
import logoConstance from "@/assets/clients/constance.png";
import logoDemocrata from "@/assets/clients/democrata.png";
import logoGrendene from "@/assets/clients/grendene.png";
import logoLacoste from "@/assets/clients/lacoste.png";
import logoMadero from "@/assets/clients/madero.png";
import logoMaryKay from "@/assets/clients/mary-kay.png";
import logoMelissa from "@/assets/clients/melissa.png";
import logoMilon from "@/assets/clients/milon.png";
import logoRaiaDrogasil from "@/assets/clients/raiadrogasil.png";
import logoRiachuelo from "@/assets/clients/riachuelo.png";
import logoSubway from "@/assets/clients/subway.png";
import logoUsaflex from "@/assets/clients/usaflex.png";
import logoVivo from "@/assets/clients/vivo.png";

const clients = [
  { name: "Aramis", logo: logoAramis },
  { name: "Claro", logo: logoClaro },
  { name: "Constance", logo: logoConstance },
  { name: "Democrata", logo: logoDemocrata },
  { name: "Grendene", logo: logoGrendene },
  { name: "Lacoste", logo: logoLacoste },
  { name: "Madero", logo: logoMadero },
  { name: "Mary Kay", logo: logoMaryKay },
  { name: "Melissa", logo: logoMelissa },
  { name: "Milon", logo: logoMilon },
  { name: "RaiaDrogasil", logo: logoRaiaDrogasil },
  { name: "Riachuelo", logo: logoRiachuelo, className: "!h-5 md:!h-8" },
  { name: "Subway", logo: logoSubway },
  { name: "Usaflex", logo: logoUsaflex },
  { name: "Vivo", logo: logoVivo, className: "!h-4 md:!h-7" },
];

const stats = [
  { value: "40+", label: "Anos de Experiência" },
  { value: "500+", label: "Marcas Atendidas" },
  { value: "+15 mil", label: "Pontos de Venda Atendidos" },
];

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/bcQ1I1dLc_U?autoplay=1&mute=1&loop=1&playlist=bcQ1I1dLc_U&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&start=12"
              title="Printbag Video Background"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full pointer-events-none"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          <div className="absolute inset-0 bg-primary/20" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6 border border-secondary/30">
                Referência Nacional em Sustentabilidade
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
            >
              Embalagens que{" "}
              <span className="text-secondary" style={{ color: '#0a8a52' }}>Transformam</span>{" "}
              sua Marca
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground mb-8 max-w-2xl"
            >
              Há mais de 40 anos desenvolvendo soluções personalizadas em sacolas e embalagens 
              para as maiores marcas do Brasil. Com qualidade, sustentabilidade e tecnologia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="heroPrimary" size="xl" asChild>
                <Link to="/contato">
                  Solicite um Orçamento
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="xl" asChild>
                <Link to="/solucoes">Conheça Nossas Soluções</Link>
              </Button>
            </motion.div>
          </div>



        </div>
      </section>

      {/* Clients Section */}
      <section className="py-10 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              Marcas que confiam na Printbag
            </p>
          </motion.div>
        </div>
        
        {/* Infinite Scroll Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 grayscale hover:grayscale-0 transition-all duration-300 flex items-center"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className={`h-10 md:h-14 w-auto object-contain ${client.className || ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Nosso Portfólio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Setores que Atendemos
            </h2>
            <p className="text-lg text-muted-foreground">
              Do design à entrega, oferecemos uma linha completa de sacolas e embalagens 
              personalizadas para atender às necessidades específicas da sua marca. 
              Trabalhamos com diversos segmentos:
            </p>
          </motion.div>

          {/* Sector Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Moda */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={sectorModa} loading="lazy" alt="Embalagens Moda" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Moda</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <Button variant="cta" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Supermercados/Farmácias */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={sectorSuperFarma} loading="lazy" alt="Embalagens Supermercados e Farmácias" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Supermercados/Farmácias</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <Button variant="sustainability" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Cosméticos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={sectorCosmeticos} loading="lazy" alt="Embalagens Cosméticos" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Cosméticos</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <Button variant="cta" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Food Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={sectorFoodService} loading="lazy" alt="Embalagens Food Service" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Food Service</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <Button variant="sustainability" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Jóias / Acessórios */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={sectorJoias} loading="lazy" alt="Embalagens Jóias e Acessórios" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Jóias / Acessórios</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <Button variant="cta" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Atacado/Distribuidores */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={sectorAtacado} loading="lazy" alt="Embalagens Atacado e Distribuidores" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Atacado/Distribuidores</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <Button variant="sustainability" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-secondary font-medium uppercase tracking-wider text-sm">
              Compromisso Ambiental
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Certificações e Conquistas
            </h2>
            <p className="text-lg text-muted-foreground">
              Nossa dedicação à qualidade e sustentabilidade é reconhecida por certificações 
              e prêmios que validam nosso compromisso com a excelência.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
            {/* Selo FSC */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-medium border border-border hover:shadow-strong transition-shadow duration-300 flex flex-col">
              <div className="h-20 flex items-center justify-center mb-5">
                <img src={seloFsc} loading="lazy" alt="Selo FSC" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">Selo FSC</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-left">
                Utilizamos matéria-prima certificada e originária de madeira de reflorestamento.
              </p>
            </motion.div>

            {/* Selo Energia Renovável */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="bg-card rounded-2xl p-6 shadow-medium border border-border hover:shadow-strong transition-shadow duration-300 flex flex-col">
              <div className="h-20 flex items-center justify-center mb-5">
                <img src={seloEnergia} loading="lazy" alt="Selo Energia Renovável" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">Selo Energia Renovável</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-left">
                Reduzimos nossa emissão de gases de efeito estufa a partir da geração de energia renovável.
              </p>
            </motion.div>

            {/* Certificado ABVTEX */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-medium border border-border hover:shadow-strong transition-shadow duration-300 flex flex-col">
              <div className="h-20 flex items-center justify-center mb-5">
                <img src={seloAbvtex} loading="lazy" alt="Certificado ABVTEX" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">Certificado ABVTEX</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-left">
                Buscamos ações de boas práticas socioambientais e de governança no ambiente corporativo.
              </p>
            </motion.div>

            {/* Selo Two Sides */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
              className="bg-card rounded-2xl p-6 shadow-medium border border-border hover:shadow-strong transition-shadow duration-300 flex flex-col">
              <div className="h-20 flex items-center justify-center mb-5">
                <img src={seloTwoSides} loading="lazy" alt="Selo Two Sides" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">Selo Two Sides</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-left">
                Iniciativa global que certifica empresas comprometidas com a sustentabilidade do papel como material renovável, reciclável e biodegradável.
              </p>
            </motion.div>

            {/* Certificado de Excelência Gráfica */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl p-6 shadow-medium border border-border hover:shadow-strong transition-shadow duration-300 flex flex-col">
              <div className="h-20 flex items-center justify-center mb-5">
                <img src={premioExcelencia} alt="Prêmio de Excelência Gráfica Fernando Pini" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">Excelência Gráfica</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-left">
                Excelência reconhecida com múltiplos títulos no Prêmio Fernando Pini.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <Button variant="sustainability" size="lg" asChild>
              <Link to="/sustentabilidade">
                Saiba Mais sobre Sustentabilidade
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Pronto para Transformar sua Marca?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato com nossa equipe e descubra como podemos criar 
              a embalagem perfeita para o seu negócio.
            </p>
            <div className="flex justify-center">
              <Button variant="heroPrimary" size="xl" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contato">
                  Fale com um Consultor
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
