import { Switch, Route, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TranslationProvider } from "@/lib/translation-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy load pages for code splitting
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const Services = lazy(() => import("@/pages/services"));
const SoftwareDevelopment = lazy(() => import("@/pages/software-development"));
const CloudAccounting = lazy(() => import("@/pages/cloud-accounting"));
const BPOServices = lazy(() => import("@/pages/bpo-services"));
const ImageEditingService = lazy(() => import("@/pages/image-editing-service"));
const Career = lazy(() => import("@/pages/career"));
const JobDetail = lazy(() => import("@/pages/job-detail"));
const Contact = lazy(() => import("@/pages/contact"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const CookiePolicy = lazy(() => import("@/pages/cookie-policy"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-base">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-brand-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}

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
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
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
