import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminBottomNav } from "@/components/AdminBottomNav";
import { AccessibilityControls } from "@/components/AccessibilityControls";
import { LogOut } from "lucide-react";

export function AdminLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="h-14 flex items-center justify-between px-4 border-b border-border bg-card lg:px-6">
          <h1 className="font-heading font-bold text-lg">✋ Painel</h1>
          <button
            onClick={logout}
            className="lg:hidden flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
            aria-label="Sair"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </header>
        <main className="flex-1 p-4 lg:p-6 pb-20 lg:pb-6">
          {children}
        </main>
      </div>
      <AdminBottomNav />
      <AccessibilityControls />
    </div>
  );
}
