import { LayoutDashboard, BookOpen, Users, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/cursos", icon: BookOpen, label: "Cursos" },
  { to: "/admin/inscricoes", icon: Users, label: "Inscrições" },
  { to: "/admin/config", icon: Settings, label: "Config" },
];

export function AdminBottomNav() {
  const location = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.08)] lg:hidden"
      role="navigation"
      aria-label="Navegação do painel"
    >
      <div className="flex justify-around items-center py-2 px-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <div className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-colors min-w-[56px] ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}>
                <item.icon className="w-5 h-5" aria-hidden="true" />
                <span className="text-[11px] font-semibold leading-tight">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
