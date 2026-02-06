export interface PartnerItem {
  id: string;
  name: string;
  description?: string;
  logoType: "techconnect" | "placeholder";
  accentColor?: string;
}

export const partnersData: PartnerItem[] = [
  {
    id: "techconnect",
    name: "TECH CONNECT",
    logoType: "techconnect",
    accentColor: "#E64A19",
  },
  {
    id: "partner2",
    name: "Partner 2",
    description: "Description of partner 2 and our collaboration.",
    logoType: "placeholder",
  },
];
