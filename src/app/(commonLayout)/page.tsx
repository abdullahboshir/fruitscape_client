import { Hero } from "@/components/home/Hero";
import React from "react";
import heroImg3 from "../../../public/images/hero/hero-img3.png";
import cardImg1 from "../../../public/images/card/card-img1.png";
import cardImg2 from "../../../public/images/card/card-img2.png";
import cardImg3 from "../../../public/images/card/card-img3.png";
import { OfferCard } from "@/components/cards/OfferCard";
import ProductCard from "@/components/cards/ProductCard";

const products = [
  {
    imageSrc: cardImg1.src,
    name: "Ripe Bananas",
    description: "Sweet and fresh bananas from local farms.",
    price: "৳ 80/kg",
  },
  {
    imageSrc: cardImg3.src,
    name: "Red Apples",
    description: "Crisp and juicy premium apples.",
    price: "৳ 120/kg",
  },
  {
    imageSrc: cardImg2.src,
    name: "Mangoes",
    description: "Delicious summer mangoes, naturally ripened.",
    price: "৳ 150/kg",
  },
];

const HomePage = () => {
  return (
    <div>
      <Hero
        badge="🔥 Limited Time Offer"
        heading="Fresh Fruits & Vegetables Delivered Daily"
        description="Shop the freshest produce from farms across Bangladesh — fruits, vegetables, and more delivered to your doorstep."
        buttons={{
          primary: {
            text: "Shop Now",
            url: "/shop",
          },
          secondary: {
            text: "Learn More",
            url: "/about",
          },
        }}
        image={{
          src: heroImg3.src,
          alt: "Fresh fruits and vegetables falling into water",
        }}
      />

      <div className="px-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
        <OfferCard
          title="Summer Sale -50%"
          description="Shop now—limited time!"
          imageSrc={cardImg1.src}
          buttonText="Explore Deals"
        />

        <OfferCard
          title="Flash Deal Today"
          description="Ends soon—don’t miss it."
          imageSrc={cardImg2.src}
          buttonText="Grab Offer"
        />

        <OfferCard
          title="New Arrivals -50%"
          description="New picks at half price!"
          imageSrc={cardImg3.src}
          buttonText="Shop Now"
        />
      </div>

      <div className="mt-10 px-10">
        <h1 className="text-4xl my-10 font-semibold">Pick your favorite Food</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              name={product.name}
              description={product.description}
              price={product.price}
              //   onAddToCart={() => console.log(`Added ${product.name}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
