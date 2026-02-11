import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import logoPrintbag from "@/assets/logo-printbag-original.png";

const footerLinks = {
  empresa: [
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Sustentabilidade", path: "/sustentabilidade" },
    { name: "Privacidade", path: "/privacidade" },
    { name: "Trabalhe Conosco", path: "/trabalhe-conosco" },
  ],
  solucoes: [
    { name: "Embalagens", path: "/solucoes#produtos" },
    { name: "Acabamentos", path: "/solucoes#acabamentos" },
    { name: "Diferenciais Printbag", path: "/solucoes#diferenciais" },
  ],
  contato: [
    { name: "Fale Conosco", path: "/contato" },
    { name: "Solicite Orçamento", path: "/contato?assunto=Fazer um orçamento" },
    { name: "Seja um Fornecedor", path: "/contato?assunto=Quero ser um Fornecedor" },
  ],
};

export function Footer() {
  const navigate = useNavigate();

  const handleFooterLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    const [pathname, hash] = path.split('#');
    const [basePath, query] = pathname.split('?');
    
    navigate(query ? `${basePath}?${query}` : basePath);
    
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logoPrintbag} 
                alt="Printbag Embalagens" 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Há mais de 40 anos transformando marcas através de embalagens sustentáveis e personalizadas de alta qualidade.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+554732410800" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>(47) 3241-0800</span>
              </a>
              <a href="mailto:marketing@printbag.com.br" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>marketing@printbag.com.br</span>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Av. José Francisco Bernardes, 1751 - Bairro Areias<br />Camboriú - SC, 88345-200</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Empresa</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a href={link.path} onClick={(e) => handleFooterLinkClick(e, link.path)} className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Soluções</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.solucoes.map((link) => (
                <li key={link.name}>
                  <a href={link.path} onClick={(e) => handleFooterLinkClick(e, link.path)} className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contato</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.contato.map((link) => (
                <li key={link.name}>
                  <a href={link.path} onClick={(e) => handleFooterLinkClick(e, link.path)} className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Printbag Embalagens. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
