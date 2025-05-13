
import React from "react";
import UseCaseTemplate from "@/components/UseCaseTemplate";

const FintechPayment = () => {
  return (
    <UseCaseTemplate
      title="Payment Reconciliation"
      industry="Fintech"
      description="Match invoices, purchase orders, and delivery receipts across systems to eliminate discrepancies."
      challenge="Financial teams spend hours matching transactions across different systems, leading to delayed reconciliations, cash flow issues, and accounting errors."
      solution="Our automated cross-system matching and validation platform uses advanced algorithms to identify and link related financial documents across multiple systems. It handles exceptions intelligently and provides clear audit trails for all reconciliations."
      impact="98% automation rate for standard transactions, with financial close times reduced by 60% and significantly improved accuracy in financial reporting."
      videoUrl="https://www.youtube.com/watch?v=example"
      videoThumbnail="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    />
  );
};

export default FintechPayment;
