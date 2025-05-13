
import React from "react";
import UseCaseTemplate from "@/components/UseCaseTemplate";

const LogisticsContract = () => {
  return (
    <UseCaseTemplate
      title="Contract Generation"
      industry="Logistics"
      description="Automated creation of customized shipping and logistics agreements based on specific requirements and regulations."
      challenge="Creating compliant contracts is time-consuming and error-prone, with legal teams spending excessive time on routine document preparation."
      solution="Our dynamic template system with compliance checks automatically generates customized shipping and logistics agreements based on specific requirements, routes, cargo types, and applicable regulations. The system ensures all legal requirements are met while reducing manual input."
      impact="Contract generation time reduced by 85%, with improved compliance rates and significant reduction in legal review time for standard agreements."
      videoUrl="https://www.youtube.com/watch?v=example"
      videoThumbnail="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    />
  );
};

export default LogisticsContract;
