
import React from "react";
import UseCaseTemplate from "@/components/UseCaseTemplate";

const EcommerceCatalog = () => {
  return (
    <UseCaseTemplate
      title="Catalog Onboarding"
      industry="E-commerce"
      description="Automatically format product data from various sources into a consistent structure, supporting multiple languages."
      challenge="Product catalog updates take weeks due to inconsistent data formats from suppliers, resulting in delayed product launches and missed sales opportunities."
      solution="Our multi-format data standardization engine ingests product information from various sources (spreadsheets, PDFs, APIs) and transforms it into a standardized format. The system enriches product data, generates SEO-optimized descriptions, and supports multiple languages."
      impact="Catalog updates reduced from weeks to hours, with 85% less manual data entry and significant improvement in product listing quality."
      videoUrl="https://www.youtube.com/watch?v=example"
      videoThumbnail="https://images.unsplash.com/photo-1612103198005-b238154f4590?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    />
  );
};

export default EcommerceCatalog;
