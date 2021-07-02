import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/mazimd.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/mazimd.html",
    'title': "码字 md - 干净精致的 Markdown 编辑器",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>码字 md - 干净精致的 Markdown 编辑器</h1>\n<p>新写了一个 Online Markdown 编辑器，目前还不是很完善。\n先分享出来，希望大家会喜欢。</p>\n<h1>码字 md</h1>\n<blockquote>\n<p>干净精致的 Markdown 编辑器。</p>\n</blockquote>\n<h2 id="%E4%BB%8B%E7%BB%8D">介绍<a class="anchor" href="#%E4%BB%8B%E7%BB%8D">§</a></h2>\n<ul>\n<li>基于 <a href="https://simplemde.com/">SimpleMDE</a> 和 <a href="http://getmobicss.com/zh-cn/">Mobi.css</a>，加入了中文适配</li>\n<li>精致的预览页，可以直接拷贝到 word 或导出为 pdf （开发中）</li>\n<li>主题可单独使用，配合 <a href="https://simplemde.com/">SimpleMDE</a> 的 API ，可以很方便的将此编辑器嵌入到你的网站上</li>\n</ul>\n<h3 id="%E5%8A%9F%E8%83%BD">功能<a class="anchor" href="#%E5%8A%9F%E8%83%BD">§</a></h3>\n<ul>\n<li>工具栏</li>\n<li>预览</li>\n<li>自动保存</li>\n<li><a href="https://github.com/NextStepWebs/simplemde-markdown-editor#keyboard-shortcuts">快捷键</a></li>\n</ul>\n<h2 id="todos">TODOs<a class="anchor" href="#todos">§</a></h2>\n<ul>\n<li>[ ] 导出为 pdf</li>\n<li>[ ] 代码高亮</li>\n<li>[ ] 修复中文标题的 id 渲染</li>\n</ul>\n<h2 id="%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE">开源协议<a class="anchor" href="#%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE">§</a></h2>\n<p>MIT</p>\n<h2 id="%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A">了解更多<a class="anchor" href="#%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A">§</a></h2>\n<ul>\n<li>访问<a href="http://github.com/xcatliu/mazimd">码字 md 的 GitHub</a></li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7801\u5B57 md - \u5E72\u51C0\u7CBE\u81F4\u7684 Markdown \u7F16\u8F91\u5668"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>新写了一个 Online Markdown 编辑器，目前还不是很完善。\n先分享出来，希望大家会喜欢。</p>\n<h1>码字 md</h1>\n<blockquote>\n<p>干净精致的 Markdown 编辑器。</p>\n</blockquote>\n<h2 id="%E4%BB%8B%E7%BB%8D">介绍<a class="anchor" href="#%E4%BB%8B%E7%BB%8D">§</a></h2>\n<ul>\n<li>基于 <a href="https://simplemde.com/">SimpleMDE</a> 和 <a href="http://getmobicss.com/zh-cn/">Mobi.css</a>，加入了中文适配</li>\n<li>精致的预览页，可以直接拷贝到 word 或导出为 pdf （开发中）</li>\n<li>主题可单独使用，配合 <a href="https://simplemde.com/">SimpleMDE</a> 的 API ，可以很方便的将此编辑器嵌入到你的网站上</li>\n</ul>\n<h3 id="%E5%8A%9F%E8%83%BD">功能<a class="anchor" href="#%E5%8A%9F%E8%83%BD">§</a></h3>\n<ul>\n<li>工具栏</li>\n<li>预览</li>\n<li>自动保存</li>\n<li><a href="https://github.com/NextStepWebs/simplemde-markdown-editor#keyboard-shortcuts">快捷键</a></li>\n</ul>\n<h2 id="todos">TODOs<a class="anchor" href="#todos">§</a></h2>\n<ul>\n<li>[ ] 导出为 pdf</li>\n<li>[ ] 代码高亮</li>\n<li>[ ] 修复中文标题的 id 渲染</li>\n</ul>\n<h2 id="%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE">开源协议<a class="anchor" href="#%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE">§</a></h2>\n<p>MIT</p>\n<h2 id="%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A">了解更多<a class="anchor" href="#%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A">§</a></h2>\n<ul>\n<li>访问<a href="http://github.com/xcatliu/mazimd">码字 md 的 GitHub</a></li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%8B%E7%BB%8D" }, "\u4ECB\u7ECD"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%8A%9F%E8%83%BD" }, "\u529F\u80FD")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#todos" }, "TODOs")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE" }, "\u5F00\u6E90\u534F\u8BAE")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A" }, "\u4E86\u89E3\u66F4\u591A")))),
    'author': undefined,
    'contributors': [],
    'date': "2017-01-01T00:00:00.000Z",
    'updated': null,
    'excerpt': "新写了一个 Online Markdown 编辑器，目前还不是很完善。 先分享出来，希望大家会喜欢。 码字 md 介绍 - 基于 SimpleMDE 和 Mobi.css，加入了中文适配 - 精致的预览页，可以直接拷贝到 word 或导出为 pdf （开发中） - 主题可单...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "mazimd",
        "Markdown"
    ],
    'outdated': true,
    'links': {
        "v2ex": "https://v2ex.com/t/332273",
        "homepage": "http://mazimd.com",
        "GitHub": "https://github.com/xcatliu/mazimd"
    },
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
