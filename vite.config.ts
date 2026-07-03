/**
 * Vite Configuration for Landing Page Studio Preview Container
 * 
 * Supports both:
 * - Development: SPA mode with React Router for fast HMR
 * - Production: MPA mode with per-page HTML for SEO optimization
 * 
 * @see https://vitejs.dev/config/
 * @build 2026-02-02-multipage-seo
 */
import { defineConfig, Plugin, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Types for pages.manifest.json
interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  canonicalUrl: string;
  noindex: boolean;
  structuredDataType: string;
  structuredData: Record<string, unknown> | null;
}

interface ManifestPage {
  id: string;
  name: string;
  slug: string;
  isHome: boolean;
  seo: PageSeo;
  sections: string[];
  inNavigation: boolean;
}

interface PagesManifest {
  site: {
    name: string;
    domain: string;
    language: string;
    defaultSeo?: {
      titleTemplate?: string;
      ogImage?: string;
    };
  };
  pages: ManifestPage[];
  navigation: {
    header: string[];
    footer: string[];
  };
  sections: Record<string, unknown>;
}

/**
 * Get the site domain from various sources:
 * 1. SITE_DOMAIN env var (custom domain set by user)
 * 2. PREVIEW_URL env var (auto-generated preview URL)
 * 3. Manifest domain field
 * 4. Empty string (skip canonical/og:url generation)
 */
function getSiteDomain(manifestDomain: string): string {
  // Priority 1: Custom domain from environment
  if (process.env.SITE_DOMAIN) {
    return process.env.SITE_DOMAIN.replace(/\/$/, ''); // Remove trailing slash
  }
  
  // Priority 2: Preview URL from environment
  if (process.env.PREVIEW_URL) {
    return process.env.PREVIEW_URL.replace(/\/$/, '');
  }
  
  // Priority 3: Domain from manifest (if set and not example.com)
  if (manifestDomain && !manifestDomain.includes('example.com')) {
    return manifestDomain.replace(/\/$/, '');
  }
  
  // No valid domain - skip canonical/og:url generation
  return '';
}

/**
 * Load pages.manifest.json with fallback defaults
 */
function loadManifest(): PagesManifest {
  const manifestPath = path.resolve(__dirname, './pages.manifest.json');
  
  try {
    if (fs.existsSync(manifestPath)) {
      const content = fs.readFileSync(manifestPath, 'utf-8');
      const manifest = JSON.parse(content) as PagesManifest;
      
      // Override domain with environment-based domain
      manifest.site.domain = getSiteDomain(manifest.site.domain);
      
      return manifest;
    }
  } catch (error) {
    console.warn('[vite] Failed to read pages.manifest.json:', error);
  }
  
  // Default manifest for backwards compatibility
  return {
    site: { name: 'Website', domain: getSiteDomain(''), language: 'en' },
    pages: [{
      id: 'home',
      name: 'Home',
      slug: '',
      isHome: true,
      seo: {
        title: 'Welcome',
        description: '',
        keywords: [],
        ogImage: '',
        canonicalUrl: '',
        noindex: false,
        structuredDataType: '',
        structuredData: null,
      },
      sections: [],
      inNavigation: true,
    }],
    navigation: { header: ['home'], footer: ['home'] },
    sections: {},
  };
}

/**
 * Generate JSON-LD structured data script
 */
