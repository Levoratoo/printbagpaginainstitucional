import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import HomePage from "./pages/HomePage";
import SobrePage from "./pages/SobrePage";
import SolucoesPage from "./pages/SolucoesPage";
import SustentabilidadePage from "./pages/SustentabilidadePage";
import ContatoPage from "./pages/ContatoPage";
import PrivacidadePage from "./pages/PrivacidadePage";
import TrabalheConoscoPage from "./pages/TrabalheConoscoPage";
import UnsubscribePage from "./pages/UnsubscribePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/** GitHub Pages: /<repo>/; custom domain is served at /. */
const GITHUB_PAGES_BASENAMES = ["/printbagpaginainstitucional", "/printbag-institucional"] as const;

function getRouterBasename(): string | undefined {
  if (typeof window === "undefined") return undefined;
  const path = window.location.pathname;
  for (const base of GITHUB_PAGES_BASENAMES) {
    if (path === base || path.startsWith(`${base}/`)) return base;
  }
  return undefined;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getRouterBasename()}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/solucoes" element={<SolucoesPage />} />
          <Route path="/sustentabilidade" element={<SustentabilidadePage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/privacidade" element={<PrivacidadePage />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConoscoPage />} />
          <Route path="/unsubscribe" element={<UnsubscribePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
