export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  dateObtained: string;
  level: "Fundamental" | "Associate" | "Expert" | "Specialty" | "Workshop";
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
      "Focuses on designing secure and scalable Azure infrastructure solutions",
    dateObtained: "2024-11-20",
    level: "Expert",
    icon: "cloud",
    color: "purple",
    credentialId: "6138295B776ADC97",
    verificationUrl:
      "https://learn.microsoft.com/en-ca/users/khushalshah-1527/credentials/6138295b776adc97?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    imageUrl: "/images/microsoft-expert-badge.png"
  },
  {
    id: "az-104",
    title: "Azure Administrator Associate",
    issuer: "Microsoft",
    description:
      "Validates Azure administration skills including resource, identity, and network management",
    dateObtained: "2023-09-26",
    level: "Associate",
    icon: "cloud",
    color: "orange",
    credentialId: "3D9B4615ECA94FCD",
    verificationUrl:
      "https://learn.microsoft.com/en-us/users/khushalshah-1527/credentials/3d9b4615eca94fcd?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    imageUrl: "/images/microsoft-associate-badge.png"
  },
  {
    id: "az-140",
    title: "Azure Virtual Desktop Speciality",
    issuer: "Microsoft",
    description:
      "Specializes in deploying and managing Azure Virtual Desktop environments",
    dateObtained: "2023-10-11",
    level: "Specialty",
    icon: "cloud",
    color: "indigo",
    credentialId: "FD7EA9A371CAC0B6",
    verificationUrl:
      "https://learn.microsoft.com/en-us/users/khushalshah-1527/credentials/fd7ea9a371cac0b6?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    imageUrl: "/images/microsoft-speciality-badge.png"
  },
  {
    id: "az-900",
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    description:
      "Covers foundational cloud concepts and core Azure services",
    dateObtained: "2022-12-11",
    level: "Fundamental",
    icon: "cloud",
    color: "green",
    credentialId: "E4FEFF53CB9AF519",
    verificationUrl:
      "https://learn.microsoft.com/en-us/users/khushalshah-1527/credentials/e4feff53cb9af519",
    imageUrl: "/images/microsoft-fundamentals-badge.png"
  },
  {
    id: "cc",
    title: "Confluent Fundamentals Accreditation",
    issuer: "Confluent",
    description:
      "Understanding of Apache Kafka and Confluent Platform",
    dateObtained: "2024-07-02",
    level: "Fundamental",
    icon: "cloud",
    color: "green",
    credentialId: "107624971",
    verificationUrl:
      "https://certificates.confluent.io/aa1321ae-716d-40a9-b065-c5a71a6e9e38#acc.9Pn6ovMX",
    imageUrl: "/images/confluent-fundamentals-badge.png"
  },
  {
    id: "aap",
    title: "Red Hat Ansible Automation",
    issuer: "Unilogik Systems Inc.",
    description:
      "Certificate of Completion: Hands-on RedHat Ansible Automation Workshop",
    dateObtained: "2025-04-30",
    level: "Workshop",
    icon: "cloud",
    color: "green",
    credentialId: "681143a11fe6687ce05c492b",
    verificationUrl:
      "https://badgr.com/public/assertions/utF97nTNRgqAllfG1oFgfQ",
    imageUrl: "/images/ansible-workshop-badge.png"
  }
];
