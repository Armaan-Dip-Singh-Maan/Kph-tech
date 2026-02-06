export type FeatureSide = "left" | "right";
export type FeatureIconType = "pricing" | "team" | "expertise" | "delivery" | "e2e" | "cloud";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: FeatureIconType;
  side: FeatureSide;
  iconBg: string; // hex for circle bg
  iconColor: string;
}

export const featuresData: FeatureItem[] = [
  {
    id: "pricing",
    title: "Better Pricing",
    description: "Competitive rates without compromising on enterprise-grade quality",
    icon: "pricing",
    side: "left",
    iconBg: "#D5E7FA",
    iconColor: "#42A5F5",
  },
  {
    id: "team",
    title: "Global Team Experience",
    description: "Professionals from Fortune 500 and leading MNCs worldwide",
    icon: "team",
    side: "right",
    iconBg: "#D5E7FA",
    iconColor: "#42A5F5",
  },
  {
    id: "expertise",
    title: "MNC-Level Expertise",
    description: "Enterprise-grade solutions backed by certified professionals",
    icon: "expertise",
    side: "left",
    iconBg: "#FDF2E3",
    iconColor: "#FF8C00",
  },
  {
    id: "delivery",
    title: "Faster Delivery",
    description: "Agile methodologies ensuring rapid deployment without compromising quality.",
    icon: "delivery",
    side: "right",
    iconBg: "#FFE0B2",
    iconColor: "#FF9900",
  },
  {
    id: "e2e",
    title: "End-to-End Services",
    description: "Complete IT, Cloud, Marketing, and Design solutions under one roof",
    icon: "e2e",
    side: "left",
    iconBg: "#D5E7FA",
    iconColor: "#42A5F5",
  },
  {
    id: "cloud",
    title: "Certified Cloud Experts",
    description: "Team certified in AWS, Azure, GCP, and other leading platforms.",
    icon: "cloud",
    side: "right",
    iconBg: "#B3E5FC",
    iconColor: "#66B2FF",
  },
];