function generateStructuredData(
  page: ManifestPage, 
  manifest: PagesManifest
): string {
  if (!page.seo.structuredData && !page.seo.structuredDataType) {
    return '';
  }
  
  let jsonLd: Record<string, unknown>;
  
  if (page.seo.structuredData) {
    // Use custom structured data if provided
    jsonLd = page.seo.structuredData;
  } else {
    // Generate basic structured data based on type
    // Only include URL fields if we have a real domain
    const baseUrl = manifest.site.domain;
    const pageUrl = baseUrl ? (page.isHome ? baseUrl : `${baseUrl}/${page.slug}`) : undefined;
    
    switch (page.seo.structuredDataType) {
      case 'WebSite':
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: manifest.site.name,
          ...(baseUrl && { url: baseUrl }),
        };
        break;
      case 'Organization':
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: manifest.site.name,
          ...(baseUrl && { url: baseUrl }),
        };
        break;
      case 'LocalBusiness':
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: manifest.site.name,
          ...(baseUrl && { url: baseUrl }),
        };
        break;
      case 'FAQPage':
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [],
        };
        break;
      default:
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': page.seo.structuredDataType || 'WebPage',
          name: page.seo.title,
          ...(pageUrl && { url: pageUrl }),
        };
    }
  }
  
  return `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
}

/**
 * Generate HTML <head> content for a page
 */
function generateHeadContent(
  page: ManifestPage, 
  manifest: PagesManifest
): string {
  const seo = page.seo;
  const site = manifest.site;
  const baseUrl = site.domain || '';
  const pageUrl = page.isHome ? baseUrl : `${baseUrl}/${page.slug}`;
  
  const parts: string[] = [];
  
  // Title
  const title = seo.title || page.name;
  parts.push(`<title>${title}</title>`);
  
  // Meta description
  if (seo.description) {
    parts.push(`<meta name="description" content="${seo.description}" />`);
  }
  
  // Keywords
  if (seo.keywords && seo.keywords.length > 0) {
    parts.push(`<meta name="keywords" content="${seo.keywords.join(', ')}" />`);
  }
  
  // Canonical URL
  if (seo.canonicalUrl) {
    parts.push(`<link rel="canonical" href="${seo.canonicalUrl}" />`);
  } else if (baseUrl) {
    parts.push(`<link rel="canonical" href="${pageUrl}" />`);
  }
  
  // Robots
  if (seo.noindex) {
    parts.push('<meta name="robots" content="noindex, nofollow" />');
  }
  
  // Open Graph
  parts.push(`<meta property="og:title" content="${title}" />`);
  if (seo.description) {
    parts.push(`<meta property="og:description" content="${seo.description}" />`);
  }
  parts.push('<meta property="og:type" content="website" />');
  if (baseUrl) {
    parts.push(`<meta property="og:url" content="${pageUrl}" />`);
  }
  const ogImage = seo.ogImage || site.defaultSeo?.ogImage;
  if (ogImage) {
    const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
    parts.push(`<meta property="og:image" content="${ogImageUrl}" />`);
  }
  
  // Twitter Card
  parts.push('<meta name="twitter:card" content="summary_large_image" />');
  parts.push(`<meta name="twitter:title" content="${title}" />`);
  if (seo.description) {
    parts.push(`<meta name="twitter:description" content="${seo.description}" />`);
  }
  if (ogImage) {
    const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
    parts.push(`<meta name="twitter:image" content="${ogImageUrl}" />`);
  }
  
  // Structured data
  const structuredData = generateStructuredData(page, manifest);
  if (structuredData) {
    parts.push(structuredData);
  }
  
  return parts.join('\n    ');
}

/**
 * Plugin to inject SEO metadata into HTML during build.
 * 
 * For development (SPA mode): Only applies to index.html
 * For production (MPA mode): Applies to each page's HTML
 * 
 * IMPORTANT: In development, we read the manifest fresh on each request
 * because the agent may update pages.manifest.json after Vite starts.
 */
function seoInjectorPlugin(initialManifest: PagesManifest, isDev: boolean): Plugin {
  return {
    name: 'seo-injector',
    transformIndexHtml(html, ctx) {
      // In development, always read fresh manifest (agent may have updated it)
      // In production build, use the cached manifest for consistency
      const manifest = isDev ? loadManifest() : initialManifest;
      
      // Determine which page this HTML is for
      let page: ManifestPage;
      
      if (ctx.filename) {
        // For MPA build, extract page from directory path
        // e.g., index.html -> dir '.' -> slug '' -> home page
        //       menu/index.html -> dir 'menu' -> slug 'menu' -> menu page
        const relativePath = path.relative(__dirname, ctx.filename);
        const dirName = path.dirname(relativePath);
        const pagePath = dirName === '.' ? '' : dirName;
        page = manifest.pages.find(p => 
          p.slug === pagePath || (p.isHome && pagePath === '')
        ) || manifest.pages[0];
      } else {
        // Default to home page
        page = manifest.pages.find(p => p.isHome) || manifest.pages[0];
      }
      
      if (!page) return html;
      
      // Generate SEO content
      const seoContent = generateHeadContent(page, manifest);
      
      // =================================================================
      // CLEANUP: Remove all SEO-related content written by the agent
      // The agent may write SEO tags directly to index.html, but we
      // control all SEO through pages.manifest.json for consistency.
      // =================================================================
      
      // Remove SEO meta tags
      html = html.replace(/<title>.*?<\/title>/gi, '');
      html = html.replace(/<meta name="description"[^>]*>/gi, '');
      html = html.replace(/<meta name="keywords"[^>]*>/gi, '');
      html = html.replace(/<meta name="robots"[^>]*>/gi, '');
      html = html.replace(/<meta property="og:[^"]*"[^>]*>/gi, '');
      html = html.replace(/<meta name="twitter:[^"]*"[^>]*>/gi, '');
      html = html.replace(/<link rel="canonical"[^>]*>/gi, '');
      html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
      
      // Remove agent-written comment sections (leaves empty lines, cleaned up below)
      // These are common patterns agents use when organizing SEO in index.html
      html = html.replace(/<!--\s*Title and Description\s*-->/gi, '');
      html = html.replace(/<!--\s*Open Graph\s*-->/gi, '');
      html = html.replace(/<!--\s*Twitter Card\s*-->/gi, '');
      html = html.replace(/<!--\s*SEO\s*-->/gi, '');
      html = html.replace(/<!--\s*SEO Metadata\s*-->/gi, '');
      html = html.replace(/<!--\s*Meta Tags\s*-->/gi, '');
      html = html.replace(/<!--\s*Canonical\s*-->/gi, '');
      html = html.replace(/<!--\s*Structured Data\s*-->/gi, '');
      
      // Clean up multiple consecutive blank lines (from removed tags/comments)
      html = html.replace(/(\n\s*){3,}/g, '\n\n    ');
      
      // Inject SEO content before </head>
      html = html.replace(
        '</head>',
        `<!-- SEO Metadata -->\n    ${seoContent}\n  </head>`
      );
      
      return html;
    },
  };
}

/**
 * Plugin to inject custom embeddings (analytics, tracking) into HTML.
 */
function embeddingsInjectorPlugin(): Plugin {
  return {
    name: 'embeddings-injector',
    transformIndexHtml(html) {
      const embeddingsPath = path.resolve(__dirname, './src/embeddings.json');
      let embeddings = { header: '', footer: '' };
      
      try {
        if (fs.existsSync(embeddingsPath)) {
          const content = fs.readFileSync(embeddingsPath, 'utf-8');
          embeddings = JSON.parse(content);
        }
      } catch (error) {
        console.warn('[embeddings-injector] Failed to read embeddings.json:', error);
      }
      
      if (embeddings.header) {
        html = html.replace(
          '</head>',
          `  <!-- Custom Header Embeddings -->\n  ${embeddings.header}\n  </head>`
        );
      }
      
      if (embeddings.footer) {
        html = html.replace(
          '</body>',
          `  <!-- Custom Footer Embeddings -->\n  ${embeddings.footer}\n  </body>`
        );
      }
      
      return html;
    },
  };
}

/**
 * Plugin to generate sitemap.xml and robots.txt during build.
 */
function sitemapPlugin(manifest: PagesManifest): Plugin {
  return {
    name: 'sitemap-generator',
    generateBundle() {
      const baseUrl = manifest.site.domain;
      if (!baseUrl) {
        console.log('[sitemap] Skipping sitemap generation - no domain configured');
        return;
      }
      
      // Generate sitemap.xml
      const urls = manifest.pages
        .filter(p => !p.seo.noindex)
        .map(page => {
          const loc = page.isHome ? baseUrl : `${baseUrl}/${page.slug}`;
          const priority = page.isHome ? '1.0' : '0.8';
          return `  <url>
    <loc>${loc}</loc>
    <priority>${priority}</priority>
    <changefreq>weekly</changefreq>
  </url>`;
        })
        .join('\n');
      
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
      
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: sitemap,
      });
      
      // Generate robots.txt
      const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
      
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: robots,
      });
      
      console.log(`[sitemap] Generated sitemap.xml with ${manifest.pages.filter(p => !p.seo.noindex).length} URLs`);
    },
  };
}

/**
 * Plugin to notify the client when pages.manifest.json changes.
 *
 * In dev mode, the agent may add new pages via vibe coding. When the manifest
 * is updated, this plugin sends a custom HMR event so App.tsx can re-fetch
 * routes and register the new page in React Router — preventing 404s.
 */
function manifestHmrPlugin(): Plugin {
  return {
    name: 'manifest-hmr',
    configureServer(server) {
      const manifestPath = path.resolve(__dirname, 'pages.manifest.json');

      server.watcher.add(manifestPath);
      server.watcher.on('change', (changedPath) => {
        if (path.resolve(changedPath) === manifestPath) {
          console.log('[manifest-hmr] pages.manifest.json changed, notifying client');
          server.ws.send({
            type: 'custom',
            event: 'manifest-update',
          });
        }
      });
    },
  };
}

/**
 * Plugin to generate per-page HTML entry points for MPA builds.
 * 
 * In production, Vite's MPA mode needs distinct HTML files for each page.
 * This plugin:
 * 1. Creates {slug}/index.html for each non-home page (copies root index.html)
 * 2. Sets rollupOptions.input to map each page to its own HTML file
 * 3. Cleans up generated HTML files after the build
 * 
 * This ensures Rollup treats each page as a separate entry and produces
 * separate HTML outputs (e.g., dist/index.html, dist/menu/index.html).
 */
function mpaHtmlGeneratorPlugin(manifest: PagesManifest): Plugin {
  const generatedFiles: string[] = [];
  
  return {
    name: 'mpa-html-generator',
    config() {
      const rootHtml = path.resolve(__dirname, 'index.html');
      const rootHtmlContent = fs.readFileSync(rootHtml, 'utf-8');
      const inputs: Record<string, string> = {};
      
      for (const page of manifest.pages) {
        if (page.isHome) {
          // Home page uses root index.html directly
          inputs[page.id] = rootHtml;
        } else {
          // Non-home pages need their own HTML file for Rollup to treat as distinct entries
          const pageDir = path.resolve(__dirname, page.slug);
          const pageHtml = path.resolve(pageDir, 'index.html');
          
          // Create directory and HTML file
          fs.mkdirSync(pageDir, { recursive: true });
          fs.writeFileSync(pageHtml, rootHtmlContent);
          generatedFiles.push(pageHtml);
          
          inputs[page.id] = pageHtml;
          console.log(`[mpa] Generated HTML entry: ${page.slug}/index.html`);
        }
      }
      
      console.log(`[mpa] ${Object.keys(inputs).length} HTML entry points configured`);
      
      return {
        build: {
          rollupOptions: {
            input: inputs,
          },
        },
      };
    },
    generateBundle() {
      // Include pages.manifest.json in build output for client-side routing.
      // The React app fetches this at runtime to register React Router routes.
      // Without it, only the home route works on the static site.
      const manifestPath = path.resolve(__dirname, 'pages.manifest.json');
      if (fs.existsSync(manifestPath)) {
        this.emitFile({
          type: 'asset',
          fileName: 'pages.manifest.json',
          source: fs.readFileSync(manifestPath, 'utf-8'),
        });
        console.log('[mpa] Included pages.manifest.json in build output');
      }
    },
    closeBundle() {
      // Clean up generated HTML files (they were only needed for the build)
      for (const file of generatedFiles) {
        try {
          fs.unlinkSync(file);
          const dir = path.dirname(file);
          // Remove the directory if it's now empty
          if (fs.readdirSync(dir).length === 0) {
            fs.rmdirSync(dir);
          }
        } catch {
          // Ignore cleanup errors
        }
      }
      if (generatedFiles.length > 0) {
        console.log(`[mpa] Cleaned up ${generatedFiles.length} generated HTML files`);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const manifest = loadManifest();
  const isDev = mode === 'development';
  
  console.log(`[Vite Config] Mode: ${mode}`);
  console.log(`[Vite Config] Pages in manifest: ${manifest.pages.length}`);
  console.log(`[Vite Config] componentTagger enabled: ${isDev}`);
  
  const config: UserConfig = {
    server: {
      host: "::",
      port: 5173,
      // Allow all hosts for dynamic subdomains
      allowedHosts: true,
      // Enable CORS for cross-origin requests
      cors: true,
    },
    plugins: [
      react(),
      // Development-only: component tagger for visual editing
      isDev && componentTagger({ 
        jsxSource: true,
        tailwindConfig: true,
        virtualOverrides: true,
        debug: false,
      }),
      // Development-only: notify client when pages.manifest.json changes
      isDev && manifestHmrPlugin(),
      // Production-only: MPA HTML generator (creates per-page HTML entry points)
      !isDev && mpaHtmlGeneratorPlugin(manifest),
      // SEO metadata injection (reads manifest fresh in dev mode)
      seoInjectorPlugin(manifest, isDev),
      // Custom embeddings (analytics, tracking)
      embeddingsInjectorPlugin(),
      // Production-only: sitemap generation
      !isDev && sitemapPlugin(manifest),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      // MPA build configuration handled by mpaHtmlGeneratorPlugin
      rollupOptions: {},
    },
  };
  
  return config;
});
