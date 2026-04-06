import { AdminLayout } from "@/components/AdminLayout";

const AdminConfig = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-heading font-bold">Configurações</h2>
          <p className="text-muted-foreground">Gerencie as configurações do painel</p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
          <h3 className="font-bold text-lg">Informações da ONG</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Nome da ONG</label>
              <input
                type="text"
                defaultValue="Mãos que Ensinam"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email de contato</label>
              <input
                type="email"
                defaultValue="contato@maosqueensinam.org"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Telefone</label>
              <input
                type="tel"
                defaultValue="(11) 3456-7890"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Endereço</label>
              <input
                type="text"
                defaultValue="São Paulo, SP - Brasil"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring transition-colors"
              />
            </div>
          </div>
          <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all focus-visible:ring-4 focus-visible:ring-ring">
            Salvar alterações
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminConfig;
