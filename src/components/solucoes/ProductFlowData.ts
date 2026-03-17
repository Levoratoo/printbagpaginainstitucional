import { 
  ShoppingBag, 
  Box, 
  FileText, 
  Scissors, 
  Tag, 
  Package, 
  Layers,
  Sparkles,
  Printer
} from "lucide-react";

// Bag type options
export const bagTypeOptions = [
  { 
    id: "sem-enobrecimento", 
    label: "Sacolas sem enobrecimento",
    description: "Simples, funcionais e econômicas."
  },
  { 
    id: "enobrecidas", 
    label: "Sacolas enobrecidas",
    description: "Acabamentos premium que valorizam a marca."
  }
];

// Paper type options for bags without finishing (with descriptions)
export const bagPaperOptionsSimple = [
  { id: "kraft", label: "Kraft", description: "Papel resistente com visual natural e rústico." },
  { id: "branco", label: "Branco", description: "Acabamento limpo, ideal para impressão de alta qualidade." }
];

// Paper type options for premium bags (with descriptions)
export const bagPaperOptionsPremium = [
  { id: "kraft", label: "Kraft", description: "Papel resistente com visual natural e rústico." },
  { id: "branco", label: "Branco", description: "Acabamento limpo, ideal para impressão de alta qualidade." },
  { id: "cartao", label: "Cartão", description: "Papel encorpado e sofisticado, ideal para acabamentos premium." }
];

// Handle type options for simple bags (with descriptions)
export const bagHandleOptionsSimple = [
  { id: "torcida", label: "Torcida", description: "Econômica e funcional, ideal para alto volume." },
  { id: "flat", label: "Flat", description: "Visual moderno e minimalista." },
  { id: "sao-francisco", label: "São Francisco", description: "Alça clássica de cordão torcido com acabamento refinado." },
  { id: "gorgurao", label: "Gorgurão", description: "Fita de tecido canelado, resistente e elegante." },
  { id: "dalva", label: "Dalva", description: "Alça achatada em papel resistente com toque artesanal." },
  { id: "sintetica", label: "Sintética", description: "Cordão sintético durável com visual sofisticado." }
];

// Handle type options for premium bags (with descriptions)
export const bagHandleOptionsPremium = [
  { id: "torcida", label: "Torcida", description: "Econômica e funcional, ideal para alto volume." },
  { id: "flat", label: "Flat", description: "Visual moderno e minimalista." },
  { id: "sao-francisco", label: "São Francisco", description: "Alça clássica de cordão torcido com acabamento refinado." },
  { id: "gorgurao", label: "Gorgurão", description: "Fita de tecido canelado, resistente e elegante." },
  { id: "dalva", label: "Dalva", description: "Alça achatada em papel resistente com toque artesanal." },
  { id: "sintetica", label: "Sintética", description: "Cordão sintético durável com visual sofisticado." }
];

// Finishing options for premium bags (multi-select) (with descriptions)
export const bagFinishingOptions = [
  { id: "hot-stamping", label: "Hot stamping", description: "Aplicação metalizada que destaca a marca com brilho e sofisticação." },
  { id: "relevo", label: "Relevo", description: "Textura tátil que valoriza o design e cria efeito tridimensional." },
  { id: "laminacao", label: "Laminação", description: "Proteção extra com acabamento fosco ou brilhante." },
  { id: "verniz-localizado", label: "Verniz localizado", description: "Destaque seletivo com brilho em áreas específicas." },
  { id: "gofragem", label: "Gofragem", description: "Textura em alto relevo que cria padrões elegantes na superfície." },
  { id: "impressao-metalizada", label: "Impressão Metálizada", description: "Efeito metalizado direto na impressão para um visual premium." }
];

// Box type options
export const boxTypeOptions = [
  { 
    id: "simples", 
    label: "Caixas simples",
    description: "Funcionais, econômicas e ideais para alto volume."
  },
  { 
    id: "enobrecidas", 
    label: "Caixas enobrecidas",
    description: "Soluções premium para valorização da marca."
  }
];

