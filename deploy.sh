#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git config --global user.name "buzhifanji"
git config --global user.email "buzhifanji@163.com"

git init
git checkout -b main
git add -A
git commit -m "来自github actions的自动部署"
git push -f https://buzhifanji:${GITHUB_TOKEN}@github.com/Buzhifanji/leetcode-book.git main:gh-pages # 推送到github gh-pages分支

cd -
rm -rf docs/.vuepress/dist
