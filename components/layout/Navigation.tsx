"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS } from "@/lib/constants";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className={`text-2xl font-bold transition-colors ${
            isScrolled ? "text-charcoal" : "text-white"
          }`}>
            99Pablos
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isScrolled 
                    ? "text-charcoal hover:text-charcoal/70" 
                    : "text-white hover:text-white/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className={
              isScrolled 
                ? "bg-charcoal text-white hover:bg-charcoal/90" 
                : "bg-white text-charcoal hover:bg-white/90"
            }>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-charcoal" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMounted && isMobileMenuOpen && (
        <div className={`md:hidden border-t ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-lg border-charcoal/20" 
            : "bg-charcoal border-white/20"
        }`}>
          <div className="container-custom py-6 flex flex-col gap-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-2 ${
                  isScrolled 
                    ? "text-charcoal hover:text-charcoal/70" 
                    : "text-white hover:text-white/70"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className={`w-full ${
              isScrolled 
                ? "bg-charcoal text-white hover:bg-charcoal/90" 
                : "bg-white text-charcoal hover:bg-white/90"
            }`}>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
