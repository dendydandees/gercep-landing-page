import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
} from "lucide-react";

export const WHATSAPP_URL = "https://wa.me/628119898922";
export const WHATSAPP_TEXT =
  "Hi GERCEP, I'm interested in your logistics services and would appreciate a quote for my needs.";
export const MAILTO_URL = "mailto:kevin@gci-express.com";

export const OUR_CLIENTS = [
  {
    name: "SAP Express" as const,
    logo: "/sap-icon.webp" as string,
  },
  {
    name: "Morrison Express" as const,
    logo: "/morrison-icon.webp" as string,
  },
  {
    name: "Hyundai Elevator" as const,
    logo: "/hyundai-icon.webp" as string,
  },
  {
    name: "Watson" as const,
    logo: "/watsons-icon.webp" as string,
  },
  {
    name: "Agriku" as const,
    logo: "/agriku-icon.webp" as string,
  },
  {
    name: "Power Commerce Asia" as const,
    logo: "/pca-icon.webp" as string,
  },
  {
    name: "Jasa Marga" as const,
    logo: "/jasa-marga-icon.webp" as string,
  },
  {
    name: "Goday" as const,
    logo: "/goday-icon.webp" as string,
  },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Warehouse Management", href: "#" },
    { label: "Expedition", href: "#" },
    { label: "Outsourcing", href: "#" },
    { label: "Logistics Consulting", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Vision", href: "#" },
    { label: "Board of Directors", href: "#" },
    { label: "Contact", href: "#" },
  ],
  contacts: [
    { label: "Jakarta, Indonesia", href: "#", icon: MapPinIcon },
    { label: "+62 811 9898 922", href: WHATSAPP_URL, icon: PhoneIcon },
    { label: "kevin@gci-express.com", href: MAILTO_URL, icon: MailIcon },
  ],
  socials: [
    { icon: FacebookIcon, href: "#", label: "Facebook" },
    { icon: InstagramIcon, href: "#", label: "Instagram" },
    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
    { icon: TwitterIcon, href: "#", label: "Twitter" },
  ],
};
