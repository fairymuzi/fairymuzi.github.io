import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/my_first_book.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/my_first_book.html",
    'title': "我写的第一本书《TypeScript 入门教程》",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>我写的第一本书《TypeScript 入门教程》</h1>\n<p>持续了大半年的学习和写作，在今天终于告一段落了。</p>\n<h2 id="%E5%86%99%E4%B9%A6%E4%B9%8B%E6%97%85">写书之旅<a class="anchor" href="#%E5%86%99%E4%B9%A6%E4%B9%8B%E6%97%85">§</a></h2>\n<p>最初有写书的想法，是刚加入微软的时候。</p>\n<p>由于工作中需要重度使用 TypeScript，所以我花了几天的时间研读了好几遍官方手册和中文翻译版。</p>\n<p>对于一个把 OOP 早就还给老师的人，有些概念并不是很好理解，再加上官方手册跳跃般的学习曲线，我觉得我可以抓住这次学习的机会，把整个学习的过程总结下来。</p>\n<p>一开始，取名为《From JavaScript to TypeScript》，寓意此书的作者并不是 TypeScript 的专家，而是一个新手。</p>\n<p>其实这不一定是个劣势，因为有些坑，只有新手才能理解。我希望尽可能的还原第一次学习的场景，帮助大家更容易的理解 TypeScript。</p>\n<p>于是，我开始了我的写书之旅。</p>\n<h2 id="%E5%86%99%E4%B9%A6%E4%B8%8D%E6%98%93">写书不易<a class="anchor" href="#%E5%86%99%E4%B9%A6%E4%B8%8D%E6%98%93">§</a></h2>\n<p>要说写书的感受，那真是太不容易了。</p>\n<p>理解一个知识，和能够讲出来让别人理解完全是两码事。</p>\n<p>而我又是一个强迫症患者。</p>\n<ul>\n<li>为了方便查阅，添加了非常多引用</li>\n<li>为了一个措辞，会修订很多次</li>\n<li>为了能循序渐进的理解，调整了多次顺序</li>\n</ul>\n<p>最难的还是在于坚持，一开始还会觉得挺有意思挺新鲜，慢慢的就会很枯燥乏味，无数次的回头重读之前写的，无数次的修改。</p>\n<p>我收获的不只是对 TypeScript 理解的加深，而更是一份坚持的毅力和勇气吧。</p>\n<p>再之后捧起别人写的书，都会油然而生一股敬意。</p>\n<p>想必那一定也是比我付出更多百倍的精力才能写出来的了。</p>\n<h2 id="typescript-%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B%E4%BB%8B%E7%BB%8D">《TypeScript 入门教程》介绍<a class="anchor" href="#typescript-%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B%E4%BB%8B%E7%BB%8D">§</a></h2>\n<p>从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript。</p>\n<blockquote>\n<p>原名《From JavaScript to TypeScript》</p>\n</blockquote>\n<ul>\n<li><a href="https://ts.xcatliu.com/">在线阅读</a>（部署在 <a href="https://www.gitbook.com/book/xcatliu/typescript-tutorial/details">GitBook</a> 上，可能需要翻墙）</li>\n<li><a href="https://github.com/xcatliu/typescript-tutorial/blob/master/README.md">在线阅读（GitHub 版）</a></li>\n<li><a href="https://github.com/xcatliu/typescript-tutorial">GitHub 地址</a></li>\n<li>作者：<a href="https://github.com/xcatliu/">xcatliu</a></li>\n<li>字数统计：约 6 万字（直接统计的字符数）</li>\n</ul>\n<p>更多介绍请<a href="https://github.com/xcatliu/typescript-tutorial">进入 GitHub</a> 查看。</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6211\u5199\u7684\u7B2C\u4E00\u672C\u4E66\u300ATypeScript \u5165\u95E8\u6559\u7A0B\u300B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>持续了大半年的学习和写作，在今天终于告一段落了。</p>\n<h2 id="%E5%86%99%E4%B9%A6%E4%B9%8B%E6%97%85">写书之旅<a class="anchor" href="#%E5%86%99%E4%B9%A6%E4%B9%8B%E6%97%85">§</a></h2>\n<p>最初有写书的想法，是刚加入微软的时候。</p>\n<p>由于工作中需要重度使用 TypeScript，所以我花了几天的时间研读了好几遍官方手册和中文翻译版。</p>\n<p>对于一个把 OOP 早就还给老师的人，有些概念并不是很好理解，再加上官方手册跳跃般的学习曲线，我觉得我可以抓住这次学习的机会，把整个学习的过程总结下来。</p>\n<p>一开始，取名为《From JavaScript to TypeScript》，寓意此书的作者并不是 TypeScript 的专家，而是一个新手。</p>\n<p>其实这不一定是个劣势，因为有些坑，只有新手才能理解。我希望尽可能的还原第一次学习的场景，帮助大家更容易的理解 TypeScript。</p>\n<p>于是，我开始了我的写书之旅。</p>\n<h2 id="%E5%86%99%E4%B9%A6%E4%B8%8D%E6%98%93">写书不易<a class="anchor" href="#%E5%86%99%E4%B9%A6%E4%B8%8D%E6%98%93">§</a></h2>\n<p>要说写书的感受，那真是太不容易了。</p>\n<p>理解一个知识，和能够讲出来让别人理解完全是两码事。</p>\n<p>而我又是一个强迫症患者。</p>\n<ul>\n<li>为了方便查阅，添加了非常多引用</li>\n<li>为了一个措辞，会修订很多次</li>\n<li>为了能循序渐进的理解，调整了多次顺序</li>\n</ul>\n<p>最难的还是在于坚持，一开始还会觉得挺有意思挺新鲜，慢慢的就会很枯燥乏味，无数次的回头重读之前写的，无数次的修改。</p>\n<p>我收获的不只是对 TypeScript 理解的加深，而更是一份坚持的毅力和勇气吧。</p>\n<p>再之后捧起别人写的书，都会油然而生一股敬意。</p>\n<p>想必那一定也是比我付出更多百倍的精力才能写出来的了。</p>\n<h2 id="typescript-%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B%E4%BB%8B%E7%BB%8D">《TypeScript 入门教程》介绍<a class="anchor" href="#typescript-%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B%E4%BB%8B%E7%BB%8D">§</a></h2>\n<p>从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript。</p>\n<blockquote>\n<p>原名《From JavaScript to TypeScript》</p>\n</blockquote>\n<ul>\n<li><a href="https://ts.xcatliu.com/">在线阅读</a>（部署在 <a href="https://www.gitbook.com/book/xcatliu/typescript-tutorial/details">GitBook</a> 上，可能需要翻墙）</li>\n<li><a href="https://github.com/xcatliu/typescript-tutorial/blob/master/README.md">在线阅读（GitHub 版）</a></li>\n<li><a href="https://github.com/xcatliu/typescript-tutorial">GitHub 地址</a></li>\n<li>作者：<a href="https://github.com/xcatliu/">xcatliu</a></li>\n<li>字数统计：约 6 万字（直接统计的字符数）</li>\n</ul>\n<p>更多介绍请<a href="https://github.com/xcatliu/typescript-tutorial">进入 GitHub</a> 查看。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%86%99%E4%B9%A6%E4%B9%8B%E6%97%85" }, "\u5199\u4E66\u4E4B\u65C5")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%86%99%E4%B9%A6%E4%B8%8D%E6%98%93" }, "\u5199\u4E66\u4E0D\u6613")),
            React.createElement("li", null,
                React.createElement("a", { href: "#typescript-%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B%E4%BB%8B%E7%BB%8D" }, "\u300ATypeScript \u5165\u95E8\u6559\u7A0B\u300B\u4ECB\u7ECD")))),
    'author': undefined,
    'contributors': [],
    'date': "2021-07-02T06:13:03.800Z",
    'updated': null,
    'excerpt': "持续了大半年的学习和写作，在今天终于告一段落了。 写书之旅 最初有写书的想法，是刚加入微软的时候。 由于工作中需要重度使用 TypeScript，所以我花了几天的时间研读了好几遍官方手册和中文翻译版。 对于一个把 OOP 早就还给...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "TypeScript",
        "Tutorial"
    ],
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
