export type SiteConfig = typeof siteConfig
import { TbMessage2Question } from "react-icons/tb";

export const siteConfig = {
  nameLogo: "LOGO",
  nameMetada: "Sonqu",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Inicio",
      href: "/",

    },
    {
      title: "Page 2",
      href: "/suscripcion-web",

    },
    {
      title: "Page 3",
      href: "/dudas",
      icon: TbMessage2Question,


    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}