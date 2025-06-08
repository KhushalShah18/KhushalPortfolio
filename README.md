# Khushal Shah - Portfolio Website

A professional portfolio website showcasing expertise as a Systems Engineer and Azure Solutions Architect Expert.

## Features

- **Responsive Design**: Modern, mobile-first design with smooth animations
- **Dynamic Sections**: 
  - Hero section with professional introduction
  - About section highlighting expertise
  - Education information from Seneca College
  - Skills showcase with Azure/DevOps focus
  - Dynamic certifications section
  - Contact information
- **Dark Mode Support**: Built-in theme switching capability
- **Professional SEO**: Optimized meta tags and Open Graph support

## Managing Certifications

To add or update your certifications, edit the `client/src/data/certifications.ts` file:

```typescript
export const certifications: Certification[] = [
  {
    id: "az-305",
    title: "Azure Solutions Architect Expert",
    issuer: "Microsoft",
    description: "Designing and implementing solutions that run on Microsoft Azure",
    dateObtained: "2024-01-15",
    level: "Expert",
    icon: "cloud",
    color: "blue",
    credentialId: "Your-Credential-ID",
    verificationUrl: "https://learn.microsoft.com/api/credentials/share/en-us/YourCredentialShare"
  }
  // Add more certifications here
];
```

### Available Options:

**Levels**: `"Fundamental"`, `"Associate"`, `"Expert"`, `"Specialty"`

**Icons**: `"cloud"`, `"settings"`, `"shield"`, `"database"`, `"server"`, `"award"`

**Colors**: `"blue"`, `"green"`, `"purple"`, `"orange"`, `"teal"`, `"indigo"`

## Development

```bash
npm run dev
```

Starts the development server with both frontend and backend.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Node.js
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Routing**: Wouter
- **Animations**: Framer Motion, CSS animations

## Deployment

The application is configured for deployment on Replit with automatic builds and hosting.