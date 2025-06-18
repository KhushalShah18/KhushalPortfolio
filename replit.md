# Khushal Shah - Portfolio Website

## Overview

This is a professional portfolio website for Khushal Shah, a Systems Engineer and Azure Solutions Architect Expert. The application is built as a static single-page website using React with TypeScript, designed to showcase professional expertise, certifications, and contact information with a modern, responsive design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Styling**: Custom CSS variables for theming with dark mode support
- **Data Management**: Static configuration files for certifications and content
- **Form Handling**: React Hook Form with Zod validation (if needed)

### Development Environment
- **Platform**: Replit with Node.js 20 and Web modules
- **Package Manager**: npm
- **Type Checking**: TypeScript with strict mode enabled

## Key Components

### Static Data Management
- **Certifications**: Configurable certification data in `client/src/data/certifications.ts`
- **Custom Images**: Professional badge images stored in `client/public/images/`
- **Content**: Static content managed through TypeScript configuration files

### Frontend Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Comprehensive shadcn/ui component suite including:
  - Navigation and layout components
  - Professional certification cards with custom badge images
  - Feedback components (toasts, dialogs)
  - Data display components (cards, badges)
- **Dynamic Content**: Certification management system with configurable display options
- **Professional Sections**: Hero, About, Education, Skills, Certifications, and Contact sections
- **Image Support**: Custom certification badge images with automatic fallback to icons

## Data Flow

1. **Static Content**: All content loaded from TypeScript configuration files
2. **Image Loading**: Custom certification badges loaded from public directory
3. **Component Rendering**: React components render content with professional styling
4. **User Interaction**: Smooth scrolling navigation and interactive elements

## External Dependencies

### Core Dependencies
- **UI Components**: Radix UI primitives for accessible component foundation
- **Styling**: Tailwind CSS for utility-first styling approach
- **Development**: Vite for build tooling and development server

### Key Libraries
- **Icons**: Lucide React for consistent iconography
- **Animation**: CSS-based animations with Tailwind utilities
- **Components**: shadcn/ui for professional UI components

## Deployment Strategy

### Production Build
- **Static Site**: Vite builds optimized static assets to `dist`
- **Assets**: Images and static files served from public directory
- **Single Page**: All content contained in one React application

### Environment Configuration
- **Development**: Vite dev server with hot reload
- **Production**: Static files that can be served from any web server
- **No Backend**: Pure client-side application with no server dependencies

### Replit Integration
- **Static Hosting**: Configured for static website deployment
- **Build Process**: Simple npm run build for production assets

## Changelog

```
Changelog:
- June 17, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```