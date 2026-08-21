import { defineConfig } from "blume";

export default defineConfig({
  // Site
  title: "aimlnotes",
  description: "Title says everythings.",
  logo: "/logo.svg",


  // Content
  content: {
    root: "docs",
  },

  // Theme — see the Theming guide
  theme: {
    // accent: { light: "blue", dark: "teal" },
    radius: "md",
    // mode: "system",
    fonts: {
      display: { name: "Noto Sans JP", weights: [400, 700] },
      body: { name: "Noto Sans JP", weights: [400, 500, 700] },
      mono: "ibm-plex-mono",
    },
    background: {
      light: "#dbed65",
      dark: "#0a0a0a"
    }
  },

  // Search — see the Search guide
  search: {
    provider: "orama",
  },

  // Markdown features
  markdown: {
    imageZoom: true,
    code: {
      icons: true, // language icon in the code-block header
      wrap: false, // wrap long lines instead of scrolling
    },
    codeBlocks: {
      theme: {
        light: "github-light", // bundled name or custom Shiki theme object
        dark: "github-dark",
      },
    },
  },

  // AI — see the AI guide
  ai: {
    llmsTxt: true,
    // MCP server (needs server output)
    mcp: {
      enabled: false,
      route: "/mcp",
    },
  },

  // SEO — OG images, feeds, sitemap, structured data; see the SEO guide
  seo: {
    og: { enabled: true },
    rss: { enabled: true, types: ["blog", "changelog"] },
    sitemap: true,
    robots: true,
    structuredData: true,
  },

  // Deployment — see the Deployment guide
  deployment: {
    output: "static",
    site: "https://aimlnotes.vercel.app",
  },
});