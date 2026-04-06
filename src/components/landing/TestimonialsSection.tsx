import { motion } from "framer-motion";
import { testimonials } from "@/data/mockData";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-warm" aria-labelledby="testimonials-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="testimonials-title" className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            O que nossos <span className="text-primary">alunos dizem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm relative"
            >
              <Quote className="w-8 h-8 text-secondary/60 absolute top-4 right-4" aria-hidden="true" />
              <p className="text-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
              <footer className="mt-auto">
                <cite className="not-italic">
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.course}</p>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
