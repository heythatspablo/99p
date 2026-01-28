"use client";

import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold mb-2">99Pablos</h3>
              <p className="text-sm text-muted-foreground">
                Bridging the gap between engineering, product, and profit.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm">Strategy</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/consulting" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Executive Consulting
              </Link>
              <Link href="/consulting" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                UX/UI Audits
              </Link>
              <Link href="/clarity-sessions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                1-Day Design Sprints
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm">Company</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Selected Work
              </Link>
              <Link href="/channel" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                The Strategy Vault (Channel)
              </Link>
              <Link href="/consulting" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm">Get the Product Checklist</h4>
            <p className="text-sm text-muted-foreground">
              Join 2k+ founders building scalable products.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background"
              />
              <Button size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2026 99Pablos. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="outline" className="gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Status: Accepting Q1 Partners
            </Badge>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-foreground transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
