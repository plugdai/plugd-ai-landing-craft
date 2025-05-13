
import React from "react";
import UseCaseTemplate from "@/components/UseCaseTemplate";

const EcommerceOrder = () => {
  return (
    <UseCaseTemplate
      title="Order Matching"
      industry="E-commerce"
      description="Intelligent system that accurately pairs purchase orders with invoices and shipping data across multiple platforms."
      challenge="Order discrepancies cause fulfillment delays and customer dissatisfaction, with teams spending significant time manually reconciling order information across systems."
      solution="Our integrated order validation workflow connects to multiple e-commerce platforms, marketplaces, and fulfillment systems to create a single source of truth for each order. The system automatically identifies and resolves discrepancies based on configurable business rules."
      impact="75% reduction in order processing exceptions, with faster fulfillment times and improved customer satisfaction through more accurate order tracking and delivery."
      videoUrl="https://www.youtube.com/watch?v=example"
      videoThumbnail="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    />
  );
};

export default EcommerceOrder;
