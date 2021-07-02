import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/monthly_summery_in_meituan.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/monthly_summery_in_meituan.html",
    'title': "美团一个月",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>美团一个月</h1>\n<h2 id="%E5%88%9D%E6%9D%A5%E4%B9%8D%E5%88%B0">初来乍到<a class="anchor" href="#%E5%88%9D%E6%9D%A5%E4%B9%8D%E5%88%B0">§</a></h2>\n<p>来美团已有一个月零四天，有幸见证了月销售额突破七亿和八亿的时刻，认识了志同道合的朋友，加入了这个飞速成长的大家庭。</p>\n<h2 id="%E5%AD%A6%E4%B9%A0%E4%B8%8E%E6%88%90%E9%95%BF">学习与成长<a class="anchor" href="#%E5%AD%A6%E4%B9%A0%E4%B8%8E%E6%88%90%E9%95%BF">§</a></h2>\n<h3 id="vim-%E5%92%8C-git">vim 和 git<a class="anchor" href="#vim-%E5%92%8C-git">§</a></h3>\n<p>磨刀不误砍柴工，只有运用好了这些最基本的工具，才能在工作中得心应手。</p>\n<p>之前学习 Linux 课程时用过 vim，就惊叹于它的脱离鼠标的高效性和个性化的定制性，可没来得及深入研究，现在终于要用到它时，才发现它不仅仅是一个简单的编辑器，在学习了 <code>vimtutor</code>，看了关于 vim 的 wiki，收到 zb 的 vimrc 指导后，渐渐能够运用它了，相信熟练后它会给我带来高效的编辑能力。</p>\n<p>版本控制以前用过 svn，第一次接触 git 时，不是很理解它的很多命令的意义，比如 <code>add</code> 和 <code>commit</code> 到底有什么区别，为什么要有这个缓存区等等，在阅读了《pro git》和《git权威指南》（目前只读了一部分）之后，对 git 这种分布式版本控制系统有了更深的理解，在做了一些 task 后，对它也有了初步的运用，但还是有很多需要学习的地方了。</p>\n<h3 id="%E7%AE%80%E5%8D%95%E7%9A%84-htmlcss-%E7%9A%84%E4%BF%AE%E6%94%B9%E7%86%9F%E6%82%89%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B">简单的 html，css 的修改，熟悉开发流程<a class="anchor" href="#%E7%AE%80%E5%8D%95%E7%9A%84-htmlcss-%E7%9A%84%E4%BF%AE%E6%94%B9%E7%86%9F%E6%82%89%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B">§</a></h3>\n<p>在第一个 task 中，我就因为添加的一个 css 影响到了其他页面，之后阅读了 CssCodingStyle 后，才知道了这个规范的重要性。html 方面，一开始可能会不小心忘记闭合一个标签，或者语义和标签不符而犯下很多小错误，之后文兵对我指点后，就会时时注意到这些细节了，细节决定成败。</p>\n<h3 id="js-%E7%9A%84%E4%BF%AE%E6%94%B9%E7%86%9F%E6%82%89-js-%E6%A1%86%E6%9E%B6">js 的修改，熟悉 js 框架<a class="anchor" href="#js-%E7%9A%84%E4%BF%AE%E6%94%B9%E7%86%9F%E6%82%89-js-%E6%A1%86%E6%9E%B6">§</a></h3>\n<p>之后做了一些需要涉及到 js 逻辑的 task，过程中遇到了一些 IE 下的诡异的 bug，查阅资料后解决了。</p>\n<p>在这里我发现 YUI 是一个比较复杂的框架，因为之前只用过 jQuery，在 YUI 的模块调用方面还不是很懂，于是我阅读了 yuilibrary 文档中的 core 部分，目前基本能理解模块调用，在需要用到一些模块时，能够找到并且理解加以运用了。</p>\n<p>学习了一些 shell 命令，以前用的很少不是很熟。</p>\n<h3 id="%E5%95%86%E5%AE%B6%E7%B3%BB%E7%BB%9F">商家系统<a class="anchor" href="#%E5%95%86%E5%AE%B6%E7%B3%BB%E7%BB%9F">§</a></h3>\n<p>在做了主站的 task 后，我也试着去做了一些商家的 task，熟悉了一下这些系统。当然过程中也遇到了一些问题。</p>\n<p>有一次发布前没有给需求方查看，导致后来又下线了，以后要注意多交流，确定了能发布了之后再发布。</p>\n<h3 id="%E5%90%88%E4%BD%9C%E5%BC%80%E5%8F%91">合作开发<a class="anchor" href="#%E5%90%88%E4%BD%9C%E5%BC%80%E5%8F%91">§</a></h3>\n<p>在做 task 时，可能会遇到需要前端后端合作开发，或者前端需要设计图的时候，这时就需要交流好，互相得明确对方的需求。</p>\n<p>有一个需求需要动态添加 options，Firefox 会默认选中最后一项，一开始我是给 select 设置 value，可是 ie6 不支持，于是研究后设置了 <code>selectedIndex=0</code>，然后优化了很多代码，体会到了「don\'t repeat yourself」</p>\n<p>另外我用 css 写了三角形。</p>\n<h2 id="%E7%9B%AE%E6%A0%87%E5%92%8C%E5%B1%95%E6%9C%9B">目标和展望<a class="anchor" href="#%E7%9B%AE%E6%A0%87%E5%92%8C%E5%B1%95%E6%9C%9B">§</a></h2>\n<p>在接下来的一个月中：</p>\n<ul>\n<li>逐渐熟悉系统开发</li>\n<li>阅读 html，css，js 的书，巩固基础</li>\n<li>在工作中生活中多和大家交流</li>\n<li>双周会（2013.01.24）分享成长经历</li>\n</ul>\n<h2 id="%E6%80%BB%E7%BB%93">总结<a class="anchor" href="#%E6%80%BB%E7%BB%93">§</a></h2>\n<p>这个月有付出，也有收获，有充实的工作和生活，也有幸福的 TB 和长假~</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7F8E\u56E2\u4E00\u4E2A\u6708"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%88%9D%E6%9D%A5%E4%B9%8D%E5%88%B0">初来乍到<a class="anchor" href="#%E5%88%9D%E6%9D%A5%E4%B9%8D%E5%88%B0">§</a></h2>\n<p>来美团已有一个月零四天，有幸见证了月销售额突破七亿和八亿的时刻，认识了志同道合的朋友，加入了这个飞速成长的大家庭。</p>\n<h2 id="%E5%AD%A6%E4%B9%A0%E4%B8%8E%E6%88%90%E9%95%BF">学习与成长<a class="anchor" href="#%E5%AD%A6%E4%B9%A0%E4%B8%8E%E6%88%90%E9%95%BF">§</a></h2>\n<h3 id="vim-%E5%92%8C-git">vim 和 git<a class="anchor" href="#vim-%E5%92%8C-git">§</a></h3>\n<p>磨刀不误砍柴工，只有运用好了这些最基本的工具，才能在工作中得心应手。</p>\n<p>之前学习 Linux 课程时用过 vim，就惊叹于它的脱离鼠标的高效性和个性化的定制性，可没来得及深入研究，现在终于要用到它时，才发现它不仅仅是一个简单的编辑器，在学习了 <code>vimtutor</code>，看了关于 vim 的 wiki，收到 zb 的 vimrc 指导后，渐渐能够运用它了，相信熟练后它会给我带来高效的编辑能力。</p>\n<p>版本控制以前用过 svn，第一次接触 git 时，不是很理解它的很多命令的意义，比如 <code>add</code> 和 <code>commit</code> 到底有什么区别，为什么要有这个缓存区等等，在阅读了《pro git》和《git权威指南》（目前只读了一部分）之后，对 git 这种分布式版本控制系统有了更深的理解，在做了一些 task 后，对它也有了初步的运用，但还是有很多需要学习的地方了。</p>\n<h3 id="%E7%AE%80%E5%8D%95%E7%9A%84-htmlcss-%E7%9A%84%E4%BF%AE%E6%94%B9%E7%86%9F%E6%82%89%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B">简单的 html，css 的修改，熟悉开发流程<a class="anchor" href="#%E7%AE%80%E5%8D%95%E7%9A%84-htmlcss-%E7%9A%84%E4%BF%AE%E6%94%B9%E7%86%9F%E6%82%89%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B">§</a></h3>\n<p>在第一个 task 中，我就因为添加的一个 css 影响到了其他页面，之后阅读了 CssCodingStyle 后，才知道了这个规范的重要性。html 方面，一开始可能会不小心忘记闭合一个标签，或者语义和标签不符而犯下很多小错误，之后文兵对我指点后，就会时时注意到这些细节了，细节决定成败。</p>\n<h3 id="js-%E7%9A%84%E4%BF%AE%E6%94%B9%E7%86%9F%E6%82%89-js-%E6%A1%86%E6%9E%B6">js 的修改，熟悉 js 框架<a class="anchor" href="#js-%E7%9A%84%E4%BF%AE%E6%94%B9%E7%86%9F%E6%82%89-js-%E6%A1%86%E6%9E%B6">§</a></h3>\n<p>之后做了一些需要涉及到 js 逻辑的 task，过程中遇到了一些 IE 下的诡异的 bug，查阅资料后解决了。</p>\n<p>在这里我发现 YUI 是一个比较复杂的框架，因为之前只用过 jQuery，在 YUI 的模块调用方面还不是很懂，于是我阅读了 yuilibrary 文档中的 core 部分，目前基本能理解模块调用，在需要用到一些模块时，能够找到并且理解加以运用了。</p>\n<p>学习了一些 shell 命令，以前用的很少不是很熟。</p>\n<h3 id="%E5%95%86%E5%AE%B6%E7%B3%BB%E7%BB%9F">商家系统<a class="anchor" href="#%E5%95%86%E5%AE%B6%E7%B3%BB%E7%BB%9F">§</a></h3>\n<p>在做了主站的 task 后，我也试着去做了一些商家的 task，熟悉了一下这些系统。当然过程中也遇到了一些问题。</p>\n<p>有一次发布前没有给需求方查看，导致后来又下线了，以后要注意多交流，确定了能发布了之后再发布。</p>\n<h3 id="%E5%90%88%E4%BD%9C%E5%BC%80%E5%8F%91">合作开发<a class="anchor" href="#%E5%90%88%E4%BD%9C%E5%BC%80%E5%8F%91">§</a></h3>\n<p>在做 task 时，可能会遇到需要前端后端合作开发，或者前端需要设计图的时候，这时就需要交流好，互相得明确对方的需求。</p>\n<p>有一个需求需要动态添加 options，Firefox 会默认选中最后一项，一开始我是给 select 设置 value，可是 ie6 不支持，于是研究后设置了 <code>selectedIndex=0</code>，然后优化了很多代码，体会到了「don\'t repeat yourself」</p>\n<p>另外我用 css 写了三角形。</p>\n<h2 id="%E7%9B%AE%E6%A0%87%E5%92%8C%E5%B1%95%E6%9C%9B">目标和展望<a class="anchor" href="#%E7%9B%AE%E6%A0%87%E5%92%8C%E5%B1%95%E6%9C%9B">§</a></h2>\n<p>在接下来的一个月中：</p>\n<ul>\n<li>逐渐熟悉系统开发</li>\n<li>阅读 html，css，js 的书，巩固基础</li>\n<li>在工作中生活中多和大家交流</li>\n<li>双周会（2013.01.24）分享成长经历</li>\n</ul>\n<h2 id="%E6%80%BB%E7%BB%93">总结<a class="anchor" href="#%E6%80%BB%E7%BB%93">§</a></h2>\n<p>这个月有付出，也有收获，有充实的工作和生活，也有幸福的 TB 和长假~</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%88%9D%E6%9D%A5%E4%B9%8D%E5%88%B0" }, "\u521D\u6765\u4E4D\u5230")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%AD%A6%E4%B9%A0%E4%B8%8E%E6%88%90%E9%95%BF" }, "\u5B66\u4E60\u4E0E\u6210\u957F"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#vim-%E5%92%8C-git" }, "vim \u548C git")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E7%AE%80%E5%8D%95%E7%9A%84-htmlcss-%E7%9A%84%E4%BF%AE%E6%94%B9%E7%86%9F%E6%82%89%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B" }, "\u7B80\u5355\u7684 html\uFF0Ccss \u7684\u4FEE\u6539\uFF0C\u719F\u6089\u5F00\u53D1\u6D41\u7A0B")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#js-%E7%9A%84%E4%BF%AE%E6%94%B9%E7%86%9F%E6%82%89-js-%E6%A1%86%E6%9E%B6" }, "js \u7684\u4FEE\u6539\uFF0C\u719F\u6089 js \u6846\u67B6")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%95%86%E5%AE%B6%E7%B3%BB%E7%BB%9F" }, "\u5546\u5BB6\u7CFB\u7EDF")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%90%88%E4%BD%9C%E5%BC%80%E5%8F%91" }, "\u5408\u4F5C\u5F00\u53D1")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%9B%AE%E6%A0%87%E5%92%8C%E5%B1%95%E6%9C%9B" }, "\u76EE\u6807\u548C\u5C55\u671B")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%80%BB%E7%BB%93" }, "\u603B\u7ED3")))),
    'author': undefined,
    'contributors': [],
    'date': "2013-01-04T00:00:00.000Z",
    'updated': null,
    'excerpt': "初来乍到 来美团已有一个月零四天，有幸见证了月销售额突破七亿和八亿的时刻，认识了志同道合的朋友，加入了这个飞速成长的大家庭。 学习与成长 vim 和 git 磨刀不误砍柴工，只有运用好了这些最基本的工具，才能在工作中得心应...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "总结思考"
    ],
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
