import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import VirtualTours from "./pages/VirtualTours";
import DigitalArchives from "./pages/DigitalArchives";
import SacredCelebrations from "./pages/SacredCelebrations";
import MonasteryTour from "./pages/MonasteryTour";
import InteractiveMapPage from "./pages/interactiveMap";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Hidden Google Translate Element */}
        <div id="google_translate_element" style={{ display: "none" }}></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/virtual-tours" element={<VirtualTours />} />
            <Route path="/monastery/:monasteryId" element={<MonasteryTour />} />
            <Route path="/digital-archives" element={<DigitalArchives />} />
            <Route
              path="/sacred-celebrations"
              element={<SacredCelebrations />}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
