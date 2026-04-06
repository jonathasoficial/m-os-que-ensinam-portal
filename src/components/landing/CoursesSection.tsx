import { motion } from "framer-motion";
import { initialCourses } from "@/data/mockData";
import { Clock, Users } from "lucide-react";

export function CoursesSection() {
  const scrollToEnrollment = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cursos" className="py-20" aria-labelledby="courses-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="courses-title" className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Cursos <span className="text-primary">Disponíveis</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
            Todos os cursos são gratuitos e adaptados para garantir acessibilidade total.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialCourses.map((course, i) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm flex-1 mb-4">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" aria-hidden="true" />
                    {course.enrolled}/{course.slots}
                  </span>
                </div>
                <button
                  onClick={scrollToEnrollment}
                  className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all focus-visible:ring-4 focus-visible:ring-ring"
                  aria-label={`Inscrever-se no curso ${course.title}`}
                >
                  Inscrever-se
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
