import cmdData from "./data.json";

export interface command {
  id: string;
  name: string;
  description: string;
  docsLink: string;
}

export interface category {
  name: string;
  commands: command[];
}

export function getAllPossiblePaths() {
  const paths: { params: { category: string; command: string } }[] = [];

  Object.keys(cmdData.categories).forEach((categorySlug) => {
    cmdData.categories[categorySlug].commands.forEach((command) => {
      paths.push({
        params: {
          category: categorySlug,
          command: command.id,
        },
      });
    });
  });

  return paths;
}

export function getAllCategories(): Record<string, category> {
  console.log(cmdData.categories);
  return cmdData.categories;
}

export function getCategoryBySlug(categorySlug: string) {
  return cmdData.categories[categorySlug];
}
