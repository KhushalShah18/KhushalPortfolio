# Khushal Shah - Portfolio Website

## Overview

This is a professional portfolio website for Khushal Shah, a Systems Engineer and Azure Solutions Architect Expert. The application is built as a full-stack web application using React frontend with Node.js/Express backend, designed to showcase professional expertise, certifications, and contact information with a modern, responsive design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Styling**: Custom CSS variables for theming with dark mode support
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for RESTful API
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with tsx for TypeScript execution

### Development Environment
- **Platform**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Package Manager**: npm
- **Type Checking**: TypeScript with strict mode enabled
- **Code Quality**: ESLint and Prettier (inferred from dependencies)

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Extensible Design**: Schema designed for easy extension with additional entities

### Frontend Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Comprehensive shadcn/ui component suite including:
  - Navigation and layout components
  - Form controls and data input
  - Feedback components (toasts, dialogs)
  - Data display components (cards, tables, charts)
- **Dynamic Content**: Certification management system with configurable display options
- **Professional Sections**: Hero, About, Education, Skills, Certifications, and Contact sections

### API Architecture
- **RESTful Design**: API routes prefixed with `/api`
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Built-in request/response logging for API endpoints

## Data Flow

1. **Client Requests**: React frontend makes API calls using TanStack React Query
2. **API Processing**: Express.js routes handle requests and interact with storage layer
3. **Data Persistence**: Drizzle ORM manages database operations with PostgreSQL
4. **Response Handling**: JSON responses with proper error codes and structured data
5. **State Management**: React Query caches and synchronizes server state on the frontend

## External Dependencies

### Core Dependencies
- **Database**: Neon Database for serverless PostgreSQL hosting
- **UI Components**: Radix UI primitives for accessible component foundation
- **Styling**: Tailwind CSS for utility-first styling approach
- **Development**: Vite for build tooling and development server

### Key Libraries
- **Validation**: Zod for runtime type validation
- **Date Handling**: date-fns for date manipulation and formatting
- **Icons**: Lucide React for consistent iconography
- **Animation**: CSS-based animations with Tailwind utilities

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Asset Serving**: Express serves static files in production mode

### Environment Configuration
- **Development**: Hot reload with Vite dev server and tsx for backend
- **Production**: Single Node.js process serving both API and static assets
- **Database**: Environment variable configuration for database connections

### Replit Integration
- **Auto-scaling**: Configured for Replit's autoscale deployment target
- **Port Configuration**: Backend runs on port 5000, external port 80
- **Build Process**: Automated build pipeline with npm scripts

## Changelog

```
Changelog:
- June 17, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```