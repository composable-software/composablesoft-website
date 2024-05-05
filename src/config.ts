import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://composablesoft.com",
  desc: "As a passionate group of developers, we are dedicated to crafting robust solutions that blend cutting-edge technologies to enhance the world of online commerce",
  title: "Composable Software",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/composable-software",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
