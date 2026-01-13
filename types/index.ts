export type HeroSection = {
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