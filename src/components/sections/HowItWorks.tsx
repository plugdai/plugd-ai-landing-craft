
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
      title: "Understand Your Workflow",
      description:
        "We begin by learning how your team operates — what slows you down, what tools you use, and where automation can help the most."
    },
    {
      title: "Design the Right Solution",
      description:
        "Based on your needs, we craft a clear and simple plan to automate your workflows using our AI-powered platform."
    },
    {
      title: "Build a Live Prototype",
      description:
        "We quickly develop a working version tailored to your most important process, so you can see real results early on."
    },
    {
      title: "Tweak and Improve",
      description:
        "Once it’s running, we gather feedback, spot any friction points, and make smart adjustments to ensure everything runs smoothly."
    },
    {
      title: "Go Live with Confidence",
      description:
        "We deploy your solution and make sure your team is ready to use it — no disruption, just clarity and speed."
    },
    {
      title: "Grow with You",
      description:
        "As your needs evolve, so does the automation. We continuously fine-tune and expand the system to support your long-term goals."
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
            We move fast to solve real problems from day one — and keep improving your workflows as your business grows.
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
