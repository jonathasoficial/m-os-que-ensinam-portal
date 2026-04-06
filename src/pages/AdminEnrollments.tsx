import { AdminLayout } from "@/components/AdminLayout";
import { initialEnrollments, initialCourses } from "@/data/mockData";

const AdminEnrollments = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-heading font-bold">Inscrições</h2>
          <p className="text-muted-foreground">{initialEnrollments.length} inscritos</p>
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden space-y-3">
          {initialEnrollments.map((e) => (
            <div key={e.id} className="bg-card rounded-2xl border border-border p-5">
              <p className="font-bold">{e.name}</p>
              <p className="text-sm text-muted-foreground">{e.contact}</p>
              <p className="text-sm mt-2">
                <span className="font-semibold">Curso:</span>{" "}
                {initialCourses.find((c) => c.id === e.courseId)?.title}
              </p>
              {e.specialNeeds && (
                <p className="text-sm mt-1">
                  <span className="font-semibold">Necessidades:</span> {e.specialNeeds}
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-2">{e.date}</p>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block bg-card rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" aria-label="Lista de inscrições">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left py-3 px-4 font-semibold">Nome</th>
                  <th className="text-left py-3 px-4 font-semibold">Contato</th>
                  <th className="text-left py-3 px-4 font-semibold">Curso</th>
                  <th className="text-left py-3 px-4 font-semibold">Necessidades</th>
                  <th className="text-left py-3 px-4 font-semibold">Data</th>
                </tr>
              </thead>
              <tbody>
                {initialEnrollments.map((e) => (
                  <tr key={e.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4 font-medium">{e.name}</td>
                    <td className="py-3 px-4 text-muted-foreground">{e.contact}</td>
                    <td className="py-3 px-4">{initialCourses.find((c) => c.id === e.courseId)?.title}</td>
                    <td className="py-3 px-4 text-muted-foreground">{e.specialNeeds || "—"}</td>
                    <td className="py-3 px-4 text-muted-foreground">{e.date}</td>
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

export default AdminEnrollments;
