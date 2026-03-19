import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Recycle, 
  TreePine, 
  Droplets,
  ArrowRight,
  CheckCircle2,
  Factory,
  Car,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";
import seloFsc from "@/assets/selo-fsc.png";
import seloEnergiaRenovavel from "@/assets/selo-energia-renovavel.png";
import seloAbvtex from "@/assets/selo-abvtex.jpg";
import seloTwoSides from "@/assets/selo-two-sides.png";

const impactNumbers = [
  { value: "63,55t", label: "De papel reciclado por mês" },
  { value: "104,56t", label: "De CO₂ deixamos de emitir por mês" },
  { value: "4.753", label: "Equivalente a novas árvores plantadas/mês" },
  { value: "22,5", label: "Carros retirados de circulação por ano" }
];

const certifications = [
  {
    image: seloFsc,
    title: "Selo FSC",
    description: "Certificação internacional que garante a procedência legal do papel usado. Fornece garantia crível de que os produtos são originários de florestas bem manejadas, de fontes controladas, materiais recuperados ou da mistura destes."
  },
  {
    image: seloEnergiaRenovavel,
    title: "Selo de Energia Renovável",
    description: "Certificação que comprova que a energia utilizada em nosso processo produtivo é proveniente de fontes renováveis, contribuindo para a redução de emissões de gases de efeito estufa."
  },
  {
    image: seloAbvtex,
    title: "Certificado ABVTEX",
    description: "Programa de certificação da Associação Brasileira do Varejo Têxtil que garante práticas éticas e responsáveis em toda a cadeia produtiva, combatendo o trabalho análogo ao escravo e infantil."
  },
  {
    image: seloTwoSides,
    title: "Selo Two Sides",
    description: "Parceria com a Two Sides, instituição sem fins lucrativos que promove a sustentabilidade na cadeia gráfica e de embalagens celulósicas, combatendo o greenwashing e divulgando informações ambientais sobre o uso do papel."
  }
];

const esgPillars = [
  {
    letter: "E",
    title: "Environmental",
    subtitle: "Ambiental",
    points: [
      "100% dos papéis certificados pelo Selo FSC",
      "Tintas à base d'água no processo flexográfico",
      "100% dos resíduos de aparas enviados para economia circular",
      "Energia proveniente de fontes renováveis"
    ]
  },
  {
    letter: "S",
    title: "Social",
    subtitle: "Social",
    points: [
      "Certificação ABVTEX — práticas éticas na cadeia produtiva",
      "Parceria com Two Sides contra o greenwashing",
      "Capacitação profissional contínua",
      "Apoio a comunidades locais"
    ]
  },
  {
    letter: "G",
    title: "Governance",
    subtitle: "Governança",
    points: [
      "Transparência na cadeia de suprimentos",
      "Rastreabilidade de matéria-prima (FSC)",
      "Compliance e código de ética",
      "Gestão de riscos ESG"
    ]
  }
];

