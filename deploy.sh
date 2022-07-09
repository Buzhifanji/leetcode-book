#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

msg='来自github actions的自动部署'
githubUrl=https://buzhifanji:${GITHUB_TOKEN}@github.com/Buzhifanji/leetcode-book.git
git config --global user.name "buzhifanji"
git config --global user.email "buzhifanji@163.com"
git config --global init.defaultBranch "main"

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl main:gh-pages # 推送到github gh-pages分支
cd -
rm -rf docs/.vuepress/dist
