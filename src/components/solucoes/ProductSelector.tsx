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
  Utensils,
  Sparkles,
  Croissant,
  Square,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SelectionCard } from "./SelectionCard";
import { FlowBreadcrumb } from "./FlowBreadcrumb";
import { FlowSummary } from "./FlowSummary";
import { FlowLiveSummary } from "./FlowLiveSummary";
import {
  FlowStep,
  SelectionState,
  initialSelectionState,
  // Bag options
  bagTypeOptions,
  bagPaperOptionsSimple,
  bagPaperOptionsPremium,
  bagHandleOptionsSimple,
  bagHandleOptionsPremium,
  bagFinishingOptions,
  // Box options
  boxTypeOptions,
  boxStructureOptionsSimple,
  boxStructureOptionsPremium,
  boxPaperOptionsSimple,
  boxPaperOptionsPremium,
  boxPrintingOptions,
  boxFinishingOptions,
  boxExtraOptions,
  // Envelope options
  envelopeTypeOptions,
  envelopeFormatOptionsSimple,
  envelopeFormatOptionsPremium,
  envelopePaperOptionsSimple,
  envelopePaperOptionsPremium,
  envelopePrintingOptions,
  envelopeFinishingOptions,
  envelopeClosureOptions,
  // Papel de seda options
  papelSedaTypeOptions,
  papelSedaPrintingOptions,
  papelSedaApplicationOptions,
  // Etiqueta options
  etiquetaTypeOptions,
  etiquetaMaterialOptions,
  etiquetaPrintingOptions,
  etiquetaFinishingOptions,
  etiquetaFinishingOptionsCouche,
  // Tag options
  tagTypeOptions,
  tagMaterialOptions,
  tagPrintingOptions,
  tagFinishingOptions,
  tagCordOptions,
  // Saco options
  sacoTypeOptions,
  sacoMaterialOptions,
  
  sacoBarrierOptions,
  sacoPrintingOptions,
  sacoApplicationOptions,
  // Papel barreira options
  papelBarreiraProtectionOptions,
  papelBarreiraFormatOptions,
  papelBarreiraPrintingOptions,
  papelBarreiraApplicationOptions,
  // Guardanapo options
  guardanapoTypeOptions,
  // Papel wrap options
  papelWrapTypeOptions,
  papelWrapFormatOptions,
  papelWrapPrintingOptions,
  papelWrapApplicationOptions
} from "./ProductFlowData";

import productSacolaSimples from "@/assets/product-sacola-simples.jpg";
import productSacolaEnobrecida from "@/assets/product-sacola-enobrecida.jpg";
import productSacolaKraft from "@/assets/product-sacola-kraft.jpg";
import productSacolaBranco from "@/assets/product-sacola-branco.jpg";
import productSacolas from "@/assets/product-sacolas.jpg";
import handleTorcida from "@/assets/handle-torcida.jpg";
import handleFlat from "@/assets/handle-flat.jpg";
import handleSaoFrancisco from "@/assets/handle-sao-francisco.jpg";
import handleGorgurao from "@/assets/handle-gorgurao.jpg";
import handleDalva from "@/assets/handle-dalva.jpg";
import handleSintetica from "@/assets/handle-sintetica.jpg";

const handleImages: Record<string, string> = {
  "torcida": handleTorcida,
  "flat": handleFlat,
  "sao-francisco": handleSaoFrancisco,
  "gorgurao": handleGorgurao,
  "dalva": handleDalva,
  "sintetica": handleSintetica,
};

// Direct product categories
const directProducts = [
  { id: "sacolas", label: "Sacolas", icon: ShoppingBag, image: productSacolas },
  { id: "envelopes", label: "Envelopes", icon: FileText },
  { id: "caixas", label: "Caixas", icon: Box },
  { id: "itens-adicionais", label: "Itens Adicionais", icon: Tag },
  { id: "sacos", label: "Sacos", icon: Package },
  { id: "itens-adicionais-food", label: "Itens Adicionais para Food", icon: Utensils }
];

// Sub-products for "Itens Adicionais"
const subProductsAdicionais = [
  { id: "papel-seda", label: "Papel de Seda", icon: Scissors },
  { id: "etiquetas", label: "Etiquetas", icon: Tag },
  { id: "tags", label: "Tags", icon: Tag }
];

// Sub-products for "Itens Adicionais para Food"
const subProductsFood = [
  { id: "guardanapos", label: "Guardanapos", icon: Square },
  { id: "papel-barreira", label: "Papel Barreira", icon: Layers },
  { id: "papel-wrap", label: "Papel Wrap", icon: Croissant }
];

