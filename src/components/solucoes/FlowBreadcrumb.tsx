import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  isCurrent?: boolean;
}

interface FlowBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function FlowBreadcrumb({ items }: FlowBreadcrumbProps) {
  if (items.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="flex items-center gap-2 text-sm flex-wrap mb-6"
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            )}
            {item.onClick && !item.isCurrent ? (
              <button 
                onClick={item.onClick}
                className="text-primary hover:underline font-medium"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-foreground font-medium">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
