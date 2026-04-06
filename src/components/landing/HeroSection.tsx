import heroImage from "@/assets/hero-illustration.jpg";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary/80"
      aria-label="Seção principal"
    >
      <div className="absolute inset-0 bg-primary/20" />
      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary-foreground leading-tight">
            Educação acessível{" "}
            <span className="text-secondary">para todos</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto lg:mx-0">
            A Mãos que Ensinam oferece cursos gratuitos e adaptados para pessoas com necessidades especiais físicas. Porque aprender é um direito de todos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollTo("cursos")}
              className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-xl text-lg hover:brightness-110 transition-all shadow-lg focus-visible:ring-4 focus-visible:ring-ring"
              aria-label="Ver cursos disponíveis"
            >
              Ver cursos
            </button>
            <button
              onClick={() => scrollTo("inscricao")}
              className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-bold rounded-xl text-lg border-2 border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all focus-visible:ring-4 focus-visible:ring-ring"
              aria-label="Ir para formulário de inscrição"
            >
              Inscrever-se
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 max-w-lg"
        >
          <img
            src={heroImage}
            alt="Pessoas diversas com deficiências físicas estudando juntas em uma sala de aula inclusiva"
            className="rounded-2xl shadow-2xl w-full"
            width={1920}
            height={1024}
          />
        </motion.div>
      </div>
    </section>
  );
}
