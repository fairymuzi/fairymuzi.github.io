import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/two_hexo_plugins.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/two_hexo_plugins.html",
    'title': "撸了两个 Hexo 的 Plugins",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>撸了两个 Hexo 的 Plugins</h1>\n<p>都是从 git log 获取数据填充到 posts 中：</p>\n<h2 id="hexo-filter-date-from-git"><a href="https://github.com/xcatliu/hexo-filter-date-from-git">hexo-filter-date-from-git</a><a class="anchor" href="#hexo-filter-date-from-git">§</a></h2>\n<ul>\n<li>获取 post 的第一个提交的 date 作为 front-matter 中的 <code>date</code></li>\n<li>获取 post 的最后一个提交的 date 作为 front-matter 中的 <code>updated</code></li>\n</ul>\n<h3 id="%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98">解决的问题<a class="anchor" href="#%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98">§</a></h3>\n<p>hexo 中如果没有在 front-matter 中指定 <code>date</code>，则会读取文件的创建日期和修改日期。\n但是这个日期是不可靠的。如果重新 clone 一份代码，则所有文件的创建日期都变成了 clone 的时间。</p>\n<h2 id="hexo-filter-author-from-git"><a href="https://github.com/xcatliu/hexo-filter-author-from-git">hexo-filter-author-from-git</a><a class="anchor" href="#hexo-filter-author-from-git">§</a></h2>\n<ul>\n<li>获取 post 的第一个提交的 <a href="http://user.name">user.name</a> 作为 author</li>\n<li>获取 post 的所有提交的 <a href="http://user.name">user.name</a> ，生成一个数组作为 contributors</li>\n</ul>\n<h3 id="%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98-1">解决的问题<a class="anchor" href="#%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98-1">§</a></h3>\n<p>手动维护一个 contributors 列表太麻烦了。</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u64B8\u4E86\u4E24\u4E2A Hexo \u7684 Plugins"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>都是从 git log 获取数据填充到 posts 中：</p>\n<h2 id="hexo-filter-date-from-git"><a href="https://github.com/xcatliu/hexo-filter-date-from-git">hexo-filter-date-from-git</a><a class="anchor" href="#hexo-filter-date-from-git">§</a></h2>\n<ul>\n<li>获取 post 的第一个提交的 date 作为 front-matter 中的 <code>date</code></li>\n<li>获取 post 的最后一个提交的 date 作为 front-matter 中的 <code>updated</code></li>\n</ul>\n<h3 id="%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98">解决的问题<a class="anchor" href="#%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98">§</a></h3>\n<p>hexo 中如果没有在 front-matter 中指定 <code>date</code>，则会读取文件的创建日期和修改日期。\n但是这个日期是不可靠的。如果重新 clone 一份代码，则所有文件的创建日期都变成了 clone 的时间。</p>\n<h2 id="hexo-filter-author-from-git"><a href="https://github.com/xcatliu/hexo-filter-author-from-git">hexo-filter-author-from-git</a><a class="anchor" href="#hexo-filter-author-from-git">§</a></h2>\n<ul>\n<li>获取 post 的第一个提交的 <a href="http://user.name">user.name</a> 作为 author</li>\n<li>获取 post 的所有提交的 <a href="http://user.name">user.name</a> ，生成一个数组作为 contributors</li>\n</ul>\n<h3 id="%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98-1">解决的问题<a class="anchor" href="#%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98-1">§</a></h3>\n<p>手动维护一个 contributors 列表太麻烦了。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#hexo-filter-date-from-git" }, "hexo-filter-date-from-git"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98" }, "\u89E3\u51B3\u7684\u95EE\u9898")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#hexo-filter-author-from-git" }, "hexo-filter-author-from-git"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98-1" }, "\u89E3\u51B3\u7684\u95EE\u9898")))))),
    'author': undefined,
    'contributors': [],
    'date': "2021-07-02T06:13:03.800Z",
    'updated': null,
    'excerpt': "都是从 git log 获取数据填充到 posts 中： hexo-filter-date-from-git - 获取 post 的第一个提交的 date 作为 front-matter 中的 date - 获取 post 的最后一个提交的 date 作为 front-matter 中的 updated 解决的问题 hexo 中...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "Hexo",
        "JavaScript"
    ],
    'links': {
        "v2ex": "https://v2ex.com/t/289667"
    },
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
