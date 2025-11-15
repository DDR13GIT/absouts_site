# Geoblocking Configuration

This application uses Vercel Edge Middleware to implement geoblocking functionality, allowing you to restrict access from specific countries.

## How It Works

The middleware intercepts all incoming requests and checks the visitor's country using Vercel's built-in geolocation headers. If the country is in the blocked list, the user receives a 403 Forbidden page.

## Configuration

### Environment Variable

Add the following environment variable to configure which countries to block:

```bash
NEXT_PUBLIC_BLOCKED_COUNTRIES=CN,RU,KP
```

**Format:**
- Comma-separated list of ISO 3166-1 alpha-2 country codes
- Country codes should be 2 letters (e.g., US, GB, CN)
- Case insensitive (automatically converted to uppercase)
- Spaces are automatically trimmed

**Examples:**

```bash
# Block China, Russia, and North Korea
NEXT_PUBLIC_BLOCKED_COUNTRIES=CN,RU,KP

# Block a single country
NEXT_PUBLIC_BLOCKED_COUNTRIES=CN

# Allow all countries (leave empty)
NEXT_PUBLIC_BLOCKED_COUNTRIES=
```

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

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name:** `NEXT_PUBLIC_BLOCKED_COUNTRIES`
   - **Value:** Your comma-separated country codes (e.g., `CN,RU,KP`)
   - **Environments:** Select Production, Preview, and/or Development as needed
4. Click **Save**
5. Redeploy your application for changes to take effect

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

## Middleware Details

**File:** `middleware.ts`

**Features:**
- Runs on Vercel Edge Network (ultra-fast, global)
- Minimal performance impact
- Custom 403 blocked page with country information
- Excludes API routes, static files, and images
- Safe fallback if no countries are configured

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

1. Remove or empty the `NEXT_PUBLIC_BLOCKED_COUNTRIES` environment variable in Vercel
2. Redeploy the application

Or delete the `middleware.ts` file to completely remove the feature.

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
