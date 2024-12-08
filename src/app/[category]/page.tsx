import { getCategoryBySlug, getAllCategories, command } from "../data";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: { category: string };
}

export function generateStaticParams() {
  const categories = getAllCategories();
  return Object.keys(categories).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  return (
    <section>
      <h1>{category.name}</h1>
      {category.commands.map((cmd: command) => (
        <div key={cmd.id} id={cmd.id}>
          <h2>{cmd.name}</h2>
          <p>{cmd.description}</p>
          <a href={cmd.docsLink} target="_blank" rel="noopener noreferrer">
            Official Docs
          </a>
        </div>
      ))}
    </section>
  );
}
