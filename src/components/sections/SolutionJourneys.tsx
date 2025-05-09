
import { FileCheck, CheckCircle, Zap, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function SolutionJourneys() {
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.add('opacity-100');
        }
      });
    }, { threshold: 0.2 });

    if (solutionsRef.current) {
      observer.observe(solutionsRef.current);
    }

    return () => {
      if (solutionsRef.current) {
        observer.unobserve(solutionsRef.current);
      }
    };
  }, []);

  // Combined solution journeys with industries and use cases
  const industries = [
    {
      name: "Fintech",
      icon: "bank",
      useCases: [
        {
          title: "KYC/KYB Checks",
          description: "Automatically validate identity and compliance documents, reducing processing time from days to minutes.",
          challenge: "Manual validation is slow and error-prone",
          solution: "AI-powered document analysis and verification",
          impact: "90% reduction in processing time",
          icon: FileCheck,
        },
        {
          title: "Payment Reconciliation",
          description: "Match invoices, purchase orders, and delivery receipts across systems to eliminate discrepancies.",
          challenge: "Financial teams spend hours matching transactions",
          solution: "Automated cross-system matching and validation",
          impact: "98% automation rate for standard transactions",
          icon: CheckCircle,
        }
      ]
    },
    {
      name: "E-commerce",
      icon: "shopping",
      useCases: [
        {
          title: "Catalog Onboarding",
          description: "Automatically format product data from various sources into a consistent structure, supporting multiple languages.",
          challenge: "Product catalog updates take weeks",
          solution: "Multi-format data standardization engine",
          impact: "From weeks to hours for catalog updates",
          icon: FileCheck,
        },
        {
          title: "Order Matching",
          description: "Intelligent system that accurately pairs purchase orders with invoices and shipping data across multiple platforms.",
          challenge: "Order discrepancies cause fulfillment delays",
          solution: "Integrated order validation workflow",
          impact: "75% reduction in order processing exceptions",
          icon: Zap,
        }
      ]
    },
    {
      name: "Logistics",
      icon: "truck",
      useCases: [
        {
          title: "Contract Generation",
          description: "Automated creation of customized shipping and logistics agreements based on specific requirements and regulations.",
          challenge: "Creating compliant contracts is time-consuming",
          solution: "Dynamic template system with compliance checks",
          impact: "Contract generation time reduced by 85%",
          icon: FileCheck,
        },
        {
          title: "Claim Management",
          description: "End-to-end processing of shipping claims, damage reports, and insurance documentation with minimal human intervention.",
          challenge: "Claims processing requires extensive manual review",
          solution: "AI-powered damage assessment and routing",
          impact: "Claims processed 6x faster than manual review",
          icon: Zap,
        }
      ]
    }
  ];

  return (
    <section 
      id="solution-journeys" 
      className="py-20 md:py-32 bg-gradient-to-br from-secondary/20 to-primary/5"
      ref={solutionsRef}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <FileCheck className="h-5 w-5 text-primary/80" />
            <span className="text-sm font-medium">PLUGGED-IN JOURNEYS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            How We Solve It
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            See how our platform transforms complex business challenges into streamlined, 
            automated workflows across various industries.
          </p>
        </div>

        <Tabs defaultValue={industries[0].name} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              {industries.map((industry) => (
                <TabsTrigger key={industry.name} value={industry.name} className="px-8">
                  {industry.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {industries.map((industry) => (
            <TabsContent key={industry.name} value={industry.name} className="opacity-0 transition-opacity duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {industry.useCases.map((useCase, index) => {
                  const Icon = useCase.icon;
                  
                  return (
                    <Card key={index} className="overflow-hidden border shadow-soft">
                      <div className="bg-primary/5 p-6 border-b">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">Before</p>
                            <p className="text-red-600 font-medium">{useCase.challenge}</p>
                          </div>
                          <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                            <X className="h-4 w-4 text-destructive" />
                          </div>
                        </div>
                      </div>
                      
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle>{useCase.title}</CardTitle>
                        </div>
                        <p className="text-muted-foreground">{useCase.description}</p>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm font-medium text-muted-foreground mb-1">After</p>
                              <p className="text-green-600 font-medium">{useCase.solution}</p>
                            </div>
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="border-t bg-muted/30 flex justify-between items-center">
                        <span className="text-sm font-semibold">Impact:</span>
                        <span className="text-sm font-medium text-primary">{useCase.impact}</span>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
