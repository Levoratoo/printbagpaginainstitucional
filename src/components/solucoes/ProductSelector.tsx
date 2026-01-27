import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Package, 
  ShoppingBag, 
  Box,
  FileText,
  Tag,
  Scissors,
  Layers,
  Shirt,
  Footprints,
  Gem,
  Cookie,
  Utensils,
  Pill,
  Store,
  Sparkles,
  MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SelectionCard } from "./SelectionCard";
import { FlowBreadcrumb } from "./FlowBreadcrumb";
import { FlowSummary } from "./FlowSummary";
import {
  FlowStep,
  SelectionState,
  initialSelectionState,
  bagTypeOptions,
  bagPaperOptionsSimple,
  bagPaperOptionsPremium,
  bagHandleOptionsSimple,
  bagHandleOptionsPremium,
  bagFinishingOptions,
  boxTypeOptions,
  boxStructureOptionsSimple,
  boxStructureOptionsPremium,
  boxPaperOptionsSimple,
  boxPaperOptionsPremium,
  boxPrintingOptions,
  boxFinishingOptions,
  boxExtraOptions
} from "./ProductFlowData";

// Segments definition
const segments = [
  { id: "vestuario", label: "Vestuário", icon: Shirt },
  { id: "calcados", label: "Calçados", icon: Footprints },
  { id: "cosmeticos", label: "Cosméticos", icon: Sparkles },
  { id: "joias-acessorios", label: "Jóias / Acessórios", icon: Gem },
  { id: "alimentos", label: "Alimentos", icon: Cookie },
  { id: "food-service", label: "Food Service", icon: Utensils },
  { id: "farmacias", label: "Farmácias", icon: Pill },
  { id: "supermercados", label: "Supermercados", icon: Store },
  { id: "outros", label: "Outros", icon: MoreHorizontal }
];

// Products by segment
const segmentProducts: Record<string, { id: string; label: string; icon: React.ComponentType<any> }[]> = {
  vestuario: [
    { id: "sacolas", label: "Sacolas", icon: ShoppingBag },
    { id: "caixas", label: "Caixas", icon: Box },
    { id: "envelopes", label: "Envelopes", icon: FileText },
    { id: "papel-seda", label: "Papel de Seda", icon: Scissors },
    { id: "etiquetas", label: "Etiquetas", icon: Tag },
    { id: "tags", label: "Tags", icon: Tag }
  ],
  calcados: [
    { id: "sacolas", label: "Sacolas", icon: ShoppingBag },
    { id: "caixas", label: "Caixas", icon: Box },
    { id: "papel-seda", label: "Papel de Seda", icon: Scissors },
    { id: "etiquetas", label: "Etiquetas", icon: Tag },
    { id: "tags", label: "Tags", icon: Tag }
  ],
  cosmeticos: [
    { id: "sacolas", label: "Sacolas", icon: ShoppingBag },
    { id: "caixas", label: "Caixas", icon: Box },
    { id: "envelopes", label: "Envelopes", icon: FileText },
    { id: "papel-seda", label: "Papel de Seda", icon: Scissors },
    { id: "etiquetas", label: "Etiquetas", icon: Tag },
    { id: "tags", label: "Tags", icon: Tag }
  ],
  "joias-acessorios": [
    { id: "sacolas", label: "Sacolas", icon: ShoppingBag },
    { id: "caixas", label: "Caixas", icon: Box },
    { id: "envelopes", label: "Envelopes", icon: FileText }
  ],
  alimentos: [
    { id: "sacolas", label: "Sacolas", icon: ShoppingBag },
    { id: "caixas", label: "Caixas", icon: Box },
    { id: "sacos", label: "Sacos", icon: Package },
    { id: "papel-barreira", label: "Papel Barreira", icon: Layers },
    { id: "etiquetas", label: "Etiquetas", icon: Tag }
  ],
  "food-service": [
    { id: "sacolas", label: "Sacolas", icon: ShoppingBag },
    { id: "sacos", label: "Sacos", icon: Package },
    { id: "caixas", label: "Caixas", icon: Box },
    { id: "guardanapos", label: "Guardanapos", icon: Scissors },
    { id: "papel-barreira", label: "Papel Barreira", icon: Layers }
  ],
  farmacias: [
    { id: "sacolas", label: "Sacolas", icon: ShoppingBag },
    { id: "caixas", label: "Caixas", icon: Box },
    { id: "sacos", label: "Sacos", icon: Package }
  ],
  supermercados: [
    { id: "sacolas", label: "Sacolas", icon: ShoppingBag },
    { id: "sacos", label: "Sacos", icon: Package },
    { id: "caixas", label: "Caixas", icon: Box }
  ],
  outros: [
    { id: "sacolas", label: "Sacolas", icon: ShoppingBag },
    { id: "sacos", label: "Sacos", icon: Package },
    { id: "caixas", label: "Caixas", icon: Box },
    { id: "envelopes", label: "Envelopes", icon: FileText },
    { id: "etiquetas", label: "Etiquetas", icon: Tag },
    { id: "papel-seda", label: "Papel de Seda", icon: Scissors },
    { id: "papel-barreira", label: "Papel Barreira", icon: Layers },
    { id: "tags", label: "Tags", icon: Tag }
  ]
};

