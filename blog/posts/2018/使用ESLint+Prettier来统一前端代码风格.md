---
title: 使用ESLint+Prettier来统一前端代码风格
author: shenfq
date: 2018/06/18
thumbnail: //file.shenfq.com/18-8-16/16853165.jpg
categories:
- 前端
tags:
- 前端
- 代码格式化
- ESLint
---

# 使用ESLint+Prettier来统一前端代码风格

> 加分号还是不加分号？tab还是空格？你还在为代码风格与同事争论得面红耳赤吗？


正文之前，先看个段子放松一下： [去死吧！你这个异教徒！](https://zhuanlan.zhihu.com/p/19700946)

想起自己刚入行的时候，从svn上把代码checkout下来，看到同事写的代码，大括号居然换行了。心中暗骂，这个人是不是个**，大括号为什么要换行？年轻气盛的我，居然满腔怒火，将空行一一删掉。
但是关于代码风格，我们很难区分谁对谁错，不同的人有不同偏好，唯有强制要求才能规避争论。

所以，团队关于代码风格必须遵循两个基本原则：

1. 少数服从多数；
2. 用工具统一风格。

本文将介绍，如何使用ESLint + Prettier来统一我们的前端代码风格。

<!-- more -->


## Prettier是什么？

首先，对应ESLint大多都很熟悉，用来进行代码的校验，但是Prettier（直译过来就是"更漂亮的"😂）听得可能就比较少了。js作为一门灵活的弱类型语言，代码风格千奇百怪，一千个人写js就有一千种写法。虽然js没有官方推荐的代码规范，不过社区有些比较热门的代码规范，比如[standardjs](https://standardjs.com/readme-zhcn.html)、[airbnb](https://github.com/airbnb/javascript)。使用ESLint配合这些规范，能够检测出代码中的潜在问题，提高代码质量，但是并不能完全统一代码风格，因为这些代码规范的重点并不在代码风格上（虽然有一些限制）。

#### 下面开始安利，Prettier。

Prettier是一个能够完全统一你和同事代码风格的利器，假如你有个c++程序员转行过来写前端的同事，你发现你们代码风格完全不一样，你难道要一行行去修改他的代码吗，就算你真的去改，你的需求怎么办，所以没有人真的愿意在保持代码风格统一上面浪费时间。选择Prettier能够让你节省出时间来写更多的bug（不对，是修更多的bug），并且统一的代码风格能保证代码的可读性。

#### 看看Prettier干的好事。

![gif](https://file.shenfq.com/18-6-18/90739745.jpg)
![gif](https://file.shenfq.com/18-6-18/93998995.jpg)

能支持jsx

![gif](https://file.shenfq.com/18-6-18/85648012.jpg)

也能支持css

![gif](https://file.shenfq.com/18-6-18/55246702.jpg)

唯一的遗憾是，暂时还不能格式化vue模版文件中template部分。


## ESLint 与 Prettier配合使用

首先肯定是需要安装`prettier`，并且你的项目中已经使用了ESLint，有`eslintrc.js`配置文件。

```bash
npm i -D prettier
```

#### 配合ESLint检测代码风格

安装插件：

```bash
npm i -D eslint-plugin-prettier
```

eslint-plugin-prettier插件会调用prettier对你的代码风格进行检查，其原理是先使用prettier对你的代码进行格式化，然后与格式化之前的代码进行对比，如果过出现了不一致，这个地方就会被prettier进行标记。

接下来，我们需要在rules中添加，`"prettier/prettier": "error"`，表示被prettier标记的地方抛出错误信息。

```js
//.eslintrc.js
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

借助ESLint的autofix功能，在保存代码的时候，自动将抛出error的地方进行fix。因为我们项目是在webpack中引入eslint-loader来启动eslint的，所以我们只要稍微修改webpack的配置，就能在启动webpack-dev-server的时候，每次保存代码同时自动对代码进行格式化。

```javascript
const path = require('path')
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
    	loader: 'eslint-loader',
    	enforce: 'pre',
    	include: [path.join(__dirname, 'src')],
    	options: {
          fix: true
    	}
      }
    ]
}
```

如果你的eslint是直接通过cli方式启动的，那么只需要在后面加上fix即可，如：`eslint --fix`。


#### 如果与已存在的插件冲突怎么办

```bash
npm i -D eslint-config-prettier
```

通过使用eslint-config-prettier配置，能够关闭一些不必要的或者是与prettier冲突的lint选项。这样我们就不会看到一些error同时出现两次。使用的时候需要确保，这个配置在extends的最后一项。

```javascript
//.eslintrc.js
{
  extends: [
    'standard', //使用standard做代码规范
    "prettier",
  ],
}
```

这里有个[文档](https://github.com/prettier/eslint-config-prettier#special-rules)，列出了会与prettier冲突的配置项。


#### 同时使用上面两项配置

如果你同时使用了上述的两种配置，那么你可以通过如下方式，简化你的配置。

```javascript
//.eslintrc.js
{
  "extends": ["plugin:prettier/recommended"]
}
```

最后贴一下我们项目中的完整配置，是在vue-cli生成的代码基础上修改的，并且使用standard做代码规范：

```javascript
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    "plugin:prettier/recommended",
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "prettier/prettier": "error",
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

```

#### 什么？你们项目没有启用ESLint

不要慌，没有ESLint也不要怕，可以通过[onchange](https://www.npmjs.com/package/onchange)进行代码的监听，然后自动格式化代码。只要在package.json的scripts下添加如下代码，然后使用`npm run format`，我们就能监听src目录下所有的js文件并进行格式化：

```javascript
"scripts": {
  "format": "onchange 'src/**/*.js' -- prettier --write {{changed}}"
}
```

当你想格式化的文件不止js文件时，也可以添加多个文件列表。

```javascript
"scripts": {
  "format": "onchange 'test/**/*.js' 'src/**/*.js' 'src/**/*.vue' -- prettier --write {{changed}}"
}
```

当然，你也能够在编辑器中配置对prettier的支持，具体支持哪些编辑器，请戳[这里](https://prettier.io/docs/en/editors.html)


## 如何对Prettier进行配置

一共有三种方式支持对Prettier进行配置：

1. 根目录创建`.prettierrc `文件，能够写入YML、JSON的配置格式，并且支持`.yaml/.yml/.json/.js`后缀；
2. 根目录创建`.prettier.config.js `文件，并对外export一个对象；
3. 在`package.json`中新建`prettier`属性。

下面我们使用`prettierrc.js`的方式对prettier进行配置，同时讲解下各个配置的作用。

```javascript
module.exports = {
  "printWidth": 80, //一行的字符数，如果超过会进行换行，默认为80
  "tabWidth": 2, //一个tab代表几个空格数，默认为80
  "useTabs": false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
  "singleQuote": false, //字符串是否使用单引号，默认为false，使用双引号
  "semi": true, //行位是否使用分号，默认为true
  "trailingComma": "none", //是否使用尾逗号，有三个可选值"<none|es5|all>"
  "bracketSpacing": true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  "parser": "babylon" //代码的解析引擎，默认为babylon，与babel相同。
}
```

配置大概列出了这些，还有一些其他配置可以在[官方文档](https://prettier.io/docs/en/options.html)进行查阅。

注意一点，parser的配置项官网列出了如下可选项：

- babylon
- flow
- typescript Since v1.4.0
- postcss Since v1.4.0
- json Since v1.5.0
- graphql Since v1.5.0
- markdown Since v1.8.0

但是如果你使用了vue的单文件组件形式，记得将`parser`配置为vue，目前官方文档没有列出来。当然如果你自己写过AST的解析器，也可以用你自己的写的`parser: require("./my-parser")`。



## 总结

有了prettier我们再也不用羡慕隔壁写golang的同事，保存后就能自动format，也不用为了项目代码不统一和同事争论得面红耳赤，因为我们统一使用prettier的风格。可能刚开始有些地方你看不惯，不过不要紧，想想这么做都是为了团队和睦，世界和平，我们做出的牺牲都是必要的。而且prettier的样式风格已经在很多大型开源项目中被采用，比如react、webpack、babel。

![他们都在用](https://file.shenfq.com/18-6-18/78377904.jpg)

你看，他们都在用了，你还在等什么，想变成异教徒被烧死吗，还不快行动起来。更多精彩内容请看[官方链接](https://prettier.io/)


