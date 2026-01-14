import { getLandingPage } from "@/lib/strapi";
import { LandingPage } from "@/types";

interface HomeProps {
  params: {
    company: string;
  };
}

export default async function Home({ params }: HomeProps) {
  const {company} = await params;
  const landingPage: LandingPage | null = await getLandingPage(company);

  if (!landingPage) {
    return <h1>No landing page found</h1>;
  }

  const hero = landingPage.sections[0];

  return (
    <main>
      <h1>{hero.heading}</h1>
      <p>{hero.subheading}</p>
    </main>
  );
}