"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-0", className)}>
      {items.map((item, index) => (
        <div key={index} className="border-b border-current">
          <button
            onClick={() => toggleItem(index)}
            className="w-full py-4 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
          >
            <span className="text-lg md:text-xl font-heading pr-8">{item.title}</span>
            <ChevronDown
              className={cn(
                "w-5 h-5 transition-transform duration-300 flex-shrink-0",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === index ? "max-h-96 pb-6" : "max-h-0"
            )}
          >
            <p className="text-base leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
