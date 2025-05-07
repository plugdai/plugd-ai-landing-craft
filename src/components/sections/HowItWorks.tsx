
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
      title: "Describe a goal",
      description:
        "Simply describe what you need the system to accomplish, like 'Send monthly reports to the leadership team' or 'Validate customer KYC documents'."
    },
    {
      title: "Orchestrator plans workflow",
      description:
        "Our AI orchestrator analyzes your request, breaks it down into steps, and determines the optimal sequence of actions to accomplish the goal."
    },
    {
      title: "Agents take action",
      description:
        "Specialized AI agents execute each step of the workflow, accessing your systems through secure connections, making decisions, and completing tasks."
    },
    {
      title: "Output delivered",
      description:
        "The completed work is delivered to its destination, whether that's a document, email, system update, or notification to the relevant stakeholders."
    },
    {
      title: "System learns & improves",
      description:
        "With each iteration, plugd.ai learns from feedback and outcomes, continuously improving its performance and requiring less supervision over time."
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
            Our platform simplifies complex workflows into a seamless process that delivers 
            results with minimal human intervention.
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
