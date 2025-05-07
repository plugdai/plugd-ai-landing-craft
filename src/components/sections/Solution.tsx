
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Solution() {
  const features = [
    {
      title: "Intelligent Agents",
      description: "AI agents that understand context and execute complex workflows autonomously"
    },
    {
      title: "Generative AI",
      description: "Create documents, emails, and responses with human-like quality and accuracy"
    },
    {
      title: "RAG Technology",
      description: "Retrieval-augmented generation for accurate, context-aware responses"
    },
    {
      title: "KYC Automation",
      description: "Fully automated identity verification and compliance checks"
    },
    {
      title: "No-Code Builder",
      description: "Create and deploy workflows without technical expertise"
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
            workflows with minimal human intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover-scale border shadow-soft">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
