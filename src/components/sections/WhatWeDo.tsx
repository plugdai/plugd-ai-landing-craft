
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
  CircleArrowRight,
  ArrowRight
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

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
      number: "02",
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
      number: "03",
      title: "Our AI-powered workflow takes over.",
      subtitle: "Autonomous agents read, interpret, and structure the chaos.",
      icon: Brain,
      description: "Our AI agents extract fields, detect anomalies, and route decisions automatically with no human intervention required."
    },
    {
      id: "step4",
      number: "04",
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

        <div className="space-y-16 md:space-y-24" ref={sectionRef}>
          {/* Step Cards */}
          <div className="grid grid-cols-1 gap-8 md:gap-12 relative">
            {/* Connecting line between cards */}
            <div className="absolute top-[6rem] left-[1.5rem] md:left-1/2 h-[calc(100%-12rem)] w-px bg-primary/20 md:block hidden"></div>
            
            {workflowSteps.map((step, index) => (
              <div 
                key={step.id}
                ref={(el) => stepsRefs.current[index] = el}
                className="opacity-0 transition-all duration-700 ease-in-out"
              >
                <Card className="relative border-primary/10 bg-white shadow-lg hover:shadow-xl transition-shadow">
                  {/* Step number indicator */}
                  <div className="absolute -left-4 top-6 md:left-[-1.5rem] w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10">
                    {step.number}
                  </div>
                  
                  {/* Card content */}
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl">{step.title}</CardTitle>
                    <CardDescription className="text-lg">{step.subtitle}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Step 1 & 2 - Icons display */}
                    {(index === 0 || index === 1) && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {step.icons?.map((iconItem, i) => {
                          const IconComponent = iconItem.icon;
                          const rotateClass = [
                            "rotate-[-3deg]", 
                            "rotate-[2deg]", 
                            "rotate-[-1deg]", 
                            "rotate-[3deg]"
                          ];
                          
                          return (
                            <div
                              key={`format-${i}`}
                              className={cn(
                                "bg-white border-2 p-6 rounded-lg shadow-sm flex flex-col items-center hover:scale-105 transition-transform",
                                rotateClass[i % rotateClass.length]
                              )}
                            >
                              <IconComponent className="h-12 w-12 mb-4 text-primary/70" />
                              <span className="font-medium">{iconItem.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    
                    {/* Step 3 - AI Brain */}
                    {index === 2 && (
                      <div className="w-full max-w-3xl mx-auto mb-8">
                        <div className="relative h-[220px]">
                          {/* Input Files */}
                          <div className="absolute top-0 left-0 w-full flex justify-around">
                            {workflowSteps[1].icons?.map((iconItem, i) => {
                              const IconComponent = iconItem.icon;
                              return (
                                <div key={`input-${i}`} className="flex flex-col items-center">
                                  <IconComponent className="h-8 w-8 text-primary/60" />
                                  <div className="h-16 border-l border-dashed border-primary/30 mt-2"></div>
                                </div>
                              );
                            })}
                          </div>
                          
                          {/* AI Agents visualization */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-2xl p-8 animate-pulse border border-primary/20 shadow-lg">
                            <div className="relative">
                              <Brain className="h-16 w-16 text-primary" />
                              <div className="absolute -top-2 -right-2 bg-white text-xs px-2 py-1 rounded-full border border-primary/20 font-semibold">
                                Autonomous Agents
                              </div>
                              <div className="mt-2 flex space-x-2 justify-center">
                                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary"></span>
                                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary delay-150"></span>
                                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary delay-300"></span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Output Flow */}
                          <div className="absolute bottom-0 left-0 w-full flex justify-center items-end">
                            <div className="flex flex-col items-center">
                              <div className="h-16 border-l border-dashed border-primary/30 mb-2"></div>
                              <CircleArrowRight className="h-8 w-8 text-primary" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Step 4 - Data Table */}
                    {index === 3 && (
                      <div className="w-full max-w-3xl mx-auto rounded-xl border shadow-md bg-card overflow-hidden mb-6">
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
                    )}
                    
                    <p className="text-sm text-muted-foreground text-center">
                      {step.description}
                    </p>
                  </CardContent>
                  
                  {index < workflowSteps.length - 1 && (
                    <CardFooter className="flex justify-center pb-6">
                      <div className="flex items-center text-primary/60">
                        <span className="text-sm mr-2">Next</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardFooter>
                  )}
                </Card>
                
                {/* Arrow connecting to next card on mobile */}
                {index < workflowSteps.length - 1 && (
                  <div className="flex justify-center my-4 md:hidden">
                    <div className="w-px h-8 bg-primary/20"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
