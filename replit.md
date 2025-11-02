# Overview

This is a full-stack web application for Absouts, a global outsourcing company specializing in Cloud Accounting, Business Process Outsourcing (BPO), and Software Development services. The application serves as a corporate website with service information, contact forms, career opportunities, and multilingual support.

# Recent Changes

**November 1, 2025** - Supabase Database Integration for Job Listings:
- **Supabase Integration**: Replaced static job data with live Supabase database connection
- **API Endpoints**: Created `/api/jobs` and `/api/jobs/:id` endpoints to fetch job listings from `absoutsjobs` table
- **Data Transformation**: Implemented automatic transformation from Supabase schema to frontend interface
- **Error Handling**: Proper 404/500 error handling with distinction between missing jobs and server errors
- **Job Filtering**: Only published jobs (`status = 'published'`) are displayed to users
- **Career Page**: Updated to dynamically fetch jobs from Supabase API
- **Job Detail Pages**: Fixed and updated to fetch individual job details from Supabase
- **Type Safety**: Added TypeScript interfaces matching Supabase schema (JobType, JobStatus, SupabaseJob)

**November 1, 2025** - Comprehensive brand color palette and design system implementation:
- **Header Design**: Modern pill-shaped navigation container centered in header with logo on left, language selector on right
- **Brand Color Palette**: Implemented complete brand color system with Deep Navy (#0B0B44), Midnight Blue (#2B3990), Bright Cyan (#27AAE1), and neutral tones
- **CSS Variables**: Defined brand colors as Tailwind utilities (brand-primary, brand-secondary, brand-accent, bg-base, bg-section, bg-surface, text-primary, text-secondary, text-muted, neutral-dark)
- **Button Design**: All buttons site-wide updated to pill-shaped (rounded-full) for modern, sleek appearance
- **Card Design**: All cards updated to highly rounded (rounded-2xl) for soft, welcoming aesthetic
- **Icon Containers**: Updated to rounded-2xl for consistency with card design system
- **Lucide Icons**: Integrated throughout website (Globe, Award, Shield, Mail, Phone, MapPin, ArrowRight, Sparkles, Target, Users, Download)
- **Typography**: Inter font (300-400 weight) for modern, thin, minimal aesthetics
- **Header Background**: Removed completely, now transparent with navigation pill having outer glow effect
- **Component Updates**: Updated all pages (Home, About, Services, Career, Contact), ServiceCard component, ContactForm with consistent brand colors and rounded design
- **Responsive Design**: Hamburger menu on tablet/mobile (md breakpoint), logo always visible
- **Shadow System**: Custom shadow utilities (shadow-subtle, shadow-medium, shadow-strong) using brand color palette defined in Tailwind config
- **CSS Architecture**: Complete variable system for chart colors and sidebar colors in both light and dark modes
- **Design Consistency**: End-to-end tested and verified across all pages for consistent brand application

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using **React 18** with **TypeScript** and follows a modern component-based architecture:

- **React Router**: Uses Wouter for client-side routing with pages for Home, About, Services, Career, and Contact
- **UI Framework**: Implements shadcn/ui component library with Radix UI primitives for accessible components
- **Styling**: TailwindCSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query for server state management and React Hook Form for form handling
- **Build Tool**: Vite for development and production builds with hot module replacement

## Backend Architecture
The backend follows a RESTful API design using **Node.js** and **Express**:

- **API Routes**: Express router with middleware for logging and error handling
- **Data Storage**: Currently uses in-memory storage with an interface designed for easy migration to database persistence
- **Email Service**: Nodemailer integration with Gmail SMTP for contact form notifications
- **Session Management**: Built-in support for PostgreSQL session storage via connect-pg-simple

## Database Schema
The application uses **Drizzle ORM** with **PostgreSQL** database support:

- **Users Table**: Basic user authentication schema with username/password
- **Contact Submissions**: Stores contact form data with company and service interest fields
- **Job Applications**: Comprehensive job application data including resume uploads and privacy consent
- **Schema Validation**: Zod schemas for type-safe data validation and API request/response handling

## Development & Deployment
- **TypeScript**: Full type safety across client and server code
- **Hot Reload**: Vite development server with Express middleware integration
- **Build Process**: Separate client (Vite) and server (esbuild) build processes
- **Asset Management**: Vite handles static assets with proper aliasing for components and shared code

# External Dependencies

## Core Framework Dependencies
- **React 18** with TypeScript for frontend development
- **Express.js** for backend API server
- **Vite** as build tool and development server
- **Drizzle ORM** with PostgreSQL dialect for database operations

## Database & Storage
- **@neondatabase/serverless** for PostgreSQL database connectivity
- **@supabase/supabase-js** for Supabase database integration and job listings management
- **connect-pg-simple** for PostgreSQL session storage
- **Drizzle Kit** for database schema management and migrations

## UI & Component Libraries
- **shadcn/ui** component system built on Radix UI primitives
- **TailwindCSS** for utility-first styling
- **Inter Font** - Modern, thin sans-serif typography for clean minimal design
- **Lucide React** for consistent iconography
- **class-variance-authority** and **clsx** for conditional styling

## Form Management & Validation
- **React Hook Form** with **@hookform/resolvers** for form handling
- **Zod** for schema validation and type inference
- **drizzle-zod** for database schema to Zod validation integration

## State Management & Data Fetching
- **TanStack Query** for server state management and caching
- **date-fns** for date manipulation and formatting

## Email & Communication
- **Nodemailer** for sending email notifications from contact forms
- **Gmail SMTP** configuration for reliable email delivery

## Translation & Internationalization
- **Google Translate API** integration for multi-language support
- Built-in language selector component supporting English, Arabic, French, German, and Spanish

## Development Tools
- **TypeScript** for type safety across the entire stack
- **ESLint** and development tooling for code quality
- **PostCSS** with Autoprefixer for CSS processing