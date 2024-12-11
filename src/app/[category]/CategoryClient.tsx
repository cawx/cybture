"use client";

import { useState } from "react";

import { Tool } from "../data";

import Command from "../components/Command";

interface CategoryPageClientProps {
  initialCategory: {
    name: string;
    tools: Tool[];
  };
}

export default function CategoryPageClient({
  initialCategory,
}: CategoryPageClientProps) {
  const [category] = useState(initialCategory);

  return (
    <div className="flex">
      <section className="p-4 w-full mx-auto max-w-[850px]">
        <div className="mb-8 font-light">
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
            <div className="mb-4 flex items-center">
              <h2 className="text-xl font-semibold mr-1">{tool.name}</h2>
              <p className="text-white/50 text-base italic">
                - {tool.description}
              </p>
            </div>

            <div className="space-y-4">
              {tool.commands.map((command, index) => (
                <Command key={index} command={command} />
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
      </section>
    </div>
  );
}
