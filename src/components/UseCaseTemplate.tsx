
import React from "react";
import { ArrowLeft, FileText, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

interface UseCaseTemplateProps {
  title: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  videoUrl: string;
  videoThumbnail: string;
}

const UseCaseTemplate = ({
  title,
  industry,
  description,
  challenge,
  solution,
  impact,
  videoUrl,
  videoThumbnail,
}: UseCaseTemplateProps) => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container px-4 md:px-6">
        {/* Back Button */}
        <Link to="/#solution-journeys">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all solutions
          </Button>
        </Link>

        {/* GitHub README Style Header */}
        <div className="border-b pb-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>plugd.ai</span>
            <span>/</span>
            <span>{industry.toLowerCase()}</span>
            <span>/</span>
            <span className="font-medium text-foreground">{title.toLowerCase().replace(/\s+/g, '-')}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>
        </div>

        {/* Video Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Video className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Solution Overview</h2>
          </div>
          <Card className="overflow-hidden mb-8">
            <div className="w-full max-w-4xl mx-auto">
              <AspectRatio ratio={16 / 9}>
                <div className="relative w-full h-full">
                  <img 
                    src={videoThumbnail} 
                    alt={`${title} preview`} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a 
                      href={videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-primary/90 hover:bg-primary text-white rounded-full p-4 transition-all transform hover:scale-105"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="h-6 w-6"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </Card>
        </div>

        {/* Article Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Technical Deep Dive</h2>
          </div>
          
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="prose prose-slate max-w-none">
                <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                <div className="p-4 bg-destructive/10 rounded-lg mb-6 border border-destructive/20">
                  <p className="text-destructive font-medium">{challenge}</p>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
                <p className="mb-6">{solution}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Data Collection</h4>
                    <p className="text-sm">Automated extraction from multiple sources</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Processing</h4>
                    <p className="text-sm">AI-powered analysis and validation</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Integration</h4>
                    <p className="text-sm">Seamless connection to existing systems</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Results & Impact</h3>
                <div className="p-4 bg-green-100 rounded-lg mb-6 border border-green-200">
                  <p className="text-green-700 font-medium">{impact}</p>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Implementation Details</h3>
                <p>
                  Our solution is implemented using a combination of machine learning models, 
                  workflow automation, and API integrations. The system is designed to be 
                  highly configurable, allowing for customization based on specific requirements 
                  and regulations.
                </p>
                
                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Looking for a similar solution?</h4>
                  <p className="text-sm mb-4">Contact our team to learn how we can help automate your workflows.</p>
                  <Button>Schedule a Demo</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UseCaseTemplate;