export default function SustentabilidadePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={sustainabilityHero} 
            alt="Sustentabilidade Printbag — embalagens 100% papel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-sustainability" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-secondary-foreground/10 text-secondary-foreground text-sm font-medium mb-6 border border-secondary-foreground/20"
            >
              ESG — Compromisso Real com o Planeta
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6"
            >
              A Única Grande Empresa de Sacolas do Brasil{" "}
              <span className="text-primary-foreground">100% Papel</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-secondary-foreground/80"
            >
              Somos a única entre as grandes fabricantes de sacolas do Brasil que 
              trabalha exclusivamente com papel em todos os nossos produtos. Cada 
              embalagem que produzimos é uma escolha consciente pelo futuro do planeta.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactNumbers.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-foreground/70 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferencial — 100% Papel */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-medium uppercase tracking-wider text-sm">
                Nosso Diferencial
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
                100% Papel, 100% Reciclável
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Enquanto outras fabricantes utilizam plástico e materiais sintéticos, 
                a Printbag escolheu trabalhar exclusivamente com papel — um material 
                natural, renovável e totalmente reciclável. Todos os nossos papéis são 
                certificados pelo <strong className="text-foreground">Selo FSC</strong>, 
                que garante a procedência legal e o manejo responsável das florestas.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                A certificação FSC fornece garantia crível de que os produtos vendidos 
                são originários de florestas bem manejadas, de fontes controladas, 
                materiais recuperados ou da mistura destes.
              </p>

              <div className="flex items-center gap-6 p-5 bg-primary/5 rounded-xl border border-primary/20">
                <Leaf className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <div className="text-xl font-heading font-bold text-foreground">Única do setor</div>
                  <div className="text-sm text-muted-foreground">Entre as grandes fabricantes de sacolas do Brasil a trabalhar exclusivamente com papel</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Economia Circular */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Recycle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Economia Circular
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      100% dos resíduos de aparas de papel gerados na produção são enviados 
                      para uma empresa parceira de economia circular, que os utiliza na 
                      produção de novos materiais.
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <span className="text-2xl font-heading">63,55</span>
                      <span className="text-sm">toneladas recicladas/mês</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tintas à base d'água */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Tintas à Base d'Água
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      No processo flexográfico, que representa uma das mais importantes 
                      soluções oferecidas pela Printbag, utilizamos somente tintas à base 
                      d'água — eliminando solventes químicos nocivos ao meio ambiente.
                    </p>
                  </div>
                </div>
              </div>

              {/* Impacto CO₂ */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TreePine className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Redução de CO₂
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Em média por mês deixamos de emitir 104,56 toneladas de CO₂.
                    </p>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <TreePine className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground"><strong>4.753</strong> árvores/mês</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground"><strong>22,5</strong> carros/ano</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-medium uppercase tracking-wider text-sm">
              Certificações e Selos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Compromisso Comprovado
            </h2>
            <p className="text-lg text-muted-foreground">
              Nossas práticas sustentáveis são validadas por certificações e parcerias 
              reconhecidas nacional e internacionalmente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border text-center hover:border-secondary/30 hover:shadow-medium transition-all duration-300 flex flex-col"
              >
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-1">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Sides Partnership */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 md:p-12 border border-border"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={seloTwoSides} 
                    alt="Two Sides" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-secondary font-medium uppercase tracking-wider text-sm">
                    Parceria
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2 mb-4">
                    Two Sides — Contra o Greenwashing
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    A Two Sides é uma instituição sem fins lucrativos que surgiu da iniciativa 
                    de empresas da cadeia de suprimentos da comunicação gráfica e de embalagens 
                    celulósicas. Seu objetivo é, em conjunto com os parceiros, promover 
                    sustentabilidade na cadeia e divulgar informações ambientais sobre o uso do 
                    papel, denunciando atividades de greenwashing.
                  </p>
                  <p className="text-muted-foreground">
                    A Printbag é parceira da Two Sides, reafirmando nosso compromisso com a 
                    transparência e a verdade sobre o impacto ambiental do papel.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-medium uppercase tracking-wider text-sm">
              Política ESG
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Compromisso Triplo
            </h2>
            <p className="text-lg text-muted-foreground">
              Nossa estratégia ESG integra práticas ambientais, sociais e de governança 
              reais em todas as nossas operações.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {esgPillars.map((pillar, index) => (
              <motion.div
                key={pillar.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-secondary-foreground">
                      {pillar.letter}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{pillar.subtitle}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {pillar.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Leaf className="w-16 h-16 text-secondary-foreground/50 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-6">
              Escolha Embalagens que Fazem a Diferença
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Ao escolher a Printbag, você opta por embalagens 100% papel, certificadas 
              e produzidas com respeito ao meio ambiente. Vamos criar juntos.
            </p>
            <Button variant="heroPrimary" size="xl" asChild className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
              <Link to="/contato">
                Solicite um Orçamento Sustentável
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
