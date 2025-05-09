
import { AlertTriangle, Ban, X, ShieldAlert, FileX } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export function Problem() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.add('opacity-100');
        }
      });
    }, { threshold: 0.2 });

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const problems = [
    {
      title: "Manual Tasks",
      description:
        "Repetitive high-value tasks consume significant employee time and resources across departments.",
      icon: X,
      animation: "shake"
    },
    {
      title: "Fragmented Tools",
      description:
        "Multiple disconnected systems require constant human supervision and manual data transfer.",
      icon: Ban,
      animation: "flicker"
    },
    {
      title: "Human Error",
      description:
        "Critical processes are prone to mistakes, causing compliance issues and operational delays.",
      icon: AlertTriangle,
      animation: "pulse"
    },
    {
      title: "IT Backlog",
      description:
        "Teams wait months for automation solutions while business needs go unaddressed.",
      icon: ShieldAlert,
      animation: "shake"
    }
  ];

  return (
    <section id="problems" className="py-20 md:py-32 bg-destructive/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <X className="h-5 w-5 text-destructive" />
            <span className="text-sm font-medium">THE REALITY TODAY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            What's Holding You Back
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Organizations face significant challenges when trying to automate complex workflows
            across different departments and systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            
            return (
              <Card 
                key={index} 
                ref={el => cardsRef.current[index] = el}
                className={cn(
                  "border-dashed border-destructive/40 opacity-0 transform rotate-1",
                  "hover:rotate-0 transition-all duration-300",
                  "bg-gradient-to-br from-white to-destructive/5"
                )}
              >
                <CardHeader className="flex flex-col items-center">
                  <div className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center bg-destructive/10 mb-4",
                    problem.animation === "shake" && "animate-[shake_2s_ease-in-out_infinite]",
                    problem.animation === "flicker" && "animate-[flicker_3s_linear_infinite]",
                    problem.animation === "pulse" && "animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
                  )}>
                    <IconComponent className="h-7 w-7 text-destructive" />
                  </div>
                  <CardTitle>{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{problem.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
