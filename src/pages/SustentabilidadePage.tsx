import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Recycle, 
  TreePine, 
  Droplets,
  ArrowRight,
  CheckCircle2,
  Award,
  Globe,
  Factory,
  Sprout
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";

const certifications = [
  {
    icon: Award,
    title: "Certificação FSC",
    description: "Madeira de florestas manejadas de forma responsável"
  },
  {
    icon: Recycle,
    title: "ISO 14001",
    description: "Sistema de Gestão Ambiental certificado"
  },
  {
    icon: Globe,
    title: "Carbono Neutro",
    description: "Compensação de 100% das emissões de CO2"
  }
];

const initiatives = [
  {
    icon: TreePine,
    title: "Reflorestamento",
    value: "10.000+",
    description: "Árvores plantadas anualmente em parceria com ONGs ambientais"
  },
  {
    icon: Recycle,
    title: "Reciclagem",
    value: "80%",
    description: "Do nosso material é reciclado ou de fontes sustentáveis"
  },
  {
    icon: Droplets,
    title: "Água",
    value: "50%",
    description: "Redução no consumo de água através de sistemas de reuso"
  },
  {
    icon: Factory,
    title: "Energia",
    value: "100%",
    description: "Da energia utilizada é proveniente de fontes renováveis"
  }
];

const esgPillars = [
  {
    letter: "E",
    title: "Environmental",
    subtitle: "Ambiental",
    points: [
      "Uso de materiais reciclados e recicláveis",
      "Tintas à base de água e vegetais",
      "Sistema de tratamento de efluentes",
      "Energia 100% renovável"
    ]
  },
  {
    letter: "S",
    title: "Social",
    subtitle: "Social",
    points: [
      "Programa de desenvolvimento de fornecedores",
      "Capacitação profissional contínua",
      "Apoio a comunidades locais",
      "Diversidade e inclusão"
    ]
  },
  {
    letter: "G",
    title: "Governance",
    subtitle: "Governança",
    points: [
      "Transparência em todos os processos",
      "Código de ética e conduta",
      "Compliance e anticorrupção",
      "Gestão de riscos ESG"
    ]
  }
];

const impactNumbers = [
  { value: "2.500", label: "Toneladas de CO2 compensadas" },
  { value: "100%", label: "Embalagens recicláveis" },
  { value: "0", label: "Resíduos em aterros" },
  { value: "15%", label: "Redução de energia YoY" }
];

export default function SustentabilidadePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={sustainabilityHero} 
            alt="Embalagens sustentáveis Printbag" 
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
              Compromisso com o Planeta
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6"
            >
              Sustentabilidade é{" "}
              <span className="text-primary-foreground">Nossa Essência</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-secondary-foreground/80"
            >
              Acreditamos que é possível criar embalagens extraordinárias com 
              responsabilidade ambiental. Cada decisão que tomamos considera o 
              impacto no planeta e nas gerações futuras.
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

      {/* Certifications */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-medium uppercase tracking-wider text-sm">
              Certificações
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Reconhecimento Internacional
            </h2>
            <p className="text-lg text-muted-foreground">
              Nossas práticas são validadas por certificações reconhecidas mundialmente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border text-center hover:border-secondary/30 hover:shadow-medium transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-medium uppercase tracking-wider text-sm">
              Nossas Iniciativas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Impacto Positivo Real
            </h2>
            <p className="text-lg text-muted-foreground">
              Ações concretas que fazem a diferença para o meio ambiente e a sociedade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <initiative.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-heading font-bold text-foreground mb-1">
                  {initiative.value}
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {initiative.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {initiative.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="py-20 md:py-28">
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
              em todas as operações.
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

      {/* Sustainable Materials */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-medium uppercase tracking-wider text-sm">
                Materiais
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
                Escolhas Conscientes
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Cada material que utilizamos passa por uma rigorosa análise de 
                impacto ambiental, priorizando sempre as opções mais sustentáveis.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Papel Kraft Reciclado", desc: "Feito com 80% de fibras recicladas" },
                  { title: "Tintas Vegetais", desc: "Pigmentos naturais e à base de água" },
                  { title: "Colas Atóxicas", desc: "Sem solventes nocivos ao meio ambiente" },
                  { title: "Alças de Algodão Orgânico", desc: "Cultivado sem pesticidas" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-card rounded-lg p-4 border border-border"
                  >
                    <Sprout className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/10 rounded-2xl p-8 md:p-12"
            >
              <Leaf className="w-16 h-16 text-secondary mb-6" />
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Ciclo Fechado
              </h3>
              <p className="text-muted-foreground mb-6">
                Nosso processo de produção segue um modelo de economia circular, 
                onde todos os resíduos são reaproveitados ou reciclados, eliminando 
                completamente o envio de materiais para aterros.
              </p>
              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                <Recycle className="w-10 h-10 text-secondary" />
                <div>
                  <div className="text-2xl font-heading font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Resíduos Reaproveitados</div>
                </div>
              </div>
            </motion.div>
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
              Faça Parte da Mudança
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Escolher a Printbag é escolher um futuro mais sustentável. 
              Vamos criar juntos embalagens que fazem a diferença.
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
