export async function getLandingPage(companySlug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[slug][$eq]=home&filters[company][slug][$eq]=${companySlug}&populate=sections&populate=company`,
    { cache: "no-store" }
  );

  
  const data = await res.json();
  return data.data[0] ?? null;
}