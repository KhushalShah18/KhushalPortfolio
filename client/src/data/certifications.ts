export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  dateObtained: string;
  level: "Fundamental" | "Associate" | "Expert" | "Specialty";
  icon: "cloud" | "settings" | "shield" | "database" | "server" | "award";
  color: "blue" | "green" | "purple" | "orange" | "teal" | "indigo";
  credentialId?: string;
  verificationUrl?: string;
}

export const certifications: Certification[] = [
  // Add your certifications here
  // Example format:
  // {
  //   id: "az-305",
  //   title: "Azure Solutions Architect Expert",
  //   issuer: "Microsoft",
  //   description: "Designing and implementing solutions that run on Microsoft Azure",
  //   dateObtained: "2024-01-15",
  //   level: "Expert",
  //   icon: "cloud",
  //   color: "blue",
  //   credentialId: "Your-Credential-ID",
  //   verificationUrl: "https://learn.microsoft.com/api/credentials/share/en-us/YourCredentialShare"
  // }
];