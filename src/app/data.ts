import data from "./data.json";

export interface ToolCommand {
  command: string;
  description: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  docsLink: string;
  commands: ToolCommand[];
}

export interface Category {
  name: string;
  tools: Tool[];
}

export function getAllCategories() {
  return data.categories;
}

export function getCategoryBySlug(slug: string): Category {
  return data.categories[slug as keyof typeof data.categories];
}
