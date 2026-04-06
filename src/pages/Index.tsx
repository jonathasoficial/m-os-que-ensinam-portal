import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { CoursesSection } from "@/components/landing/CoursesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { EnrollmentForm } from "@/components/landing/EnrollmentForm";
import { Footer } from "@/components/landing/Footer";
import { BottomNav } from "@/components/BottomNav";
import { AccessibilityControls } from "@/components/AccessibilityControls";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {/* Desktop Header */}
      <header className="hidden md:block sticky top-0 z-30 bg-card/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <span className="font-heading font-bold text-xl">✋ Mãos que Ensinam</span>
          <nav className="flex items-center gap-6" aria-label="Navegação principal">
            {[
              { label: "Início", href: "#" },
              { label: "Sobre", href: "#sobre" },
              { label: "Cursos", href: "#cursos" },
              { label: "Inscrição", href: "#inscricao" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/login"
              className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg text-sm hover:brightness-110 transition-all focus-visible:ring-2 focus-visible:ring-ring"
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <TestimonialsSection />
        <EnrollmentForm />
      </main>

      <Footer />
      <BottomNav />
      <AccessibilityControls />
    </div>
  );
};

export default Index;
