/**
 * Main Application Component
 * 
 * Handles routing for all pages defined in pages.manifest.json.
 * In development, uses React Router for SPA navigation.
 * In production, each page has its own HTML entry point.
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy, useEffect, useState, useCallback, ComponentType } from "react";
import { initRouteNotifier } from "@/lib/routeNotifier";
import { useSeoMeta } from "@/hooks/useSeoMeta";

// Static page imports (always available)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Loading component for lazy-loaded pages
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

const queryClient = new QueryClient();

/**
 * Cache for lazy-loaded page components.
 * This prevents creating new lazy() components on every render,
 * which would cause infinite remount loops.
 */
const lazyPageCache = new Map<string, ComponentType>();

/**
 * Get or create a lazy-loaded page component for a slug.
 * Uses a cache to ensure the same component instance is returned for the same slug.
 */
function getLazyPageComponent(slug: string): ComponentType {
  if (lazyPageCache.has(slug)) {
    return lazyPageCache.get(slug)!;
  }
  
  // Convert slug to expected component name (e.g., 'about' -> 'About')
  const componentName = slug
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  // Create the lazy component
  const LazyPage = lazy(async () => {
    try {
      // Try exact name first
      return await import(`./pages/${componentName}.tsx`);
    } catch {
      try {
        // Try capitalized slug
        return await import(`./pages/${slug.charAt(0).toUpperCase() + slug.slice(1)}.tsx`);
      } catch {
        // Fall back to NotFound
        console.warn(`[Router] Page component not found for slug: ${slug}`);
        return { default: NotFound };
      }
    }
  });
  
  lazyPageCache.set(slug, LazyPage);
  return LazyPage;
}

/**
 * Wrapper component that renders a lazy-loaded page with Suspense.
 */
function LazyPageWrapper({ slug }: { slug: string }) {
  const LazyPage = getLazyPageComponent(slug);
  return (
    <Suspense fallback={<PageLoader />}>
      <LazyPage />
    </Suspense>
  );
}

/**
 * Load page routes from manifest.
 * Returns array of route objects for React Router.
 */
interface PageRoute {
  path: string;
  slug: string;
  isHome: boolean;
}

async function loadPageRoutes(): Promise<PageRoute[]> {
  try {
    const response = await fetch('/pages.manifest.json');
    if (response.ok) {
      const manifest = await response.json();
      return manifest.pages.map((page: { slug: string; isHome: boolean }) => ({
        path: page.isHome ? '/' : `/${page.slug}`,
        slug: page.slug,
        isHome: page.isHome,
      }));
    }
  } catch (error) {
    console.warn('[Router] Failed to load manifest, using default routes:', error);
  }
  
  // Default to single home page
  return [{ path: '/', slug: '', isHome: true }];
}

/**
 * Inner app component that handles SEO and routing.
 * Must be inside BrowserRouter to use useLocation-based hooks.
 */
function AppRoutes({ routes }: { routes: PageRoute[] }) {
  // Update page title and meta tags on route change
  useSeoMeta();

  return (
    <Routes>
      {/* Home page - always uses Index component */}
      <Route path="/" element={<Index />} />
      
      {/* Dynamic routes for other pages */}
      {routes
        .filter(route => !route.isHome && route.slug)
        .map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={<LazyPageWrapper slug={route.slug} />}
          />
        ))
      }
      
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

/**
 * Listens for NAVIGATE_TO_PAGE postMessages from the parent frame
 * and performs SPA navigation via React Router (no full reload).
 */
function ParentNavigationListener() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window === window.parent) return; // Not in iframe

    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      if (message?.type === 'NAVIGATE_TO_PAGE' && message.payload?.path) {
        navigate(message.payload.path);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate]);

  return null;
}

const App = () => {
  const [routes, setRoutes] = useState<PageRoute[]>([
    { path: '/', slug: '', isHome: true }
  ]);
  const [isLoading, setIsLoading] = useState(true);

  const refreshRoutes = useCallback(() => {
    loadPageRoutes().then((loadedRoutes) => {
      setRoutes(loadedRoutes);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    refreshRoutes();
  }, [refreshRoutes]);

  // Re-fetch routes when pages.manifest.json changes (dev mode HMR)
  useEffect(() => {
    if (import.meta.hot) {
      import.meta.hot.on('manifest-update', refreshRoutes);
    }
  }, [refreshRoutes]);

  // Initialize route notifier to sync page changes with parent
  useEffect(() => {
    initRouteNotifier();
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <ParentNavigationListener />
          <AppRoutes routes={routes} />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