// Box structure options for simple boxes
export const boxStructureOptionsSimple = [
  { id: "automontavel", label: "Caixa automontável" },
  { id: "tampa-solta", label: "Caixa com tampa (tampa solta)" },
  { id: "gaveta", label: "Caixa tipo gaveta" },
  { id: "almofada", label: "Caixa almofada" }
];

// Box structure options for premium boxes
export const boxStructureOptionsPremium = [
  { id: "tampa-fundo", label: "Caixa com tampa e fundo" },
  { id: "gaveta-premium", label: "Caixa gaveta premium" }
];

// Paper options for simple boxes
export const boxPaperOptionsSimple = [
  { id: "kraft", label: "Kraft" },
  { id: "cartao", label: "Cartão" },
  { id: "outro", label: "Outro" }
];

// Paper options for premium boxes
export const boxPaperOptionsPremium = [
  { id: "kraft", label: "Kraft" },
  { id: "triplex", label: "Cartão triplex" },
  { id: "especial", label: "Papel especial" }
];

// Printing options for simple boxes
export const boxPrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "com-impressao", label: "Com impressão" }
];

// Finishing options for premium boxes (multi-select)
export const boxFinishingOptions = [
  { id: "hot-stamping", label: "Hot stamping" },
  { id: "relevo", label: "Relevo" },
  { id: "verniz-localizado", label: "Verniz localizado" },
  { id: "laminacao", label: "Laminação fosca ou brilho" },
  { id: "velcro", label: "Velcro" },
  { id: "elastico", label: "Elástico" }
];

// Extra options for premium boxes (multi-select)
export const boxExtraOptions = [
  { id: "berco-interno", label: "Berço interno" },
  { id: "papel-seda", label: "Papel de seda interno" },
  { id: "alca", label: "Alça" },
  { id: "laco", label: "Laço" },
  { id: "fita", label: "Fita" }
];

// ========================
// ENVELOPE OPTIONS
// ========================

// Envelope type options
export const envelopeTypeOptions = [
  { 
    id: "simples", 
    label: "Envelope simples",
    description: "Funcional, econômico e ideal para alto volume."
  },
  { 
    id: "enobrecido", 
    label: "Envelope enobrecido",
    description: "Mais sofisticação para valorizar a experiência do cliente."
  }
];

// Envelope format options for simple envelopes
export const envelopeFormatOptionsSimple = [
  { id: "tradicional", label: "Envelope tradicional" },
  { id: "fundo-quadrado", label: "Envelope fundo quadrado" }
];

// Envelope format options for premium envelopes
export const envelopeFormatOptionsPremium = [
  { id: "aba-lateral", label: "Envelope com aba lateral" },
  { id: "pasta-premium", label: "Envelope tipo pasta premium" },
  { id: "fechamento-especial", label: "Envelope com fechamento especial" }
];

// Paper options for simple envelopes (same as simple bags)
export const envelopePaperOptionsSimple = [
  { id: "kraft", label: "Kraft" },
  { id: "branco", label: "Branco" }
];

// Paper options for premium envelopes
export const envelopePaperOptionsPremium = [
  { id: "couche", label: "Couchê" },
  { id: "especial", label: "Papel especial" },
  { id: "cartao", label: "Papel cartão" }
];

// Printing options for simple envelopes
export const envelopePrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "com-impressao", label: "Com impressão" }
];

// Finishing options for premium envelopes (same as bags)
export const envelopeFinishingOptions = [
  { id: "hot-stamping", label: "Hot stamping", description: "Aplicação metalizada que destaca a marca com brilho e sofisticação." },
  { id: "relevo", label: "Relevo", description: "Textura tátil que valoriza o design e cria efeito tridimensional." },
  { id: "laminacao", label: "Laminação", description: "Proteção extra com acabamento fosco ou brilhante." },
  { id: "verniz-localizado", label: "Verniz localizado", description: "Destaque seletivo com brilho em áreas específicas." },
  { id: "gofragem", label: "Gofragem", description: "Textura em alto relevo que cria padrões elegantes na superfície." },
  { id: "impressao-metalizada", label: "Impressão Metálizada", description: "Efeito metalizado direto na impressão para um visual premium." }
];

