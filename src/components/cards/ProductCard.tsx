// components/cards/ProductCard.tsx

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TiShoppingCart } from "react-icons/ti";

interface ProductCardProps {
  imageSrc: string;
  name: string;
  description: string;
  price: string;
  onAddToCart?: () => void;
}

const ProductCard = ({
  imageSrc,
  name,
  description,
  price,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <Card className="w-[100%] rounded-xl shadow-sm border-lime-500 hover:shadow-md transition">
     <div className="relative w-96 h-52 z-10 -mb-16 transform transition-transform scale-110 -top-8 -right-2">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-5">
          <span className="text-base font-bold text-lime-500">{price}</span>
          <Button className="bg-lime-500" onClick={onAddToCart} size="sm">
            <TiShoppingCart/>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
