import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { blogPlugin } from "vuepress-plugin-blog2";
import { allLeetcodeSidebar } from "./sidebar";

export default defineUserConfig({
  base: "/leetcode-book/",
  lang: "zh-CN",
  title: "leetcode-book",
  description: "Just playing around",
  plugins: [blogPlugin({})],
  theme: defaultTheme({
    sidebar: {
      "/": [
        {
          text: "leetcode全集",
          children: allLeetcodeSidebar,
        },
      ],
    },
    navbar: [
      {
        text: "github",
        link: "https://github.com/Buzhifanji/leetcode-book",
      },
    ],
  }),
});
