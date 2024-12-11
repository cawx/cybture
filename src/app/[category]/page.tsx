import { getAllCategories, getCategoryBySlug } from "../data";
import CategoryPageClient from "./CategoryClient";

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return Object.entries(categories).map(([slug]) => ({
    params: { category: slug },
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const categoryData = await getCategoryBySlug(category);
  return <CategoryPageClient initialCategory={categoryData} />;
}
