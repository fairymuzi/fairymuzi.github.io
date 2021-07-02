import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/test_coverage_for_github.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/test_coverage_for_github.html",
    'title': "GitHub 上的测试覆盖率",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>GitHub 上的测试覆盖率</h1>\n<p>开源项目的 <a href="http://README.md">README.md</a> 中，一般都会在前面放上一些 badge，除了可以让读者快速的了解项目的一些信息以外，还为 <a href="http://README.md">README.md</a> 添加了些许色彩。以 <a href="https://github.com/xcatliu/pagic">Pagic</a> 为例：</p>\n<p><img src="../assets/test_coverage_for_github/pagic.png" alt="pagic test coverage"></p>\n<ul>\n<li>上图中的 <code>build passing</code> 表示 <a href="https://travis-ci.org/xcatliu/pagic">travis</a> build 通过了，用绿色背景显示，表明很安全。</li>\n<li><code>npm v0.4.1</code> 表示最新版本是 <code>v0.4.1</code>，用橙色背景显示，表明是不稳定的版本。</li>\n<li><code>downloads 165/month</code> 表示最近一个月 npm 里的下载数量为 165 次，用黄绿色背景显示，表明 165 次已经比较多了，但是还不算最好的成绩。</li>\n<li><code>coverage 100%</code> 表示测试覆盖率达到了 100%，用绿色背景显示，表明很安全。</li>\n</ul>\n<p>介绍 GitHub 与 Travis CI 结合的文章已经很多了，本篇文章主要介绍一下测试覆盖率的概念以及如何将测试覆盖率的 badge 添加到 <a href="http://README.md">README.md</a> 中。</p>\n<h2 id="%E7%BB%9F%E4%B8%80-badge">统一 badge<a class="anchor" href="#%E7%BB%9F%E4%B8%80-badge">§</a></h2>\n<p>首先，为了使 badge 显示统一，我建议使用 <a href="http://shields.io">http://shields.io</a> 添加 badge，它集成了大部分可能用到的 badge，使显示的样式一致了。</p>\n<p>使用方式也很简单，比如 Pagic 的 Travis 的 badge 在 <a href="http://README.md">README.md</a> 中就是：</p>\n<pre class="language-md"><code class="language-md"><span class="token url">[<span class="token content">![Build Status</span>](<a class="token url-link" href="https://img.shields.io/travis/xcatliu/pagic.svg">https://img.shields.io/travis/xcatliu/pagic.svg</a>)</span>](<a class="token url-link" href="https://travis-ci.org/xcatliu/pagic">https://travis-ci.org/xcatliu/pagic</a>)\n</code></pre>\n<p>其他的 badge 可以参考 <a href="http://shields.io">http://shields.io</a> 里的说明添加即可。</p>\n<h2 id="%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87">测试覆盖率<a class="anchor" href="#%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87">§</a></h2>\n<p>顾名思义，测试覆盖率就是运行的测试覆盖了多少代码里的逻辑。</p>\n<p>这里我们使用 <a href="https://github.com/gotwarlost/istanbul">Istanbul</a> 这个工具来检测代码的测试覆盖率。</p>\n<p>因为我们需要在 Travis 中运行测试覆盖率的检测，所以我们需要在项目中安装 Istanbul，而不是在全局安装:</p>\n<pre class="language-shell"><code class="language-shell"><span class="token function">npm</span> <span class="token function">install</span> istanbul --save-dev\n</code></pre>\n<p>然后在 <code>package.json</code> 中的 <code>scripts</code> 里添加：</p>\n<pre class="language-json"><code class="language-json"><span class="token property">"cover"</span><span class="token operator">:</span> <span class="token string">"istanbul cover node_modules/mocha/bin/_mocha"</span>\n</code></pre>\n<p>这个命令用于生成测试覆盖率报告，它也可以在本地运行，也可以在 Travis 里运行：</p>\n<pre class="language-shell"><code class="language-shell"><span class="token function">npm</span> run cover\n</code></pre>\n<p>它将会先执行测试，然后生成一个 <code>coverage</code> 目录，里面有测试覆盖率报告，其中的 html 文件可以直接打开查看。当然运行的结果也会在终端中显示出来：</p>\n<pre class="language-shell"><code class="language-shell">  Pagic\n    constructor<span class="token punctuation">(</span><span class="token punctuation">)</span>\n      ✓ should have config and plugins\n  \n  <span class="token punctuation">..</span>.\n\n  getLayout\n    ✓ should <span class="token builtin class-name">return</span> null <span class="token keyword">if</span> findParentDir returns null\n    ✓ should <span class="token builtin class-name">return</span> layout result\n\n\n  <span class="token number">27</span> passing <span class="token punctuation">(</span>64ms<span class="token punctuation">)</span>\n\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\nWriting coverage object <span class="token punctuation">[</span>/Users/xcatliu/Workspace/pagic/coverage/coverage.json<span class="token punctuation">]</span>\nWriting coverage reports at <span class="token punctuation">[</span>/Users/xcatliu/Workspace/pagic/coverage<span class="token punctuation">]</span>\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\n\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> Coverage summary <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\nStatements   <span class="token builtin class-name">:</span> <span class="token number">100</span>% <span class="token punctuation">(</span> <span class="token number">73</span>/73 <span class="token punctuation">)</span>\nBranches     <span class="token builtin class-name">:</span> <span class="token number">100</span>% <span class="token punctuation">(</span> <span class="token number">12</span>/12 <span class="token punctuation">)</span>\nFunctions    <span class="token builtin class-name">:</span> <span class="token number">100</span>% <span class="token punctuation">(</span> <span class="token number">10</span>/10 <span class="token punctuation">)</span>\nLines        <span class="token builtin class-name">:</span> <span class="token number">100</span>% <span class="token punctuation">(</span> <span class="token number">72</span>/72 <span class="token punctuation">)</span>\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>\n</code></pre>\n<h2 id="%E5%B0%86%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87%E6%8A%A5%E5%91%8A%E6%8F%90%E4%BA%A4%E7%BB%99-coveralls">将测试覆盖率报告提交给 Coveralls<a class="anchor" href="#%E5%B0%86%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87%E6%8A%A5%E5%91%8A%E6%8F%90%E4%BA%A4%E7%BB%99-coveralls">§</a></h2>\n<p><a href="https://coveralls.io/">Coveralls</a> 用于收集测试覆盖率报告，对于开源项目免费。我们的 badge 也是 Coveralls 提供的数据。</p>\n<p>Coveralls 可以使用 GitHub 账号登录，登录之后可以<a href="https://coveralls.io/repos/new">在这里</a>添加需要收集报告的 repo，那么我们如何将测试覆盖率报告通过 Travis CI 提交给 Coveralls 呢？</p>\n<p>首先需要安装 <code>coveralls</code>：</p>\n<pre class="language-shell"><code class="language-shell"><span class="token function">npm</span> <span class="token function">install</span> coveralls --save-dev\n</code></pre>\n<p>然后在 <code>package.json</code> 中的 <code>scripts</code> 里添加：</p>\n<pre class="language-json"><code class="language-json"><span class="token property">"coveralls"</span><span class="token operator">:</span> <span class="token string">"npm run cover -- --report lcovonly &amp;&amp; cat ./coverage/lcov.info | coveralls"</span>\n</code></pre>\n<p>然后在 <code>.travis.yml</code> 中添加：</p>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">after_success</span><span class="token punctuation">:</span>\n<span class="token punctuation">-</span> npm run coveralls\n</code></pre>\n<p>一个完整的 <code>.travis.yml</code> 如下：</p>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">language</span><span class="token punctuation">:</span> node_js\n<span class="token key atrule">node_js</span><span class="token punctuation">:</span>\n<span class="token punctuation">-</span> <span class="token number">6</span>\n<span class="token key atrule">branches</span><span class="token punctuation">:</span>\n  <span class="token key atrule">only</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> master\n<span class="token key atrule">install</span><span class="token punctuation">:</span>\n<span class="token punctuation">-</span> npm install\n<span class="token key atrule">script</span><span class="token punctuation">:</span>\n<span class="token punctuation">-</span> npm test\n<span class="token key atrule">after_success</span><span class="token punctuation">:</span>\n<span class="token punctuation">-</span> npm run coveralls\n</code></pre>\n<p>那么下一次提交代码的时候就会将测试覆盖率报告提交给 Coveralls 啦，别忘了在 <a href="http://README.md">README.md</a> 中添加 badge 哦：</p>\n<pre class="language-md"><code class="language-md"><span class="token url">[<span class="token content">![Coveralls</span>](<a class="token url-link" href="https://img.shields.io/coveralls/xcatliu/pagic.svg">https://img.shields.io/coveralls/xcatliu/pagic.svg</a>)</span>](<a class="token url-link" href="https://coveralls.io/github/xcatliu/pagic">https://coveralls.io/github/xcatliu/pagic</a>)\n</code></pre>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "GitHub \u4E0A\u7684\u6D4B\u8BD5\u8986\u76D6\u7387"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>开源项目的 <a href="http://README.md">README.md</a> 中，一般都会在前面放上一些 badge，除了可以让读者快速的了解项目的一些信息以外，还为 <a href="http://README.md">README.md</a> 添加了些许色彩。以 <a href="https://github.com/xcatliu/pagic">Pagic</a> 为例：</p>\n<p><img src="../assets/test_coverage_for_github/pagic.png" alt="pagic test coverage"></p>\n<ul>\n<li>上图中的 <code>build passing</code> 表示 <a href="https://travis-ci.org/xcatliu/pagic">travis</a> build 通过了，用绿色背景显示，表明很安全。</li>\n<li><code>npm v0.4.1</code> 表示最新版本是 <code>v0.4.1</code>，用橙色背景显示，表明是不稳定的版本。</li>\n<li><code>downloads 165/month</code> 表示最近一个月 npm 里的下载数量为 165 次，用黄绿色背景显示，表明 165 次已经比较多了，但是还不算最好的成绩。</li>\n<li><code>coverage 100%</code> 表示测试覆盖率达到了 100%，用绿色背景显示，表明很安全。</li>\n</ul>\n<p>介绍 GitHub 与 Travis CI 结合的文章已经很多了，本篇文章主要介绍一下测试覆盖率的概念以及如何将测试覆盖率的 badge 添加到 <a href="http://README.md">README.md</a> 中。</p>\n<h2 id="%E7%BB%9F%E4%B8%80-badge">统一 badge<a class="anchor" href="#%E7%BB%9F%E4%B8%80-badge">§</a></h2>\n<p>首先，为了使 badge 显示统一，我建议使用 <a href="http://shields.io">http://shields.io</a> 添加 badge，它集成了大部分可能用到的 badge，使显示的样式一致了。</p>\n<p>使用方式也很简单，比如 Pagic 的 Travis 的 badge 在 <a href="http://README.md">README.md</a> 中就是：</p>\n<pre class="language-md"><code class="language-md"><span class="token url">[<span class="token content">![Build Status</span>](<a class="token url-link" href="https://img.shields.io/travis/xcatliu/pagic.svg">https://img.shields.io/travis/xcatliu/pagic.svg</a>)</span>](<a class="token url-link" href="https://travis-ci.org/xcatliu/pagic">https://travis-ci.org/xcatliu/pagic</a>)\n</code></pre>\n<p>其他的 badge 可以参考 <a href="http://shields.io">http://shields.io</a> 里的说明添加即可。</p>\n<h2 id="%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87">测试覆盖率<a class="anchor" href="#%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87">§</a></h2>\n<p>顾名思义，测试覆盖率就是运行的测试覆盖了多少代码里的逻辑。</p>\n<p>这里我们使用 <a href="https://github.com/gotwarlost/istanbul">Istanbul</a> 这个工具来检测代码的测试覆盖率。</p>\n<p>因为我们需要在 Travis 中运行测试覆盖率的检测，所以我们需要在项目中安装 Istanbul，而不是在全局安装:</p>\n<pre class="language-shell"><code class="language-shell"><span class="token function">npm</span> <span class="token function">install</span> istanbul --save-dev\n</code></pre>\n<p>然后在 <code>package.json</code> 中的 <code>scripts</code> 里添加：</p>\n<pre class="language-json"><code class="language-json"><span class="token property">"cover"</span><span class="token operator">:</span> <span class="token string">"istanbul cover node_modules/mocha/bin/_mocha"</span>\n</code></pre>\n<p>这个命令用于生成测试覆盖率报告，它也可以在本地运行，也可以在 Travis 里运行：</p>\n<pre class="language-shell"><code class="language-shell"><span class="token function">npm</span> run cover\n</code></pre>\n<p>它将会先执行测试，然后生成一个 <code>coverage</code> 目录，里面有测试覆盖率报告，其中的 html 文件可以直接打开查看。当然运行的结果也会在终端中显示出来：</p>\n<pre class="language-shell"><code class="language-shell">  Pagic\n    constructor<span class="token punctuation">(</span><span class="token punctuation">)</span>\n      ✓ should have config and plugins\n  \n  <span class="token punctuation">..</span>.\n\n  getLayout\n    ✓ should <span class="token builtin class-name">return</span> null <span class="token keyword">if</span> findParentDir returns null\n    ✓ should <span class="token builtin class-name">return</span> layout result\n\n\n  <span class="token number">27</span> passing <span class="token punctuation">(</span>64ms<span class="token punctuation">)</span>\n\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\nWriting coverage object <span class="token punctuation">[</span>/Users/xcatliu/Workspace/pagic/coverage/coverage.json<span class="token punctuation">]</span>\nWriting coverage reports at <span class="token punctuation">[</span>/Users/xcatliu/Workspace/pagic/coverage<span class="token punctuation">]</span>\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\n\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> Coverage summary <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\nStatements   <span class="token builtin class-name">:</span> <span class="token number">100</span>% <span class="token punctuation">(</span> <span class="token number">73</span>/73 <span class="token punctuation">)</span>\nBranches     <span class="token builtin class-name">:</span> <span class="token number">100</span>% <span class="token punctuation">(</span> <span class="token number">12</span>/12 <span class="token punctuation">)</span>\nFunctions    <span class="token builtin class-name">:</span> <span class="token number">100</span>% <span class="token punctuation">(</span> <span class="token number">10</span>/10 <span class="token punctuation">)</span>\nLines        <span class="token builtin class-name">:</span> <span class="token number">100</span>% <span class="token punctuation">(</span> <span class="token number">72</span>/72 <span class="token punctuation">)</span>\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>\n</code></pre>\n<h2 id="%E5%B0%86%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87%E6%8A%A5%E5%91%8A%E6%8F%90%E4%BA%A4%E7%BB%99-coveralls">将测试覆盖率报告提交给 Coveralls<a class="anchor" href="#%E5%B0%86%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87%E6%8A%A5%E5%91%8A%E6%8F%90%E4%BA%A4%E7%BB%99-coveralls">§</a></h2>\n<p><a href="https://coveralls.io/">Coveralls</a> 用于收集测试覆盖率报告，对于开源项目免费。我们的 badge 也是 Coveralls 提供的数据。</p>\n<p>Coveralls 可以使用 GitHub 账号登录，登录之后可以<a href="https://coveralls.io/repos/new">在这里</a>添加需要收集报告的 repo，那么我们如何将测试覆盖率报告通过 Travis CI 提交给 Coveralls 呢？</p>\n<p>首先需要安装 <code>coveralls</code>：</p>\n<pre class="language-shell"><code class="language-shell"><span class="token function">npm</span> <span class="token function">install</span> coveralls --save-dev\n</code></pre>\n<p>然后在 <code>package.json</code> 中的 <code>scripts</code> 里添加：</p>\n<pre class="language-json"><code class="language-json"><span class="token property">"coveralls"</span><span class="token operator">:</span> <span class="token string">"npm run cover -- --report lcovonly &amp;&amp; cat ./coverage/lcov.info | coveralls"</span>\n</code></pre>\n<p>然后在 <code>.travis.yml</code> 中添加：</p>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">after_success</span><span class="token punctuation">:</span>\n<span class="token punctuation">-</span> npm run coveralls\n</code></pre>\n<p>一个完整的 <code>.travis.yml</code> 如下：</p>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">language</span><span class="token punctuation">:</span> node_js\n<span class="token key atrule">node_js</span><span class="token punctuation">:</span>\n<span class="token punctuation">-</span> <span class="token number">6</span>\n<span class="token key atrule">branches</span><span class="token punctuation">:</span>\n  <span class="token key atrule">only</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> master\n<span class="token key atrule">install</span><span class="token punctuation">:</span>\n<span class="token punctuation">-</span> npm install\n<span class="token key atrule">script</span><span class="token punctuation">:</span>\n<span class="token punctuation">-</span> npm test\n<span class="token key atrule">after_success</span><span class="token punctuation">:</span>\n<span class="token punctuation">-</span> npm run coveralls\n</code></pre>\n<p>那么下一次提交代码的时候就会将测试覆盖率报告提交给 Coveralls 啦，别忘了在 <a href="http://README.md">README.md</a> 中添加 badge 哦：</p>\n<pre class="language-md"><code class="language-md"><span class="token url">[<span class="token content">![Coveralls</span>](<a class="token url-link" href="https://img.shields.io/coveralls/xcatliu/pagic.svg">https://img.shields.io/coveralls/xcatliu/pagic.svg</a>)</span>](<a class="token url-link" href="https://coveralls.io/github/xcatliu/pagic">https://coveralls.io/github/xcatliu/pagic</a>)\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%BB%9F%E4%B8%80-badge" }, "\u7EDF\u4E00 badge")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87" }, "\u6D4B\u8BD5\u8986\u76D6\u7387")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%B0%86%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87%E6%8A%A5%E5%91%8A%E6%8F%90%E4%BA%A4%E7%BB%99-coveralls" }, "\u5C06\u6D4B\u8BD5\u8986\u76D6\u7387\u62A5\u544A\u63D0\u4EA4\u7ED9 Coveralls")))),
    'author': undefined,
    'contributors': [],
    'date': "2021-07-02T06:13:03.800Z",
    'updated': null,
    'excerpt': "开源项目的 README.md 中，一般都会在前面放上一些 badge，除了可以让读者快速的了解项目的一些信息以外，还为 README.md 添加了些许色彩。以 Pagic 为例： - 上图中的 build passing 表示 travis build 通过了，用绿色背景显示...",
    'cover': "../assets/test_coverage_for_github/pagic.png",
    'categories': [
        "编程世界"
    ],
    'tags': [
        "测试覆盖率",
        "测试",
        "GitHub"
    ],
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
