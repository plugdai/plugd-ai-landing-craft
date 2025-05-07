
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
  AlertTriangle, 
  CircleArrowRight 
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

  const workflowSteps = [
    {
      id: "step1",
      title: "Your business runs on disconnected channels.",
      subtitle: "We start by pulling data from everywhere you're already working.",
      icons: [
        { icon: Cloud, label: "CRMs" },
        { icon: Mail, label: "Email" },
        { icon: MessageSquare, label: "Messages" }
      ],
      description: "Salesforce, Hubspot, Gmail, Outlook, Slack, WhatsApp, SMS, phone calls, and more."
    },
    {
      id: "step2",
      title: "It arrives in every format imaginable.",
      subtitle: "Structured, semi-structured, and unstructured — we handle it all.",
      icons: [
        { icon: FileScan, label: "PDFs" },
        { icon: FileJson, label: "JSON" },
        { icon: FileSpreadsheet, label: "Excel" },
        { icon: FileText, label: "Text" }
      ],
      description: "Contracts, invoices, API responses, spreadsheets, documents, and plain text."
    },
    {
      id: "step3",
      title: "Our AI-powered workflow takes over.",
      subtitle: "It reads, interprets, and structures the chaos.",
      icon: Brain,
      description: "Our engine extracts fields, detects anomalies, and routes decisions automatically."
    },
    {
      id: "step4",
      title: "Now it's usable, clean, and ready to act.",
      subtitle: "A centralized view where each row is clean, validated, and ready for decisions.",
      icon: Database,
      description: "Automated approvals, exception routing, and clear actions for your team."
    }
  ];

  // Sample data for the actionable data table
  const tableData = [
    { id: "INV-2023-001", source: "Email", type: "Invoice", amount: "$12,450.00", status: "Auto-Approved", action: "Processed" },
    { id: "CNT-2023-045", source: "Slack", type: "Contract", amount: "$8,750.00", status: "Needs Review", action: "Assign to Ops" }
  ];

  return (
    <section id="what-we-do" className="py-12 md:py-20 overflow-hidden bg-gradient-to-b from-white to-secondary/20">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Transform messy, multi-format data into clean, actionable insights through AI-powered workflows.
          </p>
        </div>

        <div className="space-y-32 md:space-y-40" ref={sectionRef}>
          {/* Step 1: Chaos from Many Sources */}
          <div 
            ref={(el) => stepsRefs.current[0] = el}
            className="opacity-0 transition-all duration-700 ease-in-out"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">{workflowSteps[0].title}</h3>
              <p className="text-lg text-muted-foreground mb-12">{workflowSteps[0].subtitle}</p>
              
              <div className="relative h-[300px] w-full max-w-3xl mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-background shadow-lg flex items-center justify-center z-10">
                    <Database className="h-12 w-12 text-primary/80" />
                  </div>
                </div>

                {workflowSteps[0].icons.map((iconItem, i) => {
                  const IconComponent = iconItem.icon;
                  const positions = [
                    "top-10 left-[20%]", 
                    "top-1/2 left-[10%] -translate-y-1/2", 
                    "bottom-10 left-[25%]",
                    "top-10 right-[20%]",
                    "top-1/2 right-[10%] -translate-y-1/2",
                    "bottom-10 right-[25%]"
                  ];
                  const delayClass = `animation-delay-${(i+1)*100}`;
                  
                  return (
                    <div 
                      key={`icon-${i}`} 
                      className={cn(
                        "absolute flex items-center justify-center animate-pulse",
                        positions[i % positions.length],
                        delayClass
                      )}
                    >
                      <div className="bg-white p-4 rounded-full shadow-md">
                        <IconComponent className="h-8 w-8 text-primary/80" />
                      </div>
                      <span className="text-xs font-medium ml-2">{iconItem.label}</span>
                    </div>
                  );
                })}
                
                {[...Array(8)].map((_, i) => {
                  const angle = (Math.PI * 2 * i) / 8;
                  const x = Math.cos(angle) * 120 + 50; // Percentage
                  const y = Math.sin(angle) * 120 + 50; // Percentage
                  
                  return (
                    <div 
                      key={`line-${i}`}
                      className="absolute bg-muted h-[2px] origin-center"
                      style={{
                        width: '100px',
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: `rotate(${angle * (180/Math.PI)}deg)`
                      }}
                    />
                  );
                })}
              </div>

              <p className="text-sm text-muted-foreground text-center max-w-2xl">
                {workflowSteps[0].description}
              </p>
            </div>
          </div>

          {/* Step 2: Format Hell */}
          <div 
            ref={(el) => stepsRefs.current[1] = el}
            className="opacity-0 transition-all duration-700 ease-in-out"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">{workflowSteps[1].title}</h3>
              <p className="text-lg text-muted-foreground mb-12">{workflowSteps[1].subtitle}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
                {workflowSteps[1].icons.map((iconItem, i) => {
                  const IconComponent = iconItem.icon;
                  const rotateClass = [
                    "rotate-[-5deg]", 
                    "rotate-[3deg]", 
                    "rotate-[-2deg]", 
                    "rotate-[4deg]"
                  ];
                  
                  return (
                    <div
                      key={`format-${i}`}
                      className={cn(
                        "bg-white border p-6 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform",
                        rotateClass[i % rotateClass.length]
                      )}
                    >
                      <IconComponent className="h-12 w-12 mb-4 text-primary/80" />
                      <span className="font-medium">{iconItem.label}</span>
                    </div>
                  );
                })}
              </div>

              <p className="text-sm text-muted-foreground text-center max-w-2xl">
                {workflowSteps[1].description}
              </p>
            </div>
          </div>

          {/* Step 3: AI Workflow Engine */}
          <div 
            ref={(el) => stepsRefs.current[2] = el}
            className="opacity-0 transition-all duration-700 ease-in-out"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">{workflowSteps[2].title}</h3>
              <p className="text-lg text-muted-foreground mb-12">{workflowSteps[2].subtitle}</p>
              
              <div className="w-full max-w-3xl mb-12">
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-[200px] mb-8">
                    {/* Input Files */}
                    <div className="absolute top-0 left-0 w-full flex justify-around">
                      {workflowSteps[1].icons.map((iconItem, i) => {
                        const IconComponent = iconItem.icon;
                        return (
                          <div key={`input-${i}`} className="flex flex-col items-center">
                            <IconComponent className="h-8 w-8 text-primary/60" />
                            <div className="h-16 border-l border-dashed border-primary/30 mt-2"></div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* AI Brain */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full p-6 animate-pulse border border-primary/20 shadow-lg">
                      <Brain className="h-16 w-16 text-primary" />
                    </div>
                    
                    {/* Output Flow */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-center items-end">
                      <div className="flex flex-col items-center">
                        <div className="h-16 border-l border-dashed border-primary/30 mb-2"></div>
                        <CircleArrowRight className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    
                    {/* Processing Lines */}
                    <div className="absolute top-1/4 left-0 w-full flex justify-around">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={`line-${i}`} 
                          className="w-px h-12 bg-gradient-to-b from-transparent via-primary/30 to-primary/10"
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center max-w-2xl">
                    {workflowSteps[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Structured, Actionable Data */}
          <div 
            ref={(el) => stepsRefs.current[3] = el}
            className="opacity-0 transition-all duration-700 ease-in-out mb-12"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">{workflowSteps[3].title}</h3>
              <p className="text-lg text-muted-foreground mb-12">{workflowSteps[3].subtitle}</p>
              
              <div className="w-full max-w-3xl rounded-xl border shadow-lg bg-card overflow-hidden mb-8">
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
                    {tableData.map((row, i) => (
                      <TableRow key={`data-row-${i}`}>
                        <TableCell className="font-medium">{row.id}</TableCell>
                        <TableCell>{row.source}</TableCell>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.amount}</TableCell>
                        <TableCell>
                          {row.status === "Auto-Approved" ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <Check className="w-3 h-3 mr-1" />
                              {row.status}
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
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

              <p className="text-sm text-muted-foreground text-center max-w-2xl">
                {workflowSteps[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
