import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";
import { readFileNames } from "./config/sidebar";

export default defineUserConfig({
  base: "/leetcode-book/",
  lang: "zh-CN",
  title: "leetcode-book",
  description: "刷leetcode笔记",
  plugins: [],
  theme: recoTheme({
    autoSetCategory: true, // 自动设置分类
    autoAddCategoryToNavbar: true, // 自动将首页、分类和标签添加至头部导航条
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "buzhifanji",
    // series 为原 sidebar
    series: {
      "/": [
        {
          text: "数组",
          children: readFileNames("array"),
        },
      ],
    },
    navbar: [
      {
        text: "github",
        link: "https://github.com/Buzhifanji/leetcode-book",
      },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
});
