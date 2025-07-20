"use client";

import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold text-primary">
            Fruitscape
          </Link>
        </div>

        {/* Center: Search Bar with icon */}
        <div className="relative flex-1 max-w-sm">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <SearchIcon className="h-4 w-4" />
          </span>
          <Input
            type="text"
            placeholder="Search fruits..."
            className="w-full pl-10"
          />
        </div>
     

        {/* Right: Navigation */}
        <nav className="flex-shrink-0 flex gap-5 items-center">
          <Link href="/shop" className="text-sm font-medium hover:text-primary">
            Shop
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
      
          <Button size="sm">Login</Button>
        </nav>
      </div>
    </header>
  );
}