export function ProductSelector() {
  const navigate = useNavigate();
  const [step, setStep] = useState<FlowStep>("product");
  const [selection, setSelection] = useState<SelectionState>(initialSelectionState);

  // Helper to get the category label for a product
  const getProductCategory = (productId: string | null) => {
    if (!productId) return null;
    if (subProductsAdicionais.find(p => p.id === productId)) return "itens-adicionais";
    if (subProductsFood.find(p => p.id === productId)) return "itens-adicionais-food";
    return null;
  };

  // Reset functions for navigation
  const handleBackToProducts = useCallback(() => {
    setSelection(initialSelectionState);
    setStep("product");
  }, []);

  const handleBackToSubProduct = useCallback(() => {
    const category = getProductCategory(selection.product);
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment
    }));
    setStep("sub-product");
  }, [selection.product]);

  // Back to bag type
  const handleBackToBagType = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product
    }));
    setStep("bag-type");
  }, []);

  // Back to bag finishing
  const handleBackToBagFinishing = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      bagType: prev.bagType
    }));
    setStep("bag-finishing");
  }, []);

  // Back to bag paper
  const handleBackToBagPaper = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      bagType: prev.bagType,
      bagFinishing: prev.bagFinishing
    }));
    if (selection.bagType === "enobrecidas") {
      setStep("bag-paper-premium");
    } else {
      setStep("bag-paper-simple");
    }
  }, [selection.bagType]);

  // Back to box type
  const handleBackToBoxType = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product
    }));
    setStep("box-type");
  }, []);

  // Back to box structure
  const handleBackToBoxStructure = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      boxType: prev.boxType
    }));
    if (selection.boxType === "enobrecidas") {
      setStep("box-structure-premium");
    } else {
      setStep("box-structure-simple");
    }
  }, [selection.boxType]);

  // Back to box paper
  const handleBackToBoxPaper = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      boxType: prev.boxType,
      boxStructure: prev.boxStructure
    }));
    if (selection.boxType === "enobrecidas") {
      setStep("box-paper-premium");
    } else {
      setStep("box-paper-simple");
    }
  }, [selection.boxType]);

  // Back to box finishing
  const handleBackToBoxFinishing = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      boxType: prev.boxType,
      boxStructure: prev.boxStructure,
      boxPaper: prev.boxPaper
    }));
    setStep("box-finishing");
  }, []);

  // Back to envelope type
  const handleBackToEnvelopeType = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product
    }));
    setStep("envelope-type");
  }, []);

  // Back to envelope format
  const handleBackToEnvelopeFormat = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      envelopeType: prev.envelopeType
    }));
    if (selection.envelopeType === "enobrecido") {
      setStep("envelope-format-premium");
    } else {
      setStep("envelope-format-simple");
    }
  }, [selection.envelopeType]);

  // Back to envelope paper
  const handleBackToEnvelopePaper = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      envelopeType: prev.envelopeType,
      envelopeFormat: prev.envelopeFormat
    }));
    if (selection.envelopeType === "enobrecido") {
      setStep("envelope-paper-premium");
    } else {
      setStep("envelope-paper-simple");
    }
  }, [selection.envelopeType]);

  // Back to envelope finishing
  const handleBackToEnvelopeFinishing = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      envelopeType: prev.envelopeType,
      envelopeFormat: prev.envelopeFormat,
      envelopePaper: prev.envelopePaper
    }));
    setStep("envelope-finishing");
  }, []);

  // Back to etiqueta type
  const handleBackToEtiquetaType = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product
    }));
    setStep("etiqueta-type");
  }, []);

  // Back to etiqueta material
  const handleBackToEtiquetaMaterial = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      etiquetaType: prev.etiquetaType
    }));
    setStep("etiqueta-material");
  }, []);

  // Back to etiqueta printing
  const handleBackToEtiquetaPrinting = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      etiquetaType: prev.etiquetaType,
      etiquetaMaterial: prev.etiquetaMaterial
    }));
    setStep("etiqueta-printing");
  }, []);

  // Back to tag type
  const handleBackToTagType = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product
    }));
    setStep("tag-type");
  }, []);

  // Back to tag material
  const handleBackToTagMaterial = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      tagType: prev.tagType
    }));
    setStep("tag-material");
  }, []);

  // Back to tag printing
  const handleBackToTagPrinting = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      tagType: prev.tagType,
      tagMaterial: prev.tagMaterial
    }));
    setStep("tag-printing");
  }, []);

  // Back to tag finishing
  const handleBackToTagFinishing = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      tagType: prev.tagType,
      tagMaterial: prev.tagMaterial,
      tagPrinting: prev.tagPrinting
    }));
    setStep("tag-finishing");
  }, []);

  // Back to saco type
  const handleBackToSacoType = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product
    }));
    setStep("saco-type");
  }, []);

  // Back to saco material
  const handleBackToSacoMaterial = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      sacoType: prev.sacoType
    }));
    setStep("saco-material");
  }, []);

  // Back to saco barrier
  const handleBackToSacoBarrier = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      sacoType: prev.sacoType,
      sacoMaterial: prev.sacoMaterial
    }));
    setStep("saco-barrier");
  }, []);

  // Back to saco printing
  const handleBackToSacoPrinting = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      sacoType: prev.sacoType,
      sacoMaterial: prev.sacoMaterial,
      sacoBarrier: prev.sacoBarrier
    }));
    setStep("saco-printing");
  }, []);

  // Back to papel seda type
  const handleBackToPapelSedaType = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product
    }));
    setStep("papel-seda-type");
  }, []);

  // Back to papel seda printing
  const handleBackToPapelSedaPrinting = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      papelSedaType: prev.papelSedaType
    }));
    setStep("papel-seda-printing");
  }, []);

  // Back to papel barreira protection
  const handleBackToPapelBarreiraProtection = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product
    }));
    setStep("papel-barreira-protection");
  }, []);

  // Back to papel barreira format
  const handleBackToPapelBarreiraFormat = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      papelBarreiraProtection: prev.papelBarreiraProtection
    }));
    setStep("papel-barreira-format");
  }, []);

  // Back to papel barreira printing
  const handleBackToPapelBarreiraPrinting = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      papelBarreiraProtection: prev.papelBarreiraProtection,
      papelBarreiraFormat: prev.papelBarreiraFormat
    }));
    setStep("papel-barreira-printing");
  }, []);

  // Back to papel wrap type
  const handleBackToPapelWrapType = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product
    }));
    setStep("papel-wrap-type");
  }, []);

  // Back to papel wrap format
  const handleBackToPapelWrapFormat = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      papelWrapType: prev.papelWrapType
    }));
    setStep("papel-wrap-format");
  }, []);

  // Back to papel wrap printing
  const handleBackToPapelWrapPrinting = useCallback(() => {
    setSelection(prev => ({
      ...initialSelectionState,
      segment: prev.segment,
      product: prev.product,
      papelWrapType: prev.papelWrapType,
      papelWrapFormat: prev.papelWrapFormat
    }));
    setStep("papel-wrap-printing");
  }, []);

  // Handle direct product/category selection
  const handleProductSelect = useCallback((productId: string) => {
    if (productId === "itens-adicionais") {
      setSelection(prev => ({ ...prev, segment: "itens-adicionais" }));
      setStep("sub-product");
      return;
    }
    if (productId === "itens-adicionais-food") {
      setSelection(prev => ({ ...prev, segment: "itens-adicionais-food" }));
      setStep("sub-product");
      return;
    }
    
    setSelection(prev => ({ ...prev, product: productId }));
    
    switch (productId) {
      case "sacolas":
        setStep("bag-type");
        break;
      case "caixas":
        setStep("box-type");
        break;
      case "envelopes":
        setStep("envelope-type");
        break;
      case "sacos":
        setStep("saco-type");
        break;
      default:
        setStep("confirmation");
    }
  }, []);

  // Handle sub-product selection (from Itens Adicionais or Food)
  const handleSubProductSelect = useCallback((productId: string) => {
    setSelection(prev => ({ ...prev, product: productId }));
    
    switch (productId) {
      case "papel-seda":
        setStep("papel-seda-type");
        break;
      case "etiquetas":
        setStep("etiqueta-type");
        break;
      case "tags":
        setStep("tag-type");
        break;
      case "guardanapos":
        setStep("guardanapo-type");
        break;
      case "papel-barreira":
        setStep("papel-barreira-protection");
        break;
      case "papel-wrap":
        setStep("papel-wrap-type");
        break;
      default:
        setStep("confirmation");
    }
  }, []);

  // ========================
  // BAG HANDLERS
  // ========================
  const handleBagTypeSelect = useCallback((typeId: string) => {
    setSelection(prev => ({ ...prev, bagType: typeId }));
    if (typeId === "sem-enobrecimento") {
      setStep("bag-paper-simple");
    } else {
      setStep("bag-finishing");
    }
  }, []);

  const handleBagPaperSimpleSelect = useCallback((paperId: string) => {
    setSelection(prev => ({ ...prev, bagPaper: paperId }));
    setStep("bag-handle-simple");
  }, []);

  const handleBagHandleSimpleSelect = useCallback((handleId: string) => {
    setSelection(prev => ({ ...prev, bagHandle: handleId }));
    setStep("confirmation");
  }, []);

  const handleBagFinishingToggle = useCallback((finishId: string) => {
    setSelection(prev => ({
      ...prev,
      bagFinishing: prev.bagFinishing.includes(finishId)
        ? prev.bagFinishing.filter(f => f !== finishId)
        : [...prev.bagFinishing, finishId]
    }));
  }, []);

  const handleBagFinishingConfirm = useCallback(() => {
    setStep("bag-paper-premium");
  }, []);

  const handleBagPaperPremiumSelect = useCallback((paperId: string) => {
    setSelection(prev => ({ ...prev, bagPaper: paperId }));
    setStep("bag-handle-premium");
  }, []);

  const handleBagHandlePremiumSelect = useCallback((handleId: string) => {
    setSelection(prev => ({ ...prev, bagHandle: handleId }));
    setStep("confirmation");
  }, []);

  // ========================
  // BOX HANDLERS
  // ========================
  const handleBoxTypeSelect = useCallback((typeId: string) => {
    setSelection(prev => ({ ...prev, boxType: typeId }));
    if (typeId === "simples") {
      setStep("box-structure-simple");
    } else {
      setStep("box-structure-premium");
    }
  }, []);

  const handleBoxStructureSimpleSelect = useCallback((structureId: string) => {
    setSelection(prev => ({ ...prev, boxStructure: structureId }));
    setStep("box-paper-simple");
  }, []);

  const handleBoxPaperSimpleSelect = useCallback((paperId: string) => {
    setSelection(prev => ({ ...prev, boxPaper: paperId }));
    setStep("box-printing");
  }, []);

  const handleBoxPrintingSelect = useCallback((printingId: string) => {
    setSelection(prev => ({ ...prev, boxPrinting: printingId }));
    setStep("confirmation");
  }, []);

  const handleBoxStructurePremiumSelect = useCallback((structureId: string) => {
    setSelection(prev => ({ ...prev, boxStructure: structureId }));
    setStep("box-paper-premium");
  }, []);

  const handleBoxPaperPremiumSelect = useCallback((paperId: string) => {
    setSelection(prev => ({ ...prev, boxPaper: paperId }));
    setStep("box-finishing");
  }, []);

  const handleBoxFinishingToggle = useCallback((finishId: string) => {
    setSelection(prev => ({
      ...prev,
      boxFinishing: prev.boxFinishing.includes(finishId)
        ? prev.boxFinishing.filter(f => f !== finishId)
        : [...prev.boxFinishing, finishId]
    }));
  }, []);

  const handleBoxFinishingConfirm = useCallback(() => {
    setStep("box-extras");
  }, []);

  const handleBoxExtrasToggle = useCallback((extraId: string) => {
    setSelection(prev => ({
      ...prev,
      boxExtras: prev.boxExtras.includes(extraId)
        ? prev.boxExtras.filter(e => e !== extraId)
        : [...prev.boxExtras, extraId]
    }));
  }, []);

  const handleBoxExtrasConfirm = useCallback(() => {
    setStep("confirmation");
  }, []);

  // ========================
  // ENVELOPE HANDLERS
  // ========================
  const handleEnvelopeTypeSelect = useCallback((typeId: string) => {
    setSelection(prev => ({ ...prev, envelopeType: typeId }));
    if (typeId === "simples") {
      setStep("envelope-format-simple");
    } else {
      setStep("envelope-format-premium");
    }
  }, []);

  const handleEnvelopeFormatSimpleSelect = useCallback((formatId: string) => {
    setSelection(prev => ({ ...prev, envelopeFormat: formatId }));
    setStep("envelope-paper-simple");
  }, []);

  const handleEnvelopePaperSimpleSelect = useCallback((paperId: string) => {
    setSelection(prev => ({ ...prev, envelopePaper: paperId }));
    setStep("envelope-printing");
  }, []);

  const handleEnvelopePrintingSelect = useCallback((printingId: string) => {
    setSelection(prev => ({ ...prev, envelopePrinting: printingId }));
    setStep("confirmation");
  }, []);

  const handleEnvelopeFormatPremiumSelect = useCallback((formatId: string) => {
    setSelection(prev => ({ ...prev, envelopeFormat: formatId }));
    setStep("envelope-paper-premium");
  }, []);

  const handleEnvelopePaperPremiumSelect = useCallback((paperId: string) => {
    setSelection(prev => ({ ...prev, envelopePaper: paperId }));
    setStep("envelope-finishing");
  }, []);

  const handleEnvelopeFinishingToggle = useCallback((finishId: string) => {
    setSelection(prev => ({
      ...prev,
      envelopeFinishing: prev.envelopeFinishing.includes(finishId)
        ? prev.envelopeFinishing.filter(f => f !== finishId)
        : [...prev.envelopeFinishing, finishId]
    }));
  }, []);

  const handleEnvelopeFinishingConfirm = useCallback(() => {
    setStep("envelope-closure");
  }, []);

  const handleEnvelopeClosureSelect = useCallback((closureId: string) => {
    setSelection(prev => ({ ...prev, envelopeClosure: closureId }));
    setStep("confirmation");
  }, []);

  // ========================
  // PAPEL DE SEDA HANDLERS
  // ========================
  const handlePapelSedaTypeSelect = useCallback((typeId: string) => {
    setSelection(prev => ({ ...prev, papelSedaType: typeId }));
    setStep("papel-seda-printing");
  }, []);

  const handlePapelSedaPrintingSelect = useCallback((printingId: string) => {
    setSelection(prev => ({ ...prev, papelSedaPrinting: printingId }));
    setStep("papel-seda-application");
  }, []);

  const handlePapelSedaApplicationSelect = useCallback((applicationId: string) => {
    setSelection(prev => ({ ...prev, papelSedaApplication: applicationId }));
    setStep("confirmation");
  }, []);

  // ========================
  // ETIQUETA HANDLERS
  // ========================
  const handleEtiquetaTypeSelect = useCallback((typeId: string) => {
    setSelection(prev => ({ ...prev, etiquetaType: typeId }));
    setStep("etiqueta-material");
  }, []);

  const handleEtiquetaMaterialSelect = useCallback((materialId: string) => {
    setSelection(prev => ({ ...prev, etiquetaMaterial: materialId }));
    setStep("etiqueta-printing");
  }, []);

  const handleEtiquetaPrintingSelect = useCallback((printingId: string) => {
    setSelection(prev => ({ ...prev, etiquetaPrinting: printingId }));
    // Only show finishing for couche material
    if (selection.etiquetaMaterial === "couche") {
      setStep("etiqueta-finishing");
    } else {
      setStep("confirmation");
    }
  }, [selection.etiquetaMaterial]);

  const handleEtiquetaFinishingToggle = useCallback((finishId: string) => {
    setSelection(prev => ({
      ...prev,
      etiquetaFinishing: prev.etiquetaFinishing.includes(finishId)
        ? prev.etiquetaFinishing.filter(f => f !== finishId)
        : [...prev.etiquetaFinishing, finishId]
    }));
  }, []);

  const handleEtiquetaFinishingConfirm = useCallback(() => {
    setStep("confirmation");
  }, []);

  // ========================
  // TAG HANDLERS
  // ========================
  const handleTagTypeSelect = useCallback((typeId: string) => {
    setSelection(prev => ({ ...prev, tagType: typeId }));
    setStep("tag-material");
  }, []);

  const handleTagMaterialSelect = useCallback((materialId: string) => {
    setSelection(prev => ({ ...prev, tagMaterial: materialId }));
    setStep("tag-printing");
  }, []);

  const handleTagPrintingSelect = useCallback((printingId: string) => {
    setSelection(prev => ({ ...prev, tagPrinting: printingId }));
    setStep("tag-finishing");
  }, []);

  const handleTagFinishingToggle = useCallback((finishId: string) => {
    setSelection(prev => ({
      ...prev,
      tagFinishing: prev.tagFinishing.includes(finishId)
        ? prev.tagFinishing.filter(f => f !== finishId)
        : [...prev.tagFinishing, finishId]
    }));
  }, []);

  const handleTagFinishingConfirm = useCallback(() => {
    setStep("tag-cord");
  }, []);

  const handleTagCordSelect = useCallback((cordId: string) => {
    setSelection(prev => ({ ...prev, tagCord: cordId }));
    setStep("confirmation");
  }, []);

  // ========================
  // SACO HANDLERS
  // ========================
  const handleSacoTypeSelect = useCallback((typeId: string) => {
    setSelection(prev => ({ ...prev, sacoType: typeId }));
    setStep("saco-material");
  }, []);

  const handleSacoMaterialSelect = useCallback((materialId: string) => {
    setSelection(prev => ({ ...prev, sacoMaterial: materialId }));
    setStep("saco-barrier");
  }, []);

  const handleSacoBarrierSelect = useCallback((barrierId: string) => {
    setSelection(prev => ({ ...prev, sacoBarrier: barrierId }));
    setStep("saco-printing");
  }, []);

  const handleSacoPrintingSelect = useCallback((printingId: string) => {
    setSelection(prev => ({ ...prev, sacoPrinting: printingId }));
    setStep("saco-application");
  }, []);

  const handleSacoApplicationSelect = useCallback((applicationId: string) => {
    setSelection(prev => ({ ...prev, sacoApplication: applicationId }));
    setStep("confirmation");
  }, []);

  // ========================
  // PAPEL BARREIRA HANDLERS
  // ========================
  const handlePapelBarreiraProtectionSelect = useCallback((protectionId: string) => {
    setSelection(prev => ({ ...prev, papelBarreiraProtection: protectionId }));
    setStep("papel-barreira-format");
  }, []);

  const handlePapelBarreiraFormatSelect = useCallback((formatId: string) => {
    setSelection(prev => ({ ...prev, papelBarreiraFormat: formatId }));
    setStep("papel-barreira-printing");
  }, []);

  const handlePapelBarreiraPrintingSelect = useCallback((printingId: string) => {
    setSelection(prev => ({ ...prev, papelBarreiraPrinting: printingId }));
    setStep("papel-barreira-application");
  }, []);

  const handlePapelBarreiraApplicationSelect = useCallback((applicationId: string) => {
    setSelection(prev => ({ ...prev, papelBarreiraApplication: applicationId }));
    setStep("confirmation");
  }, []);

  // ========================
  // GUARDANAPO HANDLERS
  // ========================
  const handleGuardanapoTypeSelect = useCallback((typeId: string) => {
    setSelection(prev => ({ ...prev, guardanapoType: typeId }));
    setStep("confirmation");
  }, []);

  // ========================
  // PAPEL WRAP HANDLERS
  // ========================
  const handlePapelWrapTypeSelect = useCallback((typeId: string) => {
    setSelection(prev => ({ ...prev, papelWrapType: typeId }));
    setStep("papel-wrap-format");
  }, []);

  const handlePapelWrapFormatSelect = useCallback((formatId: string) => {
    setSelection(prev => ({ ...prev, papelWrapFormat: formatId }));
    setStep("papel-wrap-printing");
  }, []);

  const handlePapelWrapPrintingSelect = useCallback((printingId: string) => {
    setSelection(prev => ({ ...prev, papelWrapPrinting: printingId }));
    setStep("papel-wrap-application");
  }, []);

  const handlePapelWrapApplicationSelect = useCallback((applicationId: string) => {
    setSelection(prev => ({ ...prev, papelWrapApplication: applicationId }));
    setStep("confirmation");
  }, []);

  // ========================
  // BUILD SUMMARY ITEMS
  // ========================
  const buildSummaryItems = useCallback(() => {
     const items: { label: string; value: string | string[] }[] = [];
    
    // Find product label from all possible sources
    const allProducts = [...directProducts, ...subProductsAdicionais, ...subProductsFood];
    const productLabel = allProducts.find(p => p.id === selection.product)?.label;
    if (productLabel) items.push({ label: "Produto", value: productLabel });

    // Add category if from sub-products
    if (selection.segment === "itens-adicionais") {
      items.push({ label: "Categoria", value: "Itens Adicionais" });
    } else if (selection.segment === "itens-adicionais-food") {
      items.push({ label: "Categoria", value: "Itens Adicionais para Food" });
    }

    // Bag summary
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

    // Box summary
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

    // Envelope summary
    if (selection.product === "envelopes") {
      const envelopeTypeLabel = envelopeTypeOptions.find(t => t.id === selection.envelopeType)?.label;
      if (envelopeTypeLabel) items.push({ label: "Tipo de Envelope", value: envelopeTypeLabel });

      const formatOptions = selection.envelopeType === "enobrecido" ? envelopeFormatOptionsPremium : envelopeFormatOptionsSimple;
      const formatLabel = formatOptions.find(f => f.id === selection.envelopeFormat)?.label;
      if (formatLabel) items.push({ label: "Formato", value: formatLabel });

      const paperOptions = selection.envelopeType === "enobrecido" ? envelopePaperOptionsPremium : envelopePaperOptionsSimple;
      const paperLabel = paperOptions.find(p => p.id === selection.envelopePaper)?.label;
      if (paperLabel) items.push({ label: "Tipo de Papel", value: paperLabel });

      if (selection.envelopeType === "simples") {
        const printingLabel = envelopePrintingOptions.find(p => p.id === selection.envelopePrinting)?.label;
        if (printingLabel) items.push({ label: "Impressão", value: printingLabel });
      }

      if (selection.envelopeType === "enobrecido" && selection.envelopeFinishing.length > 0) {
        const finishingLabels = selection.envelopeFinishing.map(f => 
          envelopeFinishingOptions.find(opt => opt.id === f)?.label || f
        );
        items.push({ label: "Acabamentos", value: finishingLabels });
      }

      if (selection.envelopeType === "enobrecido") {
        const closureLabel = envelopeClosureOptions.find(c => c.id === selection.envelopeClosure)?.label;
        if (closureLabel) items.push({ label: "Fechamento", value: closureLabel });
      }
    }

    // Papel de seda summary
    if (selection.product === "papel-seda") {
      const typeLabel = papelSedaTypeOptions.find(t => t.id === selection.papelSedaType)?.label;
      if (typeLabel) items.push({ label: "Tipo", value: typeLabel });

      const printingLabel = papelSedaPrintingOptions.find(p => p.id === selection.papelSedaPrinting)?.label;
      if (printingLabel) items.push({ label: "Personalização", value: printingLabel });

      const applicationLabel = papelSedaApplicationOptions.find(a => a.id === selection.papelSedaApplication)?.label;
      if (applicationLabel) items.push({ label: "Aplicação", value: applicationLabel });
    }

    // Etiqueta summary
    if (selection.product === "etiquetas") {
      const typeLabel = etiquetaTypeOptions.find(t => t.id === selection.etiquetaType)?.label;
      if (typeLabel) items.push({ label: "Tipo de Etiqueta", value: typeLabel });

      const materialLabel = etiquetaMaterialOptions.find(m => m.id === selection.etiquetaMaterial)?.label;
      if (materialLabel) items.push({ label: "Material", value: materialLabel });

      const printingLabel = etiquetaPrintingOptions.find(p => p.id === selection.etiquetaPrinting)?.label;
      if (printingLabel) items.push({ label: "Impressão", value: printingLabel });

      if (selection.etiquetaFinishing.length > 0) {
        const finishingLabels = selection.etiquetaFinishing.map(f => 
          etiquetaFinishingOptionsCouche.find(opt => opt.id === f)?.label || f
        );
        items.push({ label: "Acabamentos", value: finishingLabels });
      }
    }

    // Tag summary
    if (selection.product === "tags") {
      const typeLabel = tagTypeOptions.find(t => t.id === selection.tagType)?.label;
      if (typeLabel) items.push({ label: "Tipo de Tag", value: typeLabel });

      const materialLabel = tagMaterialOptions.find(m => m.id === selection.tagMaterial)?.label;
      if (materialLabel) items.push({ label: "Material", value: materialLabel });

      const printingLabel = tagPrintingOptions.find(p => p.id === selection.tagPrinting)?.label;
      if (printingLabel) items.push({ label: "Impressão", value: printingLabel });

      if (selection.tagFinishing.length > 0) {
        const finishingLabels = selection.tagFinishing.map(f => 
          tagFinishingOptions.find(opt => opt.id === f)?.label || f
        );
        items.push({ label: "Acabamentos", value: finishingLabels });
      }

      const cordLabel = tagCordOptions.find(c => c.id === selection.tagCord)?.label;
      if (cordLabel) items.push({ label: "Cordão / Amarração", value: cordLabel });
    }

    // Saco summary
    if (selection.product === "sacos") {
      const typeLabel = sacoTypeOptions.find(t => t.id === selection.sacoType)?.label;
      if (typeLabel) items.push({ label: "Tipo de Saco", value: typeLabel });

      const materialLabel = sacoMaterialOptions.find(m => m.id === selection.sacoMaterial)?.label;
      if (materialLabel) items.push({ label: "Material", value: materialLabel });

      const barrierLabel = sacoBarrierOptions.find(b => b.id === selection.sacoBarrier)?.label;
      if (barrierLabel) items.push({ label: "Proteção / Barreira", value: barrierLabel });

      const printingLabel = sacoPrintingOptions.find(p => p.id === selection.sacoPrinting)?.label;
      if (printingLabel) items.push({ label: "Impressão", value: printingLabel });

      const applicationLabel = sacoApplicationOptions.find(a => a.id === selection.sacoApplication)?.label;
      if (applicationLabel) items.push({ label: "Aplicação", value: applicationLabel });
    }

    // Papel barreira summary
    if (selection.product === "papel-barreira") {
      const protectionLabel = papelBarreiraProtectionOptions.find(p => p.id === selection.papelBarreiraProtection)?.label;
      if (protectionLabel) items.push({ label: "Tipo de Proteção", value: protectionLabel });

      const formatLabel = papelBarreiraFormatOptions.find(f => f.id === selection.papelBarreiraFormat)?.label;
      if (formatLabel) items.push({ label: "Formato", value: formatLabel });

      const printingLabel = papelBarreiraPrintingOptions.find(p => p.id === selection.papelBarreiraPrinting)?.label;
      if (printingLabel) items.push({ label: "Impressão", value: printingLabel });

      const applicationLabel = papelBarreiraApplicationOptions.find(a => a.id === selection.papelBarreiraApplication)?.label;
      if (applicationLabel) items.push({ label: "Aplicação", value: applicationLabel });
    }

    // Guardanapo summary
    if (selection.product === "guardanapos") {
      const typeLabel = guardanapoTypeOptions.find(t => t.id === selection.guardanapoType)?.label;
      if (typeLabel) items.push({ label: "Tipo de Guardanapo", value: typeLabel });
    }

    // Papel wrap summary
    if (selection.product === "papel-wrap") {
      const typeLabel = papelWrapTypeOptions.find(t => t.id === selection.papelWrapType)?.label;
      if (typeLabel) items.push({ label: "Tipo de Papel Wrap", value: typeLabel });

      const formatLabel = papelWrapFormatOptions.find(f => f.id === selection.papelWrapFormat)?.label;
      if (formatLabel) items.push({ label: "Formato", value: formatLabel });

      const printingLabel = papelWrapPrintingOptions.find(p => p.id === selection.papelWrapPrinting)?.label;
      if (printingLabel) items.push({ label: "Impressão", value: printingLabel });

      const applicationLabel = papelWrapApplicationOptions.find(a => a.id === selection.papelWrapApplication)?.label;
      if (applicationLabel) items.push({ label: "Aplicação", value: applicationLabel });
    }

    return items;
  }, [selection]);

  // Submit to contact page
  const handleSubmit = useCallback(() => {
    const items = buildSummaryItems();
    const mensagem = items.map(item => {
      const value = Array.isArray(item.value) ? item.value.join(", ") : item.value;
      return `${item.label}: ${value}`;
    }).join("\n");
    
    navigate(`/contato?assunto=Fazer um orçamento&mensagem=${encodeURIComponent(mensagem)}`);
  }, [buildSummaryItems, navigate]);

  // ========================
  // BUILD ENHANCED BREADCRUMB ITEMS
  // ========================
  const buildBreadcrumbItems = useCallback(() => {
    const items: { label: string; onClick?: () => void; isCurrent?: boolean }[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentStep = step as any;
    
    // Always start with Produtos
    items.push({ label: "Produtos", onClick: handleBackToProducts });

    // Add category if from sub-products
    if (selection.segment === "itens-adicionais" || selection.segment === "itens-adicionais-food") {
      const categoryLabel = selection.segment === "itens-adicionais" ? "Itens Adicionais" : "Itens Adicionais para Food";
      items.push({ 
        label: categoryLabel, 
        onClick: selection.product ? handleBackToSubProduct : undefined,
        isCurrent: !selection.product
      });
    }

    // Add product if selected
    if (selection.product) {
      const allProducts = [...directProducts, ...subProductsAdicionais, ...subProductsFood];
      const productLabel = allProducts.find(p => p.id === selection.product)?.label || "";
      
      // Determine the back handler for product
      const backToProduct = (selection.segment === "itens-adicionais" || selection.segment === "itens-adicionais-food") 
        ? handleBackToSubProduct 
        : handleBackToProducts;
      
      // Determine if we need more items after product
      const hasMoreSteps = currentStep !== "bag-type" && currentStep !== "box-type" && currentStep !== "envelope-type" && 
                           currentStep !== "etiqueta-type" && currentStep !== "tag-type" && currentStep !== "saco-type" &&
                           currentStep !== "papel-seda-type" && currentStep !== "papel-barreira-protection" &&
                           currentStep !== "guardanapo-type" && currentStep !== "papel-wrap-type";
      
      items.push({ 
        label: productLabel, 
        onClick: hasMoreSteps ? backToProduct : undefined,
        isCurrent: !hasMoreSteps
      });
    }

    // SACOLAS breadcrumb items
    if (selection.product === "sacolas") {
      if (selection.bagType) {
        const bagTypeLabel = bagTypeOptions.find(t => t.id === selection.bagType)?.label || "";
        const hasMoreBagSteps = currentStep !== "bag-finishing" && currentStep !== "bag-paper-simple";
        items.push({
          label: bagTypeLabel,
          onClick: hasMoreBagSteps ? handleBackToBagType : undefined,
          isCurrent: !hasMoreBagSteps && currentStep !== "confirmation"
        });
      }

      if (selection.bagType === "enobrecidas" && selection.bagFinishing.length > 0) {
        const finishingLabels = selection.bagFinishing.map(f => 
          bagFinishingOptions.find(opt => opt.id === f)?.label || f
        ).join(", ");
        const hasMoreAfterFinishing = currentStep !== "bag-paper-premium";
        if (currentStep !== "bag-finishing") {
          items.push({
            label: `Acabamentos: ${finishingLabels.length > 30 ? finishingLabels.substring(0, 30) + "..." : finishingLabels}`,
            onClick: hasMoreAfterFinishing ? handleBackToBagFinishing : undefined,
            isCurrent: !hasMoreAfterFinishing && currentStep !== "confirmation"
          });
        }
      }

      if (selection.bagPaper) {
        const paperOptions = selection.bagType === "enobrecidas" ? bagPaperOptionsPremium : bagPaperOptionsSimple;
        const paperLabel = paperOptions.find(p => p.id === selection.bagPaper)?.label || "";
        const hasMoreAfterPaper = currentStep !== "bag-handle-simple" && currentStep !== "bag-handle-premium";
        if (currentStep !== "bag-paper-simple" && currentStep !== "bag-paper-premium") {
          items.push({
            label: `Papel: ${paperLabel}`,
            onClick: hasMoreAfterPaper ? handleBackToBagPaper : undefined,
            isCurrent: !hasMoreAfterPaper && currentStep !== "confirmation"
          });
        }
      }

      if (selection.bagHandle) {
        const handleOptions = selection.bagType === "enobrecidas" ? bagHandleOptionsPremium : bagHandleOptionsSimple;
        const handleLabel = handleOptions.find(h => h.id === selection.bagHandle)?.label || "";
        if (currentStep === "confirmation") {
          items.push({
            label: `Alça: ${handleLabel}`,
            isCurrent: true
          });
        }
      }
    }

    // CAIXAS breadcrumb items
    if (selection.product === "caixas") {
      if (selection.boxType) {
        const boxTypeLabel = boxTypeOptions.find(t => t.id === selection.boxType)?.label || "";
        const hasMoreBoxSteps = currentStep !== "box-structure-simple" && currentStep !== "box-structure-premium";
        items.push({
          label: boxTypeLabel,
          onClick: hasMoreBoxSteps ? handleBackToBoxType : undefined,
          isCurrent: !hasMoreBoxSteps && currentStep !== "confirmation"
        });
      }

      if (selection.boxStructure) {
        const structureOptions = selection.boxType === "enobrecidas" ? boxStructureOptionsPremium : boxStructureOptionsSimple;
        const structureLabel = structureOptions.find(s => s.id === selection.boxStructure)?.label || "";
        const hasMoreAfterStructure = currentStep !== "box-paper-simple" && currentStep !== "box-paper-premium";
        if (currentStep !== "box-structure-simple" && currentStep !== "box-structure-premium") {
          items.push({
            label: structureLabel,
            onClick: hasMoreAfterStructure ? handleBackToBoxStructure : undefined,
            isCurrent: !hasMoreAfterStructure && currentStep !== "confirmation"
          });
        }
      }

      if (selection.boxPaper) {
        const paperOptions = selection.boxType === "enobrecidas" ? boxPaperOptionsPremium : boxPaperOptionsSimple;
        const paperLabel = paperOptions.find(p => p.id === selection.boxPaper)?.label || "";
        const hasMoreAfterPaper = currentStep !== "box-printing" && currentStep !== "box-finishing";
        if (currentStep !== "box-paper-simple" && currentStep !== "box-paper-premium") {
          items.push({
            label: `Papel: ${paperLabel}`,
            onClick: hasMoreAfterPaper ? handleBackToBoxPaper : undefined,
            isCurrent: !hasMoreAfterPaper && currentStep !== "confirmation"
          });
        }
      }

      if (selection.boxType === "enobrecidas" && selection.boxFinishing.length > 0) {
        if (currentStep !== "box-finishing" && currentStep !== "box-paper-premium") {
          items.push({
            label: `Acabamentos`,
            onClick: currentStep !== "box-extras" ? handleBackToBoxFinishing : undefined,
            isCurrent: currentStep === "box-extras"
          });
        }
      }

      if (selection.boxType === "simples" && selection.boxPrinting) {
        const printingLabel = boxPrintingOptions.find(p => p.id === selection.boxPrinting)?.label || "";
        if (currentStep === "confirmation") {
          items.push({
            label: `Impressão: ${printingLabel}`,
            isCurrent: true
          });
        }
      }

      if (selection.boxExtras.length > 0 && currentStep === "confirmation") {
        items.push({
          label: `Itens adicionais`,
          isCurrent: true
        });
      }
    }

    // ENVELOPES breadcrumb items
    if (selection.product === "envelopes") {
      if (selection.envelopeType) {
        const envelopeTypeLabel = envelopeTypeOptions.find(t => t.id === selection.envelopeType)?.label || "";
        const hasMoreEnvelopeSteps = currentStep !== "envelope-format-simple" && currentStep !== "envelope-format-premium";
        items.push({
          label: envelopeTypeLabel,
          onClick: hasMoreEnvelopeSteps ? handleBackToEnvelopeType : undefined,
          isCurrent: !hasMoreEnvelopeSteps && currentStep !== "confirmation"
        });
      }

      if (selection.envelopeFormat) {
        const formatOptions = selection.envelopeType === "enobrecido" ? envelopeFormatOptionsPremium : envelopeFormatOptionsSimple;
        const formatLabel = formatOptions.find(f => f.id === selection.envelopeFormat)?.label || "";
        const hasMoreAfterFormat = currentStep !== "envelope-paper-simple" && currentStep !== "envelope-paper-premium";
        if (currentStep !== "envelope-format-simple" && currentStep !== "envelope-format-premium") {
          items.push({
            label: formatLabel,
            onClick: hasMoreAfterFormat ? handleBackToEnvelopeFormat : undefined,
            isCurrent: !hasMoreAfterFormat && currentStep !== "confirmation"
          });
        }
      }

      if (selection.envelopePaper) {
        const paperOptions = selection.envelopeType === "enobrecido" ? envelopePaperOptionsPremium : envelopePaperOptionsSimple;
        const paperLabel = paperOptions.find(p => p.id === selection.envelopePaper)?.label || "";
        const hasMoreAfterPaper = currentStep !== "envelope-printing" && currentStep !== "envelope-finishing";
        if (currentStep !== "envelope-paper-simple" && currentStep !== "envelope-paper-premium") {
          items.push({
            label: `Papel: ${paperLabel}`,
            onClick: hasMoreAfterPaper ? handleBackToEnvelopePaper : undefined,
            isCurrent: !hasMoreAfterPaper && currentStep !== "confirmation"
          });
        }
      }

      if (selection.envelopeType === "enobrecido" && selection.envelopeFinishing.length > 0) {
        if (currentStep !== "envelope-finishing" && currentStep !== "envelope-paper-premium") {
          items.push({
            label: `Acabamentos`,
            onClick: currentStep !== "envelope-closure" ? handleBackToEnvelopeFinishing : undefined,
            isCurrent: currentStep === "envelope-closure"
          });
        }
      }
    }

    // ETIQUETAS breadcrumb items
    if (selection.product === "etiquetas") {
      if (selection.etiquetaType) {
        const etiquetaTypeLabel = etiquetaTypeOptions.find(t => t.id === selection.etiquetaType)?.label || "";
        const hasMoreEtiquetaSteps = currentStep !== "etiqueta-material";
        items.push({
          label: etiquetaTypeLabel,
          onClick: hasMoreEtiquetaSteps ? handleBackToEtiquetaType : undefined,
          isCurrent: !hasMoreEtiquetaSteps && currentStep !== "confirmation"
        });
      }

      if (selection.etiquetaMaterial) {
        const materialLabel = etiquetaMaterialOptions.find(m => m.id === selection.etiquetaMaterial)?.label || "";
        const hasMoreAfterMaterial = currentStep !== "etiqueta-printing";
        if (currentStep !== "etiqueta-material") {
          items.push({
            label: materialLabel,
            onClick: hasMoreAfterMaterial ? handleBackToEtiquetaMaterial : undefined,
            isCurrent: !hasMoreAfterMaterial && currentStep !== "confirmation"
          });
        }
      }

      if (selection.etiquetaPrinting) {
        const printingLabel = etiquetaPrintingOptions.find(p => p.id === selection.etiquetaPrinting)?.label || "";
        const hasMoreAfterPrinting = currentStep !== "etiqueta-finishing" && selection.etiquetaMaterial === "couche";
        if (currentStep !== "etiqueta-printing") {
          items.push({
            label: `Impressão: ${printingLabel}`,
            onClick: hasMoreAfterPrinting ? handleBackToEtiquetaPrinting : undefined,
            isCurrent: !hasMoreAfterPrinting && currentStep !== "confirmation"
          });
        }
      }
    }

    // TAGS breadcrumb items
    if (selection.product === "tags") {
      if (selection.tagType) {
        const tagTypeLabel = tagTypeOptions.find(t => t.id === selection.tagType)?.label || "";
        const hasMoreTagSteps = currentStep !== "tag-material";
        items.push({
          label: tagTypeLabel,
          onClick: hasMoreTagSteps ? handleBackToTagType : undefined,
          isCurrent: !hasMoreTagSteps && currentStep !== "confirmation"
        });
      }

      if (selection.tagMaterial) {
        const materialLabel = tagMaterialOptions.find(m => m.id === selection.tagMaterial)?.label || "";
        if (currentStep !== "tag-material") {
          items.push({
            label: materialLabel,
            onClick: currentStep !== "tag-printing" ? handleBackToTagMaterial : undefined,
            isCurrent: currentStep === "tag-printing"
          });
        }
      }

      if (selection.tagPrinting) {
        const printingLabel = tagPrintingOptions.find(p => p.id === selection.tagPrinting)?.label || "";
        if (currentStep !== "tag-printing" && currentStep !== "tag-material") {
          items.push({
            label: `Impressão: ${printingLabel}`,
            onClick: currentStep !== "tag-finishing" ? handleBackToTagPrinting : undefined,
            isCurrent: currentStep === "tag-finishing"
          });
        }
      }

      if (selection.tagFinishing.length > 0) {
        if (currentStep !== "tag-finishing" && currentStep !== "tag-printing" && currentStep !== "tag-material") {
          items.push({
            label: `Acabamentos`,
            onClick: currentStep !== "tag-cord" ? handleBackToTagFinishing : undefined,
            isCurrent: currentStep === "tag-cord"
          });
        }
      }
    }

    // SACOS breadcrumb items
    if (selection.product === "sacos") {
      if (selection.sacoType) {
        const sacoTypeLabel = sacoTypeOptions.find(t => t.id === selection.sacoType)?.label || "";
        const hasMoreSacoSteps = currentStep !== "saco-material";
        items.push({
          label: sacoTypeLabel,
          onClick: hasMoreSacoSteps ? handleBackToSacoType : undefined,
          isCurrent: !hasMoreSacoSteps && currentStep !== "confirmation"
        });
      }

      if (selection.sacoMaterial) {
        const materialLabel = sacoMaterialOptions.find(m => m.id === selection.sacoMaterial)?.label || "";
        if (currentStep !== "saco-material") {
          items.push({
            label: materialLabel,
            onClick: currentStep !== "saco-barrier" && currentStep !== "saco-printing" ? handleBackToSacoMaterial : undefined,
            isCurrent: currentStep === "saco-barrier" || currentStep === "saco-printing"
          });
        }
      }

      if (selection.sacoBarrier) {
        const barrierLabel = sacoBarrierOptions.find(b => b.id === selection.sacoBarrier)?.label || "";
        if (currentStep !== "saco-barrier" && currentStep !== "saco-material") {
          items.push({
            label: `Proteção: ${barrierLabel}`,
            onClick: currentStep !== "saco-printing" ? handleBackToSacoBarrier : undefined,
            isCurrent: currentStep === "saco-printing"
          });
        }
      }

      if (selection.sacoPrinting) {
        const printingLabel = sacoPrintingOptions.find(p => p.id === selection.sacoPrinting)?.label || "";
        if (currentStep !== "saco-printing" && currentStep !== "saco-barrier" && currentStep !== "saco-material") {
          items.push({
            label: `Impressão: ${printingLabel}`,
            onClick: currentStep !== "saco-application" ? handleBackToSacoPrinting : undefined,
            isCurrent: currentStep === "saco-application"
          });
        }
      }
    }

    // PAPEL DE SEDA breadcrumb items
    if (selection.product === "papel-seda") {
      if (selection.papelSedaType) {
        const typeLabel = papelSedaTypeOptions.find(t => t.id === selection.papelSedaType)?.label || "";
        const hasMoreSteps = currentStep !== "papel-seda-printing";
        items.push({
          label: typeLabel,
          onClick: hasMoreSteps ? handleBackToPapelSedaType : undefined,
          isCurrent: !hasMoreSteps && currentStep !== "confirmation"
        });
      }

      if (selection.papelSedaPrinting) {
        const printingLabel = papelSedaPrintingOptions.find(p => p.id === selection.papelSedaPrinting)?.label || "";
        if (currentStep !== "papel-seda-printing") {
          items.push({
            label: `Impressão: ${printingLabel}`,
            onClick: currentStep !== "papel-seda-application" ? handleBackToPapelSedaPrinting : undefined,
            isCurrent: currentStep === "papel-seda-application"
          });
        }
      }
    }

    // PAPEL BARREIRA breadcrumb items
    if (selection.product === "papel-barreira") {
      if (selection.papelBarreiraProtection) {
        const protectionLabel = papelBarreiraProtectionOptions.find(p => p.id === selection.papelBarreiraProtection)?.label || "";
        const hasMoreSteps = currentStep !== "papel-barreira-format";
        items.push({
          label: protectionLabel,
          onClick: hasMoreSteps ? handleBackToPapelBarreiraProtection : undefined,
          isCurrent: !hasMoreSteps && currentStep !== "confirmation"
        });
      }

      if (selection.papelBarreiraFormat) {
        const formatLabel = papelBarreiraFormatOptions.find(f => f.id === selection.papelBarreiraFormat)?.label || "";
        if (currentStep !== "papel-barreira-format") {
          items.push({
            label: formatLabel,
            onClick: currentStep !== "papel-barreira-printing" ? handleBackToPapelBarreiraFormat : undefined,
            isCurrent: currentStep === "papel-barreira-printing"
          });
        }
      }

      if (selection.papelBarreiraPrinting) {
        const printingLabel = papelBarreiraPrintingOptions.find(p => p.id === selection.papelBarreiraPrinting)?.label || "";
        if (currentStep !== "papel-barreira-printing" && currentStep !== "papel-barreira-format") {
          items.push({
            label: `Impressão: ${printingLabel}`,
            onClick: currentStep !== "papel-barreira-application" ? handleBackToPapelBarreiraPrinting : undefined,
            isCurrent: currentStep === "papel-barreira-application"
          });
        }
      }
    }

    // PAPEL WRAP breadcrumb items
    if (selection.product === "papel-wrap") {
      if (selection.papelWrapType) {
        const typeLabel = papelWrapTypeOptions.find(t => t.id === selection.papelWrapType)?.label || "";
        const hasMoreSteps = currentStep !== "papel-wrap-format";
        items.push({
          label: typeLabel,
          onClick: hasMoreSteps ? handleBackToPapelWrapType : undefined,
          isCurrent: !hasMoreSteps && currentStep !== "confirmation"
        });
      }

      if (selection.papelWrapFormat) {
        const formatLabel = papelWrapFormatOptions.find(f => f.id === selection.papelWrapFormat)?.label || "";
        if (currentStep !== "papel-wrap-format") {
          items.push({
            label: formatLabel,
            onClick: currentStep !== "papel-wrap-printing" ? handleBackToPapelWrapFormat : undefined,
            isCurrent: currentStep === "papel-wrap-printing"
          });
        }
      }

      if (selection.papelWrapPrinting) {
        const printingLabel = papelWrapPrintingOptions.find(p => p.id === selection.papelWrapPrinting)?.label || "";
        if (currentStep !== "papel-wrap-printing" && currentStep !== "papel-wrap-format") {
          items.push({
            label: `Impressão: ${printingLabel}`,
            onClick: currentStep !== "papel-wrap-application" ? handleBackToPapelWrapPrinting : undefined,
            isCurrent: currentStep === "papel-wrap-application"
          });
        }
      }
    }

    return items;
  }, [selection, step, handleBackToProducts, handleBackToSubProduct, 
      handleBackToBagType, handleBackToBagFinishing, handleBackToBagPaper,
      handleBackToBoxType, handleBackToBoxStructure, handleBackToBoxPaper, handleBackToBoxFinishing,
      handleBackToEnvelopeType, handleBackToEnvelopeFormat, handleBackToEnvelopePaper, handleBackToEnvelopeFinishing,
      handleBackToEtiquetaType, handleBackToEtiquetaMaterial, handleBackToEtiquetaPrinting,
      handleBackToTagType, handleBackToTagMaterial, handleBackToTagPrinting, handleBackToTagFinishing,
      handleBackToSacoType, handleBackToSacoMaterial, handleBackToSacoBarrier, handleBackToSacoPrinting,
      handleBackToPapelSedaType, handleBackToPapelSedaPrinting,
      handleBackToPapelBarreiraProtection, handleBackToPapelBarreiraFormat, handleBackToPapelBarreiraPrinting,
      handleBackToPapelWrapType, handleBackToPapelWrapFormat, handleBackToPapelWrapPrinting]);

  // Get current step icon for preview
  const getCurrentIcon = () => {
    if (selection.product === "sacolas") return ShoppingBag;
    if (selection.product === "caixas") return Box;
    if (selection.product === "envelopes") return FileText;
    if (selection.product === "papel-seda") return Scissors;
    if (selection.product === "etiquetas") return Tag;
    if (selection.product === "tags") return Tag;
    if (selection.product === "sacos") return Package;
    if (selection.product === "papel-barreira") return Layers;
    if (selection.product === "guardanapos") return Square;
    if (selection.product === "papel-wrap") return Croissant;
    if (selection.segment === "itens-adicionais") {
      const cat = directProducts.find(p => p.id === "itens-adicionais");
      return cat?.icon || Tag;
    }
    if (selection.segment === "itens-adicionais-food") {
      const cat = directProducts.find(p => p.id === "itens-adicionais-food");
      return cat?.icon || Utensils;
    }
    return Package;
  };

  const CurrentIcon = getCurrentIcon();

  // Render step content
  const renderStepContent = () => {
    switch (step) {
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
              {directProducts.map((product, index) => (
                <SelectionCard
                  key={product.id}
                  icon={product.image ? undefined : product.icon}
                  image={product.image}
                  label={product.label}
                  onClick={() => handleProductSelect(product.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "sub-product":
        {
          const subProducts = selection.segment === "itens-adicionais" ? subProductsAdicionais : subProductsFood;
          const categoryLabel = selection.segment === "itens-adicionais" ? "Itens Adicionais" : "Itens Adicionais para Food";
          return (
            <motion.div
              key="sub-products"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {categoryLabel} — Selecione o produto:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {subProducts.map((product, index) => (
                  <SelectionCard
                    key={product.id}
                    icon={product.icon}
                    label={product.label}
                    onClick={() => handleSubProductSelect(product.id)}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          );
        }

      // ========================
      // BAG STEPS
      // ========================
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
              {bagTypeOptions.map((option, index) => {
                const bagImage = option.id === "sem-enobrecimento" ? productSacolaSimples : productSacolaEnobrecida;
                return (
                  <SelectionCard
                    key={option.id}
                    label={option.label}
                    description={option.description}
                    image={bagImage}
                    onClick={() => handleBagTypeSelect(option.id)}
                    index={index}
                  />
                );
              })}
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
              {bagPaperOptionsSimple.map((option, index) => {
                const paperImage = option.id === "kraft" ? productSacolaKraft : productSacolaBranco;
                return (
                  <SelectionCard
                    key={option.id}
                    label={option.label}
                    description={option.description}
                    image={paperImage}
                    onClick={() => handleBagPaperSimpleSelect(option.id)}
                    index={index}
                  />
                );
              })}
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {bagHandleOptionsSimple.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  description={option.description}
                  image={handleImages[option.id]}
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
                  description={option.description}
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
                  description={option.description}
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {bagHandleOptionsPremium.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  description={option.description}
                  image={handleImages[option.id]}
                  onClick={() => handleBagHandlePremiumSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      // ========================
      // BOX STEPS
      // ========================
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
            <div className="grid grid-cols-2 gap-4">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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

      // ========================
      // ENVELOPE STEPS
      // ========================
      case "envelope-type":
        return (
          <motion.div
            key="envelope-type"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de envelope você procura?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {envelopeTypeOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  description={option.description}
                  onClick={() => handleEnvelopeTypeSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "envelope-format-simple":
        return (
          <motion.div
            key="envelope-format-simple"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual o formato do envelope?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {envelopeFormatOptionsSimple.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleEnvelopeFormatSimpleSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "envelope-paper-simple":
        return (
          <motion.div
            key="envelope-paper-simple"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual o tipo de papel?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {envelopePaperOptionsSimple.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleEnvelopePaperSimpleSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "envelope-printing":
        return (
          <motion.div
            key="envelope-printing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de impressão?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {envelopePrintingOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleEnvelopePrintingSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "envelope-format-premium":
        return (
          <motion.div
            key="envelope-format-premium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual o formato do envelope?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {envelopeFormatOptionsPremium.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleEnvelopeFormatPremiumSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "envelope-paper-premium":
        return (
          <motion.div
            key="envelope-paper-premium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual o tipo de papel?
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {envelopePaperOptionsPremium.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleEnvelopePaperPremiumSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "envelope-finishing":
        return (
          <motion.div
            key="envelope-finishing"
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
              {envelopeFinishingOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  description={option.description}
                  isSelected={selection.envelopeFinishing.includes(option.id)}
                  isMultiSelect
                  onClick={() => handleEnvelopeFinishingToggle(option.id)}
                  index={index}
                />
              ))}
            </div>
            <Button 
              variant="cta" 
              className="w-full mt-4"
              onClick={handleEnvelopeFinishingConfirm}
              disabled={selection.envelopeFinishing.length === 0}
            >
              Continuar
            </Button>
          </motion.div>
        );

      case "envelope-closure":
        return (
          <motion.div
            key="envelope-closure"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de fechamento?
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {envelopeClosureOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleEnvelopeClosureSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      // ========================
      // PAPEL DE SEDA STEPS
      // ========================
      case "papel-seda-type":
        return (
          <motion.div
            key="papel-seda-type"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de papel de seda?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {papelSedaTypeOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handlePapelSedaTypeSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "papel-seda-printing":
        return (
          <motion.div
            key="papel-seda-printing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Deseja personalização?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {papelSedaPrintingOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handlePapelSedaPrintingSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "papel-seda-application":
        return (
          <motion.div
            key="papel-seda-application"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual a principal aplicação?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {papelSedaApplicationOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handlePapelSedaApplicationSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      // ========================
      // ETIQUETA STEPS
      // ========================
      case "etiqueta-type":
        return (
          <motion.div
            key="etiqueta-type"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de etiqueta você precisa?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {etiquetaTypeOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleEtiquetaTypeSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "etiqueta-material":
        return (
          <motion.div
            key="etiqueta-material"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual o material da etiqueta?
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {etiquetaMaterialOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleEtiquetaMaterialSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "etiqueta-printing":
        return (
          <motion.div
            key="etiqueta-printing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de impressão?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {etiquetaPrintingOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleEtiquetaPrintingSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "etiqueta-finishing":
        return (
          <motion.div
            key="etiqueta-finishing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Deseja algum acabamento?
            </h3>
            <p className="text-sm text-muted-foreground">Selecione uma ou mais opções (disponível para papel couchê)</p>
            <div className="grid grid-cols-2 gap-4">
              {etiquetaFinishingOptionsCouche.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  isSelected={selection.etiquetaFinishing.includes(option.id)}
                  isMultiSelect
                  onClick={() => handleEtiquetaFinishingToggle(option.id)}
                  index={index}
                />
              ))}
            </div>
            <Button 
              variant="cta" 
              className="w-full mt-4"
              onClick={handleEtiquetaFinishingConfirm}
            >
              {selection.etiquetaFinishing.length > 0 ? "Continuar" : "Pular"}
            </Button>
          </motion.div>
        );

      // ========================
      // TAG STEPS
      // ========================
      case "tag-type":
        return (
          <motion.div
            key="tag-type"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de tag você procura?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {tagTypeOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleTagTypeSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "tag-material":
        return (
          <motion.div
            key="tag-material"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual o material da tag?
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {tagMaterialOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleTagMaterialSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "tag-printing":
        return (
          <motion.div
            key="tag-printing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de impressão?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tagPrintingOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleTagPrintingSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "tag-finishing":
        return (
          <motion.div
            key="tag-finishing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Deseja algum acabamento?
            </h3>
            <p className="text-sm text-muted-foreground">Selecione uma ou mais opções</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tagFinishingOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  isSelected={selection.tagFinishing.includes(option.id)}
                  isMultiSelect
                  onClick={() => handleTagFinishingToggle(option.id)}
                  index={index}
                />
              ))}
            </div>
            <Button 
              variant="cta" 
              className="w-full mt-4"
              onClick={handleTagFinishingConfirm}
            >
              {selection.tagFinishing.length > 0 ? "Continuar" : "Pular"}
            </Button>
          </motion.div>
        );

      case "tag-cord":
        return (
          <motion.div
            key="tag-cord"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Deseja cordão ou amarração?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tagCordOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleTagCordSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      // ========================
      // SACO STEPS
      // ========================
      case "saco-type":
        return (
          <motion.div
            key="saco-type"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de saco você precisa?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {sacoTypeOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleSacoTypeSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "saco-material":
        return (
          <motion.div
            key="saco-material"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual material do saco?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {sacoMaterialOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleSacoMaterialSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "saco-barrier":
        return (
          <motion.div
            key="saco-barrier"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              O produto precisa de proteção contra gordura ou umidade?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {sacoBarrierOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleSacoBarrierSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "saco-printing":
        return (
          <motion.div
            key="saco-printing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Deseja personalização?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {sacoPrintingOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleSacoPrintingSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "saco-application":
        return (
          <motion.div
            key="saco-application"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Para qual tipo de produto?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {sacoApplicationOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleSacoApplicationSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      // ========================
      // PAPEL BARREIRA STEPS
      // ========================
      case "papel-barreira-protection":
        return (
          <motion.div
            key="papel-barreira-protection"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de proteção você precisa?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {papelBarreiraProtectionOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handlePapelBarreiraProtectionSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "papel-barreira-format":
        return (
          <motion.div
            key="papel-barreira-format"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual formato você prefere?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {papelBarreiraFormatOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handlePapelBarreiraFormatSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "papel-barreira-printing":
        return (
          <motion.div
            key="papel-barreira-printing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Deseja personalização?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {papelBarreiraPrintingOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handlePapelBarreiraPrintingSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "papel-barreira-application":
        return (
          <motion.div
            key="papel-barreira-application"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Onde será utilizado?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {papelBarreiraApplicationOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handlePapelBarreiraApplicationSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      // ========================
      // GUARDANAPO STEPS
      // ========================
      case "guardanapo-type":
        return (
          <motion.div
            key="guardanapo-type"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de guardanapo?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {guardanapoTypeOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handleGuardanapoTypeSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      // ========================
      // PAPEL WRAP STEPS
      // ========================
      case "papel-wrap-type":
        return (
          <motion.div
            key="papel-wrap-type"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Qual tipo de papel wrap?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {papelWrapTypeOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handlePapelWrapTypeSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "papel-wrap-format":
        return (
          <motion.div
            key="papel-wrap-format"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Como será utilizado?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {papelWrapFormatOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handlePapelWrapFormatSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "papel-wrap-printing":
        return (
          <motion.div
            key="papel-wrap-printing"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Deseja personalização?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {papelWrapPrintingOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handlePapelWrapPrintingSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      case "papel-wrap-application":
        return (
          <motion.div
            key="papel-wrap-application"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Para qual tipo de alimento?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {papelWrapApplicationOptions.map((option, index) => (
                <SelectionCard
                  key={option.id}
                  label={option.label}
                  onClick={() => handlePapelWrapApplicationSelect(option.id)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );

      // ========================
      // CONFIRMATION
      // ========================
      case "confirmation":
        return (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 text-center">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Seleção completa!
              </h3>
              <p className="text-muted-foreground">
                Confira o resumo ao lado e clique em "Solicitar Orçamento" para enviar.
              </p>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

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
            Qual produto você procura?
          </h2>
          <p className="text-lg text-muted-foreground">
            Selecione o produto e as especificações desejadas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Selection Area */}
          <div className="space-y-4">
            {/* Breadcrumb */}
            {step !== "product" && (
              <FlowBreadcrumb items={buildBreadcrumbItems()} />
            )}

            {/* Step Content */}
            <AnimatePresence mode="wait">
              {renderStepContent()}
            </AnimatePresence>
          </div>

          {/* Live Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <FlowLiveSummary
              items={buildSummaryItems()}
              isComplete={step === "confirmation"}
              onSubmit={handleSubmit}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