// Closure options for premium envelopes
export const envelopeClosureOptions = [
  { id: "sem-fechamento", label: "Sem fechamento" },
  { id: "aba-simples", label: "Aba simples" },
  { id: "fita-adesiva", label: "Fita adesiva" }
];

// ========================
// PAPEL DE SEDA OPTIONS
// ========================

// Papel de seda type options
export const papelSedaTypeOptions = [
  { id: "branco", label: "Papel de seda branco" },
  { id: "colorido", label: "Papel de seda colorido" },
  { id: "personalizado", label: "Papel de seda personalizado" }
];

// Papel de seda printing options
export const papelSedaPrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "com-impressao", label: "Com impressão" }
];

// Papel de seda application options
export const papelSedaApplicationOptions = [
  { id: "protecao", label: "Proteção do produto" },
  { id: "envolvimento", label: "Envolvimento para apresentação" },
  { id: "unboxing", label: "Experiência de unboxing" }
];

// ========================
// ETIQUETA OPTIONS
// ========================

// Etiqueta type options (removed adesiva)
export const etiquetaTypeOptions = [
  { id: "amarracao", label: "Etiqueta para amarração" },
  { id: "promocional", label: "Etiqueta promocional" },
  { id: "informativa", label: "Etiqueta informativa" }
];

// Etiqueta material options
export const etiquetaMaterialOptions = [
  { id: "couche", label: "Papel couchê" },
  { id: "offset", label: "Papel offset" },
  { id: "kraft", label: "Papel kraft" }
];

// Etiqueta printing options
export const etiquetaPrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "com-impressao", label: "Com impressão" }
];

// Etiqueta finishing options for couche material (multi-select)
export const etiquetaFinishingOptionsCouche = [
  { id: "verniz", label: "Verniz" },
  { id: "laminacao", label: "Laminação" },
  { id: "corte-especial", label: "Corte especial" },
  { id: "hot-stamping", label: "Hot stamping" }
];

// Etiqueta finishing options for other materials (multi-select)
export const etiquetaFinishingOptions = [
  { id: "verniz", label: "Verniz" },
  { id: "laminacao", label: "Laminação" },
  { id: "corte-especial", label: "Corte especial" },
  { id: "sem-acabamento", label: "Sem acabamento" }
];

// ========================
// TAG OPTIONS
// ========================

// Tag type options
export const tagTypeOptions = [
  { id: "simples", label: "Tag simples" },
  { id: "personalizada", label: "Tag personalizada" },
  { id: "promocional", label: "Tag promocional" }
];

// Tag material options
export const tagMaterialOptions = [
  { id: "cartao", label: "Papel cartão" },
  { id: "especial", label: "Papel especial" },
  { id: "kraft", label: "Kraft" }
];

// Tag printing options
export const tagPrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "com-impressao", label: "Com impressão" }
];

// Tag finishing options (multi-select)
export const tagFinishingOptions = [
  { id: "furo-simples", label: "Furo simples" },
  { id: "hot-stamping", label: "Hot stamping" },
  { id: "relevo", label: "Relevo" },
  { id: "verniz-localizado", label: "Verniz localizado" },
  { id: "sem-acabamento", label: "Sem acabamento" }
];

// Tag cord options
export const tagCordOptions = [
  { id: "sem-cordao", label: "Sem cordão" },
  { id: "algodao", label: "Cordão algodão" },
  { id: "sintetico", label: "Cordão sintético" },
  { id: "fita", label: "Fita" }
];

// ========================
// SACO OPTIONS
// ========================

// Saco type options
export const sacoTypeOptions = [
  { id: "fundo-quadrado", label: "Saco fundo quadrado" },
  { id: "fundo-v", label: "Saco fundo V" }
];

// Saco material options (standard)
export const sacoMaterialOptions = [
  { id: "kraft-natural", label: "Papel kraft natural" },
  { id: "branco", label: "Papel branco" },
  { id: "outro", label: "Outro" }
];

