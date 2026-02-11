import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPrintbag from "@/assets/logo-printbag-original.svg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Sobre Nós", path: "/sobre" },
  { 
    name: "Soluções", 
    path: "/solucoes",
    submenu: [
      { name: "Embalagens", path: "/solucoes", hash: "produtos" },
      { name: "Acabamentos", path: "/solucoes", hash: "acabamentos" },
      { name: "Vantagens Printbag", path: "/solucoes", hash: "vantagens" },
    ]
  },
  { name: "Loja", path: "https://loja.printbag.com.br/", external: true },
  { 
    name: "ESG", 
    path: "/sustentabilidade",
    submenu: [
      { name: "Sustentabilidade", path: "/sustentabilidade" },
      { name: "Privacidade", path: "/privacidade" },
    ]
  },
  { 
    name: "Contato", 
    path: "/contato",
    submenu: [
      { name: "Fale Conosco", path: "/contato" },
      { name: "Trabalhe Conosco", path: "/trabalhe-conosco" },
    ]
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmenuClick = useCallback((e: React.MouseEvent, subItem: { path: string; hash?: string; name: string }) => {
    e.preventDefault();
    if (subItem.hash) {
      if (location.pathname === subItem.path) {
        const el = document.getElementById(subItem.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(subItem.path);
        setTimeout(() => {
          const el = document.getElementById(subItem.hash!);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      navigate(subItem.path);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <img src={logoPrintbag} alt="Printbag Embalagens" className="h-12 w-auto" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {'external' in item && item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-medium transition-colors duration-200 text-foreground hover:text-primary"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                    {'submenu' in item && item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                )}
                
                {'submenu' in item && item.submenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-card rounded-lg shadow-medium p-2 min-w-[200px] border border-border">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.hash ? `${subItem.path}#${subItem.hash}` : subItem.path}
                          onClick={(e) => handleSubmenuClick(e, subItem)}
                          className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted rounded-md transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contato">Solicite um Orçamento</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between">
                      {'external' in item && item.external ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-medium transition-colors text-foreground hover:text-primary"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          className={`text-lg font-medium transition-colors ${
                            location.pathname === item.path
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                      {'submenu' in item && item.submenu && (
                        <button
                          onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                          className="p-2"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === item.name ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    {'submenu' in item && item.submenu && openSubmenu === item.name && (
                      <div className="pl-4 mt-2 flex flex-col gap-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.hash ? `${subItem.path}#${subItem.hash}` : subItem.path}
                            onClick={(e) => handleSubmenuClick(e, subItem)}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button variant="cta" size="lg" asChild className="mt-4">
                  <Link to="/contato">Solicite um Orçamento</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
