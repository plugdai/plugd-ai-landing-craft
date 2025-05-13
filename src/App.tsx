
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Use Case Pages
import FintechKYC from "./pages/usecases/FintechKYC";
import FintechPayment from "./pages/usecases/FintechPayment";
import EcommerceCatalog from "./pages/usecases/EcommerceCatalog";
import EcommerceOrder from "./pages/usecases/EcommerceOrder";
import LogisticsContract from "./pages/usecases/LogisticsContract";
import LogisticsClaim from "./pages/usecases/LogisticsClaim";

const queryClient = new QueryClient();
const basename = import.meta.env.BASE_URL;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Use Case Routes */}
          <Route path="/usecases/fintech-kyc" element={<FintechKYC />} />
          <Route path="/usecases/fintech-payment" element={<FintechPayment />} />
          <Route path="/usecases/ecommerce-catalog" element={<EcommerceCatalog />} />
          <Route path="/usecases/ecommerce-order" element={<EcommerceOrder />} />
          <Route path="/usecases/logistics-contract" element={<LogisticsContract />} />
          <Route path="/usecases/logistics-claim" element={<LogisticsClaim />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
