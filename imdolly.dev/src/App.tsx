import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

interface RouterProps {
  initialPath?: string | null;
}

function Router({ initialPath }: RouterProps) {
  const [location, setLocation] = useLocation();
  
  // Handle redirect if initialPath is provided
  useEffect(() => {
    if (initialPath && initialPath !== "/") {
      setLocation(initialPath);
    }
  }, [initialPath, setLocation]);
  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header currentPath={location} />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

interface AppProps {
  initialPath?: string | null;
}

function App({ initialPath }: AppProps = {}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Router initialPath={initialPath} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
