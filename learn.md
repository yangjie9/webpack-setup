# 学习笔记

## 初始化项目

```
npm init -y
```

## 安装依赖

```
npm install webpack webpack-cli webpack-dev-server --save-dev
```

新建 webpack.config.js 文件,配置打包规则；

配置打包和启动命令[package.json]

```
"scripts": {
    "build": "webpack",
    "start": "webpack serve"
  },
```

## 配置 babel loader

```
npm install @babel/core @babel/preset-env babel-loader --save-dev
```
