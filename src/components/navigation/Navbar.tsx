
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
                <NavigationMenuTrigger className="text-sm">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <Link to="/usecases/fintech-kyc" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Fintech KYC</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Streamline customer identification and verification
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/usecases/ecommerce-catalog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">E-commerce Catalog</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Automate product data enrichment
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/usecases/logistics-contract" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Logistics Contracts</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Streamline contract processing and management
                        </p>
                      </Link>
                    </li>
                    <li>
                      <a href="#solutions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">View All Solutions</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore our full range of industry solutions
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <a href="#how-it-works" className={cn(navigationMenuTriggerStyle(), "text-sm")}>
                  How it Works
                </a>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">Use Cases</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li>
                      <Link to="/usecases/fintech-payment" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Payment Processing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Streamline payment reconciliation workflows
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/usecases/ecommerce-order" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Order Processing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Automate order handling and fulfillment
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/usecases/logistics-claim" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Claims Processing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Automate and streamline claims management
                        </p>
                      </Link>
                    </li>
                    <li>
                      <a href="#use-cases" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">View All Use Cases</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore our complete portfolio of solutions
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
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
