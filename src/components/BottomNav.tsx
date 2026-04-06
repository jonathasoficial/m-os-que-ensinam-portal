import { Home, BookOpen, UserPlus, Info, LogIn } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", icon: Home, label: "Início" },
  { to: "/#cursos", icon: BookOpen, label: "Cursos" },
  { to: "/#inscricao", icon: UserPlus, label: "Inscrição" },
  { to: "/#sobre", icon: Info, label: "Sobre" },
  { to: "/login", icon: LogIn, label: "Login" },
];

export function BottomNav() {
  const location = useLocation();

  const handleClick = (to: string) => {
    if (to.startsWith("/#")) {
      const id = to.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:hidden"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="flex justify-around items-center py-2 px-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to || (item.to === "/" && location.pathname === "/");
          const isHash = item.to.startsWith("/#");

          const content = (
            <div className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-colors min-w-[56px] ${
              isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}>
              <item.icon className="w-5 h-5" aria-hidden="true" />
              <span className="text-[11px] font-semibold leading-tight">{item.label}</span>
            </div>
          );

          if (isHash) {
            return (
              <button key={item.to} onClick={() => handleClick(item.to)} className="focus-visible:ring-2 focus-visible:ring-ring rounded-lg" aria-label={item.label}>
                {content}
              </button>
            );
          }

          return (
            <Link key={item.to} to={item.to} className="focus-visible:ring-2 focus-visible:ring-ring rounded-lg" aria-label={item.label}>
              {content}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
