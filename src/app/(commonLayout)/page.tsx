
import { Hero } from '@/components/home/Hero';
import { ThemeModeToggle } from '@/components/shared/ThemeModeToggle';
import React from 'react';
import heroImg1 from '../../../public/images/hero/hero-img1.jpg';

const HomePage = () => {
    return (
        <div>

         
          <Hero
  badge="🔥 Limited Time Offer"
  heading="Fresh Guavas Delivered Daily"
  description="Get the best hand-picked guavas from farm to your doorstep with just a click."
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
    src: heroImg1.src,
    alt: "Fresh guava falling into water",
  }}
/>


        </div>
    );
};

export default HomePage;