export function ProductSelector() {
  const navigate = useNavigate();
  const [step, setStep] = useState<FlowStep>("segment");
  const [selection, setSelection] = useState<SelectionState>(initialSelectionState);

  const currentProducts = selection.segment ? segmentProducts[selection.segment] || [] : [];

  // Reset all selections
  const handleReset = useCallback(() => {
    setSelection(initialSelectionState);
    setStep("segment");
  }, []);

  // Go back to segment selection
  const handleBackToSegment = useCallback(() => {
    setSelection({
      ...initialSelectionState,
    });
    setStep("segment");
  }, []);

  // Go back to product selection
  const handleBackToProduct = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment
    }));
    setStep("product");
  }, []);

  // Handle segment selection
  const handleSegmentSelect = useCallback((segmentId: string) => {
    setSelection(prev => ({ ...prev, segment: segmentId }));
    setStep("product");
  }, []);

  // Handle product selection
  const handleProductSelect = useCallback((productId: string) => {
    setSelection(prev => ({ ...prev, product: productId }));
    
    if (productId === "sacolas") {
      setStep("bag-type");
    } else if (productId === "caixas") {
      setStep("box-type");
    } else {
      // For other products, go directly to confirmation
      setStep("confirmation");
    }
  }, []);

  // Handle bag type selection
  const handleBagTypeSelect = useCallback((typeId: string) => {
    setSelection(prev => ({ ...prev, bagType: typeId }));
    if (typeId === "sem-enobrecimento") {
      setStep("bag-paper-simple");
    } else {
      setStep("bag-finishing");
    }
  }, []);

  // Handle bag paper selection (simple)
  const handleBagPaperSimpleSelect = useCallback((paperId: string) => {
    setSelection(prev => ({ ...prev, bagPaper: paperId }));
    setStep("bag-handle-simple");
  }, []);

  // Handle bag handle selection (simple) - goes to confirmation
  const handleBagHandleSimpleSelect = useCallback((handleId: string) => {
    setSelection(prev => ({ ...prev, bagHandle: handleId }));
    setStep("confirmation");
  }, []);

  // Handle bag finishing toggle (multi-select)
  const handleBagFinishingToggle = useCallback((finishId: string) => {
    setSelection(prev => ({
      ...prev,
      bagFinishing: prev.bagFinishing.includes(finishId)
        ? prev.bagFinishing.filter(f => f !== finishId)
        : [...prev.bagFinishing, finishId]
    }));
  }, []);

  // Confirm bag finishing and proceed
  const handleBagFinishingConfirm = useCallback(() => {
    setStep("bag-paper-premium");
  }, []);

  // Handle bag paper selection (premium)
  const handleBagPaperPremiumSelect = useCallback((paperId: string) => {
    setSelection(prev => ({ ...prev, bagPaper: paperId }));
    setStep("bag-handle-premium");
  }, []);

  // Handle bag handle selection (premium) - goes to confirmation
  const handleBagHandlePremiumSelect = useCallback((handleId: string) => {
    setSelection(prev => ({ ...prev, bagHandle: handleId }));
    setStep("confirmation");
  }, []);

  // Handle box type selection
  const handleBoxTypeSelect = useCallback((typeId: string) => {
    setSelection(prev => ({ ...prev, boxType: typeId }));
    if (typeId === "simples") {
      setStep("box-structure-simple");
    } else {
      setStep("box-structure-premium");
    }
  }, []);

  // Handle box structure selection (simple)
  const handleBoxStructureSimpleSelect = useCallback((structureId: string) => {
    setSelection(prev => ({ ...prev, boxStructure: structureId }));
    setStep("box-paper-simple");
  }, []);

  // Handle box paper selection (simple)
  const handleBoxPaperSimpleSelect = useCallback((paperId: string) => {
    setSelection(prev => ({ ...prev, boxPaper: paperId }));
    setStep("box-printing");
  }, []);

  // Handle box printing selection (simple) - goes to confirmation
  const handleBoxPrintingSelect = useCallback((printingId: string) => {
    setSelection(prev => ({ ...prev, boxPrinting: printingId }));
    setStep("confirmation");
  }, []);

  // Handle box structure selection (premium)
  const handleBoxStructurePremiumSelect = useCallback((structureId: string) => {
    setSelection(prev => ({ ...prev, boxStructure: structureId }));
    setStep("box-paper-premium");
  }, []);

  // Handle box paper selection (premium)
  const handleBoxPaperPremiumSelect = useCallback((paperId: string) => {
    setSelection(prev => ({ ...prev, boxPaper: paperId }));
    setStep("box-finishing");
  }, []);

  // Handle box finishing toggle (multi-select)
  const handleBoxFinishingToggle = useCallback((finishId: string) => {
    setSelection(prev => ({
      ...prev,
      boxFinishing: prev.boxFinishing.includes(finishId)
        ? prev.boxFinishing.filter(f => f !== finishId)
        : [...prev.boxFinishing, finishId]
    }));
  }, []);

  // Confirm box finishing and proceed
  const handleBoxFinishingConfirm = useCallback(() => {
    setStep("box-extras");
  }, []);

  // Handle box extras toggle (multi-select)
  const handleBoxExtrasToggle = useCallback((extraId: string) => {
    setSelection(prev => ({
      ...prev,
      boxExtras: prev.boxExtras.includes(extraId)
        ? prev.boxExtras.filter(e => e !== extraId)
        : [...prev.boxExtras, extraId]
    }));
  }, []);

  // Confirm box extras and proceed to confirmation
  const handleBoxExtrasConfirm = useCallback(() => {
    setStep("confirmation");
  }, []);

  // Build summary items for the confirmation
  const buildSummaryItems = useCallback(() => {
    const items: { label: string; value: string | string[] }[] = [];
    
    const segmentLabel = segments.find(s => s.id === selection.segment)?.label;
    if (segmentLabel) items.push({ label: "Segmento", value: segmentLabel });

    const productLabel = currentProducts.find(p => p.id === selection.product)?.label;
    if (productLabel) items.push({ label: "Produto", value: productLabel });

    if (selection.product === "sacolas") {
      const bagTypeLabel = bagTypeOptions.find(t => t.id === selection.bagType)?.label;
      if (bagTypeLabel) items.push({ label: "Tipo de Sacola", value: bagTypeLabel });

      if (selection.bagType === "enobrecidas" && selection.bagFinishing.length > 0) {
        const finishingLabels = selection.bagFinishing.map(f => 
          bagFinishingOptions.find(opt => opt.id === f)?.label || f
        );
        items.push({ label: "Acabamentos", value: finishingLabels });
      }

      const paperOptions = selection.bagType === "enobrecidas" ? bagPaperOptionsPremium : bagPaperOptionsSimple;
      const paperLabel = paperOptions.find(p => p.id === selection.bagPaper)?.label;
      if (paperLabel) items.push({ label: "Tipo de Papel", value: paperLabel });

      const handleOptions = selection.bagType === "enobrecidas" ? bagHandleOptionsPremium : bagHandleOptionsSimple;
      const handleLabel = handleOptions.find(h => h.id === selection.bagHandle)?.label;
      if (handleLabel) items.push({ label: "Tipo de Alça", value: handleLabel });
    }

    if (selection.product === "caixas") {
      const boxTypeLabel = boxTypeOptions.find(t => t.id === selection.boxType)?.label;
      if (boxTypeLabel) items.push({ label: "Tipo de Caixa", value: boxTypeLabel });

      const structureOptions = selection.boxType === "enobrecidas" ? boxStructureOptionsPremium : boxStructureOptionsSimple;
      const structureLabel = structureOptions.find(s => s.id === selection.boxStructure)?.label;
      if (structureLabel) items.push({ label: "Estrutura", value: structureLabel });

      const paperOptions = selection.boxType === "enobrecidas" ? boxPaperOptionsPremium : boxPaperOptionsSimple;
      const paperLabel = paperOptions.find(p => p.id === selection.boxPaper)?.label;
      if (paperLabel) items.push({ label: "Tipo de Papel", value: paperLabel });

      if (selection.boxType === "simples") {
        const printingLabel = boxPrintingOptions.find(p => p.id === selection.boxPrinting)?.label;
        if (printingLabel) items.push({ label: "Impressão", value: printingLabel });
      }

      if (selection.boxType === "enobrecidas" && selection.boxFinishing.length > 0) {
        const finishingLabels = selection.boxFinishing.map(f => 
          boxFinishingOptions.find(opt => opt.id === f)?.label || f
        );
        items.push({ label: "Acabamentos", value: finishingLabels });
      }

      if (selection.boxExtras.length > 0) {
        const extrasLabels = selection.boxExtras.map(e => 
          boxExtraOptions.find(opt => opt.id === e)?.label || e
        );
        items.push({ label: "Extras", value: extrasLabels });
      }
    }

    return items;
  }, [selection, currentProducts]);

  // Submit to contact page
  const handleSubmit = useCallback(() => {
    const items = buildSummaryItems();
    const mensagem = items.map(item => {
      const value = Array.isArray(item.value) ? item.value.join(", ") : item.value;
      return `${item.label}: ${value}`;
    }).join("\n");
    
    navigate(`/contato?assunto=Fazer um orçamento&mensagem=${encodeURIComponent(mensagem)}`);
  }, [buildSummaryItems, navigate]);

  // Build breadcrumb items
  const buildBreadcrumbItems = useCallback(() => {
    const items: { label: string; onClick?: () => void; isCurrent?: boolean }[] = [];
    
    items.push({ label: "Segmentos", onClick: handleBackToSegment });

    if (selection.segment) {
      const segmentLabel = segments.find(s => s.id === selection.segment)?.label || "";
      items.push({ 
        label: segmentLabel, 
        onClick: selection.product ? handleBackToProduct : undefined,
        isCurrent: !selection.product
      });
    }

    if (selection.product) {
      const productLabel = currentProducts.find(p => p.id === selection.product)?.label || "";
      items.push({ label: productLabel, isCurrent: step === "confirmation" || step.startsWith("bag-") || step.startsWith("box-") });
    }

    return items;
  }, [selection, currentProducts, step, handleBackToSegment, handleBackToProduct]);

  // Render step content
  const renderStepContent = () => {
    switch (step) {
      case "segment":
        return (
          <motion.div
            key="segments"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Selecione o segmento:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {segments.map((segment, index) => (
                <SelectionCard
                  key={segment.id}
                  icon={segment.icon}
                  label={segment.label}
                  onClick={() => handleSegmentSelect(segment.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "product":
        return (
          <motion.div
            key="products"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Selecione o produto:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {currentProducts.map((product, index) => (
                <SelectionCard
                  key={product.id}
                  icon={product.icon}
                  label={product.label}
                  onClick={() => handleProductSelect(product.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "bag-type":
        return (
          <motion.div
            key="bag-type"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de sacola você procura?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bagTypeOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  description={option.description}
                  onClick={() => handleBagTypeSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "bag-paper-simple":
        return (
          <motion.div
            key="bag-paper-simple"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual o tipo de papel?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {bagPaperOptionsSimple.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleBagPaperSimpleSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "bag-handle-simple":
        return (
          <motion.div
            key="bag-handle-simple"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de alça você prefere?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {bagHandleOptionsSimple.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleBagHandleSimpleSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "bag-finishing":
        return (
          <motion.div
            key="bag-finishing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Quais acabamentos você deseja?
            </h3>
            <p className="text-sm text-muted-foreground">Selecione um ou mais acabamentos</p>
            <div className="grid grid-cols-2 gap-4">
              {bagFinishingOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  isSelected={selection.bagFinishing.includes(option.id)}
                  isMultiSelect
                  onClick={() => handleBagFinishingToggle(option.id)}
                  index={index}
                />
              ))}
            </div>
            <Button 
              variant="cta" 
              className="w-full mt-4"
              onClick={handleBagFinishingConfirm}
              disabled={selection.bagFinishing.length === 0}
            >
              Continuar
            </Button>
          </motion.div>
        );

      case "bag-paper-premium":
        return (
          <motion.div
            key="bag-paper-premium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual o tipo de papel?
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {bagPaperOptionsPremium.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleBagPaperPremiumSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "bag-handle-premium":
        return (
          <motion.div
            key="bag-handle-premium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de alça você prefere?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {bagHandleOptionsPremium.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleBagHandlePremiumSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "box-type":
        return (
          <motion.div
            key="box-type"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de caixa você procura?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {boxTypeOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  description={option.description}
                  onClick={() => handleBoxTypeSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "box-structure-simple":
        return (
          <motion.div
            key="box-structure-simple"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual o tipo de estrutura da caixa?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {boxStructureOptionsSimple.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleBoxStructureSimpleSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "box-paper-simple":
        return (
          <motion.div
            key="box-paper-simple"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual o tipo de papel?
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {boxPaperOptionsSimple.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleBoxPaperSimpleSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "box-printing":
        return (
          <motion.div
            key="box-printing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de impressão?
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {boxPrintingOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleBoxPrintingSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "box-structure-premium":
        return (
          <motion.div
            key="box-structure-premium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual o tipo de estrutura da caixa?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {boxStructureOptionsPremium.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleBoxStructurePremiumSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "box-paper-premium":
        return (
          <motion.div
            key="box-paper-premium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual o tipo de papel?
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {boxPaperOptionsPremium.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleBoxPaperPremiumSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "box-finishing":
        return (
          <motion.div
            key="box-finishing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Quais acabamentos você deseja?
            </h3>
            <p className="text-sm text-muted-foreground">Selecione um ou mais acabamentos</p>
            <div className="grid grid-cols-2 gap-4">
              {boxFinishingOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  isSelected={selection.boxFinishing.includes(option.id)}
                  isMultiSelect
                  onClick={() => handleBoxFinishingToggle(option.id)}
                  index={index}
                />
              ))}
            </div>
            <Button 
              variant="cta" 
              className="w-full mt-4"
              onClick={handleBoxFinishingConfirm}
              disabled={selection.boxFinishing.length === 0}
            >
              Continuar
            </Button>
          </motion.div>
        );

      case "box-extras":
        return (
          <motion.div
            key="box-extras"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Deseja algum item adicional?
            </h3>
            <p className="text-sm text-muted-foreground">Opcional - selecione se desejar</p>
            <div className="grid grid-cols-3 gap-4">
              {boxExtraOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  isSelected={selection.boxExtras.includes(option.id)}
                  isMultiSelect
                  onClick={() => handleBoxExtrasToggle(option.id)}
                  index={index}
                />
              ))}
            </div>
            <Button 
              variant="cta" 
              className="w-full mt-4"
              onClick={handleBoxExtrasConfirm}
            >
              {selection.boxExtras.length > 0 ? "Continuar" : "Pular"}
            </Button>
          </motion.div>
        );

      case "confirmation":
        return (
          <FlowSummary 
            items={buildSummaryItems()} 
            onSubmit={handleSubmit}
          />
        );

      default:
        return null;
    }
  };

  // Get current step icon for preview
  const getCurrentIcon = () => {
    if (selection.product === "sacolas") return ShoppingBag;
    if (selection.product === "caixas") return Box;
    if (selection.segment) {
      return segments.find(s => s.id === selection.segment)?.icon || Package;
    }
    return Package;
  };

  const CurrentIcon = getCurrentIcon();

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Monte seu Orçamento
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
            Qual Produto Você Procura?
          </h2>
          <p className="text-lg text-muted-foreground">
            Selecione o segmento, produto e especificações desejadas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Selection Area */}
          <div className="space-y-4">
            {/* Breadcrumb */}
            {step !== "segment" && (
              <FlowBreadcrumb items={buildBreadcrumbItems()} />
            )}

            {/* Step Content */}
            <AnimatePresence mode="wait">
              {renderStepContent()}
            </AnimatePresence>
          </div>

          {/* Preview Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-2xl p-8 md:p-12 aspect-square flex items-center justify-center sticky top-32"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center"
              >
                <CurrentIcon className="w-24 h-24 text-primary/30 mx-auto" />
                <p className="text-muted-foreground mt-4">
                  {step === "segment" && "Selecione um segmento para começar"}
                  {step === "product" && "Selecione um produto"}
                  {step === "confirmation" && "Pronto para solicitar orçamento!"}
                  {step !== "segment" && step !== "product" && step !== "confirmation" && "Configure as opções"}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
