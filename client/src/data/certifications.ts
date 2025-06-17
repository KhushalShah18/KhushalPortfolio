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
  imageUrl?: string; // URL to certification badge image
}

export const certifications: Certification[] = [
  //  Add your certifications here
  //  Example format:
  {
    id: "az-305",
    title: "Azure Solutions Architect Expert",
    issuer: "Microsoft",
    description:
      "Designing and implementing solutions that run on Microsoft Azure",
    dateObtained: "2024-11-19",
    level: "Expert",
    icon: "cloud",
    color: "blue",
    credentialId: "6138295B776ADC97",
    verificationUrl:
      "https://learn.microsoft.com/en-ca/users/khushalshah-1527/credentials/6138295b776adc97?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    imageUrl: "/images/microsoft-expert-badge.png"
  },
];
