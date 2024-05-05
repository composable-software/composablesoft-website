import type socialIcons from "@assets/socialIcons";

export type Site = {
  website: string;
  desc: string;
  title: string;
  author?: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
