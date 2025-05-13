
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-200 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg shadow-soft"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-bold">
            plugd<span className="text-primary/80">.ai</span>
          </a>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <a href="#solutions" className={cn(navigationMenuTriggerStyle(), "text-sm")}>
                  Solutions
                </a>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <a href="#how-it-works" className={cn(navigationMenuTriggerStyle(), "text-sm")}>
                  How it Works
                </a>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <a href="#use-cases" className={cn(navigationMenuTriggerStyle(), "text-sm")}>
                  Use Cases
                </a>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <a href="#enterprise" className={cn(navigationMenuTriggerStyle(), "text-sm")}>
                  Enterprise
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <nav className="md:hidden space-x-6">
            <a href="#solutions" className="text-sm hover:text-primary/80">Solutions</a>
            <a href="#how-it-works" className="text-sm hover:text-primary/80">How it Works</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Button variant="outline" size="sm">
              Log in
            </Button>
          </div>
          <Button size="sm">Request a Demo</Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
