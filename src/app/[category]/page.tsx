import { getAllCategories, getCategoryBySlug, Tool } from "../data";
import Image from "next/image";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = await getCategoryBySlug(params.category);

  return (
    <div className="flex">
      <main className="p-4 w-full mx-auto max-w-[850px]">
        <div className="mb-8 font-light ">
          <span className="text-white/50">Category {">"} </span>
          {category.name}
        </div>

        <h1 className="text-3xl font-medium mb-2">{category.name}</h1>
        <div className="flex gap-x-1 mb-10">
          {category.tools.map((tool: Tool) => (
            <div
              key={tool.id}
              className="border-[2px] text-white/50 border-white/20 px-4 py-1 lowercase rounded-3xl font-light"
            >
              {tool.name}
            </div>
          ))}
        </div>
        {category.tools.map((tool: Tool) => (
          <div key={tool.id} className="mb-16">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{tool.name}</h2>
              <p className="text-white/80 mt-2 text-base">{tool.description}</p>
            </div>

            <div className="space-y-4">
              {tool.commands.map((command, index) => (
                <div key={index} className="">
                  <p className="text-white/70 mb-2">{command.description}</p>
                  <div className="bg-black/30 p-3 rounded flex justify-between">
                    <code className="block text-white/90">
                      {command.command}
                    </code>
                    <Image
                      src="/Copy.svg"
                      width={25}
                      height={25}
                      alt="Copy icon"
                      className="opacity-50"
                    />
                  </div>
                </div>
              ))}
            </div>
            {tool.docsLink && (
              <a
                href={tool.docsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline mt-4 text-blue-400/80 inline-block"
              >
                Official documentation
              </a>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const categories = getAllCategories();

  return Object.keys(categories).map((slug) => ({
    category: slug,
  }));
}
