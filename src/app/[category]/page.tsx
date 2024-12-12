import { getAllCategories, getCategoryBySlug } from "../data";
import CategoryPageClient from "./CategoryClient";

type Params = Promise<{ category: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateStaticParams() {
  const categories = await getAllCategories();

  return Object.entries(categories).map(([slug]) => ({
    category: slug,
  }));
}

export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;

  const category = params.category;

  return {
    title: `Category: ${category}`,
  };
}

export default async function CategoryPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;

  const { category } = params;

  const categoryData = await getCategoryBySlug(category);

  return <CategoryPageClient initialCategory={categoryData} />;
}
