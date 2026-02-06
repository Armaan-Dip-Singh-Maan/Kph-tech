export interface ServiceItem {
  id: string;
  title: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string; // icon key for component
}

export const servicesData: ServiceItem[] = [
  {
    id: "marketing",
    title: "Marketing & Growth Solutions",
    gradientFrom: "#5f72ee",
    gradientTo: "#6c5ce7",
    icon: "marketing",
  },
  {
    id: "design",
    title: "Design & Creative Services",
    gradientFrom: "#a770ef",
    gradientTo: "#cf75ed",
    icon: "design",
  },
  {
    id: "web-mobile",
    title: "Web & Mobile Application Development",
    gradientFrom: "#2afafc",
    gradientTo: "#4adeca",
    icon: "webmobile",
  },
  {
    id: "cloud-transform",
    title: "Cloud Transformation & Platform Engineering",
    gradientFrom: "#6c5ce7",
    gradientTo: "#4e54c8",
    icon: "cloud",
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Data/AI Transformation",
    gradientFrom: "#38C4AF",
    gradientTo: "#64D4C4",
    icon: "migration",
  },
  {
    id: "infrastructure",
    title: "Infrastructure Virtualization & Modernization",
    gradientFrom: "#724CBE",
    gradientTo: "#8F6EBE",
    icon: "infrastructure",
  },
  {
    id: "security",
    title: "Security & Compliance",
    gradientFrom: "#386CB7",
    gradientTo: "#275A9C",
    icon: "security",
  },
  {
    id: "enterprise-security",
    title: "Enterprise Security Architecture & Technical Assessments",
    gradientFrom: "#A087C9",
    gradientTo: "#8D7EA0",
    icon: "enterprise",
  },
];
