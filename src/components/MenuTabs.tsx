import { useState } from "react";
import { CATEGORIES } from "@/data/menu";

interface MenuTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const MenuTabs = ({ activeCategory, onCategoryChange }: MenuTabsProps) => {
  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md py-6 border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`
                category-tab px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap
                ${activeCategory === category 
                  ? "active" 
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuTabs;