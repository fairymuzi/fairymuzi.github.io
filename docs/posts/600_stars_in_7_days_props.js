import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/600_stars_in_7_days.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/600_stars_in_7_days.html",
    'title': "7 天 600 stars， Mobi.css 是如何诞生的",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>7 天 600 stars， Mobi.css 是如何诞生的</h1>\n<p>Mobi.css 是一个轻量、灵活的移动端 CSS 框架。发布一周以来，获得了 600+ stars，登上了 GitHub Trending Top1（CSS），在 Hacker News 上进入了前三。</p>\n<p>这篇文章会先介绍一下创造 Mobi.css 的思路，再介绍一下我在推广 Mobi.css 中的心得。</p>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%88%9B%E9%80%A0-mobicss">为什么要创造 Mobi.css<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%88%9B%E9%80%A0-mobicss">§</a></h2>\n<p>当我在设计一个新的 Focus on 移动端用户的网站（比如面向微信用户的网站）的时候，调研了一些现有的 CSS 框架，应用比较广泛的有 Bootstrap, Foundation, Pure.css, Framework7, Skeleton 等。</p>\n<p>他们都很优秀，但是都有一些缺点。</p>\n<ul>\n<li>Bootstrap: 太大太笨重了，对于桌面端用户我希望展示与手机端一样的页面，可能再加上一个二维码，将用户导向微信（类似于微信公众号的文章在网页中的样式）</li>\n<li>Foundation: 没有实践过，看上去也很大，大部分都是我不需要的功能</li>\n<li>Skeleton: 在移动端有一些 bug，<code>overflow:auto;</code> 的滑动不平滑，<code>&lt;select&gt;</code> 样式太丑，官网的 <code>&lt;pre&gt;&lt;code&gt;</code> 在 iPhone 里根本不 work，说明他们没有在手机上测试过</li>\n<li>Framework7: 适合做 WebApp，而我不太喜欢那种仿原生 App 的设计</li>\n<li>Pure.css: 很优秀，足够小巧，没什么特别的缺点，如果定制一下应该也可以满足需求。不过我还希望框架层面能够有一些针对移动端的设计</li>\n</ul>\n<p>于是我决定自己造一个轮子。</p>\n<p>造新轮子之前一定要做好调研，否则可能白费了功夫。</p>\n<h2 id="%E5%BC%80%E5%8F%91%E8%BF%87%E7%A8%8B%E4%B8%AD%E7%9A%84%E5%BF%83%E5%BE%97">开发过程中的心得<a class="anchor" href="#%E5%BC%80%E5%8F%91%E8%BF%87%E7%A8%8B%E4%B8%AD%E7%9A%84%E5%BF%83%E5%BE%97">§</a></h2>\n<h3 id="%E5%96%84%E7%94%A8%E5%B7%A5%E5%85%B7">善用工具<a class="anchor" href="#%E5%96%84%E7%94%A8%E5%B7%A5%E5%85%B7">§</a></h3>\n<p>CSS 框架相比于 JavaScript、React 等简单得多，但是也不能忽视了工具的使用。我选择了以下工具：</p>\n<ul>\n<li>Sass (scss)/Autoprefixer: CSS 预处理器都大同小异，Sass 功能比较全，所以选择了它。移动端也需要兼容不同设备，Autoprefixer 可以自动加上 <code>-webkit-</code> 等前缀</li>\n<li>Ejs/Marked/Highlight.js: 构建 website 的工具，一开始是手写 HTML，发现根本 hold 不住。这些工具后期可以用静态网站生成器替换</li>\n<li>Gulp: 构建工具，串起其他工具</li>\n<li>Travis CI/GitHub Pages/Coding Pages: 静态页面服务，一开始手动部署网站，后来发现太麻烦了，就用 Travis 自动部署了</li>\n</ul>\n<p>磨刀不误砍柴工，善用工具可以大大提高开发效率。</p>\n<h3 id="%E7%AB%99%E5%9C%A8%E5%B7%A8%E4%BA%BA%E7%9A%84%E8%82%A9%E8%86%80%E4%B8%8A">站在巨人的肩膀上<a class="anchor" href="#%E7%AB%99%E5%9C%A8%E5%B7%A8%E4%BA%BA%E7%9A%84%E8%82%A9%E8%86%80%E4%B8%8A">§</a></h3>\n<p>开源社区上的代码都是别人的积累，如果离开了它们，Mobi.css 很难在短时间内完成开发，我借鉴了以下开源项目：</p>\n<ul>\n<li>Normalize.css: 大部分 <code>_reset.scss</code> 部分是借鉴它的。没有直接引入它的原因是有少部分它的代码是不需要的</li>\n<li>Bootstrap v4: 使用最广泛的 CSS 框架，可借鉴的太多了</li>\n<li>Pure.css/Skeleton: 借鉴了手机上的样式</li>\n<li>微信公众号的 desktop 版: 借鉴了在 desktop 上的样式，以及中文字体</li>\n<li>以及很多其他框架</li>\n</ul>\n<h3 id="%E9%87%8D%E8%A7%86%E5%86%99%E6%96%87%E6%A1%A3">重视写文档<a class="anchor" href="#%E9%87%8D%E8%A7%86%E5%86%99%E6%96%87%E6%A1%A3">§</a></h3>\n<p>开源项目要受欢迎，文档是非常重要的。<code>README.md</code> 要让大家能在短时间内了解项目的特点。网站要能够尽可能输出自己的理念。</p>\n<p>如果可以的话，最好用英文（或者双语）写。否则只能有中国人来关注你的项目了。要知道，外国开发者比中国开发者多很多倍的。</p>\n<p>不要担心自己英语不好，只要表达的内容能让外国人看得懂即可。等项目成熟了，自然会有人帮你修改文档。</p>\n<h3 id="%E6%B3%A8%E6%84%8F%E7%A4%BE%E5%8C%BA%E7%9A%84%E4%B8%80%E4%BA%9B%E8%A7%84%E5%88%99">注意社区的一些规则<a class="anchor" href="#%E6%B3%A8%E6%84%8F%E7%A4%BE%E5%8C%BA%E7%9A%84%E4%B8%80%E4%BA%9B%E8%A7%84%E5%88%99">§</a></h3>\n<ul>\n<li>标明 License</li>\n<li>遵守版本号规则，不要乱做 Breaking changes</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E6%8E%A8%E5%B9%BF">如何推广<a class="anchor" href="#%E5%A6%82%E4%BD%95%E6%8E%A8%E5%B9%BF">§</a></h2>\n<p>不要觉得不好意思推广，我们推广不是功利性的求赞求关注（逃。</p>\n<p>而是因为没有人关注的项目，是不可能向好的方向发展的。而如果自己不做主动的推广，项目也很难被关注。</p>\n<p>推广这部分其实我并不是很擅长，这里只写出一些我自己的心得吧。</p>\n<h3 id="%E5%9C%A8%E5%AF%B9%E7%9A%84%E6%97%B6%E9%97%B4%E5%8F%91%E5%AF%B9%E7%9A%84%E5%B8%96">在对的时间发对的帖<a class="anchor" href="#%E5%9C%A8%E5%AF%B9%E7%9A%84%E6%97%B6%E9%97%B4%E5%8F%91%E5%AF%B9%E7%9A%84%E5%B8%96">§</a></h3>\n<p>一般在下班的时间，大家都会拿出手机刷一刷。这时你的贴最容易被曝光。等到人气上去了，晚上睡觉之前大家再刷一波手机，就有更多人看到了。</p>\n<p>发帖的时候只需要简要的说重点，引导用户到 GitHub 或你的网站。但是慎用「求 star」等字眼，功利性太强。</p>\n<h3 id="%E6%8E%A8%E5%B9%BF%E6%B8%A0%E9%81%93">推广渠道<a class="anchor" href="#%E6%8E%A8%E5%B9%BF%E6%B8%A0%E9%81%93">§</a></h3>\n<p>我用了以下推广渠道（按推广效果排序）：</p>\n<ul>\n<li>Hacker News</li>\n<li>V2EX</li>\n<li>开发者头条</li>\n<li>SegmentFault</li>\n<li>Hacpai</li>\n<li>Startup News</li>\n<li>光谷社区</li>\n<li>Reddit</li>\n</ul>\n<h3 id="%E8%81%86%E5%90%AC%E6%84%8F%E8%A7%81%E5%8F%8A%E6%97%B6%E5%8F%8D%E9%A6%88">聆听意见，及时反馈<a class="anchor" href="#%E8%81%86%E5%90%AC%E6%84%8F%E8%A7%81%E5%8F%8A%E6%97%B6%E5%8F%8D%E9%A6%88">§</a></h3>\n<p>自己的想法总归是一个人的，吸取了别人的建议才能让项目更好的发展。Mobi.css 就有一部分 API 是听取了别人的建议之后修改的。</p>\n<p>当然，自己需要有自己的判断。Mobi.css 的准则很简单：这个设计是不是 focus on mobile 的。</p>\n<h3 id="%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%E9%A1%B9%E7%9B%AE%E8%A6%81%E6%9C%89%E4%BB%B7%E5%80%BC">最重要的是，项目要有价值<a class="anchor" href="#%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%E9%A1%B9%E7%9B%AE%E8%A6%81%E6%9C%89%E4%BB%B7%E5%80%BC">§</a></h3>\n<p>没有价值的项目即使推广再多，也没有人会关注的，只会招来一顿猛喷。</p>\n<h2 id="%E6%80%BB%E7%BB%93">总结<a class="anchor" href="#%E6%80%BB%E7%BB%93">§</a></h2>\n<p>Mobi.css 在短时间内获得了很多关注，离不开大家的支持，离不开开源社区的帮助。</p>\n<p>我知道这只是 Mobi.css 项目的开始，后面有更长的路要走，感兴趣的可以一起来建设。</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "7 \u5929 600 stars\uFF0C Mobi.css \u662F\u5982\u4F55\u8BDE\u751F\u7684"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Mobi.css 是一个轻量、灵活的移动端 CSS 框架。发布一周以来，获得了 600+ stars，登上了 GitHub Trending Top1（CSS），在 Hacker News 上进入了前三。</p>\n<p>这篇文章会先介绍一下创造 Mobi.css 的思路，再介绍一下我在推广 Mobi.css 中的心得。</p>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%88%9B%E9%80%A0-mobicss">为什么要创造 Mobi.css<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%88%9B%E9%80%A0-mobicss">§</a></h2>\n<p>当我在设计一个新的 Focus on 移动端用户的网站（比如面向微信用户的网站）的时候，调研了一些现有的 CSS 框架，应用比较广泛的有 Bootstrap, Foundation, Pure.css, Framework7, Skeleton 等。</p>\n<p>他们都很优秀，但是都有一些缺点。</p>\n<ul>\n<li>Bootstrap: 太大太笨重了，对于桌面端用户我希望展示与手机端一样的页面，可能再加上一个二维码，将用户导向微信（类似于微信公众号的文章在网页中的样式）</li>\n<li>Foundation: 没有实践过，看上去也很大，大部分都是我不需要的功能</li>\n<li>Skeleton: 在移动端有一些 bug，<code>overflow:auto;</code> 的滑动不平滑，<code>&lt;select&gt;</code> 样式太丑，官网的 <code>&lt;pre&gt;&lt;code&gt;</code> 在 iPhone 里根本不 work，说明他们没有在手机上测试过</li>\n<li>Framework7: 适合做 WebApp，而我不太喜欢那种仿原生 App 的设计</li>\n<li>Pure.css: 很优秀，足够小巧，没什么特别的缺点，如果定制一下应该也可以满足需求。不过我还希望框架层面能够有一些针对移动端的设计</li>\n</ul>\n<p>于是我决定自己造一个轮子。</p>\n<p>造新轮子之前一定要做好调研，否则可能白费了功夫。</p>\n<h2 id="%E5%BC%80%E5%8F%91%E8%BF%87%E7%A8%8B%E4%B8%AD%E7%9A%84%E5%BF%83%E5%BE%97">开发过程中的心得<a class="anchor" href="#%E5%BC%80%E5%8F%91%E8%BF%87%E7%A8%8B%E4%B8%AD%E7%9A%84%E5%BF%83%E5%BE%97">§</a></h2>\n<h3 id="%E5%96%84%E7%94%A8%E5%B7%A5%E5%85%B7">善用工具<a class="anchor" href="#%E5%96%84%E7%94%A8%E5%B7%A5%E5%85%B7">§</a></h3>\n<p>CSS 框架相比于 JavaScript、React 等简单得多，但是也不能忽视了工具的使用。我选择了以下工具：</p>\n<ul>\n<li>Sass (scss)/Autoprefixer: CSS 预处理器都大同小异，Sass 功能比较全，所以选择了它。移动端也需要兼容不同设备，Autoprefixer 可以自动加上 <code>-webkit-</code> 等前缀</li>\n<li>Ejs/Marked/Highlight.js: 构建 website 的工具，一开始是手写 HTML，发现根本 hold 不住。这些工具后期可以用静态网站生成器替换</li>\n<li>Gulp: 构建工具，串起其他工具</li>\n<li>Travis CI/GitHub Pages/Coding Pages: 静态页面服务，一开始手动部署网站，后来发现太麻烦了，就用 Travis 自动部署了</li>\n</ul>\n<p>磨刀不误砍柴工，善用工具可以大大提高开发效率。</p>\n<h3 id="%E7%AB%99%E5%9C%A8%E5%B7%A8%E4%BA%BA%E7%9A%84%E8%82%A9%E8%86%80%E4%B8%8A">站在巨人的肩膀上<a class="anchor" href="#%E7%AB%99%E5%9C%A8%E5%B7%A8%E4%BA%BA%E7%9A%84%E8%82%A9%E8%86%80%E4%B8%8A">§</a></h3>\n<p>开源社区上的代码都是别人的积累，如果离开了它们，Mobi.css 很难在短时间内完成开发，我借鉴了以下开源项目：</p>\n<ul>\n<li>Normalize.css: 大部分 <code>_reset.scss</code> 部分是借鉴它的。没有直接引入它的原因是有少部分它的代码是不需要的</li>\n<li>Bootstrap v4: 使用最广泛的 CSS 框架，可借鉴的太多了</li>\n<li>Pure.css/Skeleton: 借鉴了手机上的样式</li>\n<li>微信公众号的 desktop 版: 借鉴了在 desktop 上的样式，以及中文字体</li>\n<li>以及很多其他框架</li>\n</ul>\n<h3 id="%E9%87%8D%E8%A7%86%E5%86%99%E6%96%87%E6%A1%A3">重视写文档<a class="anchor" href="#%E9%87%8D%E8%A7%86%E5%86%99%E6%96%87%E6%A1%A3">§</a></h3>\n<p>开源项目要受欢迎，文档是非常重要的。<code>README.md</code> 要让大家能在短时间内了解项目的特点。网站要能够尽可能输出自己的理念。</p>\n<p>如果可以的话，最好用英文（或者双语）写。否则只能有中国人来关注你的项目了。要知道，外国开发者比中国开发者多很多倍的。</p>\n<p>不要担心自己英语不好，只要表达的内容能让外国人看得懂即可。等项目成熟了，自然会有人帮你修改文档。</p>\n<h3 id="%E6%B3%A8%E6%84%8F%E7%A4%BE%E5%8C%BA%E7%9A%84%E4%B8%80%E4%BA%9B%E8%A7%84%E5%88%99">注意社区的一些规则<a class="anchor" href="#%E6%B3%A8%E6%84%8F%E7%A4%BE%E5%8C%BA%E7%9A%84%E4%B8%80%E4%BA%9B%E8%A7%84%E5%88%99">§</a></h3>\n<ul>\n<li>标明 License</li>\n<li>遵守版本号规则，不要乱做 Breaking changes</li>\n</ul>\n<h2 id="%E5%A6%82%E4%BD%95%E6%8E%A8%E5%B9%BF">如何推广<a class="anchor" href="#%E5%A6%82%E4%BD%95%E6%8E%A8%E5%B9%BF">§</a></h2>\n<p>不要觉得不好意思推广，我们推广不是功利性的求赞求关注（逃。</p>\n<p>而是因为没有人关注的项目，是不可能向好的方向发展的。而如果自己不做主动的推广，项目也很难被关注。</p>\n<p>推广这部分其实我并不是很擅长，这里只写出一些我自己的心得吧。</p>\n<h3 id="%E5%9C%A8%E5%AF%B9%E7%9A%84%E6%97%B6%E9%97%B4%E5%8F%91%E5%AF%B9%E7%9A%84%E5%B8%96">在对的时间发对的帖<a class="anchor" href="#%E5%9C%A8%E5%AF%B9%E7%9A%84%E6%97%B6%E9%97%B4%E5%8F%91%E5%AF%B9%E7%9A%84%E5%B8%96">§</a></h3>\n<p>一般在下班的时间，大家都会拿出手机刷一刷。这时你的贴最容易被曝光。等到人气上去了，晚上睡觉之前大家再刷一波手机，就有更多人看到了。</p>\n<p>发帖的时候只需要简要的说重点，引导用户到 GitHub 或你的网站。但是慎用「求 star」等字眼，功利性太强。</p>\n<h3 id="%E6%8E%A8%E5%B9%BF%E6%B8%A0%E9%81%93">推广渠道<a class="anchor" href="#%E6%8E%A8%E5%B9%BF%E6%B8%A0%E9%81%93">§</a></h3>\n<p>我用了以下推广渠道（按推广效果排序）：</p>\n<ul>\n<li>Hacker News</li>\n<li>V2EX</li>\n<li>开发者头条</li>\n<li>SegmentFault</li>\n<li>Hacpai</li>\n<li>Startup News</li>\n<li>光谷社区</li>\n<li>Reddit</li>\n</ul>\n<h3 id="%E8%81%86%E5%90%AC%E6%84%8F%E8%A7%81%E5%8F%8A%E6%97%B6%E5%8F%8D%E9%A6%88">聆听意见，及时反馈<a class="anchor" href="#%E8%81%86%E5%90%AC%E6%84%8F%E8%A7%81%E5%8F%8A%E6%97%B6%E5%8F%8D%E9%A6%88">§</a></h3>\n<p>自己的想法总归是一个人的，吸取了别人的建议才能让项目更好的发展。Mobi.css 就有一部分 API 是听取了别人的建议之后修改的。</p>\n<p>当然，自己需要有自己的判断。Mobi.css 的准则很简单：这个设计是不是 focus on mobile 的。</p>\n<h3 id="%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%E9%A1%B9%E7%9B%AE%E8%A6%81%E6%9C%89%E4%BB%B7%E5%80%BC">最重要的是，项目要有价值<a class="anchor" href="#%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%E9%A1%B9%E7%9B%AE%E8%A6%81%E6%9C%89%E4%BB%B7%E5%80%BC">§</a></h3>\n<p>没有价值的项目即使推广再多，也没有人会关注的，只会招来一顿猛喷。</p>\n<h2 id="%E6%80%BB%E7%BB%93">总结<a class="anchor" href="#%E6%80%BB%E7%BB%93">§</a></h2>\n<p>Mobi.css 在短时间内获得了很多关注，离不开大家的支持，离不开开源社区的帮助。</p>\n<p>我知道这只是 Mobi.css 项目的开始，后面有更长的路要走，感兴趣的可以一起来建设。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%88%9B%E9%80%A0-mobicss" }, "\u4E3A\u4EC0\u4E48\u8981\u521B\u9020 Mobi.css")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%BC%80%E5%8F%91%E8%BF%87%E7%A8%8B%E4%B8%AD%E7%9A%84%E5%BF%83%E5%BE%97" }, "\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u7684\u5FC3\u5F97"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%96%84%E7%94%A8%E5%B7%A5%E5%85%B7" }, "\u5584\u7528\u5DE5\u5177")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E7%AB%99%E5%9C%A8%E5%B7%A8%E4%BA%BA%E7%9A%84%E8%82%A9%E8%86%80%E4%B8%8A" }, "\u7AD9\u5728\u5DE8\u4EBA\u7684\u80A9\u8180\u4E0A")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E9%87%8D%E8%A7%86%E5%86%99%E6%96%87%E6%A1%A3" }, "\u91CD\u89C6\u5199\u6587\u6863")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%B3%A8%E6%84%8F%E7%A4%BE%E5%8C%BA%E7%9A%84%E4%B8%80%E4%BA%9B%E8%A7%84%E5%88%99" }, "\u6CE8\u610F\u793E\u533A\u7684\u4E00\u4E9B\u89C4\u5219")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%A6%82%E4%BD%95%E6%8E%A8%E5%B9%BF" }, "\u5982\u4F55\u63A8\u5E7F"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%9C%A8%E5%AF%B9%E7%9A%84%E6%97%B6%E9%97%B4%E5%8F%91%E5%AF%B9%E7%9A%84%E5%B8%96" }, "\u5728\u5BF9\u7684\u65F6\u95F4\u53D1\u5BF9\u7684\u5E16")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%8E%A8%E5%B9%BF%E6%B8%A0%E9%81%93" }, "\u63A8\u5E7F\u6E20\u9053")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E8%81%86%E5%90%AC%E6%84%8F%E8%A7%81%E5%8F%8A%E6%97%B6%E5%8F%8D%E9%A6%88" }, "\u8046\u542C\u610F\u89C1\uFF0C\u53CA\u65F6\u53CD\u9988")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%E9%A1%B9%E7%9B%AE%E8%A6%81%E6%9C%89%E4%BB%B7%E5%80%BC" }, "\u6700\u91CD\u8981\u7684\u662F\uFF0C\u9879\u76EE\u8981\u6709\u4EF7\u503C")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%80%BB%E7%BB%93" }, "\u603B\u7ED3")))),
    'author': undefined,
    'contributors': [],
    'date': "2022-09-05T00:00:00.000Z",
    'updated': null,
    'excerpt': "Mobi.css 是一个轻量、灵活的移动端 CSS 框架。发布一周以来，获得了 600+ stars，登上了 GitHub Trending Top1（CSS），在 Hacker News 上进入了前三。 这篇文章会先介绍一下创造 Mobi.css 的思路，再介绍一下我在推广 Mobi.c...",
    'cover': undefined,
    'categories': [
        "编程世界2"
    ],
    'tags': [
        "Mobi.css",
        "总结思考"
    ],
    'links': {
        "v2ex": "https://v2ex.com/t/304129",
        "GitHub": "https://github.com/xcatliu/mobi.css",
        "Mobi.css": "https://getmobicss.com",
        "Hacker News": "https://news.ycombinator.com/item?id=12421804"
    },
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
