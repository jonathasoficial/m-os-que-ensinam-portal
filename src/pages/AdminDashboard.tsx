import { AdminLayout } from "@/components/AdminLayout";
import { initialCourses, initialEnrollments } from "@/data/mockData";
import { BookOpen, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Total de Alunos",
    value: initialEnrollments.length,
    icon: Users,
    color: "bg-primary/10 text-primary",
  },
  {
    label: "Cursos Ativos",
    value: initialCourses.filter((c) => c.active).length,
    icon: BookOpen,
    color: "bg-secondary/20 text-yellow-dark",
  },
  {
    label: "Taxa de Ocupação",
    value: `${Math.round(
      (initialCourses.reduce((a, c) => a + c.enrolled, 0) /
        initialCourses.reduce((a, c) => a + c.slots, 0)) *
        100
    )}%`,
    icon: TrendingUp,
    color: "bg-success/10 text-success",
  },
];

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-heading font-bold">Dashboard</h2>
          <p className="text-muted-foreground">Visão geral da Mãos que Ensinam</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6"
            >
              <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-card rounded-2xl border border-border p-6">
          <h3 className="text-lg font-bold mb-4">Inscrições Recentes</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" aria-label="Inscrições recentes">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-semibold">Nome</th>
                  <th className="text-left py-3 px-2 font-semibold">Curso</th>
                  <th className="text-left py-3 px-2 font-semibold hidden sm:table-cell">Data</th>
                </tr>
              </thead>
              <tbody>
                {initialEnrollments.slice(0, 5).map((e) => (
                  <tr key={e.id} className="border-b border-border/50">
                    <td className="py-3 px-2">{e.name}</td>
                    <td className="py-3 px-2">{initialCourses.find((c) => c.id === e.courseId)?.title || "-"}</td>
                    <td className="py-3 px-2 hidden sm:table-cell text-muted-foreground">{e.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
