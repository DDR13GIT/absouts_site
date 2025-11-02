# Absouts Website

A modern, full-stack web application for Absouts - featuring service showcases, career portal, and contact management. Built with React, TypeScript, Express, and Supabase.

## Features

- **Modern UI/UX**: Built with React, TypeScript, and Tailwind CSS
- **Service Showcases**: Detailed pages for AI Solutions, Cloud Services, E-commerce, Fintech, Legal Tech, Mobile Apps, Testing, and Web Portals
- **Career Portal**: Dynamic job listings powered by Supabase with application management
- **Contact Management**: Secure contact form with email notifications via Resend
- **Multi-language Support**: English and Spanish translations
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Rate Limiting**: Built-in protection against spam and abuse
- **Email Notifications**: Automated emails for contact forms and job applications

## Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Wouter** - Client-side routing
- **React Query** - Server state management
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animations
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend
- **Express.js** - Web server framework
- **TypeScript** - Type safety
- **Supabase** - PostgreSQL database and authentication
- **Resend** - Transactional email service
- **Express Session** - Session management

### Development
- **ESBuild** - Fast JavaScript bundler
- **TSX** - TypeScript execution
- **Dotenv** - Environment variable management

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** 9.x or higher
- A **Supabase** account (free tier available)
- A **Resend** account (free tier available)

## Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd absouts-site
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Update the `.env` file with your actual credentials:

```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key

# Resend Email Configuration
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your-email@example.com
RESEND_CAREERS_EMAIL=careers@yourcompany.com

# Optional
NODE_ENV=development
PORT=8080
```

### 4. Set Up Supabase

Follow the detailed instructions in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) to:
1. Create a Supabase project
2. Set up the database tables
3. Configure Row Level Security
4. Add sample job postings

Quick setup (after creating your Supabase project):

```bash
# Run the SQL setup script in your Supabase SQL Editor
# Copy contents from supabase-setup.sql and execute
```

### 5. Set Up Resend

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use the test domain
3. Create an API key from the dashboard
4. Add the API key to your `.env` file

### 6. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type-check TypeScript files

## Project Structure

```
absouts-site/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── assets/           # Images and static assets
│   │   ├── components/       # React components
│   │   │   ├── forms/       # Form components
│   │   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   │   ├── services/    # Service page components
│   │   │   └── ui/          # Reusable UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utilities and configurations
│   │   │   ├── services/    # Service configurations
│   │   │   └── translations/ # i18n translations
│   │   ├── pages/           # Page components
│   │   ├── App.tsx          # Main App component
│   │   └── main.tsx         # Entry point
│   └── index.html           # HTML template
├── server/                   # Backend Express application
│   ├── lib/                 # Server utilities
│   │   └── supabase.ts     # Supabase client
│   ├── middleware/          # Express middleware
│   │   └── rate-limiter.ts # Rate limiting
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   └── storage.ts          # Database operations
├── shared/                  # Shared types and schemas
│   └── schema.ts           # Zod schemas
├── attached_assets/        # Asset files
├── .env.example           # Environment variables template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── vercel.json            # Vercel deployment configuration
```

## API Endpoints

### Public Endpoints

- `GET /api/jobs` - Get all published job listings
- `GET /api/jobs/:id` - Get specific job details
- `POST /api/contact` - Submit contact form (rate-limited)
- `POST /api/job-applications` - Submit job application (rate-limited)
- `POST /api/upload-resume` - Upload resume file

### Rate Limits

- **Contact Form**: 3 submissions per 15 minutes per IP
- **Job Applications**: 5 applications per hour per IP

## Deploying to Vercel

### Prerequisites

