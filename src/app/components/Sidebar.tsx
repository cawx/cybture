"use client";
import { useState } from "react";
import { getAllCategories } from "../data";
import Link from "next/link";

export default function Sidebar() {
  const categories = getAllCategories();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = Object.entries(categories).filter(
    ([, category]) => {
      const categoryMatches = category.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const toolsMatch = category.tools.filter((tool) =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return categoryMatches || toolsMatch.length > 0;
    }
  );

  return (
    <aside className="w-[250px] shrink-0 border-r-[1px] border-white/20">
      <div className="p-4 h-screen overflow-y-auto">
        <input
          id="search"
          className="w-full bg-[#252525] border-[1px] border-white/20 py-1 px-2 rounded-md"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="space-y-4 mt-4">
          {filteredCategories.map(([categorySlug, category]) => (
            <li key={categorySlug}>
              <Link
                href={`/${categorySlug}`}
                className="text-xl font-semibold text-white/95 pt-4"
              >
                <p>{category.name}</p>
              </Link>
              <ul className="pt-3">
                {category.tools
                  .filter((tool) =>
                    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((cmd) => (
                    <li
                      key={cmd.id}
                      className="border-l-2 border-white/20 pl-3"
                    >
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
