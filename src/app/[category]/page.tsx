import { getAllCategories, getCategoryBySlug } from "../data";
import CategoryPageClient from "./CategoryClient";

type paramsType = Promise<{ category: string }>;

export async function generateStaticParams() {
  const categories = await getAllCategories();

  return Object.entries(categories).map(([slug]) => ({
    category: slug,
  }));
}

export default async function CategoryPage({ params }: { params: paramsType }) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  return <CategoryPageClient initialCategory={categoryData} />;
}
