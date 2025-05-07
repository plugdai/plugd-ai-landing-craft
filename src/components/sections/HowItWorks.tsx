
import { CircleArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function HowItWorks() {
  const steps = [
    {
      title: "Initial consultation",
      description:
        "We start with a thorough discussion to understand your specific needs, pain points, and the workflows you want to automate."
    },
    {
      title: "Proof of Concept proposal",
      description:
        "We estimate a symbolic PoC price to enforce engagement and outline the scope, timeline, and expected outcomes."
    },
    {
      title: "Build the PoC",
      description:
        "Our team develops a working prototype of the solution, focusing on your most critical workflow challenges."
    },
    {
      title: "Identify and solve bottlenecks",
      description:
        "We analyze performance, identify bottlenecks in the process, and optimize the solution for maximum efficiency."
    },
    {
      title: "Compute ROI",
      description:
        "We measure and document the return on investment, comparing the automated process with your previous manual workflow."
    },
    {
      title: "Production and continuous improvement",
      description:
        "Upon contract signing, we move the solution to production and implement ongoing fine-tuning and enhancements."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <CircleArrowRight className="h-5 w-5 text-primary/80" />
            <span className="text-sm font-medium">PROCESS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Our engagement process is designed to deliver tangible results quickly while ensuring
            long-term success and continuous improvement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {steps.map((step, index) => (
              <AccordionItem key={index} value={`step-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-sm font-medium">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-medium">{step.title}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-12">
                  <p className="text-muted-foreground">{step.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
