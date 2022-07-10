import { SidebarItem } from "@vuepress/theme-default";
import fs from "fs";

export function readFileNames(path: string): SidebarItem[] {
  const result: SidebarItem[] = [];
  try {
    const files = fs.readdirSync(`./docs/${path}`);
    files.forEach((file) => {
      result.push({
        link: `/${path}/${file}`,
        text: file.replace(".md", ""),
      });
    });
  } catch (err) {
    console.log("读取文件错误：", err.message);
  }
  return result;
}
