import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectionCardProps {
  icon?: React.ComponentType<{ className?: string }>;
  image?: string;
  imageClassName?: string;
  label: string;
  description?: string;
  isSelected?: boolean;
  isMultiSelect?: boolean;
  onClick: () => void;
  index?: number;
}

export function SelectionCard({
  icon: Icon,
  image,
  imageClassName,
  label,
  description,
  isSelected = false,
  isMultiSelect = false,
  onClick,
  index = 0
}: SelectionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-3 rounded-xl border bg-card transition-all duration-300 group text-left relative overflow-hidden",
        image ? "p-0" : "p-6",
        isSelected 
          ? "border-primary bg-primary/10" 
          : "border-border hover:border-primary hover:bg-primary/5"
      )}
    >
      {isMultiSelect && isSelected && (
        <div className="absolute top-3 right-3 z-10">
          <CheckCircle2 className="w-5 h-5 text-primary" />
        </div>
      )}
      {image && (
        <div className="w-full aspect-[4/3] overflow-hidden">
          <img src={image} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className={cn("flex flex-col items-center gap-3", image ? "p-4" : "")}>
        {Icon && !image && (
          <div className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center transition-colors",
            isSelected ? "bg-primary/20" : "bg-primary/10 group-hover:bg-primary/20"
          )}>
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}
        <div className="text-center">
          <span className="font-medium text-foreground text-sm block">
            {label}
          </span>
          {description && (
            <span className="text-xs text-muted-foreground mt-1 block">
              {description}
            </span>
          )}
        </div>
      </div>
    </motion.button>
  );
}
