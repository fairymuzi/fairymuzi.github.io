import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/mobi-css_v3.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/mobi-css_v3.html",
    'title': "Mobi.css v3 发布了，一个轻量、可拓展、移动端优先的 CSS 框架",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Mobi.css v3 发布了，一个轻量、可拓展、移动端优先的 CSS 框架</h1>\n<ul>\n<li>GitHub: <a href="https://github.com/mobi-css/mobi.css">https://github.com/mobi-css/mobi.css</a></li>\n<li>官网：<a href="http://getmobicss.com/">http://getmobicss.com/</a></li>\n</ul>\n<h2 id="%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D">简单介绍<a class="anchor" href="#%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D">§</a></h2>\n<ul>\n<li>轻量级：压缩 gzip 后只有 2.6 kb</li>\n<li>可拓展：可以引入 plugin 来拓展 Mobi.css ，并且每个 plugin 都可以独立于框架使用</li>\n<li>移动端优先：为移动端设计，在桌面端也表现良好</li>\n</ul>\n<p>前贴：<a href="/2016/08/29/mobi-css">「Mobi.css」轻量，灵活的移动端 css 框架</a></p>\n<h2 id="qa">Q&amp;A<a class="anchor" href="#qa">§</a></h2>\n<h3 id="mobicss-%E6%9C%89%E5%93%AA%E4%BA%9B%E5%85%B6%E4%BB%96%E6%A1%86%E6%9E%B6%E6%B2%A1%E6%9C%89%E7%9A%84%E7%89%B9%E6%80%A7%E5%91%A2">Mobi.css 有哪些其他框架没有的特性呢？<a class="anchor" href="#mobicss-%E6%9C%89%E5%93%AA%E4%BA%9B%E5%85%B6%E4%BB%96%E6%A1%86%E6%9E%B6%E6%B2%A1%E6%9C%89%E7%9A%84%E7%89%B9%E6%80%A7%E5%91%A2">§</a></h3>\n<ol>\n<li>flexbox 很好用 <a href="http://getmobicss.com/docs/flexbox.html">http://getmobicss.com/docs/flexbox.html</a></li>\n<li>每个 plugin 可以独立使用，即使你不想用 Mobi.css ，也可以只用其中一个 plugin</li>\n<li>认为只使用 margin-top 分隔块比较好，所以几乎所有 margin-bottom 都为 0</li>\n</ol>\n<h3 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BB%8E-v1-%E7%9B%B4%E6%8E%A5%E8%B7%B3%E5%88%B0-v3-%E4%BA%86">为什么从 v1 直接跳到 v3 了？<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BB%8E-v1-%E7%9B%B4%E6%8E%A5%E8%B7%B3%E5%88%B0-v3-%E4%BA%86">§</a></h3>\n<p>因为开发了 v2 一段时间之后，遇到一些问题，过了一段时间才找到解决方案，此时以及离 v2 beta 版相差有点远了，所以就直接跳到了 v3</p>\n<h3 id="%E6%9C%89-qq-%E7%BE%A4%E6%88%96%E5%BE%AE%E4%BF%A1%E7%BE%A4%E8%AE%A8%E8%AE%BA%E5%90%97">有 qq 群或微信群讨论吗？<a class="anchor" href="#%E6%9C%89-qq-%E7%BE%A4%E6%88%96%E5%BE%AE%E4%BF%A1%E7%BE%A4%E8%AE%A8%E8%AE%BA%E5%90%97">§</a></h3>\n<p>有，qq 群 378244667 微信请加我 xcatliu，注明姓名和来自 v2ex，我拉你进群</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Mobi.css v3 \u53D1\u5E03\u4E86\uFF0C\u4E00\u4E2A\u8F7B\u91CF\u3001\u53EF\u62D3\u5C55\u3001\u79FB\u52A8\u7AEF\u4F18\u5148\u7684 CSS \u6846\u67B6"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li>GitHub: <a href="https://github.com/mobi-css/mobi.css">https://github.com/mobi-css/mobi.css</a></li>\n<li>官网：<a href="http://getmobicss.com/">http://getmobicss.com/</a></li>\n</ul>\n<h2 id="%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D">简单介绍<a class="anchor" href="#%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D">§</a></h2>\n<ul>\n<li>轻量级：压缩 gzip 后只有 2.6 kb</li>\n<li>可拓展：可以引入 plugin 来拓展 Mobi.css ，并且每个 plugin 都可以独立于框架使用</li>\n<li>移动端优先：为移动端设计，在桌面端也表现良好</li>\n</ul>\n<p>前贴：<a href="/2016/08/29/mobi-css">「Mobi.css」轻量，灵活的移动端 css 框架</a></p>\n<h2 id="qa">Q&amp;A<a class="anchor" href="#qa">§</a></h2>\n<h3 id="mobicss-%E6%9C%89%E5%93%AA%E4%BA%9B%E5%85%B6%E4%BB%96%E6%A1%86%E6%9E%B6%E6%B2%A1%E6%9C%89%E7%9A%84%E7%89%B9%E6%80%A7%E5%91%A2">Mobi.css 有哪些其他框架没有的特性呢？<a class="anchor" href="#mobicss-%E6%9C%89%E5%93%AA%E4%BA%9B%E5%85%B6%E4%BB%96%E6%A1%86%E6%9E%B6%E6%B2%A1%E6%9C%89%E7%9A%84%E7%89%B9%E6%80%A7%E5%91%A2">§</a></h3>\n<ol>\n<li>flexbox 很好用 <a href="http://getmobicss.com/docs/flexbox.html">http://getmobicss.com/docs/flexbox.html</a></li>\n<li>每个 plugin 可以独立使用，即使你不想用 Mobi.css ，也可以只用其中一个 plugin</li>\n<li>认为只使用 margin-top 分隔块比较好，所以几乎所有 margin-bottom 都为 0</li>\n</ol>\n<h3 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BB%8E-v1-%E7%9B%B4%E6%8E%A5%E8%B7%B3%E5%88%B0-v3-%E4%BA%86">为什么从 v1 直接跳到 v3 了？<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BB%8E-v1-%E7%9B%B4%E6%8E%A5%E8%B7%B3%E5%88%B0-v3-%E4%BA%86">§</a></h3>\n<p>因为开发了 v2 一段时间之后，遇到一些问题，过了一段时间才找到解决方案，此时以及离 v2 beta 版相差有点远了，所以就直接跳到了 v3</p>\n<h3 id="%E6%9C%89-qq-%E7%BE%A4%E6%88%96%E5%BE%AE%E4%BF%A1%E7%BE%A4%E8%AE%A8%E8%AE%BA%E5%90%97">有 qq 群或微信群讨论吗？<a class="anchor" href="#%E6%9C%89-qq-%E7%BE%A4%E6%88%96%E5%BE%AE%E4%BF%A1%E7%BE%A4%E8%AE%A8%E8%AE%BA%E5%90%97">§</a></h3>\n<p>有，qq 群 378244667 微信请加我 xcatliu，注明姓名和来自 v2ex，我拉你进群</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D" }, "\u7B80\u5355\u4ECB\u7ECD")),
            React.createElement("li", null,
                React.createElement("a", { href: "#qa" }, "Q&A"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#mobicss-%E6%9C%89%E5%93%AA%E4%BA%9B%E5%85%B6%E4%BB%96%E6%A1%86%E6%9E%B6%E6%B2%A1%E6%9C%89%E7%9A%84%E7%89%B9%E6%80%A7%E5%91%A2" }, "Mobi.css \u6709\u54EA\u4E9B\u5176\u4ED6\u6846\u67B6\u6CA1\u6709\u7684\u7279\u6027\u5462\uFF1F")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BB%8E-v1-%E7%9B%B4%E6%8E%A5%E8%B7%B3%E5%88%B0-v3-%E4%BA%86" }, "\u4E3A\u4EC0\u4E48\u4ECE v1 \u76F4\u63A5\u8DF3\u5230 v3 \u4E86\uFF1F")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%9C%89-qq-%E7%BE%A4%E6%88%96%E5%BE%AE%E4%BF%A1%E7%BE%A4%E8%AE%A8%E8%AE%BA%E5%90%97" }, "\u6709 qq \u7FA4\u6216\u5FAE\u4FE1\u7FA4\u8BA8\u8BBA\u5417\uFF1F")))))),
    'author': undefined,
    'contributors': [],
    'date': "2017-09-04T00:00:00.000Z",
    'updated': null,
    'excerpt': " - GitHub: https://github.com/mobi-css/mobi.css - 官网：http://getmobicss.com/ 简单介绍 - 轻量级：压缩 gzip 后只有 2.6 kb - 可拓展：可以引入 plugin 来拓展 Mobi.css ，并且每个 plugin 都可以独立于框架使用 - 移动端...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "Mobi.css",
        "CSS"
    ],
    'links': {
        "v2ex": "https://v2ex.com/t/387918",
        "GitHub": "https://github.com/mobi-css/mobi.css",
        "homepage": "http://getmobicss.com"
    },
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
