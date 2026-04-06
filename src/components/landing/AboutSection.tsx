import { motion } from "framer-motion";
import { Heart, Users, Target } from "lucide-react";

export function AboutSection() {
  const items = [
    {
      icon: Heart,
      title: "Nossa Missão",
      text: "Promover educação inclusiva e acessível para pessoas com necessidades especiais físicas, quebrando barreiras e criando oportunidades.",
    },
    {
      icon: Users,
      title: "Nossa História",
      text: "Fundada em 2018, a Mãos que Ensinam já impactou mais de 500 vidas através de cursos adaptados e acolhimento genuíno.",
    },
    {
      icon: Target,
      title: "Nosso Impacto",
      text: "85% dos nossos alunos relatam melhoria na qualidade de vida e novas oportunidades profissionais após concluírem os cursos.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-warm" aria-labelledby="about-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="about-title" className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Sobre a <span className="text-primary">Mãos que Ensinam</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma ONG dedicada a transformar vidas através da educação inclusiva.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
