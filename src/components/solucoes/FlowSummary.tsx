import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SelectionState } from "./ProductFlowData";

interface SummaryItem {
  label: string;
  value: string | string[];
}

interface FlowSummaryProps {
  items: SummaryItem[];
  onSubmit: () => void;
}

export function FlowSummary({ items, onSubmit }: FlowSummaryProps) {
  return (
    <motion.div
      key="confirmation"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="space-y-6"
    >
      <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
          Resumo da sua seleção:
        </h3>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground">
                <strong>{item.label}:</strong>{" "}
                {Array.isArray(item.value) 
                  ? item.value.join(", ") 
                  : item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <Button 
        variant="cta" 
        size="lg" 
        className="w-full"
        onClick={onSubmit}
      >
        Solicitar Orçamento
        <ArrowRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}
