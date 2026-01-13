export async function getLandingPage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[Slug][$eq]=Landing&populate=Sections`)
    const data = await res.json();
    console.log("data: ", data);
    return data;
}