// Saco material options for Food Service
export const sacoMaterialOptionsFoodService = [
  { id: "branco", label: "Papel Branco" },
  { id: "pardo", label: "Papel Pardo" }
];

// Saco barrier options
export const sacoBarrierOptions = [
  { id: "nao", label: "Não" },
  { id: "gordura", label: "Sim – resistência à gordura" },
  { id: "gordura-umidade", label: "Sim – resistência à gordura e umidade" }
];

// Saco printing options
export const sacoPrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "com-impressao", label: "Com impressão" }
];

// Saco application options
export const sacoApplicationOptions = [
  { id: "paes", label: "Pães" },
  { id: "lanches", label: "Lanches" },
  { id: "doces", label: "Doces" },
  { id: "farmacia", label: "Produtos de farmácia" },
  { id: "outros-alimentos", label: "Outros alimentos" }
];

// ========================
// PAPEL BARREIRA OPTIONS
// ========================

// Papel barreira protection type options
export const papelBarreiraProtectionOptions = [
  { id: "gordura", label: "Contra gordura" },
  { id: "gordura-umidade", label: "Contra gordura e umidade" },
  { id: "contato-alimento", label: "Contato direto com alimento" }
];

// Papel barreira format options
export const papelBarreiraFormatOptions = [
  { id: "folhas", label: "Folhas" },
  { id: "bobina", label: "Bobina" }
];

// Papel barreira printing options
export const papelBarreiraPrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "com-impressao", label: "Com impressão" }
];

// Papel barreira application options
export const papelBarreiraApplicationOptions = [
  { id: "hamburguer", label: "Hambúrguer" },
  { id: "lanches", label: "Lanches" },
  { id: "alimentos-geral", label: "Alimentos em geral" },
  { id: "restaurante", label: "Restaurante" }
];

// ========================
// GUARDANAPO OPTIONS
// ========================

// Guardanapo type options
export const guardanapoTypeOptions = [
  { id: "simples", label: "Guardanapo simples" },
  { id: "personalizado", label: "Guardanapo personalizado" }
];

// ========================
// PAPEL WRAP OPTIONS
// ========================

// Papel wrap type options
export const papelWrapTypeOptions = [
  { id: "sem-barreira", label: "Sem barreira" },
  { id: "barreira-gordura", label: "Com barreira contra gordura" },
  { id: "barreira-gordura-umidade", label: "Com barreira contra gordura e umidade" }
];

// Papel wrap format options
export const papelWrapFormatOptions = [
  { id: "folhas", label: "Folhas individuais" },
  { id: "bobina", label: "Bobina" }
];

// Papel wrap printing options
export const papelWrapPrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "com-impressao", label: "Com impressão" }
];

// Papel wrap application options
export const papelWrapApplicationOptions = [
  { id: "hamburguer", label: "Hambúrguer" },
  { id: "sanduiches", label: "Sanduíches" },
  { id: "porcoes", label: "Porções" },
  { id: "doces", label: "Doces" }
];

// Flow step definitions
export type FlowStep = 
  | "product"
  | "sub-product"
  // Bag steps
  | "bag-type"
  | "bag-paper-simple"
  | "bag-handle-simple"
  | "bag-finishing"
  | "bag-paper-premium"
  | "bag-handle-premium"
  // Box steps
  | "box-type"
  | "box-structure-simple"
  | "box-paper-simple"
  | "box-printing"
  | "box-structure-premium"
  | "box-paper-premium"
  | "box-finishing"
  | "box-extras"
  // Envelope steps
  | "envelope-type"
  | "envelope-format-simple"
  | "envelope-paper-simple"
  | "envelope-printing"
  | "envelope-format-premium"
  | "envelope-paper-premium"
  | "envelope-finishing"
  | "envelope-closure"
  // Papel de seda steps
  | "papel-seda-type"
  | "papel-seda-printing"
  | "papel-seda-application"
  // Etiqueta steps
  | "etiqueta-type"
  | "etiqueta-material"
  | "etiqueta-printing"
  | "etiqueta-finishing"
  // Tag steps
  | "tag-type"
  | "tag-material"
  | "tag-printing"
  | "tag-finishing"
  | "tag-cord"
  // Saco steps
  | "saco-type"
  | "saco-material"
  | "saco-barrier"
  | "saco-printing"
  | "saco-application"
  // Papel barreira steps
  | "papel-barreira-protection"
  | "papel-barreira-format"
  | "papel-barreira-printing"
  | "papel-barreira-application"
  // Guardanapo steps
  | "guardanapo-type"
  // Papel wrap steps
  | "papel-wrap-type"
  | "papel-wrap-format"
  | "papel-wrap-printing"
  | "papel-wrap-application"
  // Final step
  | "confirmation";

