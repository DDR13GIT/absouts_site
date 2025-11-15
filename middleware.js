/**
 * Vercel Edge Middleware for Geoblocking
 * Auto-detected by Vercel for all frameworks
 */

export default async function middleware(request) {
  const url = new URL(request.url);

  console.log('[Edge Middleware] Intercepting:', url.pathname);

  // Get the blocked countries from environment variable
  const blockedCountries = process.env.NEXT_PUBLIC_BLOCKED_COUNTRIES || '';

  console.log('[Edge Middleware] Blocked countries env:', blockedCountries);

  // If no countries are configured, allow the request to continue
  if (!blockedCountries) {
    console.log('[Edge Middleware] No geoblocking configured');
    return;
  }

  // Parse the comma-separated list of country codes
  const blockedCountryList = blockedCountries
    .split(',')
    .map(country => country.trim().toUpperCase())
    .filter(country => country.length > 0);

  console.log('[Edge Middleware] Parsed blocked list:', blockedCountryList);

  // If no valid countries in the list, allow the request
  if (blockedCountryList.length === 0) {
    console.log('[Edge Middleware] Empty blocked list');
    return;
  }

  // Get the country code from Vercel's geolocation
  // Vercel provides this in request.geo for Edge Runtime
  const country = request.geo?.country || 'UNKNOWN';

  console.log('[Edge Middleware] Request from country:', country);
  console.log('[Edge Middleware] Full geo data:', JSON.stringify(request.geo));

  // Check if the country is blocked
  if (blockedCountryList.includes(country.toUpperCase())) {
    console.log('[Edge Middleware] BLOCKING access from:', country);

    // Return a 403 Forbidden response with a custom blocked page
    return new Response(
      `<!DOCTYPE html>
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
</html>`,
      {
        status: 403,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
        },
      }
    );
  }

  // Allow the request to continue to the origin
  console.log('[Edge Middleware] Allowing access from:', country);
  // Returning nothing allows the request to proceed
}
