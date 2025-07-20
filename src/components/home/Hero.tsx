'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '../layout/Header';

interface HeroProps {
  badge?: string;
  heading: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

export function Hero({ badge, heading, description, buttons, image }: HeroProps) {
  return (
    <section className="w-full px-4 py-16 md:px-10 lg:py-8 overflow-hidden relative">
<Header/> 

     <div className="absolute scale-120 right-0 w-[54%] h-[55%] bg-lime-500 rounded-full opacity-20 blur-3xl z-0"></div>


      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 mt-16">
        {/* Left Text Section */}
        <div className="space-y-6">
          {badge && (
            <Badge className="bg-lime-400 text-white text-sm px-3 py-1 rounded-full">
              {badge}
            </Badge>
          )}

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {heading}
          </h1>

          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}

          {(buttons?.primary || buttons?.secondary) && (
            <div className="flex flex-wrap gap-4">
              {buttons.primary && (
                <Button asChild className="bg-lime-500 hover:bg-lime-600 text-white">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline">
                  <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Right Image Section with Lime Background */}
        <div className="relative w-full flex justify-center items-center">
          {/* Lime background blob */}

     

          {/* Guava image or any fruit/veg image */}
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={600}
            className="relative z-10 max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
