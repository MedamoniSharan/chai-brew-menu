import { useState } from "react";
import { CATEGORIES } from "@/data/menu";
import MenuTabs from "./MenuTabs";
import MenuGrid from "./MenuGrid";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <section id="menu" className="bg-background min-h-screen">
      <div className="py-16">
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From traditional chai to specialty beverages and delicious snacks, 
            discover our carefully crafted selection
          </p>
        </div>
      </div>

      <MenuTabs 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      
      <MenuGrid activeCategory={activeCategory} />
    </section>
  );
};

export default Menu;