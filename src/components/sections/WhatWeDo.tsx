
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
      number: "01",
      title: "Your business runs on disconnected channels",
      subtitle: "We start by pulling data from everywhere you're already working.",
      description: "We seamlessly integrate with all your existing tools and platforms. No need to change your workflow - our AI agents automatically collect and process information from all your business channels.",
      icons: [
        { icon: Cloud, label: "CRMs" },
        { icon: Mail, label: "Email" },
        { icon: MessageSquare, label: "Messages" }
      ],
      examples: "Salesforce, Hubspot, Gmail, Outlook, Slack, WhatsApp, SMS, phone calls, and more."
    },
    {
      id: "step2",
      number: "02",
      title: "It arrives in every format imaginable",
      subtitle: "Structured, semi-structured, and unstructured — we handle it all.",
      description: "Our system processes any document type without manual intervention. The AI agents identify, classify and extract relevant information from all your business data, regardless of format or structure.",
      icons: [
        { icon: FileScan, label: "PDFs" },
        { icon: FileJson, label: "JSON" },
        { icon: FileSpreadsheet, label: "Excel" },
        { icon: FileText, label: "Text" }
      ],
      examples: "Contracts, invoices, API responses, spreadsheets, documents, and plain text."
    },
    {
      id: "step3",
      number: "03",
      title: "Our AI-powered workflow takes over",
      subtitle: "Autonomous agents read, interpret, and structure the chaos.",
      description: "Our specialized AI agents work behind the scenes to process your data. They understand context, extract meaningful information, and transform raw inputs into structured data - all without human intervention.",
      icon: Brain
    },
    {
      id: "step4",
      number: "04",
      title: "Now it's usable, clean, and ready to act",
      subtitle: "A centralized view where each row is clean, validated, and ready for decisions.",
      description: "The final output is a clean, structured dataset ready for automated actions or business decisions. Our system can automatically handle routine tasks and flag exceptions only when necessary.",
      icon: Database,
      tableData: [
        { id: "INV-2023-001", source: "Email", type: "Invoice", amount: "$12,450.00", status: "Auto-Approved", action: "Processed" },
        { id: "CNT-2023-045", source: "Slack", type: "Contract", amount: "$8,750.00", status: "Needs Review", action: "Assign to Ops" }
      ]
    }
  ];

  return (
    <section id="what-we-do" className="py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-secondary/20">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Transform messy, multi-format data into clean, actionable insights through AI-powered workflows.
          </p>
        </div>

        <div className="space-y-24" ref={sectionRef}>
          {/* Workflow Steps - Alternating Layout */}
          {workflowSteps.map((step, index) => (
            <div 
              key={step.id}
              ref={(el) => stepsRefs.current[index] = el}
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center opacity-0 transition-all duration-700 ease-in-out relative",
              )}
            >
              {/* Step number indicator */}
              <div className="absolute -top-10 left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
              </div>
              
              {/* Content layout - alternate columns for even/odd steps */}
              <>
                {/* Illustration Column */}
                <div className={cn("order-2", index % 2 === 0 ? "md:order-1" : "md:order-2")}>
                  <div className="relative h-[320px] w-full flex items-center justify-center">
                    {/* Central illustration */}
                    <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      {/* Step 1 & 2 - Format/Channel visuals */}
                      {(index === 0 || index === 1) && (
                        <div className="bg-primary/10 rounded-full w-36 h-36 flex items-center justify-center shadow-lg">
                          {step.icons && step.icons[0] && (
                            <step.icons[0].icon className="h-16 w-16 text-primary" />
                          )}
                        </div>
                      )}

                      {/* Step 3 - AI Brain */}
                      {index === 2 && (
                        <div className="bg-primary/10 rounded-full w-36 h-36 flex items-center justify-center shadow-lg animate-pulse">
                          <Brain className="h-16 w-16 text-primary" />
                          <div className="absolute -top-2 -right-2 bg-white text-xs px-2 py-1 rounded-full border border-primary/20 font-semibold">
                            AI Agents
                          </div>
                        </div>
                      )}

                      {/* Step 4 - Database */}
                      {index === 3 && (
                        <div className="bg-primary/10 rounded-full w-36 h-36 flex items-center justify-center shadow-lg">
                          <Database className="h-16 w-16 text-primary" />
                        </div>
                      )}
                    </div>

                    {/* Orbiting elements */}
                    {(index === 0 || index === 1) && step.icons && (
                      <>
                        {step.icons.map((iconItem, i) => {
                          const IconComponent = iconItem.icon;
                          // Calculate position around the circle
                          const angle = (i * (360 / step.icons.length)) * (Math.PI / 180);
                          const radius = 120; // Distance from center
                          const top = 50 + Math.sin(angle) * radius;
                          const left = 50 + Math.cos(angle) * radius;
                          
                          return (
                            <div
                              key={`orbit-${i}`}
                              className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-lg shadow-md hover:scale-110 transition-transform border border-primary/10"
                              style={{
                                top: `${top}%`,
                                left: `${left}%`,
                                zIndex: i === 0 ? 5 : (i * 2),
                              }}
                            >
                              <IconComponent className="h-8 w-8 text-primary/70" />
                              <span className="text-xs font-medium mt-1 block text-center">{iconItem.label}</span>
                            </div>
                          );
                        })}
                      </>
                    )}

                    {/* Step 3 - AI Processing Visualization */}
                    {index === 2 && (
                      <>
                        {/* Input nodes */}
                        {workflowSteps[1].icons?.slice(0, 3).map((iconItem, i) => {
                          const IconComponent = iconItem.icon;
                          // Position on the left side
                          const top = 25 + (i * 25);
                          
                          return (
                            <div key={`input-${i}`} className="absolute left-0 md:left-10 bg-white p-2 rounded-md shadow-sm" style={{ top: `${top}%` }}>
                              <IconComponent className="h-6 w-6 text-primary/60" />
                              <div className="absolute top-1/2 left-full h-px w-16 md:w-24 bg-primary/20 z-0"></div>
                            </div>
                          );
                        })}
                        
                        {/* Output nodes */}
                        <div className="absolute right-0 md:right-10 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-md shadow-sm">
                          <Database className="h-6 w-6 text-primary/60" />
                          <div className="absolute top-1/2 right-full h-px w-16 md:w-24 bg-primary/20 z-0"></div>
                        </div>

                        {/* Processing animation */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
                          <div className="flex space-x-2">
                            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary"></span>
                            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary delay-150"></span>
                            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary delay-300"></span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Step 4 - Data Table in orbit */}
                    {index === 4 && step.tableData && (
                      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                        {/* This would be the table or additional visualization */}
                      </div>
                    )}
                  </div>

                  {/* Example hint text below visualization */}
                  {step.examples && (
                    <div className="text-center text-sm text-muted-foreground mt-6 max-w-md mx-auto">
                      {step.examples}
                    </div>
                  )}

                  {/* Step 4 - Data Table */}
                  {index === 3 && (
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
                          {step.tableData && step.tableData.map((row, i) => (
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
                  )}
                </div>

                {/* Text/Description Column */}
                <div className={cn("order-1", index % 2 === 0 ? "md:order-2" : "md:order-1")}>
                  <div className="max-w-lg mx-auto md:mx-0">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{step.subtitle}</p>
                    <p className="text-muted-foreground">{step.description}</p>
                    
                    {index === 2 && (
                      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <h4 className="font-semibold flex items-center">
                          <Brain className="w-5 h-5 mr-2 text-primary" />
                          Autonomous AI Agents
                        </h4>
                        <p className="text-sm mt-2">
                          Our AI agents extract fields, detect anomalies, and route decisions automatically with no human intervention required.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </>
              
              {/* Connector between steps */}
              {index < workflowSteps.length - 1 && (
                <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2 h-24 w-px bg-primary/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
