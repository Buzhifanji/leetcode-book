import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "leetcode-book",
  description: "刷leetcode记",
  theme,
  base: "/",
  plugins: [
    searchPlugin({
      // 你的选项
    }),
  ],
});
