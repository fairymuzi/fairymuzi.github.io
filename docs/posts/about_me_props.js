import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/about_me.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/about_me.html",
    'title': "三分钟创建一个简单精致的 About Me 页面",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>三分钟创建一个简单精致的 About Me 页面</h1>\n<blockquote>\n<p>通过 Fork 一个仓库，创建基于 GitHub Pages 的 About Me 页面。</p>\n</blockquote>\n<p>一个「About Me」页面，能够使别人快速的对你有一个大致的了解。</p>\n<p>使用 GitHub 提供的 Pages 服务，可以将静态的网页托管在 GitHub 上。而 GitHub Pages 默认的 Jekyll 使得静态网页得以很方便的配置化。</p>\n<p>我的 About Me 页面精雕细琢，并且页面的内容均提取成 yaml 配置文件，使大家可以简单几步就创建自己的 About Me 页面。</p>\n<h2 id="%E7%89%B9%E7%82%B9">特点<a class="anchor" href="#%E7%89%B9%E7%82%B9">§</a></h2>\n<ol>\n<li>托管在 GitHub Pages 上，不需要服务器，不需要注册域名（也可以绑定自己的域名）</li>\n<li>使用 GitHub Pages 上的 Jekyll 自动构建，不需要任何学习成本</li>\n<li>所有内容均配置化，一看就知道如何修改</li>\n<li>GitHub Repos 的信息会自动抓取</li>\n<li>适配了桌面端和移动端，简单精致</li>\n</ol>\n<h2 id="%E5%88%9B%E5%BB%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E9%A1%B5%E9%9D%A2">创建自己的页面<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E9%A1%B5%E9%9D%A2">§</a></h2>\n<blockquote>\n<p>注意，下面使用 <code>${}</code> 包装的部分需要替换为你自己的内容</p>\n</blockquote>\n<ol>\n<li>Fork <a href="https://github.com/xcatliu/xcatliu.github.io">这个仓库</a></li>\n<li>将仓库名更新为 <code>${YOUR_GITHUB_ID}.github.io</code></li>\n<li>更新 <code>CNAME</code> 为 <code>${YOUR_DOMAIN}</code>，并且在域名的 DNS Records 中，为它添加一个 CNAME 记录指向 <code>${YOUR_GITHUB_ID}.github.io</code>（如果你没有域名，将此文件留空即可）</li>\n<li>更新 <code>_config.yml</code> 以及 <code>assets/img/</code> 中的图片资源</li>\n<li>打开 <code>${YOUR_DOMAIN}</code> 看看吧！（如果你没有域名，请打开 <code>${YOUR_GITHUB_ID}.github.io</code>）</li>\n</ol>\n<p>来创建自己的 About Me 页面吧！</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u4E09\u5206\u949F\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7CBE\u81F4\u7684 About Me \u9875\u9762"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<blockquote>\n<p>通过 Fork 一个仓库，创建基于 GitHub Pages 的 About Me 页面。</p>\n</blockquote>\n<p>一个「About Me」页面，能够使别人快速的对你有一个大致的了解。</p>\n<p>使用 GitHub 提供的 Pages 服务，可以将静态的网页托管在 GitHub 上。而 GitHub Pages 默认的 Jekyll 使得静态网页得以很方便的配置化。</p>\n<p>我的 About Me 页面精雕细琢，并且页面的内容均提取成 yaml 配置文件，使大家可以简单几步就创建自己的 About Me 页面。</p>\n<h2 id="%E7%89%B9%E7%82%B9">特点<a class="anchor" href="#%E7%89%B9%E7%82%B9">§</a></h2>\n<ol>\n<li>托管在 GitHub Pages 上，不需要服务器，不需要注册域名（也可以绑定自己的域名）</li>\n<li>使用 GitHub Pages 上的 Jekyll 自动构建，不需要任何学习成本</li>\n<li>所有内容均配置化，一看就知道如何修改</li>\n<li>GitHub Repos 的信息会自动抓取</li>\n<li>适配了桌面端和移动端，简单精致</li>\n</ol>\n<h2 id="%E5%88%9B%E5%BB%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E9%A1%B5%E9%9D%A2">创建自己的页面<a class="anchor" href="#%E5%88%9B%E5%BB%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E9%A1%B5%E9%9D%A2">§</a></h2>\n<blockquote>\n<p>注意，下面使用 <code>${}</code> 包装的部分需要替换为你自己的内容</p>\n</blockquote>\n<ol>\n<li>Fork <a href="https://github.com/xcatliu/xcatliu.github.io">这个仓库</a></li>\n<li>将仓库名更新为 <code>${YOUR_GITHUB_ID}.github.io</code></li>\n<li>更新 <code>CNAME</code> 为 <code>${YOUR_DOMAIN}</code>，并且在域名的 DNS Records 中，为它添加一个 CNAME 记录指向 <code>${YOUR_GITHUB_ID}.github.io</code>（如果你没有域名，将此文件留空即可）</li>\n<li>更新 <code>_config.yml</code> 以及 <code>assets/img/</code> 中的图片资源</li>\n<li>打开 <code>${YOUR_DOMAIN}</code> 看看吧！（如果你没有域名，请打开 <code>${YOUR_GITHUB_ID}.github.io</code>）</li>\n</ol>\n<p>来创建自己的 About Me 页面吧！</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%89%B9%E7%82%B9" }, "\u7279\u70B9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%88%9B%E5%BB%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E9%A1%B5%E9%9D%A2" }, "\u521B\u5EFA\u81EA\u5DF1\u7684\u9875\u9762")))),
    'author': undefined,
    'contributors': [],
    'date': "2021-07-02T06:13:03.800Z",
    'updated': null,
    'excerpt': "一个「About Me」页面，能够使别人快速的对你有一个大致的了解。 使用 GitHub 提供的 Pages 服务，可以将静态的网页托管在 GitHub 上。而 GitHub Pages 默认的 Jekyll 使得静态网页得以很方便的配置化。 我的 About Me 页面精雕...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "GitHub"
    ],
    'outdated': true,
    'links': {
        "关于我": "https://xcatliu.com",
        "GitHub": "https://github.com/xcatliu/xcatliu"
    },
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