export interface SelectionState {
  segment: string | null;
  product: string | null;
  // Bag selections
  bagType: string | null;
  bagPaper: string | null;
  bagHandle: string | null;
  bagFinishing: string[];
  // Box selections
  boxType: string | null;
  boxStructure: string | null;
  boxPaper: string | null;
  boxPrinting: string | null;
  boxFinishing: string[];
  boxExtras: string[];
  // Envelope selections
  envelopeType: string | null;
  envelopeFormat: string | null;
  envelopePaper: string | null;
  envelopePrinting: string | null;
  envelopeFinishing: string[];
  envelopeClosure: string | null;
  // Papel de seda selections
  papelSedaType: string | null;
  papelSedaPrinting: string | null;
  papelSedaApplication: string | null;
  // Etiqueta selections
  etiquetaType: string | null;
  etiquetaMaterial: string | null;
  etiquetaPrinting: string | null;
  etiquetaFinishing: string[];
  // Tag selections
  tagType: string | null;
  tagMaterial: string | null;
  tagPrinting: string | null;
  tagFinishing: string[];
  tagCord: string | null;
  // Saco selections
  sacoType: string | null;
  sacoMaterial: string | null;
  sacoBarrier: string | null;
  sacoPrinting: string | null;
  sacoApplication: string | null;
  // Papel barreira selections
  papelBarreiraProtection: string | null;
  papelBarreiraFormat: string | null;
  papelBarreiraPrinting: string | null;
  papelBarreiraApplication: string | null;
  // Guardanapo selections
  guardanapoType: string | null;
  // Papel wrap selections
  papelWrapType: string | null;
  papelWrapFormat: string | null;
  papelWrapPrinting: string | null;
  papelWrapApplication: string | null;
}

export const initialSelectionState: SelectionState = {
  segment: null,
  product: null,
  // Bag
  bagType: null,
  bagPaper: null,
  bagHandle: null,
  bagFinishing: [],
  // Box
  boxType: null,
  boxStructure: null,
  boxPaper: null,
  boxPrinting: null,
  boxFinishing: [],
  boxExtras: [],
  // Envelope
  envelopeType: null,
  envelopeFormat: null,
  envelopePaper: null,
  envelopePrinting: null,
  envelopeFinishing: [],
  envelopeClosure: null,
  // Papel de seda
  papelSedaType: null,
  papelSedaPrinting: null,
  papelSedaApplication: null,
  // Etiqueta
  etiquetaType: null,
  etiquetaMaterial: null,
  etiquetaPrinting: null,
  etiquetaFinishing: [],
  // Tag
  tagType: null,
  tagMaterial: null,
  tagPrinting: null,
  tagFinishing: [],
  tagCord: null,
  // Saco
  sacoType: null,
  sacoMaterial: null,
  sacoBarrier: null,
  sacoPrinting: null,
  sacoApplication: null,
  // Papel barreira
  papelBarreiraProtection: null,
  papelBarreiraFormat: null,
  papelBarreiraPrinting: null,
  papelBarreiraApplication: null,
  // Guardanapo
  guardanapoType: null,
  // Papel wrap
  papelWrapType: null,
  papelWrapFormat: null,
  papelWrapPrinting: null,
  papelWrapApplication: null
};
