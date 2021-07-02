import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/modular_javascript.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/modular_javascript.html",
    'title': "Modular JS",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Modular JS</h1>\n<iframe src="//slides.com/xcatliu/modular_js/embed" width="620" height="400" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<h2 id="%E6%A6%82%E8%BF%B0%E5%8F%91%E5%B1%95">概述，发展<a class="anchor" href="#%E6%A6%82%E8%BF%B0%E5%8F%91%E5%B1%95">§</a></h2>\n<h3 id="%E6%A8%A1%E5%9D%97%E5%8C%96%E5%AE%9A%E4%B9%89">模块化定义<a class="anchor" href="#%E6%A8%A1%E5%9D%97%E5%8C%96%E5%AE%9A%E4%B9%89">§</a></h3>\n<ul>\n<li>一种将系统分离成独立功能部分的方法</li>\n<li>优缺点</li>\n</ul>\n<h3 id="js-%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%91%E5%B1%95">js 模块化发展<a class="anchor" href="#js-%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%91%E5%B1%95">§</a></h3>\n<ul>\n<li>内容样式交互混合</li>\n<li>分离成独立文件</li>\n<li>动态加载</li>\n<li>服务器端 js，CommonJS</li>\n<li>发展到客户端 AMD</li>\n</ul>\n<h2 id="commonjs">CommonJS<a class="anchor" href="#commonjs">§</a></h2>\n<h3 id="commonjs-%E8%A7%84%E8%8C%83">CommonJS 规范<a class="anchor" href="#commonjs-%E8%A7%84%E8%8C%83">§</a></h3>\n<ul>\n<li>CommonJS API 定义很多普通应用程序（主要指非浏览器的应用）使用的API</li>\n<li>CommonJS 规范包括哪些方面</li>\n</ul>\n<h3 id="commonjs-%E5%92%8C-nodejs-%E5%85%B3%E7%B3%BB">CommonJS 和 NodeJS 关系<a class="anchor" href="#commonjs-%E5%92%8C-nodejs-%E5%85%B3%E7%B3%BB">§</a></h3>\n<ul>\n<li>NodeJS 实现了部分 CommonJS API</li>\n</ul>\n<h2 id="amd">AMD<a class="anchor" href="#amd">§</a></h2>\n<h3 id="amd-%E8%A7%84%E8%8C%83">AMD 规范<a class="anchor" href="#amd-%E8%A7%84%E8%8C%83">§</a></h3>\n<ul>\n<li>CommonJS 演变而来</li>\n</ul>\n<h3 id="requirejscurljsseajs">RequireJS，curlJS，seaJS<a class="anchor" href="#requirejscurljsseajs">§</a></h3>\n<ul>\n<li>一些实现</li>\n</ul>\n<h2 id="es6">ES6<a class="anchor" href="#es6">§</a></h2>\n<h3 id="es6-%E8%A7%84%E8%8C%83">ES6 规范<a class="anchor" href="#es6-%E8%A7%84%E8%8C%83">§</a></h3>\n<ul>\n<li>module 规范</li>\n</ul>\n<h2 id="yui">YUI<a class="anchor" href="#yui">§</a></h2>\n<h3 id="yui-%E6%A8%A1%E5%9D%97%E5%8C%96%E7%BC%96%E7%A8%8B">YUI 模块化编程<a class="anchor" href="#yui-%E6%A8%A1%E5%9D%97%E5%8C%96%E7%BC%96%E7%A8%8B">§</a></h3>\n<ul>\n<li>namespace</li>\n</ul>\n<p>##$ YUI 使用 ES6 编写模块</p>\n<ul>\n<li>example</li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Modular JS"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<iframe src="//slides.com/xcatliu/modular_js/embed" width="620" height="400" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<h2 id="%E6%A6%82%E8%BF%B0%E5%8F%91%E5%B1%95">概述，发展<a class="anchor" href="#%E6%A6%82%E8%BF%B0%E5%8F%91%E5%B1%95">§</a></h2>\n<h3 id="%E6%A8%A1%E5%9D%97%E5%8C%96%E5%AE%9A%E4%B9%89">模块化定义<a class="anchor" href="#%E6%A8%A1%E5%9D%97%E5%8C%96%E5%AE%9A%E4%B9%89">§</a></h3>\n<ul>\n<li>一种将系统分离成独立功能部分的方法</li>\n<li>优缺点</li>\n</ul>\n<h3 id="js-%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%91%E5%B1%95">js 模块化发展<a class="anchor" href="#js-%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%91%E5%B1%95">§</a></h3>\n<ul>\n<li>内容样式交互混合</li>\n<li>分离成独立文件</li>\n<li>动态加载</li>\n<li>服务器端 js，CommonJS</li>\n<li>发展到客户端 AMD</li>\n</ul>\n<h2 id="commonjs">CommonJS<a class="anchor" href="#commonjs">§</a></h2>\n<h3 id="commonjs-%E8%A7%84%E8%8C%83">CommonJS 规范<a class="anchor" href="#commonjs-%E8%A7%84%E8%8C%83">§</a></h3>\n<ul>\n<li>CommonJS API 定义很多普通应用程序（主要指非浏览器的应用）使用的API</li>\n<li>CommonJS 规范包括哪些方面</li>\n</ul>\n<h3 id="commonjs-%E5%92%8C-nodejs-%E5%85%B3%E7%B3%BB">CommonJS 和 NodeJS 关系<a class="anchor" href="#commonjs-%E5%92%8C-nodejs-%E5%85%B3%E7%B3%BB">§</a></h3>\n<ul>\n<li>NodeJS 实现了部分 CommonJS API</li>\n</ul>\n<h2 id="amd">AMD<a class="anchor" href="#amd">§</a></h2>\n<h3 id="amd-%E8%A7%84%E8%8C%83">AMD 规范<a class="anchor" href="#amd-%E8%A7%84%E8%8C%83">§</a></h3>\n<ul>\n<li>CommonJS 演变而来</li>\n</ul>\n<h3 id="requirejscurljsseajs">RequireJS，curlJS，seaJS<a class="anchor" href="#requirejscurljsseajs">§</a></h3>\n<ul>\n<li>一些实现</li>\n</ul>\n<h2 id="es6">ES6<a class="anchor" href="#es6">§</a></h2>\n<h3 id="es6-%E8%A7%84%E8%8C%83">ES6 规范<a class="anchor" href="#es6-%E8%A7%84%E8%8C%83">§</a></h3>\n<ul>\n<li>module 规范</li>\n</ul>\n<h2 id="yui">YUI<a class="anchor" href="#yui">§</a></h2>\n<h3 id="yui-%E6%A8%A1%E5%9D%97%E5%8C%96%E7%BC%96%E7%A8%8B">YUI 模块化编程<a class="anchor" href="#yui-%E6%A8%A1%E5%9D%97%E5%8C%96%E7%BC%96%E7%A8%8B">§</a></h3>\n<ul>\n<li>namespace</li>\n</ul>\n<p>##$ YUI 使用 ES6 编写模块</p>\n<ul>\n<li>example</li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%A6%82%E8%BF%B0%E5%8F%91%E5%B1%95" }, "\u6982\u8FF0\uFF0C\u53D1\u5C55"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%A8%A1%E5%9D%97%E5%8C%96%E5%AE%9A%E4%B9%89" }, "\u6A21\u5757\u5316\u5B9A\u4E49")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#js-%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%91%E5%B1%95" }, "js \u6A21\u5757\u5316\u53D1\u5C55")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#commonjs" }, "CommonJS"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#commonjs-%E8%A7%84%E8%8C%83" }, "CommonJS \u89C4\u8303")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#commonjs-%E5%92%8C-nodejs-%E5%85%B3%E7%B3%BB" }, "CommonJS \u548C NodeJS \u5173\u7CFB")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#amd" }, "AMD"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#amd-%E8%A7%84%E8%8C%83" }, "AMD \u89C4\u8303")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#requirejscurljsseajs" }, "RequireJS\uFF0CcurlJS\uFF0CseaJS")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#es6" }, "ES6"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#es6-%E8%A7%84%E8%8C%83" }, "ES6 \u89C4\u8303")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#yui" }, "YUI"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#yui-%E6%A8%A1%E5%9D%97%E5%8C%96%E7%BC%96%E7%A8%8B" }, "YUI \u6A21\u5757\u5316\u7F16\u7A0B")))))),
    'author': undefined,
    'contributors': [],
    'date': "2014-03-06T00:00:00.000Z",
    'updated': null,
    'excerpt': "概述，发展 模块化定义 - 一种将系统分离成独立功能部分的方法 - 优缺点 js 模块化发展 - 内容样式交互混合 - 分离成独立文件 - 动态加载 - 服务器端 js，CommonJS - 发展到客户端 AMD CommonJS CommonJS 规范 - CommonJS API ...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "模块化",
        "JavaScript"
    ],
    'links': {
        "slide": "http://slides.com/xcatliu/modular_js/"
    },
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
