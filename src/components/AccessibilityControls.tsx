import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Eye, Type } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function AccessibilityControls() {
  const { fontSize, setFontSize, highContrast, toggleHighContrast } = useAccessibility();
  const [open, setOpen] = useState(false);

  const sizes = [
    { value: "md" as const, label: "A" },
    { value: "lg" as const, label: "A+" },
    { value: "xl" as const, label: "A++" },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2" role="toolbar" aria-label="Controles de acessibilidade">
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-ring"
        aria-label="Abrir controles de acessibilidade"
        aria-expanded={open}
      >
        <Eye className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex flex-col gap-2 bg-card border border-border rounded-xl p-2 shadow-xl"
          >
            <p className="text-xs font-semibold text-muted-foreground px-1 flex items-center gap-1">
              <Type className="w-3 h-3" /> Fonte
            </p>
            {sizes.map((s) => (
              <button
                key={s.value}
                onClick={() => setFontSize(s.value)}
                className={`w-10 h-10 rounded-lg font-bold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring ${
                  fontSize === s.value ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
                }`}
                aria-label={`Tamanho da fonte ${s.label}`}
                aria-pressed={fontSize === s.value}
              >
                {s.label}
              </button>
            ))}
            <hr className="border-border" />
            <button
              onClick={toggleHighContrast}
              className={`w-10 h-10 rounded-lg font-bold text-xs transition-colors focus-visible:ring-2 focus-visible:ring-ring ${
                highContrast ? "bg-foreground text-background" : "bg-muted text-foreground hover:bg-muted/80"
              }`}
              aria-label={highContrast ? "Desativar alto contraste" : "Ativar alto contraste"}
              aria-pressed={highContrast}
            >
              <Eye className="w-4 h-4 mx-auto" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
