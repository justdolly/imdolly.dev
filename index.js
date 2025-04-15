// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/lanyard.ts
var LANYARD_API_URL = "https://api.lanyard.rest/v1/users/";
var DISCORD_USER_ID = process.env.DISCORD_USER_ID || "123456789012345678";
async function fetchDiscordStatus(req, res) {
  try {
    const response = await fetch(`${LANYARD_API_URL}${DISCORD_USER_ID}`);
    if (!response.ok) {
      throw new Error(`Lanyard API responded with ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.success === false) {
      throw new Error(data.error?.message || "Failed to fetch Discord status");
    }
    res.json(data.data);
  } catch (error) {
    console.error("Error fetching Discord status:", error);
    res.status(500).json({
      error: "Failed to fetch Discord status",
      message: error instanceof Error ? error.message : "Unknown error"
    });
  }
}
function getMockDiscordStatus(req, res) {
  res.json({
    discord_user: {
      id: DISCORD_USER_ID,
      username: "??????",
      avatar: "abcdef1234567890",
      discriminator: "0",
      global_name: "??????"
    },
    discord_status: "online",
    activities: [
      {
        name: "Visual Studio Code",
        type: 0,
        state: "??????",
        details: "??????"
      }
    ],
    listening_to_spotify: false,
    avatar_url: "https://cdn.discordapp.com/avatars/123456789012345678/abcdef1234567890.png"
  });
}

// server/routes.ts
var mockProjects = [
  {
    title: "Modern Web Dashboard",
    description: "A fully responsive dashboard built with SolidJS and TypeScript featuring real-time data visualization.",
    imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    projectUrl: "??????",
    sourceUrl: "??????",
    tags: ["SolidJS", "TypeScript", "Vite", "Custom CSS"],
    type: "Personal Project"
  },
  {
    title: "Discord Bot Framework",
    description: "A modular framework for building Discord bots with TypeScript, featuring plugin architecture and real-time analytics.",
    imageUrl: "https://images.unsplash.com/photo-1610986603166-f78428624e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    projectUrl: "??????",
    sourceUrl: "??????",
    tags: ["TypeScript", "Node.js", "Discord.js", "Docker"],
    type: "Open Source"
  },
  {
    title: "Developer Blog Engine",
    description: "A performant blog engine built for developers with syntax highlighting, markdown support, and optimized images.",
    imageUrl: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    projectUrl: "??????",
    sourceUrl: "??????",
    tags: ["SolidJS", "TypeScript", "Markdown", "WebP/AVIF"],
    type: "Collaboration"
  },
  {
    title: "Smart Home Dashboard",
    description: "A dashboard for monitoring and controlling smart home devices using React and WebSockets.",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055e2a8e5a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    projectUrl: "??????",
    sourceUrl: "??????",
    tags: ["React", "WebSockets", "IoT", "Tailwind CSS"],
    type: "Personal Project"
  },
  {
    title: "Markdown Note Taking App",
    description: "A minimalist note-taking application with Markdown support, tagging, and cloud sync.",
    imageUrl: "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    projectUrl: "??????",
    sourceUrl: "??????",
    tags: ["SolidJS", "TypeScript", "IndexedDB", "PWA"],
    type: "Open Source"
  },
  {
    title: "Weather Visualization Tool",
    description: "A beautiful visualization of global weather patterns using D3.js and weather APIs.",
    imageUrl: "https://images.unsplash.com/photo-1526743033530-d392aae6f76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    projectUrl: "??????",
    sourceUrl: "??????",
    tags: ["JavaScript", "D3.js", "REST API", "SVG"],
    type: "Data Visualization"
  }
];
var mockBlogPosts = [
  {
    title: "Building a High-Performance Web App with SolidJS",
    excerpt: "In this post, I explore how SolidJS's fine-grained reactivity model leads to superior performance compared to virtual DOM based frameworks, with practical examples from my recent projects.",
    date: "March 15, 2023",
    readTime: "5 min",
    tags: ["SolidJS", "Performance", "Web Dev"],
    url: "#"
  },
  {
    title: "Next-Gen Image Formats: Implementing WebP and AVIF",
    excerpt: "A deep dive into implementing next-gen image formats on modern websites. Learn how WebP and AVIF can significantly reduce page load times while maintaining visual quality.",
    date: "February 28, 2023",
    readTime: "8 min",
    tags: ["WebP", "AVIF", "Performance"],
    url: "#"
  },
  {
    title: "Integrating Discord Presence with Lanyard API",
    excerpt: "A step-by-step guide on setting up a self-hosted Lanyard instance to display your real-time Discord presence on your personal website or portfolio.",
    date: "February 10, 2023",
    readTime: "60000 min",
    tags: ["Discord", "API", "Node.js"],
    url: "#"
  },
  {
    title: "Automated Testing for TypeScript Projects",
    excerpt: "Exploring best practices for implementing comprehensive testing strategies in TypeScript projects, from unit tests to end-to-end testing with Cypress.",
    date: "January 22, 2023",
    readTime: "4 min",
    tags: ["TypeScript", "Testing", "Automation"],
    url: "#"
  }
];
async function registerRoutes(app2) {
  app2.get("/api/projects", (req, res) => {
    res.json(mockProjects);
  });
  app2.get("/api/blog-posts", (req, res) => {
    res.json(mockBlogPosts);
  });
  if (process.env.NODE_ENV === "production" && process.env.DISCORD_USER_ID) {
    app2.get("/api/discord-status", fetchDiscordStatus);
  } else {
    app2.get("/api/discord-status", getMockDiscordStatus);
  }
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
