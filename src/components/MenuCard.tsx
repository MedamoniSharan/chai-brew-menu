import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MenuItem } from "@/data/menu";
import { Star, Sparkles } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
  category: string;
}

const MenuCard = ({ item, category }: MenuCardProps) => {
  return (
    <Card className="menu-card overflow-hidden border-2 border-primary/30 shadow-card hover:border-primary/60 hover:shadow-elevated transition-all duration-300 ease-in-out bg-gradient-to-br from-card to-muted/30">
      <CardContent className="p-6 border-l-4 border-primary/20">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
              {item.name}
            </h3>
            {item.description && (
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
          
          <div className="ml-4 text-right">
            <div className="bg-accent/10 text-accent-foreground rounded-full px-3 py-1 font-semibold border border-accent/20 shadow-sm">
              ₹{item.price}
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex gap-2 flex-wrap">
          {item.bestseller && (
            <Badge variant="default" className="bg-accent text-accent-foreground border border-accent/30">
              <Star className="w-3 h-3 mr-1" />
              Bestseller
            </Badge>
          )}
          {item.new && (
            <Badge variant="secondary" className="bg-primary text-primary-foreground border border-primary/40">
              <Sparkles className="w-3 h-3 mr-1" />
              New
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCard;