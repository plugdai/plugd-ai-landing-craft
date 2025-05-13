
import React from "react";
import UseCaseTemplate from "@/components/UseCaseTemplate";

const LogisticsClaim = () => {
  return (
    <UseCaseTemplate
      title="Claim Management"
      industry="Logistics"
      description="End-to-end processing of shipping claims, damage reports, and insurance documentation with minimal human intervention."
      challenge="Claims processing requires extensive manual review, leading to slow resolution times, inconsistent outcomes, and customer frustration."
      solution="Our AI-powered damage assessment and routing system automatically processes shipping claims, analyzes damage reports and images, validates against shipping records, and routes claims to the appropriate departments. The system handles documentation, communication, and tracking throughout the claims lifecycle."
      impact="Claims processed 6x faster than manual review, with improved consistency in resolution and higher customer satisfaction through transparent claim tracking."
      videoUrl="https://www.youtube.com/watch?v=example"
      videoThumbnail="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80"
    />
  );
};

export default LogisticsClaim;
