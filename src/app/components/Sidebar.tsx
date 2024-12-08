import { getAllCategories } from "../data";
import Link from "next/link";

export default function Sidebar() {
  const categories = getAllCategories();

  return (
    <aside className="w-[250px] shrink-0 border-r-[1px] border-white/20">
      <div className="p-4 h-screen overflow-y-auto">
        <input
          className="w-full bg-[#252525] border-[1px] border-white/20 py-1 px-2 rounded-md"
          placeholder="Search..."
        />
        <ul className="space-y-4">
          {Object.entries(categories).map(([categorySlug, category]) => (
            <li key={categorySlug}>
              <h3 className="text-xl font-semibold text-white/95 pt-4">
                {category.name}
              </h3>
              <ul className="pt-3">
                {category.commands.map((cmd) => (
                  <li key={cmd.id} className="border-l-2 border-white/20 pl-3">
                    <Link
                      className="inline-block text-white/80 hover:text-white truncate"
                      href={`/${categorySlug}#${cmd.id}`}
                    >
                      {cmd.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
