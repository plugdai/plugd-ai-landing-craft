
import React from "react";
import UseCaseTemplate from "@/components/UseCaseTemplate";

const FintechKYC = () => {
  return (
    <UseCaseTemplate
      title="KYC/KYB Checks"
      industry="Fintech"
      description="Automatically validate identity and compliance documents, reducing processing time from days to minutes."
      challenge="Manual validation is slow and error-prone, with financial institutions spending significant resources on document verification and compliance checks."
      solution="Our AI-powered document analysis and verification system automatically extracts key information from identity documents, verifies authenticity, and cross-references data against compliance databases. The system handles multiple document types and languages while maintaining regulatory compliance."
      impact="90% reduction in processing time, with improved accuracy rates and significant cost savings. Compliance teams can focus on edge cases while the system handles routine verifications."
      videoUrl="https://www.youtube.com/watch?v=example"
      videoThumbnail="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    />
  );
};

export default FintechKYC;
