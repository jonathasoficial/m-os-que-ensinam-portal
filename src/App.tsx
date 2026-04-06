import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCourses from "./pages/AdminCourses";
import AdminEnrollments from "./pages/AdminEnrollments";
import AdminConfig from "./pages/AdminConfig";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AccessibilityProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/cursos" element={<AdminCourses />} />
              <Route path="/admin/inscricoes" element={<AdminEnrollments />} />
              <Route path="/admin/config" element={<AdminConfig />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </AccessibilityProvider>
  </QueryClientProvider>
);

export default App;
