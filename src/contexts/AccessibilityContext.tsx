import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type FontSize = "md" | "lg" | "xl";

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>("md");
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("font-size-md", "font-size-lg", "font-size-xl");
    document.documentElement.classList.add(`font-size-${fontSize}`);
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  return (
    <AccessibilityContext.Provider
      value={{ fontSize, setFontSize, highContrast, toggleHighContrast: () => setHighContrast((v) => !v) }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error("useAccessibility must be used within AccessibilityProvider");
  return ctx;
}
