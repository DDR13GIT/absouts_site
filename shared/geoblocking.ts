import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Geoblocking middleware for Vercel serverless functions
 * Checks if the request is from a blocked country and returns 403 if so
 *
 * @returns true if request should be blocked, false if allowed
 */
export function checkGeoblocking(req: VercelRequest, res: VercelResponse): boolean {
  // Get the blocked countries from environment variable
  const blockedCountries = process.env.NEXT_PUBLIC_BLOCKED_COUNTRIES || '';

  console.log('[Geoblocking] Checking request...');
  console.log('[Geoblocking] ENV var:', blockedCountries);

  // If no countries are configured, allow all requests
  if (!blockedCountries) {
    console.log('[Geoblocking] No blocked countries configured');
    return false;
  }

  // Parse the comma-separated list of country codes
  const blockedCountryList = blockedCountries
    .split(',')
    .map(country => country.trim().toUpperCase())
    .filter(country => country.length > 0);

  console.log('[Geoblocking] Blocked list:', blockedCountryList);

  // If no valid countries in the list, allow all requests
  if (blockedCountryList.length === 0) {
    console.log('[Geoblocking] Empty blocked list');
    return false;
  }

  // Get the country code from Vercel's geolocation headers
  const country = req.headers['x-vercel-ip-country'] as string || 'UNKNOWN';

  console.log('[Geoblocking] Request country:', country);
  console.log('[Geoblocking] All geo headers:', {
    'x-vercel-ip-country': req.headers['x-vercel-ip-country'],
    'x-vercel-ip-city': req.headers['x-vercel-ip-city'],
    'x-forwarded-for': req.headers['x-forwarded-for'],
  });

  // Check if the country is blocked
  if (blockedCountryList.includes(country.toUpperCase())) {
    console.log('[Geoblocking] BLOCKING request from:', country);

    res.status(403).send(`
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
    return true;
  }

  console.log('[Geoblocking] Allowing request from:', country);
  return false;
}
