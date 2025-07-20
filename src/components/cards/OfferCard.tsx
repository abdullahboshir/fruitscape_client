import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface OfferCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  buttonText?: string;
}

export const OfferCard = ({
  title,
  description,
  imageSrc,
  imageAlt = "Card Image",
  buttonText = "Shop Now",
}: OfferCardProps) => {
  return (
    <Card className="w-full max-w-lg bg-gradient-to-r from-lime-100 via-white to-lime-50 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border border-lime-200">
      <CardContent className="flex items-center justify-between">
        {/* Left: Text content */}
        <div className="flex-1 space-y-2">
          <h3 className="text-lg md:text-xl font-bold text-lime-700">{title}</h3>
          <p className="text-sm md:text-base text-gray-600">{description}</p>
          <Button className="mt-2 bg-lime-500 hover:bg-lime-700 text-white text-sm">
            {buttonText}
          </Button>
        </div>

        {/* Right: Image */}
        <div className="w-32 h-28 relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-md object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
};
