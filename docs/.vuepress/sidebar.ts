import { SidebarItem } from "@vuepress/theme-default";
import fs from "fs";
import { sidebar } from "vuepress-theme-hope";

function readFileNames(path: string): SidebarItem[] {
  const result: SidebarItem[] = [];
  try {
    const files = fs.readdirSync(`./docs/${path}`);
    files.forEach((file) => {
      result.push({
        link: `/${path}/${file}`,
        text: file.replace(".md", ""),
      });
    });
    result.sort((a, b) => {
      const getIndex = (value: string) => +value.split(".")[0];
      return getIndex(a.text) > getIndex(b.text) ? 1 : -1;
    });
  } catch (err) {
    console.log("读取文件错误：", err.message);
  }
  return result;
}

export default sidebar([
  {
    text: "数组",
    icon: "note",
    children: readFileNames("array"),
  },
]);
