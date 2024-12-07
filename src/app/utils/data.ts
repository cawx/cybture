import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "src", "app", "data", "data.json");

export function getData() {
  try {
    const jsonData = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading data file:", error);
    return {};
  }
}
