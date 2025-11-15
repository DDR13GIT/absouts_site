import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TranslationProvider } from "@/lib/translation-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import SoftwareDevelopment from "@/pages/software-development";
import CloudAccounting from "@/pages/cloud-accounting";
import BPOServices from "@/pages/bpo-services";
import ImageEditingService from "@/pages/image-editing-service";
import Career from "@/pages/career";
import JobDetail from "@/pages/job-detail";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import CookiePolicy from "@/pages/cookie-policy";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/services/:slug" component={SoftwareDevelopment} />
        <Route path="/cloud-accounting" component={CloudAccounting} />
        <Route path="/bpo-services" component={BPOServices} />
        <Route path="/image-editing" component={ImageEditingService} />
        <Route path="/career" component={Career} />
        <Route path="/job/:id" component={JobDetail} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/cookie-policy" component={CookiePolicy} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TranslationProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </TooltipProvider>
      </TranslationProvider>
    </QueryClientProvider>
  );
}

export default App;
