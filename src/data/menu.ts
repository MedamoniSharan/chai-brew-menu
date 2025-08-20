// Dr. Chai Café Menu Data
export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  bestseller?: boolean;
  new?: boolean;
  image?: string;
}

export interface MenuCategory {
  [key: string]: MenuItem[];
}

export const MENU: MenuCategory = {
  "Hot Coffee Beverages": [
    { name: "Cappuccino", price: 90, bestseller: true, description: "Rich espresso with steamed milk and foam" },
    { name: "Latte", price: 100, description: "Smooth espresso with steamed milk" },
    { name: "Mocha", price: 100, description: "Coffee meets chocolate in perfect harmony" }
  ],
  "Cold Coffee Beverages": [
    { name: "Caramel Cold Coffee", price: 130, description: "Iced coffee with sweet caramel swirls" },
    { name: "Hazelnut Cold Coffee", price: 140, description: "Nutty flavor meets smooth cold coffee" },
    { name: "Chocolate Cold Coffee", price: 150, description: "Rich chocolate blended with cold coffee" }
  ],
  "Teas": [
    { name: "Masala Tea", price: 40, description: "Traditional spiced tea blend" },
    { name: "Ginger Tea", price: 45, description: "Warming ginger-infused tea" },
    { name: "Lemon Tea", price: 40, description: "Refreshing citrus tea" }
  ],
  "Hot Chai Beverages": [
    { name: "Masala Chai", price: 40, description: "Authentic Indian spiced tea" },
    { name: "Ginger Chai", price: 45, description: "Warming ginger chai" },
    { name: "Cardamom Chai", price: 40, description: "Aromatic cardamom-infused chai" },
    { name: "Chocolate Chai", price: 50, description: "Chai with rich chocolate notes" },
    { name: "Green Tea", price: 40, description: "Light and refreshing green tea" },
    { name: "Lemon Tea", price: 40, description: "Zesty lemon tea" }
  ],
  "Cold Chai Beverages": [
    { name: "Iced Masala Chai", price: 50, description: "Chilled version of our signature masala chai" },
    { name: "Chai Latte", price: 60, description: "Creamy chai with steamed milk" },
    { name: "Chai Frappuccino", price: 80, new: true, description: "Blended chai with ice and cream" },
    { name: "Iced Lemon Tea", price: 50, description: "Refreshing iced lemon tea" }
  ],
  "Speciality Chai Drinks": [
    { name: "Chai Mocha", price: 80, description: "Perfect blend of chai spices and chocolate" },
    { name: "Chai Tea Latte with Honey", price: 90, description: "Sweet honey chai latte" }
  ],
  "Classic Milkshakes": [
    { name: "Vanilla Milkshake", price: 80, description: "Creamy vanilla milkshake" },
    { name: "Chocolate Milkshake", price: 90, description: "Rich chocolate milkshake" },
    { name: "Strawberry Milkshake", price: 100, description: "Fresh strawberry milkshake" }
  ],
  "Savory Starters": [
    { name: "Onion Pakoda", price: 60, description: "Crispy onion fritters" },
    { name: "Masala Vada", price: 60, description: "Spiced lentil fritters" },
    { name: "Paneer Tikka", price: 120, description: "Grilled cottage cheese with spices" },
    { name: "Chat Masala", price: 70, description: "Tangy Indian street food mix" },
    { name: "Palak Pakoda", price: 70, description: "Crispy spinach fritters" }
  ],
  "Sweet Starters": [
    { name: "Ras Malai", price: 100, description: "Soft cottage cheese dumplings in sweet milk" },
    { name: "Basundi", price: 70, description: "Traditional sweet thickened milk dessert" }
  ]
};

export const CATEGORIES = Object.keys(MENU);