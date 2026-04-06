import { LayoutDashboard, BookOpen, Users, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/cursos", icon: BookOpen, label: "Cursos" },
  { to: "/admin/inscricoes", icon: Users, label: "Inscrições" },
  { to: "/admin/config", icon: Settings, label: "Configurações" },
];

export function AdminSidebar() {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="p-6">
        <h2 className="text-xl font-heading font-bold text-sidebar-primary">✋ Painel Admin</h2>
        <p className="text-sm text-sidebar-foreground/70 mt-1">Mãos que Ensinam</p>
      </div>

      <nav className="flex-1 px-3 space-y-1" aria-label="Navegação do painel">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-sidebar-ring ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon className="w-5 h-5" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-colors w-full focus-visible:ring-2 focus-visible:ring-sidebar-ring"
          aria-label="Sair do painel"
        >
          <LogOut className="w-5 h-5" aria-hidden="true" />
          Sair
        </button>
      </div>
    </aside>
  );
}
