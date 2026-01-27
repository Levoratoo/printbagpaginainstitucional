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

// Paper type options for bags without finishing
export const bagPaperOptionsSimple = [
  { id: "kraft", label: "Kraft" },
  { id: "branco", label: "Branco" }
];

// Paper type options for premium bags
export const bagPaperOptionsPremium = [
  { id: "kraft", label: "Kraft" },
  { id: "branco", label: "Branco" },
  { id: "especial", label: "Especial" }
];

// Handle type options for simple bags
export const bagHandleOptionsSimple = [
  { id: "papel-torcido", label: "Papel torcido" },
  { id: "cordao", label: "Cordão" },
  { id: "fita", label: "Fita" },
  { id: "flat", label: "Flat" }
];

// Handle type options for premium bags
export const bagHandleOptionsPremium = [
  { id: "cordao", label: "Cordão" },
  { id: "fita", label: "Fita" },
  { id: "papel", label: "Papel" },
  { id: "flat", label: "Flat" }
];

// Finishing options for premium bags (multi-select)
export const bagFinishingOptions = [
  { id: "hot-stamping", label: "Hot stamping" },
  { id: "relevo", label: "Relevo" },
  { id: "laminacao", label: "Laminação" },
  { id: "verniz-localizado", label: "Verniz localizado" }
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
  { id: "padrao", label: "Caixa padrão (colagem simples)" }
];

// Box structure options for premium boxes
export const boxStructureOptionsPremium = [
  { id: "tampa-fundo", label: "Caixa com tampa e fundo" },
  { id: "gaveta-premium", label: "Caixa gaveta premium" }
];

// Paper options for simple boxes
export const boxPaperOptionsSimple = [
  { id: "kraft", label: "Kraft" },
  { id: "branco", label: "Branco" },
  { id: "outro", label: "Outro" }
];

// Paper options for premium boxes
export const boxPaperOptionsPremium = [
  { id: "couche", label: "Couchê" },
  { id: "triplex", label: "Cartão triplex" },
  { id: "especial", label: "Papel especial" }
];

// Printing options for simple boxes
export const boxPrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "simples", label: "Impressão simples (1 cor)" },
  { id: "offset", label: "Impressão offset" }
];

// Finishing options for premium boxes (multi-select)
export const boxFinishingOptions = [
  { id: "hot-stamping", label: "Hot stamping" },
  { id: "relevo", label: "Relevo" },
  { id: "verniz-localizado", label: "Verniz localizado" },
  { id: "laminacao", label: "Laminação fosca ou brilho" }
];

// Extra options for premium boxes (multi-select)
export const boxExtraOptions = [
  { id: "berco-interno", label: "Berço interno" },
  { id: "papel-seda", label: "Papel de seda interno" },
  { id: "enchimento", label: "Enchimento / proteção" }
];

// Flow step definitions
export type FlowStep = 
  | "segment"
  | "product"
  | "bag-type"
  | "bag-paper-simple"
  | "bag-handle-simple"
  | "bag-finishing"
  | "bag-paper-premium"
  | "bag-handle-premium"
  | "box-type"
  | "box-structure-simple"
  | "box-paper-simple"
  | "box-printing"
  | "box-structure-premium"
  | "box-paper-premium"
  | "box-finishing"
  | "box-extras"
  | "confirmation";

export interface SelectionState {
  segment: string | null;
  product: string | null;
  bagType: string | null;
  bagPaper: string | null;
  bagHandle: string | null;
  bagFinishing: string[];
  boxType: string | null;
  boxStructure: string | null;
  boxPaper: string | null;
  boxPrinting: string | null;
  boxFinishing: string[];
  boxExtras: string[];
}

export const initialSelectionState: SelectionState = {
  segment: null,
  product: null,
  bagType: null,
  bagPaper: null,
  bagHandle: null,
  bagFinishing: [],
  boxType: null,
  boxStructure: null,
  boxPaper: null,
  boxPrinting: null,
  boxFinishing: [],
  boxExtras: []
};
