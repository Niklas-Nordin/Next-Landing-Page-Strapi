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
};
