import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/use_readme_to_manage_your_docs.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/use_readme_to_manage_your_docs.html",
    'title': "基于 README 的文档管理",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>基于 README 的文档管理</h1>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-readme">什么是 readme<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-readme">§</a></h2>\n<blockquote>\n<p>A readme (or read me) file contains information about other files in a directory or archive and is very commonly distributed with computer software.</p>\n</blockquote>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%9C%A8%E4%BB%93%E5%BA%93%E4%B8%AD%E5%86%99%E6%96%87%E6%A1%A3">为什么要在仓库中写文档<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%9C%A8%E4%BB%93%E5%BA%93%E4%B8%AD%E5%86%99%E6%96%87%E6%A1%A3">§</a></h2>\n<ul>\n<li>文档和代码在一起，方便查看</li>\n<li>文档和代码版本一致</li>\n<li>使用 markdown 格式的 README 文档可以在 GitHub 中直接查看</li>\n<li>可以在 vim 中查看</li>\n<li>README 已经能（并且能更好的）满足大部分需求</li>\n</ul>\n<h2 id="markdown-%E8%A7%84%E5%88%99">markdown 规则<a class="anchor" href="#markdown-%E8%A7%84%E5%88%99">§</a></h2>\n<p>推荐遵守此规则：</p>\n<p><a href="http://markdown.tw/">Markdown 规范</a> + <a href="https://help.github.com/articles/github-flavored-markdown/">GitHub Flavored Markdown</a></p>\n<h2 id="%E5%BA%94%E8%AF%A5%E5%8F%AB%E4%BB%80%E4%B9%88%E5%90%8D%E5%AD%97">应该叫什么名字<a class="anchor" href="#%E5%BA%94%E8%AF%A5%E5%8F%AB%E4%BB%80%E4%B9%88%E5%90%8D%E5%AD%97">§</a></h2>\n<p>建议叫 <a href="http://README.md">README.md</a></p>\n<p>而不是 <a href="http://readme.md">readme.md</a> 或 README.markdown</p>\n<h2 id="%E6%84%BF%E6%99%AF">愿景<a class="anchor" href="#%E6%84%BF%E6%99%AF">§</a></h2>\n<p>尽量替代掉「使用 wiki 或 website 管理文档」（或者 website 是通过 readme 文档生成的，do not repeat yourself）</p>\n<h2 id="readme-%E5%86%85%E5%AE%B9">readme 内容<a class="anchor" href="#readme-%E5%86%85%E5%AE%B9">§</a></h2>\n<p>一个好的 README 需要包含哪些内容？以下是 <a href="http://stackoverflow.com/questions/2304863/how-to-write-a-good-readme">stackoverflow 给出的答案</a>：</p>\n<ul>\n<li>此项目的标题和包含的子模块</li>\n<li>对项目和子模块的描述</li>\n<li>一个简短的例子告诉读者如何使用</li>\n<li>LICENSE</li>\n<li>在哪儿可以找到文档</li>\n<li>怎么安装，配置，运行此程序</li>\n<li>在哪儿可以找到最新代码</li>\n<li>作者</li>\n<li>如何提交 bug，提建议，加入讨论组</li>\n<li>其他联系方式（email，website）</li>\n<li>简短的历史介绍</li>\n<li>法律声明</li>\n</ul>\n<p>我推荐包含以下内容：</p>\n<ul>\n<li>标题</li>\n<li>描述</li>\n<li>使用方式</li>\n<li>[ optional ] 链接（npm，website，wiki，git repo）</li>\n<li>[ optional ] 作者（联系方式）</li>\n<li>[ optional ] 测试脚本</li>\n<li>[ optional ] demo 页</li>\n<li>[ optional ] 代码说明，设计模式，维护须知</li>\n<li>[ optional ] 更新历史</li>\n<li>[ optional ] Troubleshooting</li>\n<li>[ optional ] Todo</li>\n</ul>\n<h2 id="links">Links<a class="anchor" href="#links">§</a></h2>\n<ul>\n<li><a href="http://stackoverflow.com/questions/2304863/how-to-write-a-good-readme">how-to-write-a-good-readme</a></li>\n<li><a href="http://markdown.tw/">Markdown 规范</a></li>\n<li><a href="https://help.github.com/articles/github-flavored-markdown/">GitHub Flavored Markdown</a></li>\n<li><a href="http://en.wikipedia.org/wiki/README">维基百科 README</a></li>\n<li><a href="http://svn.apache.org/repos/asf/httpd/httpd/trunk/README">Apache HTTP Server README</a></li>\n<li><a href="https://gist.github.com/eed3si9n/3920236">README 童话故事</a></li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u57FA\u4E8E README \u7684\u6587\u6863\u7BA1\u7406"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-readme">什么是 readme<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-readme">§</a></h2>\n<blockquote>\n<p>A readme (or read me) file contains information about other files in a directory or archive and is very commonly distributed with computer software.</p>\n</blockquote>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%9C%A8%E4%BB%93%E5%BA%93%E4%B8%AD%E5%86%99%E6%96%87%E6%A1%A3">为什么要在仓库中写文档<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%9C%A8%E4%BB%93%E5%BA%93%E4%B8%AD%E5%86%99%E6%96%87%E6%A1%A3">§</a></h2>\n<ul>\n<li>文档和代码在一起，方便查看</li>\n<li>文档和代码版本一致</li>\n<li>使用 markdown 格式的 README 文档可以在 GitHub 中直接查看</li>\n<li>可以在 vim 中查看</li>\n<li>README 已经能（并且能更好的）满足大部分需求</li>\n</ul>\n<h2 id="markdown-%E8%A7%84%E5%88%99">markdown 规则<a class="anchor" href="#markdown-%E8%A7%84%E5%88%99">§</a></h2>\n<p>推荐遵守此规则：</p>\n<p><a href="http://markdown.tw/">Markdown 规范</a> + <a href="https://help.github.com/articles/github-flavored-markdown/">GitHub Flavored Markdown</a></p>\n<h2 id="%E5%BA%94%E8%AF%A5%E5%8F%AB%E4%BB%80%E4%B9%88%E5%90%8D%E5%AD%97">应该叫什么名字<a class="anchor" href="#%E5%BA%94%E8%AF%A5%E5%8F%AB%E4%BB%80%E4%B9%88%E5%90%8D%E5%AD%97">§</a></h2>\n<p>建议叫 <a href="http://README.md">README.md</a></p>\n<p>而不是 <a href="http://readme.md">readme.md</a> 或 README.markdown</p>\n<h2 id="%E6%84%BF%E6%99%AF">愿景<a class="anchor" href="#%E6%84%BF%E6%99%AF">§</a></h2>\n<p>尽量替代掉「使用 wiki 或 website 管理文档」（或者 website 是通过 readme 文档生成的，do not repeat yourself）</p>\n<h2 id="readme-%E5%86%85%E5%AE%B9">readme 内容<a class="anchor" href="#readme-%E5%86%85%E5%AE%B9">§</a></h2>\n<p>一个好的 README 需要包含哪些内容？以下是 <a href="http://stackoverflow.com/questions/2304863/how-to-write-a-good-readme">stackoverflow 给出的答案</a>：</p>\n<ul>\n<li>此项目的标题和包含的子模块</li>\n<li>对项目和子模块的描述</li>\n<li>一个简短的例子告诉读者如何使用</li>\n<li>LICENSE</li>\n<li>在哪儿可以找到文档</li>\n<li>怎么安装，配置，运行此程序</li>\n<li>在哪儿可以找到最新代码</li>\n<li>作者</li>\n<li>如何提交 bug，提建议，加入讨论组</li>\n<li>其他联系方式（email，website）</li>\n<li>简短的历史介绍</li>\n<li>法律声明</li>\n</ul>\n<p>我推荐包含以下内容：</p>\n<ul>\n<li>标题</li>\n<li>描述</li>\n<li>使用方式</li>\n<li>[ optional ] 链接（npm，website，wiki，git repo）</li>\n<li>[ optional ] 作者（联系方式）</li>\n<li>[ optional ] 测试脚本</li>\n<li>[ optional ] demo 页</li>\n<li>[ optional ] 代码说明，设计模式，维护须知</li>\n<li>[ optional ] 更新历史</li>\n<li>[ optional ] Troubleshooting</li>\n<li>[ optional ] Todo</li>\n</ul>\n<h2 id="links">Links<a class="anchor" href="#links">§</a></h2>\n<ul>\n<li><a href="http://stackoverflow.com/questions/2304863/how-to-write-a-good-readme">how-to-write-a-good-readme</a></li>\n<li><a href="http://markdown.tw/">Markdown 规范</a></li>\n<li><a href="https://help.github.com/articles/github-flavored-markdown/">GitHub Flavored Markdown</a></li>\n<li><a href="http://en.wikipedia.org/wiki/README">维基百科 README</a></li>\n<li><a href="http://svn.apache.org/repos/asf/httpd/httpd/trunk/README">Apache HTTP Server README</a></li>\n<li><a href="https://gist.github.com/eed3si9n/3920236">README 童话故事</a></li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%80%E4%B9%88%E6%98%AF-readme" }, "\u4EC0\u4E48\u662F readme")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%9C%A8%E4%BB%93%E5%BA%93%E4%B8%AD%E5%86%99%E6%96%87%E6%A1%A3" }, "\u4E3A\u4EC0\u4E48\u8981\u5728\u4ED3\u5E93\u4E2D\u5199\u6587\u6863")),
            React.createElement("li", null,
                React.createElement("a", { href: "#markdown-%E8%A7%84%E5%88%99" }, "markdown \u89C4\u5219")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%BA%94%E8%AF%A5%E5%8F%AB%E4%BB%80%E4%B9%88%E5%90%8D%E5%AD%97" }, "\u5E94\u8BE5\u53EB\u4EC0\u4E48\u540D\u5B57")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%84%BF%E6%99%AF" }, "\u613F\u666F")),
            React.createElement("li", null,
                React.createElement("a", { href: "#readme-%E5%86%85%E5%AE%B9" }, "readme \u5185\u5BB9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#links" }, "Links")))),
    'author': undefined,
    'contributors': [],
    'date': "2014-12-09T00:00:00.000Z",
    'updated': null,
    'excerpt': "什么是 readme 为什么要在仓库中写文档 - 文档和代码在一起，方便查看 - 文档和代码版本一致 - 使用 markdown 格式的 README 文档可以在 GitHub 中直接查看 - 可以在 vim 中查看 - README 已经能（并且能更好的）满足大部分需求...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "README",
        "Markdown"
    ],
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
