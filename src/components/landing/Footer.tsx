import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12" role="contentinfo">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-3">✋ Mãos que Ensinam</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Educação acessível para todos. Uma ONG dedicada à inclusão e transformação social.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Contato</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <a href="mailto:contato@maosqueensinam.org" className="hover:underline focus-visible:ring-2 focus-visible:ring-ring rounded">
                  contato@maosqueensinam.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Redes Sociais</h3>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-4 py-2 bg-primary-foreground/10 rounded-lg text-sm font-medium hover:bg-primary-foreground/20 transition-colors focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Siga-nos no ${social}`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-8 border-primary-foreground/20" />

        <p className="text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Mãos que Ensinam. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
