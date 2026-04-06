import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { initialCourses } from "@/data/mockData";
import { toast } from "sonner";

export function EnrollmentForm() {
  const [form, setForm] = useState({ name: "", contact: "", courseId: "", specialNeeds: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim() || !form.courseId) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }
    setSubmitted(true);
    toast.success("Inscrição enviada com sucesso!");
  };

  if (submitted) {
    return (
      <section id="inscricao" className="py-20" aria-labelledby="enrollment-title">
        <div className="container max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl border border-border p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl" role="img" aria-label="Sucesso">✅</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Inscrição Recebida!</h2>
            <p className="text-muted-foreground">Entraremos em contato em breve. Obrigado por confiar na Mãos que Ensinam!</p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", contact: "", courseId: "", specialNeeds: "" }); }}
              className="mt-6 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all focus-visible:ring-4 focus-visible:ring-ring"
            >
              Nova inscrição
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscricao" className="py-20" aria-labelledby="enrollment-title">
      <div className="container max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 id="enrollment-title" className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            <span className="text-primary">Inscreva-se</span> agora
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">Preencha o formulário e comece sua jornada de aprendizado.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl border border-border p-8 space-y-5 shadow-sm"
          aria-label="Formulário de inscrição"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1.5">Nome completo *</label>
            <input
              id="name"
              type="text"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-colors text-base"
              placeholder="Seu nome completo"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-semibold mb-1.5">Contato (email ou telefone) *</label>
            <input
              id="contact"
              type="text"
              required
              maxLength={255}
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-colors text-base"
              placeholder="email@exemplo.com ou (11) 99999-9999"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="course" className="block text-sm font-semibold mb-1.5">Curso desejado *</label>
            <select
              id="course"
              required
              value={form.courseId}
              onChange={(e) => setForm({ ...form, courseId: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-colors text-base"
              aria-required="true"
            >
              <option value="">Selecione um curso</option>
              {initialCourses.map((c) => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="specialNeeds" className="block text-sm font-semibold mb-1.5">Necessidades especiais (opcional)</label>
            <textarea
              id="specialNeeds"
              maxLength={500}
              rows={3}
              value={form.specialNeeds}
              onChange={(e) => setForm({ ...form, specialNeeds: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-colors text-base resize-none"
              placeholder="Descreva suas necessidades para melhor adaptarmos o curso"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:brightness-110 transition-all shadow-lg focus-visible:ring-4 focus-visible:ring-ring"
          >
            Enviar inscrição
          </button>
        </motion.form>
      </div>
    </section>
  );
}
