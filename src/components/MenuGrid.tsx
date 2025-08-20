import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { MENU } from "@/data/menu";
import MenuCard from "./MenuCard";

interface MenuGridProps {
  activeCategory: string;
}

const MenuGrid = ({ activeCategory }: MenuGridProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(MENU[activeCategory] || []);

  useEffect(() => {
    const items = MENU[activeCategory] || [];
    if (searchTerm) {
      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }, [activeCategory, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category Title */}
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
          {activeCategory}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      {/* Menu Items Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => (
            <MenuCard
              key={`${item.name}-${index}`}
              item={item}
              category={activeCategory}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No items found matching "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuGrid;