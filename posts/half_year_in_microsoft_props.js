import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/half_year_in_microsoft.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/half_year_in_microsoft.html",
    'title': "我来微软这半年",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>我来微软这半年</h1>\n<p>转眼间已经离开美团，来到微软半年了。</p>\n<h2 id="%E8%83%8C%E6%99%AF">背景<a class="anchor" href="#%E8%83%8C%E6%99%AF">§</a></h2>\n<p>在刚加入微软的时候，我打算过了一个月就写个月度总结。结果一个月后，发现啥都不懂。</p>\n<p>于是想再过一阵子来写个季度总结吧。结果一个季度后，感觉对业务还是一知半解。</p>\n<p>于是想再过一阵子来写个半年总结吧。现在半年过去了，总算有点话可以说了。</p>\n<h2 id="%E7%AC%AC%E4%B8%80%E5%8D%B0%E8%B1%A1">第一印象<a class="anchor" href="#%E7%AC%AC%E4%B8%80%E5%8D%B0%E8%B1%A1">§</a></h2>\n<p>慢——这也许就是我对微软的第一印象吧。</p>\n<p>加入微软之前，我已经有过心理准备，也听说过微软的节奏比较慢。但是不是亲身经历的话，是无法有这种体会的。</p>\n<p>在美团，我带的团队曾经一个多月就完成了包括 iOS 和 Android 的一个完整的 Hybrid 项目。</p>\n<p>在微软，这几乎是不可能的事情。</p>\n<p>做一个 Feature 之前，需要对各个方面进行审核：</p>\n<ul>\n<li>是否合规</li>\n<li>搜集了用户隐私吗</li>\n<li>需要对哪些用户开放</li>\n</ul>\n<p>开发的过程中，需要先进行 Dev design ，也需要考虑一些以前从没考虑过的问题：</p>\n<ul>\n<li>Accessibility ，对于残障人士友好，需要保证在高对比度下可用，对视力障碍的人可以直接听到等</li>\n<li>Globality ，有的国家是从右到左的阅读习惯，有的语言即使表达一个词语，也会有很长的字符</li>\n<li>各种各样的测试，测试的种类太多了，我会在将来再单独分享</li>\n<li>代码 Review 非常严格，给我 Review 代码的同事都看的非常认真</li>\n</ul>\n<p>为了保证一个 Feature 顺利上线，各种措施也不会少：</p>\n<ul>\n<li>配置化的开关，可以通过配置快速的控制一个 Feature 的开关</li>\n<li>灰度上线，保证不影响其他流程的数据</li>\n<li>数据分析，了解用户对于新 Feature 的接受程度</li>\n</ul>\n<p>每一项执行下来，几个月就过去了。</p>\n<p>慢只是表象，认真严谨和对用户负责才是实质。</p>\n<h2 id="%E5%B7%A5%E5%85%B7%E5%8C%96%E5%92%8C%E8%87%AA%E5%8A%A8%E5%8C%96">工具化和自动化<a class="anchor" href="#%E5%B7%A5%E5%85%B7%E5%8C%96%E5%92%8C%E8%87%AA%E5%8A%A8%E5%8C%96">§</a></h2>\n<p>在微软，工具随处可见：</p>\n<ul>\n<li>办公有 Office 全套</li>\n<li>写代码有 Visual Studio ，和专用的 Review 工具，合并工具，全局搜索工具</li>\n<li>知识积累有 Wiki ，问答</li>\n<li>其他的比如 IT 和 HR 等系统都非常专业</li>\n</ul>\n<p>自动化也很完备：自动测试，自动部署，报警电话和邮件等。</p>\n<p>虽然我已经来了半年了，但是感觉仍然只接触到了凤毛麟角。</p>\n<h2 id="%E6%8A%80%E6%9C%AF">技术<a class="anchor" href="#%E6%8A%80%E6%9C%AF">§</a></h2>\n<p>首先，下面这段只表示我在我所在的团队看到的技术，不代表其他团队也是这样。</p>\n<p>其次这是我在短短半年接触到的，不一定准确，也不代表将来不会有新的技术。</p>\n<p>最后，这只是我的个人看法，与其他所有个人和组织都无关。</p>\n<p>作为一个前端，我必须得说，这里并不适合追逐新技术的人才。</p>\n<p>下面就把「<a href="https://www.v2ex.com/t/310767">在 2016 年学 JavaScript 是一种什么样的体验？</a>」中的大部分技术都列举一遍吧：</p>\n<p>没有 jQuery ，没有 React ，没有 ES2016 ，没有 AMD ，没有 CommonJS ，没有 Browserify ，没有 npm ，没有 Bower ，没有 Angular ，没有 Grunt ，没有 Gulp ，没有 Webpack 。</p>\n<p>有 TypeScript ！</p>\n<p>没有 Ramda ，没有 Fetch ，没有 Promise ，没有 await ，没有 async ，没有 Flux ，没有 Redux ，没有 KnockoutJS ，没有 Handlebars ，没有 Mustache ，没有 underscore ，没有 Lodash ，没有 Jade ，没有 EJS ，没有 Elm 。</p>\n<p>没错，大部分新技术这里都没有。只有一个自己写的基础库，实现了 DOM ， Ajax 等一些常见的操作。</p>\n<p>为什么不用一些新技术呢？我觉得是为了追求稳定性吧。</p>\n<p>为什么不用 jQuery 呢？因为自己的基础库比 jQuery 更高效。</p>\n<p>可以使用开源库吗？可以，但是需要报备它的开源协议。</p>\n<p>关于新技术的讨论已经很多了，这里我只列举我所看到的现象，如何评价请见仁见智吧。</p>\n<h2 id="%E7%A6%8F%E5%88%A9%E5%92%8C%E6%96%87%E5%8C%96">福利和文化<a class="anchor" href="#%E7%A6%8F%E5%88%A9%E5%92%8C%E6%96%87%E5%8C%96">§</a></h2>\n<p>外企的福利大家应该听说过了，这也是最值得炫耀的部分了：</p>\n<ul>\n<li>水果、点心、酸奶、牛奶、茶、咖啡等</li>\n<li>不打卡，年假 15+ 天</li>\n<li>健身房，按摩椅，各种健康讲座</li>\n<li>家庭日活动，相信带小孩去玩过一次的话，你想跳槽你的小孩也不同意了</li>\n</ul>\n<p>文化也是我比较关注的方面。</p>\n<p>首先，这里比较注重个人隐私，一般很少会突然出现一个人站在背后来找你。开会也会提前很久通知。</p>\n<p>其次，大家都倾向于能够书面交流就不口头交流，一方面是不打扰到对方一方面是可以留下凭据。</p>\n<p>因为大多数都是结婚有小孩的，所以更多的是陪自己的家人，而不是和同事一起玩。</p>\n<h2 id="%E8%8B%B1%E8%AF%AD">英语<a class="anchor" href="#%E8%8B%B1%E8%AF%AD">§</a></h2>\n<p>为什么英语要单独说呢，因为我的英语比各位都差（四级刚刚过，六级没过）。</p>\n<p>刚来的时候，邮件是英文的还好，可以慢慢读。然而开会和讨论项目都是英文，着实难受了好一阵子。</p>\n<p>其实听英语还好，说出口实在太难了。</p>\n<p>只好慢慢练习慢慢融入，现在基本可以交流了。</p>\n<p>要说诀窍，那就是敢说。外国人并不在乎你说的流不流畅，只要你能让他听懂你的意思就行了，所以可以用肢体语言辅助吧，说英语并不是那么难。</p>\n<h2 id="%E4%B8%9A%E4%BD%99%E7%A7%AF%E7%B4%AF">业余积累<a class="anchor" href="#%E4%B8%9A%E4%BD%99%E7%A7%AF%E7%B4%AF">§</a></h2>\n<p>来微软之前，我就对自己说，一定要利用好自己的业余时间，把之前的坑都慢慢填上。</p>\n<p>可是没想到坑却越来越多了，看来以后得加倍努力了！</p>\n<p>这是我来微软后业余做的一些事情：</p>\n<ul>\n<li>加入了 <a href="https://github.com/xcatliu">Microsoft organization</a></li>\n<li>持续的更新 <a href="https://github.com/xcatliu/jekyllcn">JekyllCN</a></li>\n<li>给 <a href="http://live.nodejs.org">live.nodejs.org</a> <a href="https://github.com/nodejs/live.nodejs.org/pull/43">加入了多语言支持</a></li>\n<li>持续的更新 <a href="https://github.com/xcatliu/react-ie8">React IE8</a></li>\n<li><a href="https://github.com/ruanyf/es6tutorial/pulls?utf8=%E2%9C%93&amp;q=is%3Apr%20author%3Axcatliu%20">给阮一峰的《 ECMAScript 6 入门》提了十多个 pull request</a></li>\n<li>开始写一本书<a href="https://github.com/xcatliu/from-javascript-to-typescript">《 From JavaScript to TypeScript 》</a></li>\n<li>写了<a href="https://www.v2ex.com/t/289667">几个 Hexo 的插件</a>和<a href="https://www.v2ex.com/t/288151">一个 Hexo 的主题</a></li>\n<li>开源了 <a href="https://github.com/xcatliu/mobi.css">Mobi.css</a>，一个轻量灵活的移动端 CSS 框架。并<a href="https://www.v2ex.com/t/304129">在 7 天内获得了 600 个 Stars</a></li>\n<li>组织<a href="https://github.com/xcatliu/yarnpkg-website">翻译 Yarn 文档</a></li>\n</ul>\n<p>欢迎一起来开源！</p>\n<p>对了，听说马上 MacBook Pro 要出新品了，等了大半年，终于可以剁手了！</p>\n<h2 id="faq">FAQ<a class="anchor" href="#faq">§</a></h2>\n<h3 id="1-%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E6%8B%9B%E8%81%98%E8%B4%B4%E5%90%97">1. 这是一个招聘贴吗？<a class="anchor" href="#1-%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E6%8B%9B%E8%81%98%E8%B4%B4%E5%90%97">§</a></h3>\n<p>显然不是，我还没到那么高的级别可以负责招聘。不过如果感兴趣可以给我发邮件，邮件地址自己去找吧。</p>\n<h3 id="2-%E4%BD%A0%E5%BD%93%E5%88%9D%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E7%A6%BB%E5%BC%80%E7%BE%8E%E5%9B%A2%E5%8A%A0%E5%85%A5%E5%BE%AE%E8%BD%AF">2. 你当初为什么会离开美团加入微软？<a class="anchor" href="#2-%E4%BD%A0%E5%BD%93%E5%88%9D%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E7%A6%BB%E5%BC%80%E7%BE%8E%E5%9B%A2%E5%8A%A0%E5%85%A5%E5%BE%AE%E8%BD%AF">§</a></h3>\n<p>主要原因是想去大外企看看，次要原因是晚餐可以去女朋友学校吃了，很方便卫生。</p>\n<h3 id="3-%E9%9D%A2%E8%AF%95%E5%86%85%E5%AE%B9%E6%98%AF%E4%BB%80%E4%B9%88%E9%9A%BE%E5%90%97">3. 面试内容是什么？难吗？<a class="anchor" href="#3-%E9%9D%A2%E8%AF%95%E5%86%85%E5%AE%B9%E6%98%AF%E4%BB%80%E4%B9%88%E9%9A%BE%E5%90%97">§</a></h3>\n<p>主要面算法，大概在 LeetCode 简单或中等难度，我面试前也刷了一百多道题，所以问题不大。</p>\n<p>这是当时刷的题： <a href="https://github.com/xcatliu/leetcode">https://github.com/xcatliu/leetcode</a></p>\n<hr>\n<p>如果有其他问题，也可以留言。</p>\n<p>更多关于我的介绍，可以看<a href="https://github.com/xcatliu">我的 GitHub</a>。</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6211\u6765\u5FAE\u8F6F\u8FD9\u534A\u5E74"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>转眼间已经离开美团，来到微软半年了。</p>\n<h2 id="%E8%83%8C%E6%99%AF">背景<a class="anchor" href="#%E8%83%8C%E6%99%AF">§</a></h2>\n<p>在刚加入微软的时候，我打算过了一个月就写个月度总结。结果一个月后，发现啥都不懂。</p>\n<p>于是想再过一阵子来写个季度总结吧。结果一个季度后，感觉对业务还是一知半解。</p>\n<p>于是想再过一阵子来写个半年总结吧。现在半年过去了，总算有点话可以说了。</p>\n<h2 id="%E7%AC%AC%E4%B8%80%E5%8D%B0%E8%B1%A1">第一印象<a class="anchor" href="#%E7%AC%AC%E4%B8%80%E5%8D%B0%E8%B1%A1">§</a></h2>\n<p>慢——这也许就是我对微软的第一印象吧。</p>\n<p>加入微软之前，我已经有过心理准备，也听说过微软的节奏比较慢。但是不是亲身经历的话，是无法有这种体会的。</p>\n<p>在美团，我带的团队曾经一个多月就完成了包括 iOS 和 Android 的一个完整的 Hybrid 项目。</p>\n<p>在微软，这几乎是不可能的事情。</p>\n<p>做一个 Feature 之前，需要对各个方面进行审核：</p>\n<ul>\n<li>是否合规</li>\n<li>搜集了用户隐私吗</li>\n<li>需要对哪些用户开放</li>\n</ul>\n<p>开发的过程中，需要先进行 Dev design ，也需要考虑一些以前从没考虑过的问题：</p>\n<ul>\n<li>Accessibility ，对于残障人士友好，需要保证在高对比度下可用，对视力障碍的人可以直接听到等</li>\n<li>Globality ，有的国家是从右到左的阅读习惯，有的语言即使表达一个词语，也会有很长的字符</li>\n<li>各种各样的测试，测试的种类太多了，我会在将来再单独分享</li>\n<li>代码 Review 非常严格，给我 Review 代码的同事都看的非常认真</li>\n</ul>\n<p>为了保证一个 Feature 顺利上线，各种措施也不会少：</p>\n<ul>\n<li>配置化的开关，可以通过配置快速的控制一个 Feature 的开关</li>\n<li>灰度上线，保证不影响其他流程的数据</li>\n<li>数据分析，了解用户对于新 Feature 的接受程度</li>\n</ul>\n<p>每一项执行下来，几个月就过去了。</p>\n<p>慢只是表象，认真严谨和对用户负责才是实质。</p>\n<h2 id="%E5%B7%A5%E5%85%B7%E5%8C%96%E5%92%8C%E8%87%AA%E5%8A%A8%E5%8C%96">工具化和自动化<a class="anchor" href="#%E5%B7%A5%E5%85%B7%E5%8C%96%E5%92%8C%E8%87%AA%E5%8A%A8%E5%8C%96">§</a></h2>\n<p>在微软，工具随处可见：</p>\n<ul>\n<li>办公有 Office 全套</li>\n<li>写代码有 Visual Studio ，和专用的 Review 工具，合并工具，全局搜索工具</li>\n<li>知识积累有 Wiki ，问答</li>\n<li>其他的比如 IT 和 HR 等系统都非常专业</li>\n</ul>\n<p>自动化也很完备：自动测试，自动部署，报警电话和邮件等。</p>\n<p>虽然我已经来了半年了，但是感觉仍然只接触到了凤毛麟角。</p>\n<h2 id="%E6%8A%80%E6%9C%AF">技术<a class="anchor" href="#%E6%8A%80%E6%9C%AF">§</a></h2>\n<p>首先，下面这段只表示我在我所在的团队看到的技术，不代表其他团队也是这样。</p>\n<p>其次这是我在短短半年接触到的，不一定准确，也不代表将来不会有新的技术。</p>\n<p>最后，这只是我的个人看法，与其他所有个人和组织都无关。</p>\n<p>作为一个前端，我必须得说，这里并不适合追逐新技术的人才。</p>\n<p>下面就把「<a href="https://www.v2ex.com/t/310767">在 2016 年学 JavaScript 是一种什么样的体验？</a>」中的大部分技术都列举一遍吧：</p>\n<p>没有 jQuery ，没有 React ，没有 ES2016 ，没有 AMD ，没有 CommonJS ，没有 Browserify ，没有 npm ，没有 Bower ，没有 Angular ，没有 Grunt ，没有 Gulp ，没有 Webpack 。</p>\n<p>有 TypeScript ！</p>\n<p>没有 Ramda ，没有 Fetch ，没有 Promise ，没有 await ，没有 async ，没有 Flux ，没有 Redux ，没有 KnockoutJS ，没有 Handlebars ，没有 Mustache ，没有 underscore ，没有 Lodash ，没有 Jade ，没有 EJS ，没有 Elm 。</p>\n<p>没错，大部分新技术这里都没有。只有一个自己写的基础库，实现了 DOM ， Ajax 等一些常见的操作。</p>\n<p>为什么不用一些新技术呢？我觉得是为了追求稳定性吧。</p>\n<p>为什么不用 jQuery 呢？因为自己的基础库比 jQuery 更高效。</p>\n<p>可以使用开源库吗？可以，但是需要报备它的开源协议。</p>\n<p>关于新技术的讨论已经很多了，这里我只列举我所看到的现象，如何评价请见仁见智吧。</p>\n<h2 id="%E7%A6%8F%E5%88%A9%E5%92%8C%E6%96%87%E5%8C%96">福利和文化<a class="anchor" href="#%E7%A6%8F%E5%88%A9%E5%92%8C%E6%96%87%E5%8C%96">§</a></h2>\n<p>外企的福利大家应该听说过了，这也是最值得炫耀的部分了：</p>\n<ul>\n<li>水果、点心、酸奶、牛奶、茶、咖啡等</li>\n<li>不打卡，年假 15+ 天</li>\n<li>健身房，按摩椅，各种健康讲座</li>\n<li>家庭日活动，相信带小孩去玩过一次的话，你想跳槽你的小孩也不同意了</li>\n</ul>\n<p>文化也是我比较关注的方面。</p>\n<p>首先，这里比较注重个人隐私，一般很少会突然出现一个人站在背后来找你。开会也会提前很久通知。</p>\n<p>其次，大家都倾向于能够书面交流就不口头交流，一方面是不打扰到对方一方面是可以留下凭据。</p>\n<p>因为大多数都是结婚有小孩的，所以更多的是陪自己的家人，而不是和同事一起玩。</p>\n<h2 id="%E8%8B%B1%E8%AF%AD">英语<a class="anchor" href="#%E8%8B%B1%E8%AF%AD">§</a></h2>\n<p>为什么英语要单独说呢，因为我的英语比各位都差（四级刚刚过，六级没过）。</p>\n<p>刚来的时候，邮件是英文的还好，可以慢慢读。然而开会和讨论项目都是英文，着实难受了好一阵子。</p>\n<p>其实听英语还好，说出口实在太难了。</p>\n<p>只好慢慢练习慢慢融入，现在基本可以交流了。</p>\n<p>要说诀窍，那就是敢说。外国人并不在乎你说的流不流畅，只要你能让他听懂你的意思就行了，所以可以用肢体语言辅助吧，说英语并不是那么难。</p>\n<h2 id="%E4%B8%9A%E4%BD%99%E7%A7%AF%E7%B4%AF">业余积累<a class="anchor" href="#%E4%B8%9A%E4%BD%99%E7%A7%AF%E7%B4%AF">§</a></h2>\n<p>来微软之前，我就对自己说，一定要利用好自己的业余时间，把之前的坑都慢慢填上。</p>\n<p>可是没想到坑却越来越多了，看来以后得加倍努力了！</p>\n<p>这是我来微软后业余做的一些事情：</p>\n<ul>\n<li>加入了 <a href="https://github.com/xcatliu">Microsoft organization</a></li>\n<li>持续的更新 <a href="https://github.com/xcatliu/jekyllcn">JekyllCN</a></li>\n<li>给 <a href="http://live.nodejs.org">live.nodejs.org</a> <a href="https://github.com/nodejs/live.nodejs.org/pull/43">加入了多语言支持</a></li>\n<li>持续的更新 <a href="https://github.com/xcatliu/react-ie8">React IE8</a></li>\n<li><a href="https://github.com/ruanyf/es6tutorial/pulls?utf8=%E2%9C%93&amp;q=is%3Apr%20author%3Axcatliu%20">给阮一峰的《 ECMAScript 6 入门》提了十多个 pull request</a></li>\n<li>开始写一本书<a href="https://github.com/xcatliu/from-javascript-to-typescript">《 From JavaScript to TypeScript 》</a></li>\n<li>写了<a href="https://www.v2ex.com/t/289667">几个 Hexo 的插件</a>和<a href="https://www.v2ex.com/t/288151">一个 Hexo 的主题</a></li>\n<li>开源了 <a href="https://github.com/xcatliu/mobi.css">Mobi.css</a>，一个轻量灵活的移动端 CSS 框架。并<a href="https://www.v2ex.com/t/304129">在 7 天内获得了 600 个 Stars</a></li>\n<li>组织<a href="https://github.com/xcatliu/yarnpkg-website">翻译 Yarn 文档</a></li>\n</ul>\n<p>欢迎一起来开源！</p>\n<p>对了，听说马上 MacBook Pro 要出新品了，等了大半年，终于可以剁手了！</p>\n<h2 id="faq">FAQ<a class="anchor" href="#faq">§</a></h2>\n<h3 id="1-%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E6%8B%9B%E8%81%98%E8%B4%B4%E5%90%97">1. 这是一个招聘贴吗？<a class="anchor" href="#1-%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E6%8B%9B%E8%81%98%E8%B4%B4%E5%90%97">§</a></h3>\n<p>显然不是，我还没到那么高的级别可以负责招聘。不过如果感兴趣可以给我发邮件，邮件地址自己去找吧。</p>\n<h3 id="2-%E4%BD%A0%E5%BD%93%E5%88%9D%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E7%A6%BB%E5%BC%80%E7%BE%8E%E5%9B%A2%E5%8A%A0%E5%85%A5%E5%BE%AE%E8%BD%AF">2. 你当初为什么会离开美团加入微软？<a class="anchor" href="#2-%E4%BD%A0%E5%BD%93%E5%88%9D%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E7%A6%BB%E5%BC%80%E7%BE%8E%E5%9B%A2%E5%8A%A0%E5%85%A5%E5%BE%AE%E8%BD%AF">§</a></h3>\n<p>主要原因是想去大外企看看，次要原因是晚餐可以去女朋友学校吃了，很方便卫生。</p>\n<h3 id="3-%E9%9D%A2%E8%AF%95%E5%86%85%E5%AE%B9%E6%98%AF%E4%BB%80%E4%B9%88%E9%9A%BE%E5%90%97">3. 面试内容是什么？难吗？<a class="anchor" href="#3-%E9%9D%A2%E8%AF%95%E5%86%85%E5%AE%B9%E6%98%AF%E4%BB%80%E4%B9%88%E9%9A%BE%E5%90%97">§</a></h3>\n<p>主要面算法，大概在 LeetCode 简单或中等难度，我面试前也刷了一百多道题，所以问题不大。</p>\n<p>这是当时刷的题： <a href="https://github.com/xcatliu/leetcode">https://github.com/xcatliu/leetcode</a></p>\n<hr>\n<p>如果有其他问题，也可以留言。</p>\n<p>更多关于我的介绍，可以看<a href="https://github.com/xcatliu">我的 GitHub</a>。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%83%8C%E6%99%AF" }, "\u80CC\u666F")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%AC%AC%E4%B8%80%E5%8D%B0%E8%B1%A1" }, "\u7B2C\u4E00\u5370\u8C61")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%B7%A5%E5%85%B7%E5%8C%96%E5%92%8C%E8%87%AA%E5%8A%A8%E5%8C%96" }, "\u5DE5\u5177\u5316\u548C\u81EA\u52A8\u5316")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%8A%80%E6%9C%AF" }, "\u6280\u672F")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%A6%8F%E5%88%A9%E5%92%8C%E6%96%87%E5%8C%96" }, "\u798F\u5229\u548C\u6587\u5316")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%8B%B1%E8%AF%AD" }, "\u82F1\u8BED")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%B8%9A%E4%BD%99%E7%A7%AF%E7%B4%AF" }, "\u4E1A\u4F59\u79EF\u7D2F")),
            React.createElement("li", null,
                React.createElement("a", { href: "#faq" }, "FAQ"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#1-%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E6%8B%9B%E8%81%98%E8%B4%B4%E5%90%97" }, "1. \u8FD9\u662F\u4E00\u4E2A\u62DB\u8058\u8D34\u5417\uFF1F")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#2-%E4%BD%A0%E5%BD%93%E5%88%9D%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E7%A6%BB%E5%BC%80%E7%BE%8E%E5%9B%A2%E5%8A%A0%E5%85%A5%E5%BE%AE%E8%BD%AF" }, "2. \u4F60\u5F53\u521D\u4E3A\u4EC0\u4E48\u4F1A\u79BB\u5F00\u7F8E\u56E2\u52A0\u5165\u5FAE\u8F6F\uFF1F")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#3-%E9%9D%A2%E8%AF%95%E5%86%85%E5%AE%B9%E6%98%AF%E4%BB%80%E4%B9%88%E9%9A%BE%E5%90%97" }, "3. \u9762\u8BD5\u5185\u5BB9\u662F\u4EC0\u4E48\uFF1F\u96BE\u5417\uFF1F")))))),
    'author': "张家喜",
    'contributors': [
        "张家喜"
    ],
    'date': "2016-10-23T00:00:00.000Z",
    'updated': "2021-07-01T03:53:08.000Z",
    'excerpt': "转眼间已经离开美团，来到微软半年了。 背景 在刚加入微软的时候，我打算过了一个月就写个月度总结。结果一个月后，发现啥都不懂。 于是想再过一阵子来写个季度总结吧。结果一个季度后，感觉对业务还是一知半解。 于是想再过一...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "总结思考",
        "微软"
    ],
    'links': {
        "v2ex": "https://v2ex.com/t/314814"
    },
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/about_me.md",
                "title": "三分钟创建一个简单精致的 About Me 页面",
                "link": "posts/about_me.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "GitHub"
                ],
                "excerpt": "一个「About Me」页面，能够使别人快速的对你有一个大致的了解。 使用 GitHub 提供的 Pages 服务，可以将静态的网页托管在 GitHub 上。而 GitHub Pages 默认的 Jekyll 使得静态网页得以很方便的配置化。 我的 About Me 页面精雕..."
            },
            {
                "pagePath": "posts/test_coverage_for_github.md",
                "title": "GitHub 上的测试覆盖率",
                "link": "posts/test_coverage_for_github.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "测试覆盖率",
                    "测试",
                    "GitHub"
                ],
                "excerpt": "开源项目的 README.md 中，一般都会在前面放上一些 badge，除了可以让读者快速的了解项目的一些信息以外，还为 README.md 添加了些许色彩。以 Pagic 为例： - 上图中的 build passing 表示 travis build 通过了，用绿色背景显示...",
                "cover": "../assets/test_coverage_for_github/pagic.png"
            },
            {
                "pagePath": "posts/setup_linux_workspace_in_windows.md",
                "title": "在 Windows 中配置 Linux 工作环境",
                "link": "posts/setup_linux_workspace_in_windows.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "VituralBox",
                    "Linux",
                    "Windows"
                ],
                "excerpt": "2016-05-20 更新：可以使用更加先进的 Hyper-V + Samba 方案。 要在 Windows 上使用 Linux，最方便最好用的就是装个虚拟机，再用 SSH 连上了。Linux 当然选择无图形界面的 Server 版，所以还需要能够方便的在 Windows 上访问到..."
            },
            {
                "pagePath": "posts/full_color_screen.md",
                "title": "随手撸了个测试屏幕坏点的网页",
                "link": "posts/full_color_screen.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "excerpt": "新入手的 MacBook Pro 需要测试屏幕坏点，随手撸了一个，需要的人拿去吧~ GitHub: https://github.com/hack1day/full-color-screen Usage - Open http://full-color-screen.hack1day.com - Press SPACE or ENTER or click anyw..."
            },
            {
                "pagePath": "posts/google_analytics.md",
                "title": "Google Analytics 的 Tracking ID 不见了？",
                "link": "posts/google_analytics.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Google Analytics"
                ],
                "excerpt": "最近新创建了一个 Google Analytics 的 Property（媒体资源），但是找不到它的 Tracking ID 了。根据文档，需要创建一个 Data Stream，然后通过这样的方式引入一个被称为 gtag.js 的代码： <!-- Global site tag (gtag.js) - G..."
            },
            {
                "pagePath": "posts/learn_typescript.md",
                "title": "Learn TypeScript",
                "link": "posts/learn_typescript.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "TypeScript",
                    "JavaScript"
                ],
                "excerpt": "2016-05-20 更新：打算写成一个系列，放到独立的 repo 中，此篇会拆分为系列的一部分，在此仅做存档。 它的第一个版本发布于 2012 年 10 月，经历了多次更新后，现在已成为前端社区中不可忽视的力量，不仅在 Microsoft 内部得到..."
            },
            {
                "pagePath": "posts/happy-birthday-26.md",
                "title": "写给 26 岁的自己",
                "link": "posts/happy-birthday-26.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "多彩生活"
                ],
                "tags": [
                    "生日快乐"
                ],
                "excerpt": "今天是我 26 岁的生日，Google 送给我了一个 doodle： 年终将至，工作变得繁忙起来。 总结还是留到跨年的时候再写吧。 最近比较浮躁，希望自己将来能够脚踏实地的进步，厚积而薄发。 加油！",
                "cover": "../assets/happy-birthday-26/google-user-birthday.gif"
            },
            {
                "pagePath": "posts/the_way_to_become_a_senior_software_engineer.md",
                "title": "高级工程师之路",
                "link": "posts/the_way_to_become_a_senior_software_engineer.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "高级工程师",
                    "总结思考"
                ],
                "excerpt": "美团对工程师文化非常重视，我有幸参加了公司的第三期高工训练营，听到了各个大牛的分享，觉得不能无所作为，于是想对每一期有个总结思考，并对接下来的行动有个计划。 PPT 就不放出来了，欢迎大家加入美团一起成长。 做好技术..."
            },
            {
                "pagePath": "posts/debug_android_browser_in_chrome.md",
                "title": "在 Chrome 中调试 Android 浏览器",
                "link": "posts/debug_android_browser_in_chrome.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Debug",
                    "Android"
                ],
                "excerpt": "最近需要使用 Chrome Developer Tools 调试 Android 浏览器，但是官方指南并不是很好使，经过一番折腾，终于调试成功了，在此把经验分享给需要的朋友。 Chrome Developer Tools 是前端工程师必不可少的工具，它极大的提高了我们...",
                "cover": "../assets/debug_android_browser_in_chrome/android_build_number.png"
            },
            {
                "pagePath": "posts/flico.md",
                "title": "晒键盘 - FILCO 87 双模忍者圣手二代 黑色青轴",
                "link": "posts/flico.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "多彩生活"
                ],
                "tags": [
                    "Flico",
                    "键盘"
                ],
                "excerpt": "关注了很久，这款键盘终于又有货了！ 没抢到什么优惠券，狠下心还是入手了。 目前用起来还不错，比 2016 mbp 13 寸大一些。 ",
                "cover": "../assets/flico/FLICO-01.jpeg"
            },
            {
                "pagePath": "posts/how-to-get-changelist-in-git-push-hook.md",
                "title": "How to Get Changelist in Git Push Hook",
                "link": "posts/how-to-get-changelist-in-git-push-hook.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Git",
                    "Git Hooks"
                ],
                "excerpt": "Git hooks is a useful tool to run scripts before or after events. We usually use it to check the format of commit message, lint our code, prevent pushing code to master branch, or run test scripts before pushin..."
            },
            {
                "pagePath": "posts/important_announcement_regarding_yui.md",
                "title": "关于 YUI 的重要公告",
                "link": "posts/important_announcement_regarding_yui.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "YUI",
                    "JavaScript",
                    "翻译"
                ],
                "excerpt": "译者按：YUI 伴随着我两年有余，我见证了它的伟大与落魄。它开创了模块加载，发扬了命名空间。它有强大的事件和控件机制，也有臃肿的条件加载和皮肤。它的精髓有如一座图书馆，让你不由得感慨设计之宏大，它的 features 有如一..."
            },
            {
                "pagePath": "posts/on_call.md",
                "title": "在微软 on call 的经历",
                "link": "posts/on_call.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "On call",
                    "微软",
                    "总结思考"
                ],
                "excerpt": "之前一直听说微软、亚马逊等企业需要 on call，但是不清楚具体要做什么。 上周第一次在微软 on call，写一点感受。 On call 是什么 就是需要保持电话畅通，随时都可能接到电话说哪个服务挂了，哪个测试失败了等等。 然后需要具..."
            },
            {
                "pagePath": "posts/if_the_human_race_die_out.md",
                "title": "假如人类灭绝了，可以留给下一个文明有限的遗产，那么该留些什么呢？",
                "link": "posts/if_the_human_race_die_out.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "excerpt": "这种情况下，是否人文比科学更有价值？更能证明人类的存在？ 科学是客观存在的，在很长的时间跨度下，科技树总有一天会被再次点满，下个文明总有人会发明三角函数，微积分，肯定有人会发现牛顿力学（虽然下一个文明肯定不叫牛顿..."
            },
            {
                "pagePath": "posts/hexo-theme-mobi-css.md",
                "title": "基于 Mobi.css 的官方 Hexo 主题",
                "link": "posts/hexo-theme-mobi-css.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Hexo",
                    "Mobi.css"
                ],
                "excerpt": "Demo: 我的博客和 Mobi.css 官方文档 经过多天的开发，基于 Mobi.css 的 Hexo 主题终于完成了。 特性介绍 - 支持移动端，Mobi.css 是一个轻量灵活的移动端 CSS 框架，这是它的官方 Hexo 主题 - 支持多语言，既可以写博客（我的..."
            },
            {
                "pagePath": "posts/bootstrap_4_preview.md",
                "title": "Bootstrap 4 初探",
                "link": "posts/bootstrap_4_preview.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Bootstrap",
                    "CSS"
                ],
                "excerpt": "Bootstrap 作为 GitHub 上 Stars 最多的项目，可以说是万众瞩目，issues 和 pull requests 也居高不下，足以看出其后劲依然很足。 截止到本文发布，Bootstrap 4 已经推出 alpha 2 版本一个多月了，让我们一起玩转 Bootstrap 4 ..."
            },
            {
                "pagePath": "posts/two_hexo_plugins.md",
                "title": "撸了两个 Hexo 的 Plugins",
                "link": "posts/two_hexo_plugins.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Hexo",
                    "JavaScript"
                ],
                "excerpt": "都是从 git log 获取数据填充到 posts 中： hexo-filter-date-from-git - 获取 post 的第一个提交的 date 作为 front-matter 中的 date - 获取 post 的最后一个提交的 date 作为 front-matter 中的 updated 解决的问题 hexo 中..."
            },
            {
                "pagePath": "posts/setup_linux_workspace_in_windows_using_hyper-v.md",
                "title": "在 Windows 中配置 Linux 工作环境（使用 Hyper-V）",
                "link": "posts/setup_linux_workspace_in_windows_using_hyper-v.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Hyper-V",
                    "Samba",
                    "Windows"
                ],
                "excerpt": "基于上次 v2ex 上的建议，这次选择的方案是：Hyper-V + Ubuntu + PuTTY + Samba。 Hyper-V Hyper-V 是微软的一款虚拟化产品。Windows Server 2008 或者 Windows 7 以上就可以使用了。 如果你使用的是 Windows 7，按如下方式开启..."
            },
            {
                "pagePath": "posts/isarray.md",
                "title": "从 isArray 谈起",
                "link": "posts/isarray.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Array",
                    "JavaScript"
                ],
                "excerpt": "怎么判断数组是前端面试经常被问到的一个问题，数组也是最难以准确判断的类型之一。今天咱们就来谈谈如何判断数组。 typeof typeof 是 JavaScript 中判断类型的运算符，语法如下1： typeof operand 可是 typeof 返回的结果不尽..."
            },
            {
                "pagePath": "posts/my_first_book.md",
                "title": "我写的第一本书《TypeScript 入门教程》",
                "link": "posts/my_first_book.html",
                "date": "2021-07-01T03:34:57.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "TypeScript",
                    "Tutorial"
                ],
                "excerpt": "持续了大半年的学习和写作，在今天终于告一段落了。 写书之旅 最初有写书的想法，是刚加入微软的时候。 由于工作中需要重度使用 TypeScript，所以我花了几天的时间研读了好几遍官方手册和中文翻译版。 对于一个把 OOP 早就还给..."
            },
            {
                "pagePath": "posts/design_pagic_config_ts.md",
                "title": "设计 pagic.config.ts",
                "link": "posts/design_pagic_config_ts.html",
                "date": "2020-07-12T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Pagic"
                ],
                "excerpt": "作为一名资深博客爱好者，我热衷于折腾各种博客系统，写过多个博客主题。 终于，写主题也无法得到满足，我开始写博客系统了。 或者说是更广义的，静态网站生成器。 如今 Pagic 已经完成了一个雏形，我也邀请了一些朋友试用，经..."
            },
            {
                "pagePath": "posts/types_of_tests.md",
                "title": "测试的分类",
                "link": "posts/types_of_tests.html",
                "date": "2019-03-11T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "测试"
                ],
                "excerpt": "一直以来，我都听到过各式各样的测试——单元测试、黑盒测试、压力测试等等，但是很难对所有的测试方式有一个总体的认知。 在经过大量的谷歌之后，我终于把各种种类的测试弄清白了，下面针对每一种测试做一个简单的一句话介绍，..."
            },
            {
                "pagePath": "posts/puppeteer_tutorial.md",
                "title": "Puppeteer 指南",
                "link": "posts/puppeteer_tutorial.html",
                "date": "2018-09-18T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "JavaScript",
                    "Puppeteer"
                ],
                "excerpt": "Puppeteer 是 Google Chrome 出品的一个无头浏览器。如果你听说过 Phantomjs 或者 Selenium，那么就应该知道它是做什么的了。Puppeteer 与它们类似，提供了一系列 api，通过 DevTools 协议控制 Chromium/Chrome 浏览器的行为。...",
                "cover": "../assets/puppeteer_turorial/puppeteer-structure.png"
            },
            {
                "pagePath": "posts/cqc.md",
                "title": "运行一个脚本，看看你的项目的代码质量吧",
                "link": "posts/cqc.html",
                "date": "2017-09-20T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "代码质量",
                    "代码复杂度"
                ],
                "excerpt": "代码质量有很多指标： 1. 源代码行数 2. 代码重复率 3. 圈复杂度 4. 报错量（ Bug 数）占比 5. 测试覆盖率 6. 开发约束（代码块行数等） 我做了一个脚本可以测出上面的 1, 2, 3 大家都来试一试吧！ Supported Languages - js, ..."
            },
            {
                "pagePath": "posts/mobi-css_v3.md",
                "title": "Mobi.css v3 发布了，一个轻量、可拓展、移动端优先的 CSS 框架",
                "link": "posts/mobi-css_v3.html",
                "date": "2017-09-04T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Mobi.css",
                    "CSS"
                ],
                "excerpt": " - GitHub: https://github.com/mobi-css/mobi.css - 官网：http://getmobicss.com/ 简单介绍 - 轻量级：压缩 gzip 后只有 2.6 kb - 可拓展：可以引入 plugin 来拓展 Mobi.css ，并且每个 plugin 都可以独立于框架使用 - 移动端..."
            },
            {
                "pagePath": "posts/eslint-config-alloy.md",
                "title": "我花了两个月时间，定制出了心目中「完美」的 ESLint 规则，我用四个空格缩进",
                "link": "posts/eslint-config-alloy.html",
                "date": "2017-08-25T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "ESLint"
                ],
                "excerpt": "我们依据以下三条原则，研读了 ESLint 所有的配置项，定制出了心目中的「完美」ESLint 配置。"
            },
            {
                "pagePath": "posts/mazimd_v2.md",
                "title": "码字 md 发布 v2 啦",
                "link": "posts/mazimd_v2.html",
                "date": "2017-07-17T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "mazimd",
                    "Markdown"
                ],
                "excerpt": "码字 md 是一个在线 markdown 编辑器，自发布以来一直收到很多好评： 前帖：码字 md - 干净精致的 Markdown 编辑器 码字 md v2 更新内容 已完成 - [x] 支持永久保存 - [x] 支持衍生 TODOs - [ ] 支持包含过期时间的保存 - [ ] ..."
            },
            {
                "pagePath": "posts/2016_summery.md",
                "title": "我的 2016 年总结",
                "link": "posts/2016_summery.html",
                "date": "2017-01-06T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "多彩生活"
                ],
                "tags": [
                    "总结思考"
                ],
                "excerpt": "出游土耳其 2016 年 2 月，我去土耳其游玩了半个月。 即使是我蹩脚的英语，也挡不住土耳其人的热情。 蔚蓝的天空和大海： 形似雪山的棉花堡： 外星地貌的卡帕多奇亚 遍地清真寺的伊斯坦布尔 这里留下了太多回忆。 入职微软 之前...",
                "cover": "../assets/2016_summery/turkey_ocean.jpg"
            },
            {
                "pagePath": "posts/mazimd.md",
                "title": "码字 md - 干净精致的 Markdown 编辑器",
                "link": "posts/mazimd.html",
                "date": "2017-01-01T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "mazimd",
                    "Markdown"
                ],
                "excerpt": "新写了一个 Online Markdown 编辑器，目前还不是很完善。 先分享出来，希望大家会喜欢。 码字 md 介绍 - 基于 SimpleMDE 和 Mobi.css，加入了中文适配 - 精致的预览页，可以直接拷贝到 word 或导出为 pdf （开发中） - 主题可单..."
            },
            {
                "pagePath": "posts/half_year_in_microsoft.md",
                "title": "我来微软这半年",
                "link": "posts/half_year_in_microsoft.html",
                "date": "2016-10-23T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "总结思考",
                    "微软"
                ],
                "excerpt": "转眼间已经离开美团，来到微软半年了。 背景 在刚加入微软的时候，我打算过了一个月就写个月度总结。结果一个月后，发现啥都不懂。 于是想再过一阵子来写个季度总结吧。结果一个季度后，感觉对业务还是一知半解。 于是想再过一..."
            },
            {
                "pagePath": "posts/600_stars_in_7_days.md",
                "title": "7 天 600 stars， Mobi.css 是如何诞生的",
                "link": "posts/600_stars_in_7_days.html",
                "date": "2016-09-05T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Mobi.css",
                    "总结思考"
                ],
                "excerpt": "Mobi.css 是一个轻量、灵活的移动端 CSS 框架。发布一周以来，获得了 600+ stars，登上了 GitHub Trending Top1（CSS），在 Hacker News 上进入了前三。 这篇文章会先介绍一下创造 Mobi.css 的思路，再介绍一下我在推广 Mobi.c..."
            },
            {
                "pagePath": "posts/mobi-css.md",
                "title": "「Mobi.css」轻量，灵活的移动端 css 框架",
                "link": "posts/mobi-css.html",
                "date": "2016-08-29T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Mobi.css",
                    "CSS"
                ],
                "excerpt": "最近做了一个 CSS 框架，颇废了一番功夫。 这里先把它分享给大家，欢迎 Star，欢迎试用！ - GitHub - Homepage 简单介绍 Mobi.css 是一个轻量，灵活的移动端 CSS 框架。特点如下： - 压缩后只有 4.6kb，比 Skeleton、Pure.css、...",
                "cover": "https://i.v2ex.co/6v65Q0LY.png"
            },
            {
                "pagePath": "posts/hexo-theme-wiki-i18n.md",
                "title": "新姿势：在 GitHub 基于 Hexo 写 Wiki",
                "link": "posts/hexo-theme-wiki-i18n.html",
                "date": "2016-06-25T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Wiki",
                    "Hexo"
                ],
                "excerpt": "最近想尝试下用 Hexo 写 Wiki ，发现还挺酷的，所以把主题和一些插件提取出来了，分享给大家。 先上链接 - 主题：wiki-i18n - Demo ：JS Index - Demo 的 Repo ：JS Index repo - 插件，按字母顺序归档：hexo-generator-archiv...",
                "cover": "../assets/hexo-theme-wiki-i18n/screenshot_1.png"
            },
            {
                "pagePath": "posts/javascript_fetch_api.md",
                "title": "JavaScript Fetch API",
                "link": "posts/javascript_fetch_api.html",
                "date": "2015-11-10T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Fetch",
                    "JavaScript",
                    "分享"
                ],
                "excerpt": "JavaScript Fetch API from Xcat Liu"
            },
            {
                "pagePath": "posts/fetch_api.md",
                "title": "Fetch API",
                "link": "posts/fetch_api.html",
                "date": "2015-11-08T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Fetch",
                    "翻译",
                    "JavaScript"
                ],
                "excerpt": ""
            },
            {
                "pagePath": "posts/seminar_in_wuhan.md",
                "title": "武汉宣讲会",
                "link": "posts/seminar_in_wuhan.html",
                "date": "2015-09-28T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "多彩生活"
                ],
                "tags": [
                    "总结思考"
                ],
                "excerpt": "今年有幸和刘江老师还有 zj 美女一起参加了武汉的宣讲会，我负责师兄师姐交流的部分。有一些感想： - 会后没有笔试环节，来的人数明显少多了 - 产品今年就业压力太大，大部分都是产品来听，顺便询问还招不招产品 - 刘江老师的演..."
            },
            {
                "pagePath": "posts/three_lines_poems.md",
                "title": "撸了一个三行情诗表白网页，可朋友圈分享，但是卡爆了",
                "link": "posts/three_lines_poems.html",
                "date": "2015-08-20T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Canvas",
                    "JavaScript"
                ],
                "excerpt": "请在手机上访问（或者把 Chrome 开发者模式打开，调整为 iPhone 6[+] 模式） 链接：http://xcatliu.github.io/rose/ GitHub: https://github.com/xcatliu/rose 由于网站太简单了只有 100+ 行代码，所以 css js 都 inline 了，但..."
            },
            {
                "pagePath": "posts/react_native_and_v2hot.md",
                "title": "React Native and V2HOT",
                "link": "posts/react_native_and_v2hot.html",
                "date": "2015-07-10T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "React Native",
                    "V2HOT",
                    "分享"
                ],
                "excerpt": "React Native & V2HOT from Xcat Liu"
            },
            {
                "pagePath": "posts/developing_react_components.md",
                "title": "React 组件开发",
                "link": "posts/developing_react_components.html",
                "date": "2015-06-26T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "React",
                    "JavaScript",
                    "分享"
                ],
                "excerpt": "受 StuQ 的邀请，去录制了一期节目，羞涩ing~ React 组件开发 from Xcat Liu"
            },
            {
                "pagePath": "posts/memorial_at_the_insistence_of_365_days.md",
                "title": "纪念一下 365 天的坚持",
                "link": "posts/memorial_at_the_insistence_of_365_days.html",
                "date": "2015-06-17T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "excerpt": "主要贡献： - 创建了 20 多个开源项目（虽然大多数黄了） - fork 了 10 多个开源项目（虽然贡献不多） - star 了 200 多个项目 - 得到了 100 多个 star - 认识了 40 多个人 - 做了 60 多道算法题（虽然很多是 easy 的） - 虽然...",
                "cover": "https://i.v2ex.co/Ha5GKxxI.jpeg"
            },
            {
                "pagePath": "posts/v2hot_published.md",
                "title": "V2HOT 终于上线了，欢迎下载",
                "link": "posts/v2hot_published.html",
                "date": "2015-05-16T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "V2HOT",
                    "React Native"
                ],
                "excerpt": "GitHub: https://github.com/xcatliu/v2hot 快速下载：https://itunes.apple.com/cn/app/v2hot/id992150357?mt=8 --------------------------------------------------------------------------------------------------------...",
                "cover": "https://i.v2ex.co/feN495xC.png"
            },
            {
                "pagePath": "posts/geojson_and_topojson.md",
                "title": "GeoJSON 和 TopoJSON",
                "link": "posts/geojson_and_topojson.html",
                "date": "2015-04-24T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "GeoJSON",
                    "TopoJSON",
                    "JSON"
                ],
                "excerpt": "GeoJSON GeoJSON 使用 type 表示数据的类型。 当 type 取值 Point、LineString、Polygon、MultiPoint、MultiLineString、MultiPolygon 或 GeometryCollection 时，用来表示几何图。 当 type 取值 Feature 时，除了几何图外，还..."
            },
            {
                "pagePath": "posts/semantic_versioning_and_npm.md",
                "title": "npm 语义化版本号",
                "link": "posts/semantic_versioning_and_npm.html",
                "date": "2015-04-14T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "语义化",
                    "npm",
                    "JavaScript"
                ],
                "excerpt": "认识 npm 版本号 每一个 node package 都有自己的版本号，一般定义在项目的 package.json 中，如： { \"name\": \"express\", \"description\": \"Fast, unopinionated, minimalist web framework\", \"version\": \"4.12.3\", \"author\": \"..."
            },
            {
                "pagePath": "posts/hello_2015.md",
                "title": "展望 2015",
                "link": "posts/hello_2015.html",
                "date": "2015-01-01T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "多彩生活"
                ],
                "tags": [
                    "计划",
                    "总结思考"
                ],
                "excerpt": "2015 年就要来了，煽情的话就不说了，这里统计一下 2014 年做过的事，以及对 2015 年的展望。 2014 年做过的事 2014Q1 - 过年在家休息了 10 多天 - 阅读《可维护性 JavaScript》 - 阅读《高性能 JavaScript》 - Highcharts - y..."
            },
            {
                "pagePath": "posts/use_readme_to_manage_your_docs.md",
                "title": "基于 README 的文档管理",
                "link": "posts/use_readme_to_manage_your_docs.html",
                "date": "2014-12-09T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "README",
                    "Markdown"
                ],
                "excerpt": "什么是 readme 为什么要在仓库中写文档 - 文档和代码在一起，方便查看 - 文档和代码版本一致 - 使用 markdown 格式的 README 文档可以在 GitHub 中直接查看 - 可以在 vim 中查看 - README 已经能（并且能更好的）满足大部分需求..."
            },
            {
                "pagePath": "posts/thinking_in_react.md",
                "title": "Thinking in React",
                "link": "posts/thinking_in_react.html",
                "date": "2014-12-04T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "React",
                    "分享"
                ],
                "excerpt": "Thinking in React from Xcat Liu"
            },
            {
                "pagePath": "posts/campus_recruitment.md",
                "title": "校招季",
                "link": "posts/campus_recruitment.html",
                "date": "2014-11-03T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "多彩生活"
                ],
                "tags": [
                    "校招"
                ],
                "excerpt": "一年一度的校招季快要结束了，同学们是不是拿 offer 拿到手软呢？ 今年我有幸参与了合肥南京和武汉的校招工作，忙碌之后终于有时间把这段珍贵的经历记录下来。 合肥 五个小时的高铁，迎接我们的是磅礴的大雨，人头攒动的火车站..."
            },
            {
                "pagePath": "posts/hybrid_app_and_webviewjavascriptbridge.md",
                "title": "Hybrid App & WebViewJavascriptBridge",
                "link": "posts/hybrid_app_and_webviewjavascriptbridge.html",
                "date": "2014-10-27T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Hybrid App",
                    "WebViewJavascriptBridge",
                    "JavaScript"
                ],
                "excerpt": "实现原理 Hybrid App 的原理很简单——在原生应用中开启一个网页。可以是全屏都交给网页，或者是一部分（比如导航栏）由原生应用实现，另一部分是一个网页。 技术细节 H5 页面的实现 作为前端，对这块应该已经很熟悉了，与传统..."
            },
            {
                "pagePath": "posts/design_patterns.md",
                "title": "设计模式浅析",
                "link": "posts/design_patterns.html",
                "date": "2014-10-24T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "设计模式",
                    "分享"
                ],
                "excerpt": "设计模式浅析 from Xcat Liu"
            },
            {
                "pagePath": "posts/abstract_syntax_tree.md",
                "title": "抽象语法树在 JavaScript 中的应用",
                "link": "posts/abstract_syntax_tree.html",
                "date": "2014-10-08T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "AST",
                    "UglifyJS",
                    "JavaScript"
                ],
                "excerpt": "抽象语法树是什么 果然比较抽象，不如先看几个例子： 抽象语法树举例 foo = 'hello world'; /* +-------------+ | assign(=) | +-------------+ X X X X +-------+ +-----------------+ | foo | | 'hello world' | +-------+ +..."
            },
            {
                "pagePath": "posts/modular_javascript.md",
                "title": "Modular JS",
                "link": "posts/modular_javascript.html",
                "date": "2014-03-06T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "模块化",
                    "JavaScript"
                ],
                "excerpt": "概述，发展 模块化定义 - 一种将系统分离成独立功能部分的方法 - 优缺点 js 模块化发展 - 内容样式交互混合 - 分离成独立文件 - 动态加载 - 服务器端 js，CommonJS - 发展到客户端 AMD CommonJS CommonJS 规范 - CommonJS API ..."
            },
            {
                "pagePath": "posts/grunt_custom_task_guide.md",
                "title": "Grunt Custom Task 指南",
                "link": "posts/grunt_custom_task_guide.html",
                "date": "2013-12-04T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Grunt",
                    "JavaScript"
                ],
                "excerpt": "阅读这篇之前，请了解 grunt ，可以参考 [Grunt Getting Starting]。 在决定创建自己的 task 之前，最好搜索一下你的需求是不是已经有别人写好的了：http://gruntjs.com/plugins。 简介 grunt 有一套强大的创建任务机制，不管是..."
            },
            {
                "pagePath": "posts/grunt_getting_started.md",
                "title": "Grunt Getting Started",
                "link": "posts/grunt_getting_started.html",
                "date": "2013-11-08T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Grunt",
                    "JavaScript"
                ],
                "excerpt": "Grunt 简介 每个前端开发工程师都会遇到前端文件校验、打包、压缩的问题。使用 Grunt 之前，你可能也使用过 Shell 脚本或者 Ant 脚本，来实现校验合并压缩等任务。 Grunt 是一个基于任务的 JavaScript 项目命令行构建工具，运行..."
            },
            {
                "pagePath": "posts/the_many_meanings_of_open.md",
                "title": "The Many Meanings of Open",
                "link": "posts/the_many_meanings_of_open.html",
                "date": "2013-11-08T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "多彩生活"
                ],
                "tags": [
                    "总结思考"
                ],
                "excerpt": "参加万维网之父、万维网联盟创始人见面会的感想"
            },
            {
                "pagePath": "posts/grunt.md",
                "title": "Grunt",
                "link": "posts/grunt.html",
                "date": "2013-09-27T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "Grunt",
                    "JavaScript",
                    "分享"
                ],
                "excerpt": "Grunt API grunt.registerTask alias for grunt.task.registerTask Alias Task // http://gruntjs.com/api/grunt.task#grunt.task.registertask grunt.registerTask(taskName, taskList); grunt.registerTask('default', ['jsh..."
            },
            {
                "pagePath": "posts/monthly_summery_in_meituan.md",
                "title": "美团一个月",
                "link": "posts/monthly_summery_in_meituan.html",
                "date": "2013-01-04T00:00:00.000Z",
                "updated": "2021-07-01T03:53:08.000Z",
                "author": "张家喜",
                "contributors": [
                    "张家喜"
                ],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "总结思考"
                ],
                "excerpt": "初来乍到 来美团已有一个月零四天，有幸见证了月销售额突破七亿和八亿的时刻，认识了志同道合的朋友，加入了这个飞速成长的大家庭。 学习与成长 vim 和 git 磨刀不误砍柴工，只有运用好了这些最基本的工具，才能在工作中得心应..."
            }
        ],
        "categories": [
            {
                "name": "编程世界",
                "count": 48
            },
            {
                "name": "多彩生活",
                "count": 7
            }
        ],
        "tags": [
            {
                "name": "JavaScript",
                "count": 16
            },
            {
                "name": "总结思考",
                "count": 9
            },
            {
                "name": "分享",
                "count": 6
            },
            {
                "name": "Mobi.css",
                "count": 4
            },
            {
                "name": "CSS",
                "count": 3
            },
            {
                "name": "Grunt",
                "count": 3
            },
            {
                "name": "Hexo",
                "count": 3
            },
            {
                "name": "Markdown",
                "count": 3
            },
            {
                "name": "Fetch",
                "count": 2
            },
            {
                "name": "GitHub",
                "count": 2
            },
            {
                "name": "mazimd",
                "count": 2
            },
            {
                "name": "React",
                "count": 2
            },
            {
                "name": "React Native",
                "count": 2
            },
            {
                "name": "TypeScript",
                "count": 2
            },
            {
                "name": "V2HOT",
                "count": 2
            },
            {
                "name": "Windows",
                "count": 2
            },
            {
                "name": "微软",
                "count": 2
            },
            {
                "name": "测试",
                "count": 2
            },
            {
                "name": "翻译",
                "count": 2
            },
            {
                "name": "Android",
                "count": 1
            },
            {
                "name": "Array",
                "count": 1
            },
            {
                "name": "AST",
                "count": 1
            },
            {
                "name": "Bootstrap",
                "count": 1
            },
            {
                "name": "Canvas",
                "count": 1
            },
            {
                "name": "Debug",
                "count": 1
            },
            {
                "name": "ESLint",
                "count": 1
            },
            {
                "name": "Flico",
                "count": 1
            },
            {
                "name": "GeoJSON",
                "count": 1
            },
            {
                "name": "Git",
                "count": 1
            },
            {
                "name": "Git Hooks",
                "count": 1
            },
            {
                "name": "Google Analytics",
                "count": 1
            },
            {
                "name": "Hybrid App",
                "count": 1
            },
            {
                "name": "Hyper-V",
                "count": 1
            },
            {
                "name": "JSON",
                "count": 1
            },
            {
                "name": "Linux",
                "count": 1
            },
            {
                "name": "npm",
                "count": 1
            },
            {
                "name": "On call",
                "count": 1
            },
            {
                "name": "Pagic",
                "count": 1
            },
            {
                "name": "Puppeteer",
                "count": 1
            },
            {
                "name": "README",
                "count": 1
            },
            {
                "name": "Samba",
                "count": 1
            },
            {
                "name": "TopoJSON",
                "count": 1
            },
            {
                "name": "Tutorial",
                "count": 1
            },
            {
                "name": "UglifyJS",
                "count": 1
            },
            {
                "name": "VituralBox",
                "count": 1
            },
            {
                "name": "WebViewJavascriptBridge",
                "count": 1
            },
            {
                "name": "Wiki",
                "count": 1
            },
            {
                "name": "YUI",
                "count": 1
            },
            {
                "name": "代码复杂度",
                "count": 1
            },
            {
                "name": "代码质量",
                "count": 1
            },
            {
                "name": "校招",
                "count": 1
            },
            {
                "name": "模块化",
                "count": 1
            },
            {
                "name": "测试覆盖率",
                "count": 1
            },
            {
                "name": "生日快乐",
                "count": 1
            },
            {
                "name": "计划",
                "count": 1
            },
            {
                "name": "设计模式",
                "count": 1
            },
            {
                "name": "语义化",
                "count": 1
            },
            {
                "name": "键盘",
                "count": 1
            },
            {
                "name": "高级工程师",
                "count": 1
            }
        ]
    }
};
