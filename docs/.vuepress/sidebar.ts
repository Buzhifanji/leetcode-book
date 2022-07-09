import { SidebarItem } from "@vuepress/theme-default";
import fs from "fs";
const allLeetcodeSidebar: SidebarItem[] = [];
function readDir() {
  try {
    allLeetcodeSidebar.length = 0;
    const files = fs.readdirSync("./docs/leetcode");
    files.forEach((file) => {
      allLeetcodeSidebar.push({
        link: `/leetcode/${file}`,
        text: file.replace(".md", ""),
      });
    });
  } catch (err) {
    console.log("读取文件错误：", err.message);
  }
}
readDir();
export { allLeetcodeSidebar };
