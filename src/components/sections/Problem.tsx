
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Problem() {
  const problems = [
    {
      title: "Manual Tasks",
      description:
        "Repetitive high-value tasks consume significant employee time and resources across departments."
    },
    {
      title: "Fragmented Tools",
      description:
        "Multiple disconnected systems require constant human supervision and manual data transfer."
    },
    {
      title: "Human Error",
      description:
        "Critical processes are prone to mistakes, causing compliance issues and operational delays."
    },
    {
      title: "IT Backlog",
      description:
        "Teams wait months for automation solutions while business needs go unaddressed."
    }
  ];

  return (
    <section id="problems" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <CheckCircle className="h-5 w-5 text-destructive/80" />
            <span className="text-sm font-medium">CHALLENGES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            The Automation Gap Today
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Organizations face significant challenges when trying to automate complex workflows
            across different departments and systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="hover-scale border shadow-soft">
              <CardHeader>
                <CardTitle>{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
