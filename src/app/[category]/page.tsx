import { getAllCategories, getCategoryBySlug } from "../data";
import CategoryPageClient from "./CategoryClient";

export async function generateStaticParams() {
  const categories = getAllCategories();

  return Object.keys(categories).map((slug) => ({
    category: slug,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = getCategoryBySlug(params.category);

  return <CategoryPageClient initialCategory={category} />;
}
