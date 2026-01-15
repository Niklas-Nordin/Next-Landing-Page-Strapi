export type Company = {
  id: number;
  name: string;
  slug: string;
  primaryColor: string;
};

export type HeroSection = {
  __component: "sections.hero";
  id: number;
  heading: string;
  subheading: string;
};

export type LandingPage = {
  id: number;
  title: string;
  slug: string;
  sections: HeroSection[];
  company: Company;
};
