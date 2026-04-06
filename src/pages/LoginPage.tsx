import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Preencha todos os campos.");
      return;
    }

    const success = login(email, password);
    if (success) {
      toast.success("Login realizado com sucesso!");
      navigate("/admin");
    } else {
      setError("Credenciais inválidas.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold">✋ Mãos que Ensinam</h1>
          <p className="text-muted-foreground mt-2">Acesse o painel administrativo</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl border border-border p-8 space-y-5 shadow-sm"
          aria-label="Formulário de login"
        >
          {error && (
            <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-xl text-destructive text-sm font-medium" role="alert">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1.5">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-colors text-base"
              placeholder="admin@maosqueensinam.org"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-1.5">Senha</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-primary transition-colors text-base"
                placeholder="Sua senha"
                aria-required="true"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 rounded focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:brightness-110 transition-all shadow-lg focus-visible:ring-4 focus-visible:ring-ring"
          >
            Entrar
          </button>

          <button
            type="button"
            className="w-full text-sm text-primary hover:underline focus-visible:ring-2 focus-visible:ring-ring rounded py-1"
          >
            Esqueceu a senha?
          </button>
        </form>

        <p className="text-center mt-6">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1">
            ← Voltar para o site
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
