import { getLandingPage } from "@/lib/strapi";
import { LandingPage } from "@/types";

async function Home() {
  const landingPage: LandingPage = await getLandingPage();
  console.log("landingpage: ", landingPage);
  return (
    <div>
      <h1>test</h1>
    </div>
  );
}

export default Home;