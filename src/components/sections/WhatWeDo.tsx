
import { Layers, FileCheck, FileText } from "lucide-react";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Layers className="h-5 w-5 text-primary/80" />
            <span className="text-sm font-medium">WHAT WE DO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Transform Messy Data into Automated Action
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            We help businesses process complex, multi-format data from various sources and automate
            decision-making that previously required manual intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-primary/80" />
            </div>
            <h3 className="text-xl font-medium mb-3">Data Ingestion</h3>
            <p className="text-muted-foreground">
              We collect data from multiple channels including CRMs, emails, calls, messages, and more,
              handling all formats from PDFs and JSONs to Excel files, both structured and unstructured.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FileCheck className="h-8 w-8 text-primary/80" />
            </div>
            <h3 className="text-xl font-medium mb-3">Data Processing</h3>
            <p className="text-muted-foreground">
              Our workflow engine processes this varied data, extracting key information and
              transforming it into clean, structured, and actionable formats that your systems can use.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Layers className="h-8 w-8 text-primary/80" />
            </div>
            <h3 className="text-xl font-medium mb-3">Automated Actions</h3>
            <p className="text-muted-foreground">
              Based on the processed data, our system can either facilitate manual decision-making
              with enhanced information or fully automate actions according to your business rules.
            </p>
          </div>
        </div>
        
        <div className="mx-auto max-w-3xl border rounded-lg p-6 bg-white">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-4 text-center">
              <div className="w-[150px] border border-dashed p-2 rounded">
                <p className="font-medium">Input Sources</p>
                <p className="text-xs text-muted-foreground">CRMs, Emails, Calls, Messages</p>
              </div>
              <div className="text-primary">→</div>
              <div className="w-[150px] border border-dashed p-2 rounded">
                <p className="font-medium">Format Types</p>
                <p className="text-xs text-muted-foreground">PDF, JSON, Excel, Text</p>
              </div>
              <div className="text-primary">→</div>
              <div className="w-[150px] border border-dashed p-2 rounded">
                <p className="font-medium">Output</p>
                <p className="text-xs text-muted-foreground">Clean, Structured Data</p>
              </div>
            </div>
            <div className="text-center">
              <span className="text-primary text-2xl">↓</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[300px] border border-primary p-3 rounded bg-primary/5">
                <p className="font-medium text-center">Automated Actions / Manual Decisions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
