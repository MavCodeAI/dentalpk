import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  mrp?: number;
  image: string;
  description?: string;
}

const ProductCard = ({ name, price, mrp, image, description }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square bg-muted/30 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-4"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <h3 className="font-semibold text-sm line-clamp-2 min-h-[2.5rem]">{name}</h3>
        {description && (
          <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
        )}
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-price">Rs {price.toFixed(2)}</span>
          {mrp && mrp > price && (
            <span className="text-sm text-muted-foreground line-through">Rs {mrp.toFixed(2)}</span>
          )}
        </div>
        <Button className="w-full group-hover:bg-gradient-primary" size="sm">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;