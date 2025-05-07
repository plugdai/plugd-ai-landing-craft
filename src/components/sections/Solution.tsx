
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export function Solution() {
  const industries = [
    {
      name: "Fintech",
      solutions: [
        {
          title: "Cash Reconciliation",
          description: "Automated matching of payments, invoices, and accounts across multiple banking systems and financial records."
        },
        {
          title: "KYC Automation",
          description: "Fully automated identity verification and compliance checks for efficient customer onboarding."
        }
      ]
    },
    {
      name: "E-commerce",
      solutions: [
        {
          title: "Order Matching",
          description: "Intelligent system that accurately pairs purchase orders with invoices and shipping data across multiple platforms."
        },
        {
          title: "Catalog Onboarding",
          description: "Automated product data standardization from various sources into a consistent structure supporting multiple languages."
        }
      ]
    },
    {
      name: "Logistics",
      solutions: [
        {
          title: "Contract Generation",
          description: "Automated creation of customized shipping and logistics agreements based on specific requirements and regulations."
        },
        {
          title: "Claim Management",
          description: "End-to-end processing of shipping claims, damage reports, and insurance documentation with minimal human intervention."
        }
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <CheckCircle className="h-5 w-5 text-primary/80" />
            <span className="text-sm font-medium">SOLUTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Meet plugd.ai – Your AI Workforce
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            An intelligent automation platform that uses AI agents to execute full business
            workflows with minimal human intervention across multiple industries.
          </p>
        </div>

        {industries.map((industry, industryIndex) => (
          <div key={industryIndex} className="mb-12 last:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-center">{industry.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.solutions.map((solution, solutionIndex) => (
                <Card key={solutionIndex} className="hover-scale border shadow-soft">
                  <CardHeader>
                    <CardTitle>{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
