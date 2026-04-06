import { useState } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { initialCourses, Course } from "@/data/mockData";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";
import { toast } from "sonner";

const AdminCourses = () => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [editing, setEditing] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", duration: "", slots: 20 });

  const handleAdd = () => {
    if (!form.title.trim() || !form.description.trim()) {
      toast.error("Preencha título e descrição.");
      return;
    }
    const newCourse: Course = {
      id: Date.now().toString(),
      title: form.title,
      description: form.description,
      duration: form.duration,
      slots: form.slots,
      enrolled: 0,
      active: true,
    };
    setCourses([...courses, newCourse]);
    setForm({ title: "", description: "", duration: "", slots: 20 });
    setShowAdd(false);
    toast.success("Curso criado!");
  };

  const handleDelete = (id: string) => {
    setCourses(courses.filter((c) => c.id !== id));
    toast.success("Curso removido.");
  };

  const toggleActive = (id: string) => {
    setCourses(courses.map((c) => (c.id === id ? { ...c, active: !c.active } : c)));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-heading font-bold">Gerenciar Cursos</h2>
            <p className="text-muted-foreground">{courses.length} cursos cadastrados</p>
          </div>
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all focus-visible:ring-4 focus-visible:ring-ring"
            aria-label="Adicionar novo curso"
          >
            {showAdd ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            <span className="hidden sm:inline">{showAdd ? "Cancelar" : "Novo Curso"}</span>
          </button>
        </div>

        {showAdd && (
          <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
            <h3 className="font-bold text-lg">Novo Curso</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Título *</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring transition-colors"
                  placeholder="Nome do curso"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Duração</label>
                <input
                  type="text"
                  value={form.duration}
                  onChange={(e) => setForm({ ...form, duration: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring transition-colors"
                  placeholder="Ex: 3 meses"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Descrição *</label>
              <textarea
                rows={3}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring transition-colors resize-none"
                placeholder="Descrição do curso"
              />
            </div>
            <div className="w-32">
              <label className="block text-sm font-semibold mb-1">Vagas</label>
              <input
                type="number"
                min={1}
                value={form.slots}
                onChange={(e) => setForm({ ...form, slots: parseInt(e.target.value) || 1 })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring transition-colors"
              />
            </div>
            <button
              onClick={handleAdd}
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all focus-visible:ring-4 focus-visible:ring-ring"
            >
              Salvar Curso
            </button>
          </div>
        )}

        <div className="space-y-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`bg-card rounded-2xl border border-border p-5 flex flex-col sm:flex-row sm:items-center gap-4 ${
                !course.active ? "opacity-60" : ""
              }`}
            >
              <div className="flex-1">
                <h3 className="font-bold text-lg">{course.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{course.description}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  {course.duration} · {course.enrolled}/{course.slots} inscritos
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleActive(course.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-ring ${
                    course.active
                      ? "bg-success/10 text-success"
                      : "bg-muted text-muted-foreground"
                  }`}
                  aria-label={course.active ? "Desativar curso" : "Ativar curso"}
                >
                  {course.active ? "Ativo" : "Inativo"}
                </button>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Excluir curso ${course.title}`}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminCourses;
