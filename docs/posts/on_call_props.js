import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/on_call.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/on_call.html",
    'title': "在微软 on call 的经历",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>在微软 on call 的经历</h1>\n<p>之前一直听说微软、亚马逊等企业需要 on call，但是不清楚具体要做什么。</p>\n<p>上周第一次在微软 on call，写一点感受。</p>\n<h2 id="on-call-%E6%98%AF%E4%BB%80%E4%B9%88">On call 是什么<a class="anchor" href="#on-call-%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>\n<p>就是需要保持电话畅通，随时都可能接到电话说哪个服务挂了，哪个测试失败了等等。</p>\n<p>然后需要具体问题具体分析，直到问题缓解或者解决了为止。</p>\n<p>On call 中文一般称为值班。</p>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81-on-call">为什么要 on call<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81-on-call">§</a></h2>\n<p>为了保证一旦服务出现问题，能够第一时间解决，不至于照成严重的影响。</p>\n<h2 id="%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E9%9C%80%E8%A6%81-on-call">什么时候需要 on call<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E9%9C%80%E8%A6%81-on-call">§</a></h2>\n<p>全球性的企业这时就体现出了它的优势了，不需要 24 小时 on call，而是根据时区，一般只会在工作时间内 on call。</p>\n<p>到了节假日则是每人一天轮流。</p>\n<h2 id="%E5%85%B7%E4%BD%93%E9%9C%80%E8%A6%81%E5%81%9A%E4%BB%80%E4%B9%88">具体需要做什么<a class="anchor" href="#%E5%85%B7%E4%BD%93%E9%9C%80%E8%A6%81%E5%81%9A%E4%BB%80%E4%B9%88">§</a></h2>\n<p>这里不能说太详细了，大概就是这样：</p>\n<ol>\n<li>保持电话畅通，随时接听电话</li>\n<li>接到电话后确认问题</li>\n<li>调查问题严重性，会不会影响线上产品，如果会影响，转 4，否则转 5</li>\n<li>尝试通过配置文件禁用相关功能，转 6</li>\n<li>持续调查</li>\n<li>确认问题是否减缓</li>\n<li>通知相关人，协助一起解决问题</li>\n<li>总结问题</li>\n</ol>\n<h2 id="%E6%AF%8F%E5%A4%A9%E4%BC%9A%E7%A2%B0%E5%88%B0%E5%87%A0%E4%B8%AA%E9%97%AE%E9%A2%98%E5%91%A2">每天会碰到几个问题呢<a class="anchor" href="#%E6%AF%8F%E5%A4%A9%E4%BC%9A%E7%A2%B0%E5%88%B0%E5%87%A0%E4%B8%AA%E9%97%AE%E9%A2%98%E5%91%A2">§</a></h2>\n<p>看人品，少则没有，多则整天都需要处理。</p>\n<h2 id="%E5%85%B6%E4%BB%96%E6%84%9F%E5%8F%97">其他感受<a class="anchor" href="#%E5%85%B6%E4%BB%96%E6%84%9F%E5%8F%97">§</a></h2>\n<p>值班的那几天可能是压力比较大，夜里没睡好觉。但事实上并没有很严重的问题出现。</p>\n<p>也许是又一次进去了黑暗森林的状态吧。</p>\n<p>另外，在美团也经历过 on call，不过只需要节假日值班（工作日每天都需要 24 小时在线，但是真正的问题并不多）。</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5728\u5FAE\u8F6F on call \u7684\u7ECF\u5386"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>之前一直听说微软、亚马逊等企业需要 on call，但是不清楚具体要做什么。</p>\n<p>上周第一次在微软 on call，写一点感受。</p>\n<h2 id="on-call-%E6%98%AF%E4%BB%80%E4%B9%88">On call 是什么<a class="anchor" href="#on-call-%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>\n<p>就是需要保持电话畅通，随时都可能接到电话说哪个服务挂了，哪个测试失败了等等。</p>\n<p>然后需要具体问题具体分析，直到问题缓解或者解决了为止。</p>\n<p>On call 中文一般称为值班。</p>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81-on-call">为什么要 on call<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81-on-call">§</a></h2>\n<p>为了保证一旦服务出现问题，能够第一时间解决，不至于照成严重的影响。</p>\n<h2 id="%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E9%9C%80%E8%A6%81-on-call">什么时候需要 on call<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E9%9C%80%E8%A6%81-on-call">§</a></h2>\n<p>全球性的企业这时就体现出了它的优势了，不需要 24 小时 on call，而是根据时区，一般只会在工作时间内 on call。</p>\n<p>到了节假日则是每人一天轮流。</p>\n<h2 id="%E5%85%B7%E4%BD%93%E9%9C%80%E8%A6%81%E5%81%9A%E4%BB%80%E4%B9%88">具体需要做什么<a class="anchor" href="#%E5%85%B7%E4%BD%93%E9%9C%80%E8%A6%81%E5%81%9A%E4%BB%80%E4%B9%88">§</a></h2>\n<p>这里不能说太详细了，大概就是这样：</p>\n<ol>\n<li>保持电话畅通，随时接听电话</li>\n<li>接到电话后确认问题</li>\n<li>调查问题严重性，会不会影响线上产品，如果会影响，转 4，否则转 5</li>\n<li>尝试通过配置文件禁用相关功能，转 6</li>\n<li>持续调查</li>\n<li>确认问题是否减缓</li>\n<li>通知相关人，协助一起解决问题</li>\n<li>总结问题</li>\n</ol>\n<h2 id="%E6%AF%8F%E5%A4%A9%E4%BC%9A%E7%A2%B0%E5%88%B0%E5%87%A0%E4%B8%AA%E9%97%AE%E9%A2%98%E5%91%A2">每天会碰到几个问题呢<a class="anchor" href="#%E6%AF%8F%E5%A4%A9%E4%BC%9A%E7%A2%B0%E5%88%B0%E5%87%A0%E4%B8%AA%E9%97%AE%E9%A2%98%E5%91%A2">§</a></h2>\n<p>看人品，少则没有，多则整天都需要处理。</p>\n<h2 id="%E5%85%B6%E4%BB%96%E6%84%9F%E5%8F%97">其他感受<a class="anchor" href="#%E5%85%B6%E4%BB%96%E6%84%9F%E5%8F%97">§</a></h2>\n<p>值班的那几天可能是压力比较大，夜里没睡好觉。但事实上并没有很严重的问题出现。</p>\n<p>也许是又一次进去了黑暗森林的状态吧。</p>\n<p>另外，在美团也经历过 on call，不过只需要节假日值班（工作日每天都需要 24 小时在线，但是真正的问题并不多）。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#on-call-%E6%98%AF%E4%BB%80%E4%B9%88" }, "On call \u662F\u4EC0\u4E48")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81-on-call" }, "\u4E3A\u4EC0\u4E48\u8981 on call")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E9%9C%80%E8%A6%81-on-call" }, "\u4EC0\u4E48\u65F6\u5019\u9700\u8981 on call")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%85%B7%E4%BD%93%E9%9C%80%E8%A6%81%E5%81%9A%E4%BB%80%E4%B9%88" }, "\u5177\u4F53\u9700\u8981\u505A\u4EC0\u4E48")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%AF%8F%E5%A4%A9%E4%BC%9A%E7%A2%B0%E5%88%B0%E5%87%A0%E4%B8%AA%E9%97%AE%E9%A2%98%E5%91%A2" }, "\u6BCF\u5929\u4F1A\u78B0\u5230\u51E0\u4E2A\u95EE\u9898\u5462")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%85%B6%E4%BB%96%E6%84%9F%E5%8F%97" }, "\u5176\u4ED6\u611F\u53D7")))),
    'author': undefined,
    'contributors': [],
    'date': "2021-07-02T06:13:03.800Z",
    'updated': null,
    'excerpt': "之前一直听说微软、亚马逊等企业需要 on call，但是不清楚具体要做什么。 上周第一次在微软 on call，写一点感受。 On call 是什么 就是需要保持电话畅通，随时都可能接到电话说哪个服务挂了，哪个测试失败了等等。 然后需要具...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "On call",
        "微软",
        "总结思考"
    ],
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