1. A [Vercel account](https://vercel.com) (free tier available)
2. Supabase project set up and running
3. Resend API key configured

### Deployment Steps

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your repository
   - Vercel will auto-detect the framework settings

3. **Configure Environment Variables**:
   Click "Environment Variables" and add:

   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-supabase-anon-key
   RESEND_API_KEY=re_your_api_key_here
   RESEND_FROM_EMAIL=onboarding@resend.dev
   RESEND_TO_EMAIL=your-email@example.com
   RESEND_CAREERS_EMAIL=careers@yourcompany.com
   NODE_ENV=production
   ```

4. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (~2-3 minutes)
   - Your site will be live at `https://your-project.vercel.app`

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Add Environment Variables**:
   ```bash
   vercel env add SUPABASE_URL
   vercel env add SUPABASE_ANON_KEY
   vercel env add RESEND_API_KEY
   vercel env add RESEND_FROM_EMAIL
   vercel env add RESEND_TO_EMAIL
   vercel env add RESEND_CAREERS_EMAIL
   ```

5. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Post-Deployment Configuration

#### 1. Update Supabase Settings

In your Supabase project dashboard:

1. Go to **Authentication** → **URL Configuration**
2. Add your Vercel domain to **Site URL**: `https://your-project.vercel.app`
3. Add to **Redirect URLs**: `https://your-project.vercel.app/**`

#### 2. Update Resend Settings

In your Resend dashboard:

1. Go to **Domains**
2. Verify your custom domain (optional but recommended)
3. Update DNS records as instructed
4. Update `RESEND_FROM_EMAIL` in Vercel environment variables to use your verified domain

#### 3. Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Update DNS records as instructed by Vercel
5. Wait for DNS propagation (~24 hours max)

### Vercel Configuration Details

The `vercel.json` file is pre-configured with:

- **Build Settings**: Optimized build command and output directory
- **Routing**: Proper SPA routing with API rewrites
- **Environment Variables**: Automatic exposure to build process
- **Serverless Functions**: API routes converted to serverless functions
- **Static File Serving**: Efficient serving of built assets

### Troubleshooting Vercel Deployment

#### Build Fails

**Error**: "Module not found" or "Type error"

**Solution**:
```bash
# Clear local build cache
rm -rf dist node_modules
npm install
npm run build

# If successful locally, push and redeploy
```

#### Environment Variables Not Working

**Solution**:
1. Check spelling in Vercel dashboard
2. Ensure all required variables are set
3. Redeploy after adding variables
4. Check build logs for missing variable errors

#### API Routes Return 404

**Solution**:
- Verify `vercel.json` is present
- Check that routes match your server/routes.ts
- Ensure rewrites are configured correctly

#### Supabase Connection Issues

**Solution**:
1. Verify `SUPABASE_URL` and `SUPABASE_ANON_KEY` in Vercel
2. Check Supabase dashboard for any service outages
3. Ensure your Supabase project allows connections from any IP
4. Check RLS policies are not blocking requests

#### Email Not Sending

**Solution**:
1. Verify `RESEND_API_KEY` is correct
2. Check domain verification in Resend
3. Review Resend logs for delivery issues
4. Ensure `FROM` email is from verified domain

### Monitoring and Logs

**View Deployment Logs**:
1. Go to Vercel dashboard
2. Select your project
3. Click on latest deployment
4. View "Build Logs" and "Function Logs"

**Monitor Performance**:
- Vercel provides automatic performance monitoring
- Check **Analytics** tab for visitor metrics
- Review **Speed Insights** for performance data

## Database Schema

### contact_submissions Table

Stores contact form submissions:

```typescript
{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  serviceInterest?: string;
  message: string;
  createdAt: Date;
}
```

### job_applications Table

Stores job applications:

```typescript
{
  id: number;
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  resumeUrl: string;
  coverLetter?: string;
  createdAt: Date;
}
```

### absoutsjobs Table

Stores job listings (managed in Supabase):

```typescript
{
  id: UUID;
  job_title: string;
  job_short_description: string;
  job_type: 'full_time' | 'part_time' | 'contract' | 'internship' | 'temporary' | 'freelance';
  location?: string;
  is_remote: boolean;
  required_skills: string[];
  qualifications: string[];
  requirements: string[];
  salary_min?: number;
  salary_max?: number;
  salary_currency: string;
  company_name: string;
  status: 'draft' | 'published' | 'closed';
  posted_at: Date;
  created_at: Date;
  updated_at: Date;
}
```

## Security Features

- **Rate Limiting**: Protects against spam and abuse
- **Input Sanitization**: XSS protection for all user inputs
- **Email Validation**: RFC-compliant email validation
- **Row Level Security**: Database-level security with Supabase RLS
- **Environment Variables**: Sensitive data kept in environment variables
- **HTTPS Only**: Enforced in production
- **Content Security Policy**: Configured via Vercel headers

## Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components and images loaded on demand
- **Image Optimization**: Responsive images with proper formats
- **Caching**: Aggressive caching for static assets
- **Minification**: Production builds are minified and compressed
- **Tree Shaking**: Unused code removed from bundles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- Create an issue in this repository
- Email: support@absouts.com
- Documentation: [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Database by [Supabase](https://supabase.com/)
- Email by [Resend](https://resend.com/)
- Hosted on [Vercel](https://vercel.com/)
