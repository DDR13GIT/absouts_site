# Geoblocking Configuration

This application (Vite + Express) uses **Vercel's built-in geo-aware redirects** to implement geoblocking functionality, allowing you to restrict access from specific countries.

## How It Works

Vercel's infrastructure checks the `x-vercel-ip-country` header for ALL incoming requests. When a request comes from a blocked country, Vercel automatically redirects to a blocked page (`/blocked.html`) BEFORE serving any content. This works for static files, API routes, and all page requests.

## Configuration

### Blocked Countries List

To block countries, you need to add redirect rules in `vercel.json`. Each blocked country needs its own redirect rule.

**Edit `vercel.json`:**

```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [
        {
          "type": "header",
          "key": "x-vercel-ip-country",
          "value": "BD"
        }
      ],
      "destination": "/blocked.html",
      "permanent": false
    },
    {
      "source": "/(.*)",
      "has": [
        {
          "type": "header",
          "key": "x-vercel-ip-country",
          "value": "CN"
        }
      ],
      "destination": "/blocked.html",
      "permanent": false
    }
  ]
}
```

**To block additional countries:** Add more redirect objects with different country codes.

**Format:**
- Country codes must be ISO 3166-1 alpha-2 (2 letters)
- Country codes are case-sensitive in vercel.json (use UPPERCASE)
- Each blocked country needs its own redirect rule

### Common Country Codes

| Country | Code |
|---------|------|
| China | CN |
| Russia | RU |
| North Korea | KP |
| Iran | IR |
| Syria | SY |
| Cuba | CU |
| Venezuela | VE |
| United States | US |
| United Kingdom | GB |
| India | IN |
| Bangladesh | BD |

For a complete list, see: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

## Setup Instructions

### 1. Local Development

Add to your `.env` file:

```bash
NEXT_PUBLIC_BLOCKED_COUNTRIES=CN,RU
```

### 2. Vercel Deployment

1. Edit `vercel.json` and add redirect rules for each country you want to block
2. Commit and push your changes to trigger a deployment
3. Vercel will automatically apply the geoblocking rules
4. No environment variables needed - configuration is in `vercel.json`

### 3. Testing

To test the geoblocking feature:

1. **Using Vercel Preview Deployments:**
   - Deploy to Vercel
   - Use a VPN to simulate access from a blocked country
   - Verify you see the "Access Restricted" page

2. **Local Testing:**
   - The geolocation feature only works on Vercel's Edge Network
   - Local testing will always show `country: UNKNOWN` and allow access
   - For local testing, you can modify the middleware to simulate countries

## Implementation Details

**Files:**
- `vercel.json` - Redirect configuration with geo-targeting
- `public/blocked.html` - Blocked page HTML
- API routes use `shared/geoblocking.ts` for additional serverless-level blocking

**Features:**
- Uses Vercel's native redirect functionality (ultra-fast, no custom code)
- Minimal performance impact (runs at CDN level)
- Custom blocked page with professional design
- Intercepts ALL requests (static files, API routes, pages)
- Works with ANY framework (Vite, Next.js, Express, etc.)

**Performance:**
- Runs at the edge (closest to the user)
- No backend server delay
- Cached for optimal speed

## Blocked Page

When a user from a blocked country tries to access the site, they see a custom page with:
- Clear message about access restriction
- Their detected country code
- Professional gradient design
- Responsive layout

## Important Notes

1. **NEXT_PUBLIC_ prefix:** Required for client-side environment variables in Next.js
2. **Case Sensitivity:** Country codes are automatically converted to uppercase
3. **Edge Runtime:** This middleware runs on Vercel's Edge Network, not on Node.js
4. **Testing:** Geolocation only works when deployed to Vercel (not in local development)
5. **Bypass:** Users with VPNs may be able to bypass geoblocking by changing their apparent location

## Troubleshooting

### Middleware not working
- Ensure you're testing on a Vercel deployment (not localhost)
- Check that `middleware.ts` is in the root directory
- Verify the environment variable is set correctly in Vercel dashboard
- Redeploy after changing environment variables

### All users are blocked
- Check your country code format (should be 2-letter ISO codes)
- Verify there are no extra spaces in the environment variable
- Make sure you're not accidentally blocking all countries

### No users are blocked
- Confirm the environment variable is set in Vercel
- Check that the variable name is exactly `NEXT_PUBLIC_BLOCKED_COUNTRIES`
- Ensure you've redeployed after setting the variable
- Test from a VPN in a country you've blocked

## Removing Geoblocking

To disable geoblocking entirely:

1. Remove the `redirects` array from `vercel.json`
2. Commit and push your changes
3. The site will be accessible from all countries

## Security Considerations

- Geoblocking is not foolproof (VPNs, proxies can bypass)
- Use as one layer of security, not the only layer
- Consider combining with other security measures
- Monitor access logs for suspicious activity
- Geolocation data is based on IP addresses (may not be 100% accurate)

## Support

For issues or questions about geoblocking:
1. Check Vercel's documentation on Edge Middleware
2. Verify your country codes are correct
3. Ensure environment variables are properly configured
4. Test with a VPN to simulate blocked countries
