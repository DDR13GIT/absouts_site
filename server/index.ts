import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Geoblocking middleware - must be first to block requests early
app.use((req, res, next) => {
  // Get the blocked countries from environment variable
  const blockedCountries = process.env.NEXT_PUBLIC_BLOCKED_COUNTRIES || '';

  // Debug: Always log for first request to verify middleware is working
  const country = req.headers['x-vercel-ip-country'] as string || 'UNKNOWN';

  console.log('[Geoblocking] Middleware executed');
  console.log('[Geoblocking] ENV var NEXT_PUBLIC_BLOCKED_COUNTRIES:', blockedCountries);
  console.log('[Geoblocking] Country from header:', country);
  console.log('[Geoblocking] x-vercel-ip-country header:', req.headers['x-vercel-ip-country']);
  console.log('[Geoblocking] All Vercel headers:', {
    'x-vercel-ip-country': req.headers['x-vercel-ip-country'],
    'x-vercel-ip-city': req.headers['x-vercel-ip-city'],
    'x-forwarded-for': req.headers['x-forwarded-for'],
  });

  // If no countries are configured, allow all requests
  if (!blockedCountries) {
    console.log('[Geoblocking] No blocked countries configured, allowing request');
    return next();
  }

  // Parse the comma-separated list of country codes
  const blockedCountryList = blockedCountries
    .split(',')
    .map(country => country.trim().toUpperCase())
    .filter(country => country.length > 0);

  console.log('[Geoblocking] Blocked country list:', blockedCountryList);

  // If no valid countries in the list, allow all requests
  if (blockedCountryList.length === 0) {
    console.log('[Geoblocking] Empty blocked list, allowing request');
    return next();
  }

  // Check if the country is blocked
  if (blockedCountryList.includes(country.toUpperCase())) {
    console.log('[Geoblocking] BLOCKING REQUEST - Country is in blocked list');
    // Return a 403 Forbidden response with a custom message
    return res.status(403).send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Access Restricted</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              margin: 0;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
            }
            .container {
              text-align: center;
              padding: 2rem;
              max-width: 600px;
            }
            h1 {
              font-size: 3rem;
              margin-bottom: 1rem;
              font-weight: 700;
            }
            p {
              font-size: 1.25rem;
              line-height: 1.6;
              opacity: 0.9;
            }
            .code {
              font-family: monospace;
              background: rgba(255, 255, 255, 0.1);
              padding: 0.25rem 0.5rem;
              border-radius: 4px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>🌍 Access Restricted</h1>
            <p>
              We're sorry, but access to this website is not available from your location.
            </p>
            <p style="margin-top: 2rem; font-size: 0.9rem;">
              Country: <span class="code">${country}</span>
            </p>
          </div>
        </body>
      </html>
    `);
  }

  // Allow the request to proceed
  console.log('[Geoblocking] Allowing request - country not in blocked list');
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '8080', 10);
  server.listen(port, "localhost", () => {
    log(`serving on port ${port}`);
  });
})();
