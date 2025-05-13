
import React, { useEffect, useRef } from "react";
import { 
  Cloud, 
  Mail, 
  MessageSquare, 
  FileJson, 
  FileSpreadsheet, 
  FileScan, 
  FileText, 
  Brain, 
  Database, 
  Check,
  AlertTriangle 
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Shared interface for consistent step structure
interface WorkflowStep {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  centralIcon?: React.ElementType;
  surroundingIcons?: Array<{ icon: React.ElementType }>;
  tableData?: Array<{
    id: string;
    source: string;
    type: string;
    amount: string;
    status: string;
    action: string;
  }>;
}

// Circle visualization component for consistent step visuals
const CircleVisualization = ({ centralIcon, surroundingIcons }: { 
  centralIcon: React.ElementType; 
  surroundingIcons?: Array<{ icon: React.ElementType }>;
}) => {
  const CentralIcon = centralIcon;
  const surroundingCount = surroundingIcons?.length || 0;

  return (
    <div className="relative h-[320px] w-full flex items-center justify-center">
      {/* Container for visualization - fixed size for consistency */}
      <div className="relative w-[280px] h-[280px]">
        {/* Central illustration - Hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-primary/10 dark:bg-primary/20 rounded-full w-28 h-28 flex items-center justify-center shadow-lg">
            <CentralIcon className="h-12 w-12 text-primary" />
          </div>
        </div>

        {/* Circular ring border */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-dashed border-primary/30" />

        {/* Surrounding icons placed in a perfect circle */}
        {surroundingIcons && surroundingIcons.length > 0 && (
          <>
            {surroundingIcons.map((iconItem, i) => {
              // Calculate position around the circle with precise polar coordinates
              const angleInDegrees = (i * (360 / surroundingCount));
              const angleInRadians = (angleInDegrees * Math.PI) / 180;
              
              // Radius of the orbit circle (slightly smaller than container)
              const radius = 130; 
              
              // Calculate position
              const top = 140 + radius * Math.sin(angleInRadians);
              const left = 140 + radius * Math.cos(angleInRadians);
              
              const IconComponent = iconItem.icon;
              
              return (
                <div
                  key={`orbit-${i}`}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-background dark:bg-background p-2 rounded-full shadow-md border border-primary/10 z-20"
                  style={{
                    top: `${top}px`,
                    left: `${left}px`,
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <IconComponent className="h-5 w-5 text-primary/70" />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.add('opacity-100');
        }
      });
    }, { threshold: 0.2 });

    stepsRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRefs.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  // Workflow steps data with consistent structure
  const workflowSteps: WorkflowStep[] = [
    {
      id: "step1",
      number: "01",
      title: "Your business runs on disconnected channels",
      subtitle: "We start by pulling data from everywhere you're already working.",
      description: "We seamlessly integrate with all your existing tools and platforms. No need to change your workflow - our AI agents automatically collect and process information from all your business channels.",
      centralIcon: Cloud,
      surroundingIcons: [
        { icon: Mail },
        { icon: MessageSquare },
        { icon: Cloud },
        { icon: FileText },
        { icon: FileJson }
      ]
    },
    {
      id: "step2",
      number: "02",
      title: "It arrives in every format imaginable",
      subtitle: "Structured, semi-structured, and unstructured — we handle it all.",
      description: "Our system processes any document type without manual intervention. The AI agents identify, classify and extract relevant information from all your business data, regardless of format or structure.",
      centralIcon: FileScan,
      surroundingIcons: [
        { icon: FileJson },
        { icon: FileSpreadsheet },
        { icon: FileText },
        { icon: FileText },
        { icon: FileScan }
      ]
    },
    {
      id: "step3",
      number: "03",
      title: "Our AI-powered workflow takes over",
      subtitle: "Autonomous agents read, interpret, and structure the chaos.",
      description: "Our specialized AI agents work behind the scenes to process your data. They understand context, extract meaningful information, and transform raw inputs into structured data - all without human intervention.",
      centralIcon: Brain,
      surroundingIcons: [
        { icon: FileScan },
        { icon: FileJson },
        { icon: Mail },
        { icon: Cloud },
        { icon: MessageSquare },
        { icon: FileText }
      ]
    },
    {
      id: "step4",
      number: "04",
      title: "Now it's usable, clean, and ready to act",
      subtitle: "A centralized view where each row is clean, validated, and ready for decisions.",
      description: "The final output is a clean, structured dataset ready for automated actions or business decisions. Our system can automatically handle routine tasks and flag exceptions only when necessary.",
      centralIcon: Database,
      surroundingIcons: [
        { icon: Check },
        { icon: FileScan },
        { icon: FileSpreadsheet },
        { icon: AlertTriangle }
      ],
      tableData: [
        { id: "INV-2023-001", source: "Email", type: "Invoice", amount: "$12,450.00", status: "Auto-Approved", action: "Processed" },
        { id: "CNT-2023-045", source: "Slack", type: "Contract", amount: "$8,750.00", status: "Needs Review", action: "Assign to Ops" }
      ]
    }
  ];

  return (
    <section id="what-we-do" className="py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/10">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Transform messy, multi-format data into clean, actionable insights through AI-powered workflows.
          </p>
        </div>

        <div className="space-y-32" ref={sectionRef}>
          {/* Workflow Steps - Alternating Layout with consistent structure */}
          {workflowSteps.map((step, index) => (
            <div 
              key={step.id}
              ref={(el) => stepsRefs.current[index] = el}
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center opacity-0 transition-all duration-700 ease-in-out relative",
              )}
            >
              {/* Step number indicator - with improved spacing */}
              <div className="absolute -top-10 left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
              </div>
              
              {/* Content layout - alternate columns for even/odd steps */}
              <>
                {/* Illustration Column - consistent circle visualization */}
                <div className={cn("order-2", index % 2 === 0 ? "md:order-1" : "md:order-2")}>
                  <CircleVisualization 
                    centralIcon={step.centralIcon || Cloud} 
                    surroundingIcons={step.surroundingIcons}
                  />

                  {/* Step 4 - Data Table */}
                  {index === 3 && step.tableData && (
                    <div className="w-full max-w-lg mx-auto rounded-xl border shadow-md bg-card overflow-hidden mt-12">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Source</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {step.tableData.map((row, i) => (
                            <TableRow key={`data-row-${i}`}>
                              <TableCell className="font-medium">{row.id}</TableCell>
                              <TableCell>{row.source}</TableCell>
                              <TableCell>{row.type}</TableCell>
                              <TableCell>{row.amount}</TableCell>
                              <TableCell>
                                {row.status === "Auto-Approved" ? (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                    <Check className="w-3 h-3 mr-1" />
                                    {row.status}
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                                    <AlertTriangle className="w-3 h-3 mr-1" />
                                    {row.status}
                                  </span>
                                )}
                              </TableCell>
                              <TableCell>
                                {row.status === "Auto-Approved" ? (
                                  <span className="text-sm text-muted-foreground">{row.action}</span>
                                ) : (
                                  <Button size="sm" variant="outline">
                                    {row.action}
                                  </Button>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </div>

                {/* Text/Description Column with improved spacing */}
                <div className={cn("order-1", index % 2 === 0 ? "md:order-2" : "md:order-1")}>
                  <div className="max-w-lg mx-auto md:mx-0">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">{step.subtitle}</p>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </>
              
              {/* Connector between steps */}
              {index < workflowSteps.length - 1 && (
                <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 h-24 w-px bg-primary/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
