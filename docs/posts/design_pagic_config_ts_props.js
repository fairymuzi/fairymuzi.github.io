import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/design_pagic_config_ts.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/design_pagic_config_ts.html",
    'title': "设计 pagic.config.ts",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>设计 pagic.config.ts</h1>\n<p>作为一名<del>高级 Markdown 工程师</del>资深博客爱好者，我热衷于<del>写博客</del>折腾各种博客系统，写过多个博客主题。</p>\n<p>终于，写主题也无法得到满足，我开始写博客系统了。</p>\n<p>或者说是更广义的，静态网站生成器。</p>\n<p>如今 <a href="https://github.com/xcatliu/pagic">Pagic</a> 已经完成了一个雏形，我也邀请了一些朋友试用，经过一些迭代，我决定来重新设计一下 <code>pagic.config.ts</code>，毕竟作为一个静态网站生成器，大部分用户只需要配置一下 <code>pagic.config.ts</code> 就可以构建网站了，所以配置文件的设计是至关重要的。</p>\n<h2 id="%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99">设计原则<a class="anchor" href="#%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99">§</a></h2>\n<ol>\n<li><a href="https://zh.wikipedia.org/wiki/%E7%BA%A6%E5%AE%9A%E4%BC%98%E4%BA%8E%E9%85%8D%E7%BD%AE">约定优于配置</a></li>\n<li>尽可能语义话，一目了然</li>\n<li>类型统一，不要有选项既能传字符串又能传函数</li>\n<li>参考：<a href="https://deno.land/manual/contributing/style_guide">Deno</a>, <a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html">tsconfig.json</a>, <a href="https://webpack.js.org/configuration/">webpack</a>, <a href="https://hexo.io/zh-cn/docs/configuration">Hexo</a>, <a href="https://vuepress.vuejs.org/config/">VuePress</a>, <a href="https://gohugo.io/getting-started/configuration/">Hugo</a></li>\n</ol>\n<h2 id="%E5%91%BD%E5%90%8D%E7%BA%A6%E5%AE%9A">命名约定<a class="anchor" href="#%E5%91%BD%E5%90%8D%E7%BA%A6%E5%AE%9A">§</a></h2>\n<h3 id="%E6%96%87%E4%BB%B6%E5%90%8D%E7%9B%AE%E5%BD%95%E5%90%8D">文件名、目录名<a class="anchor" href="#%E6%96%87%E4%BB%B6%E5%90%8D%E7%9B%AE%E5%BD%95%E5%90%8D">§</a></h3>\n<p>使用下划线命名法 <code>foo_bar/baz_v2.md</code>。</p>\n<p>依据：<a href="https://deno.land/manual/contributing/style_guide#use-underscores-not-dashes-in-filenames">Deno 的建议</a></p>\n<h3 id="%E5%8F%98%E9%87%8F%E5%90%8D%E5%8F%82%E6%95%B0%E5%90%8D">变量名、参数名<a class="anchor" href="#%E5%8F%98%E9%87%8F%E5%90%8D%E5%8F%82%E6%95%B0%E5%90%8D">§</a></h3>\n<p>使用驼峰命名法 <code>fooBar</code>。</p>\n<p>依据：<a href="https://deno.land/manual/contributing/style_guide#exported-functions-max-2-args-put-the-rest-into-an-options-object">Deno 的实际做法</a></p>\n<h3 id="%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%90%8D%E7%A7%B0">配置文件名称<a class="anchor" href="#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%90%8D%E7%A7%B0">§</a></h3>\n<p><code>pagic.config.tsx</code> 或 <code>pagic.config.ts</code>。</p>\n<ul>\n<li>其中 <code>pagic.config.tsx</code> 优先级更高（依据：<a href="https://webpack.js.org/configuration/resolve/#resolveextensions">webpack 的默认加载顺序</a>）</li>\n<li>为什么要提供 <code>tsx</code> 和 <code>ts</code> 两种？为什么不统一为 <code>ts</code>？因为一旦使用了 jsx 语法，则必须命名为 <code>tsx</code>，这是 TypeScript 的限制</li>\n<li>为什么不统一为 <code>tsx</code>？因为大部分情况下用 <code>ts</code> 足够了</li>\n<li>只查找当前运行目录下的配置文件，<strong>不提供</strong> <code>--config</code> 的方式指定配置文件（约定优于配置）</li>\n<li>json 格式和 yaml 格式有诸多限制，故使用 ts 来书写配置文件，<strong>不提供</strong>其他选择（约定优于配置）</li>\n<li>其他静态网站生成器的配置文件中，最让人困惑的就是将主题的配置单独抽离出来了，使得我经常需要犹豫，一个配置项到底是属于主配置文件还是属于主题的配置文件。所以，在 Pagic 中只存在一个配置文件</li>\n</ul>\n<p>命名依据：</p>\n<ul>\n<li><code>tsconfig.json</code>（ts）</li>\n<li><code>webpack.config.js</code>（webpack）</li>\n<li><code>.vuepress/config.js</code>（VuePress）</li>\n<li><code>_config.yml</code>（Hexo）</li>\n<li><code>config.json</code>（Hugo）</li>\n</ul>\n<h2 id="%E6%96%87%E4%BB%B6%E7%9B%B8%E5%85%B3%E7%9A%84%E9%85%8D%E7%BD%AE">文件相关的配置<a class="anchor" href="#%E6%96%87%E4%BB%B6%E7%9B%B8%E5%85%B3%E7%9A%84%E9%85%8D%E7%BD%AE">§</a></h2>\n<p>文件相关的配置大多参考的 <code>tsconfig.json</code>，因为其最贴合需求——支持指定文件（<code>files</code>）构建。</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>配置项</th>\n<th>类型</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>srcDir</code></td>\n<td><code>string</code></td>\n<td><code>\'.\'</code></td>\n<td>构建的源目录。其中的页面都会以相同的目录结构被构建到 <code>outDir</code> 中。默认为当前目录，此时当前目录下的 <code>README.md</code> 会被构建到 <code>${outDir}/index.html</code> 中</td>\n</tr>\n<tr>\n<td><code>outDir</code></td>\n<td><code>string</code></td>\n<td><code>\'dist\'</code></td>\n<td>构建的目标目录</td>\n</tr>\n<tr>\n<td><code>include</code></td>\n<td><code>glob[]</code></td>\n<td><code>[\'**/*\']</code></td>\n<td>在构建的源目录下，所有匹配上 <code>include</code>（并且没有匹配上 <code>exclude</code>）的文件都会被构建。glob 语法<a href="https://github.com/isaacs/minimatch">见此</a></td>\n</tr>\n<tr>\n<td><code>exclude</code></td>\n<td><code>glob[]</code></td>\n<td>较长，后续详细介绍</td>\n<td>构建的根目录下，需要排除的文件</td>\n</tr>\n<tr>\n<td><code>files</code></td>\n<td><code>string[]</code></td>\n<td><code>[]</code></td>\n<td>指定文件构建。当传入的是空数组时，会以 <code>include</code> 和 <code>exclude</code> 来匹配；当传入的数组长度大于 0 时，会忽略 <code>include</code> 和 <code>exclude</code>，精确的按照 <code>files</code> 列表来构建</td>\n</tr>\n<tr>\n<td><code>root</code></td>\n<td><code>string</code></td>\n<td><code>\'/\'</code></td>\n<td>部署站点的基础路径，如果网站部署在一个子路径下，比如 <code>https://xcatliu.github.io/pagic/</code>，那么 <code>root</code> 应该被设置为 <code>\'/pagic/\'</code></td>\n</tr>\n</tbody>\n</table></div>\n<h3 id="exclude"><code>exclude</code><a class="anchor" href="#exclude">§</a></h3>\n<p><code>exclude</code> 的默认值较长：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token punctuation">[</span>\n  <span class="token comment">// Dot files</span>\n  <span class="token string">\'**/.*\'</span><span class="token punctuation">,</span>\n  <span class="token comment">// Node common files</span>\n  <span class="token string">\'**/package.json\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'**/package-lock.json\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'**/node_modules\'</span><span class="token punctuation">,</span>\n  <span class="token comment">// pagic.config.ts and pagic.config.tsx</span>\n  <span class="token string">\'pagic.config.{ts,tsx}\'</span><span class="token punctuation">,</span>\n  <span class="token comment">// <a class="token url-link" href="https://docs.npmjs.com/using-npm/developers.html#keeping-files-out-of-your-package">https://docs.npmjs.com/using-npm/developers.html#keeping-files-out-of-your-package</a></span>\n  <span class="token string">\'**/config.gypi\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'**/CVS\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'**/npm-debug.log\'</span>\n\n  <span class="token comment">// ${config.outDir} will be added later</span>\n<span class="token punctuation">]</span>\n</code></pre>\n<p>注意这里的每一项都可以匹配到文件或目录，以 <code>**/node_modules</code> 为例，它：</p>\n<ul>\n<li>不仅能匹配到 <code>${srcDir}</code> 下的 <code>node_modules</code> 目录（以及此目录下的所有文件）</li>\n<li>也能匹配到 <code>${srcDir}</code> 下的 <code>node_modules</code> 文件</li>\n<li>当然也能匹配到 <code>${srcDir}</code> 下的任意多级子目录下的 <code>node_modules</code> 目录或文件</li>\n</ul>\n<p>实际上，<code>**/node_modules</code> 会被转化为 <code>**/node_modules{,/**}</code>，这样就能匹配到以上所有情况了。</p>\n<p>需要注意的是：</p>\n<ul>\n<li>匹配时以 <code>srcDir</code> 为根目录开始匹配。比如 <code>pagic.config.{ts,tsx}</code> 就只能匹配到 <code>srcDir</code> 下的文件，而不能匹配到 <code>srcDir</code> 的子目录下的文件，若要匹配上子目录，需要加上前缀 <code>*/</code>，若要匹配上任意多级子目录，需要加上前缀 <code>**/</code></li>\n<li><code>include</code> 的匹配策略和 <code>exclude</code> 一致</li>\n<li><code>files</code> 是精确匹配，且只匹配文件，不匹配目录</li>\n<li>用户配置的 <code>include</code> 和 <code>exclude</code> 会 append 到默认值数组中，而不是替换它</li>\n</ul>\n<p>通过这些配置，Pagic 可以灵活的运用于各种场景：</p>\n<h3 id="%E5%9C%BA%E6%99%AF%E4%B8%80%E7%BA%AF%E7%BD%91%E7%AB%99%E7%8B%AC%E7%AB%8B%E7%9A%84%E7%9B%AE%E5%BD%95%E5%AD%98%E6%94%BE%E6%BA%90%E6%96%87%E4%BB%B6">场景一：纯网站，独立的目录存放源文件<a class="anchor" href="#%E5%9C%BA%E6%99%AF%E4%B8%80%E7%BA%AF%E7%BD%91%E7%AB%99%E7%8B%AC%E7%AB%8B%E7%9A%84%E7%9B%AE%E5%BD%95%E5%AD%98%E6%94%BE%E6%BA%90%E6%96%87%E4%BB%B6">§</a></h3>\n<p>如果仅仅是想搭建一个网站，那么最方便的方式是使用这样的目录结构，将源文件与构建好的文件分开：</p>\n<pre class="language-bash"><code class="language-bash">website/\n├── dist/\n<span class="token operator">|</span>   └── index.html\n├── src/\n<span class="token operator">|</span>   ├── _layout.tsx\n<span class="token operator">|</span>   └── README.md\n└── pagic.config.ts\n</code></pre>\n<p>此时 <code>pagic.config.ts</code> 的配置很简单：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  srcDir<span class="token operator">:</span> <span class="token string">\'src\'</span><span class="token punctuation">,</span>\n  outDir<span class="token operator">:</span> <span class="token string">\'dist\'</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%9C%BA%E6%99%AF%E4%BA%8C%E7%BA%AF%E7%BD%91%E7%AB%99%E6%A0%B9%E7%9B%AE%E5%BD%95%E5%AD%98%E6%94%BE%E6%BA%90%E6%96%87%E4%BB%B6">场景二：纯网站，根目录存放源文件<a class="anchor" href="#%E5%9C%BA%E6%99%AF%E4%BA%8C%E7%BA%AF%E7%BD%91%E7%AB%99%E6%A0%B9%E7%9B%AE%E5%BD%95%E5%AD%98%E6%94%BE%E6%BA%90%E6%96%87%E4%BB%B6">§</a></h3>\n<p>项目的根目录下一般都有个 <code>README.md</code>，有时我们希望这个文件也被构建为一个页面，此时我们可以将 <code>srcDir</code> 设置为 <code>\'.\'</code>，比如参考 GitBook 的目录结构组织的话，就是这样的：</p>\n<pre class="language-bash"><code class="language-bash">book/\n├── dist/\n<span class="token operator">|</span>   ├── basics/\n<span class="token operator">|</span>   <span class="token operator">|</span>   └── index.html\n<span class="token operator">|</span>   ├── advenced/\n<span class="token operator">|</span>   <span class="token operator">|</span>   └── index.html\n<span class="token operator">|</span>   └── index.html\n├── basics/\n<span class="token operator">|</span>   └── README.md\n├── advenced/\n<span class="token operator">|</span>   └── README.md\n├── _layout.tsx\n├── README.md\n└── pagic.config.ts\n</code></pre>\n<p>此时 <code>pagic.config.ts</code> 的配置也很简单：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  srcDir<span class="token operator">:</span> <span class="token string">\'.\'</span><span class="token punctuation">,</span>\n  outDir<span class="token operator">:</span> <span class="token string">\'dist\'</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>注意如果有需要排除的文件，可以使用 <code>exclude</code> 排除掉，比如：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  srcDir<span class="token operator">:</span> <span class="token string">\'.\'</span><span class="token punctuation">,</span>\n  outDir<span class="token operator">:</span> <span class="token string">\'dist\'</span><span class="token punctuation">,</span>\n  exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'examples\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%9C%BA%E6%99%AF%E4%B8%89%E9%A1%B9%E7%9B%AE--%E7%BD%91%E7%AB%99">场景三：项目 + 网站<a class="anchor" href="#%E5%9C%BA%E6%99%AF%E4%B8%89%E9%A1%B9%E7%9B%AE--%E7%BD%91%E7%AB%99">§</a></h3>\n<p>如果是在一个项目中要搭建网站，又不想重新建一个仓库，那么前两种方式都可以满足需求：</p>\n<ol>\n<li>网站源文件放到 <code>docs</code> 目录下，<code>srcDir</code> 配置为 <code>\'docs\'</code> 即可。优点是配置简单，不用配置 <code>include</code> 和 <code>exclude</code></li>\n<li>直接在根目录下构建网站，<code>srcDir</code> 配置为 <code>\'.\'</code>，再配置 <code>include</code> 包含网站的存放目录即可。优点是包含了根目录下的 <code>README.md</code></li>\n</ol>\n<h3 id="%E5%9C%BA%E6%99%AF%E5%9B%9B%E4%BB%85%E5%B1%95%E7%A4%BA-readmemd">场景四：仅展示 <a href="http://README.md">README.md</a><a class="anchor" href="#%E5%9C%BA%E6%99%AF%E5%9B%9B%E4%BB%85%E5%B1%95%E7%A4%BA-readmemd">§</a></h3>\n<p>有的项目很简单，只需要一个 <code>README.md</code> 即可，不需要其他页面了，此时可以配置 <code>files</code> 仅包含 <code>README.md</code>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  srcDir<span class="token operator">:</span> <span class="token string">\'.\'</span><span class="token punctuation">,</span>\n  outDir<span class="token operator">:</span> <span class="token string">\'dist\'</span><span class="token punctuation">,</span>\n  files<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'README.md\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="%E6%8F%92%E4%BB%B6">插件<a class="anchor" href="#%E6%8F%92%E4%BB%B6">§</a></h2>\n<p>插件是 Pagic 中最核心的功能，Pagic 甚至将最基本的构建流程也拆分为了插件——内置插件。插件分为三种：</p>\n<ol>\n<li>内置插件：最基本的构建流程，一定会运行</li>\n<li>官方插件：由 Pagic 实现的插件，可选，如：<code>sidebar</code>，<code>ga</code> 等</li>\n<li>第三方插件：由第三方实现的插件，可选。遵循 Deno 的设计，入口为一个 url，如：<code>https://github.com/xcatliu/pagic_plugin_example/blob/master/mod.ts</code></li>\n</ol>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>配置项</th>\n<th>类型</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>plugins</code></td>\n<td><code>string[]</code></td>\n<td><code>[\'init\', \'md\', \'tsx\', \'script\', \'layout\', \'write\']</code></td>\n<td>插件列表，内置插件和官方插件的取值均为插件名，第三方插件的取值为其入口 url</td>\n</tr>\n</tbody>\n</table></div>\n<p>插件执行的顺序按照其配置顺序，除非该插件在实现时配置了一个 <code>insert</code> 属性：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">\'customPlugin\'</span><span class="token punctuation">,</span>\n  insert<span class="token operator">:</span> <span class="token string">\'before:script\'</span><span class="token punctuation">,</span>\n  <span class="token comment">// fn 的设计参考了 Deno <a class="token url-link" href="https://deno.land/manual/testing#writing-tests">https://deno.land/manual/testing#writing-tests</a></span>\n  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span>pagic<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// balabala</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><code>name</code> 是插件的唯一标识，会被用于 <code>insert</code> 中的插件排序。</p>\n<p><code>insert</code> 的语法是 <code>before:${pluginName}</code> 或 <code>after:${pluginName}</code>。这种方式比其他静态网站生成器中需要注册各种各样的生命周期钩子更方便也更灵活。</p>\n<p><code>fn</code> 是一个函数，仅接受一个参数，<code>pagic</code> 实例，它可以访问到 Pagic 在运行中的所有配置、上下文。如果插件需要一些额外的配置，可以约定在 <code>pagic.config.ts</code> 中新增一条配置项 <code>customPlugin</code>，然后在 <code>fn</code> 中可以通过 <code>pagic.config.customPlugin</code> 获取到配置。</p>\n<p>需要注意的是：</p>\n<ul>\n<li>用户配置的 <code>plugins</code> 会 append 到默认数组中，而不是替换它</li>\n<li>插件在运行时会根据其 <code>insert</code> 排序再运行</li>\n<li>可以使用 <code>-</code> 前缀删除掉某个内置插件，这个特性不常用，只有在以下两种情况下需要使用：\n<ol>\n<li>仅仅将 React 作为一个模版引擎，想构建出不加载 React 的 html 页面时，可以使用 <code>-script</code> 去掉构建 js 脚本的插件，注意此时 React 中的脚本比如 <code>useState</code> 就不会在客户端执行了</li>\n<li>想要自己替换掉一些内置插件，比如使用 <code>-md</code> 去掉解析 markdown 文件的插件，然后再添加一个自定义插件 <code>https://github.com/xcatliu/pagic_plugin_custom_md/blob/master/mod.ts</code> 这样可以修改 Pagic 核心的构建流程，实现更高自由度的个性化</li>\n</ol>\n</li>\n<li>第三方插件一般都需要 <code>insert</code> 属性，不然就会在 <code>write</code> 之后运行了，很少有插件需要在构建完成写入文件后再执行</li>\n</ul>\n<h2 id="%E4%B8%BB%E9%A2%98">主题<a class="anchor" href="#%E4%B8%BB%E9%A2%98">§</a></h2>\n<p>主题是 Pagic 中的核心功能之一，有官方主题和第三方主题两种</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>配置项</th>\n<th>类型</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>theme</code></td>\n<td><code>string</code></td>\n<td><code>default</code></td>\n<td>官方主题的取值为主题名，第三方插件的取值为其入口 url</td>\n</tr>\n</tbody>\n</table></div>\n<p>主题的运行机制很容易理解——当运行 <code>pagic build</code> 时，会将主题中的所有文件都“复制”到 <code>srcDir</code> 下，然后按照正常的模式运行 <code>build</code>。</p>\n<p>当然，这个“复制”并不会真的复制文件。而且遇到冲突的文件时，也是以用户的文件为准。</p>\n<p>为什么主题需要一个入口文件呢？</p>\n<p>因为 Deno 的设计中，模块调用是以 url 为基础的，想象一个网址表示一个主题，我们没有办法像 node 一样用 <code>fs.readdir</code> 来找到此主题目录下的所有文件，所以必须有一个入口文件来表示此主题包含了哪些文件：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">\'default\'</span><span class="token punctuation">,</span>\n  files<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">\'assets/index.css\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'assets/reset.css\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'assets/variables.css\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'_layout.tsx\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'favicon.ico\'</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>其中 <code>files</code> 表示需要被“复制”到 <code>srcDir</code> 下的文件。</p>\n<p>另外还支持使用 <code>extends</code> 来继承一个主题，官方主题的取值为主题名，第三方插件的取值为其入口 url。它常用于想基于某个主题自定义样式，创建一个新主题。比如官方的 <code>docs</code> 主题以及很完善了，那么可以继承后覆盖掉其 <code>assets/variables.css</code> 文件，创建一个新样式的主题。</p>\n<h2 id="%E7%BD%91%E7%AB%99%E9%85%8D%E7%BD%AE">网站配置<a class="anchor" href="#%E7%BD%91%E7%AB%99%E9%85%8D%E7%BD%AE">§</a></h2>\n<p>这里列出一些约定好的配置，它们通常由插件或主题来实现。</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>配置项</th>\n<th>类型</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>title</code></td>\n<td><code>string</code></td>\n<td><code>\'\'</code></td>\n<td>网站标题，通常会放到页面的标题后面，如：<code>函数的类型 · TypeScript 入门教程</code>，若该页面不存在页面标题，则只会展示网站标题 <code>TypeScript 入门教程</code></td>\n</tr>\n<tr>\n<td><code>description</code></td>\n<td><code>string</code></td>\n<td><code>\'\'</code></td>\n<td>网站描述，通常会放到 <code>&lt;head&gt;&lt;meta name=&quot;description&quot;&gt;</code> 中展示，也有可能展示在页面中</td>\n</tr>\n<tr>\n<td><code>head</code></td>\n<td><code>React.ReactNode</code></td>\n<td><code>undefined</code></td>\n<td>额外被注入到 <code>&lt;head&gt;</code> 中的内容，可以写 jsx。注意此时需要将配置文件改为 <code>tsx</code> 后缀 <code>pagic.config.tsx</code></td>\n</tr>\n<tr>\n<td><code>sidebar</code></td>\n<td></td>\n<td><code>undefined</code></td>\n<td>侧边栏</td>\n</tr>\n<tr>\n<td><code>nav</code></td>\n<td></td>\n<td><code>undefined</code></td>\n<td>顶部导航</td>\n</tr>\n<tr>\n<td><code>github</code></td>\n<td><code>string</code></td>\n<td><code>undefined</code></td>\n<td>网站的 GitHub 地址，通常会展示在网页的右上角</td>\n</tr>\n<tr>\n<td><code>ga</code></td>\n<td></td>\n<td><code>undefined</code></td>\n<td>Google Analytics 配置</td>\n</tr>\n<tr>\n<td><code>gitalk</code></td>\n<td></td>\n<td><code>undefined</code></td>\n<td>Gitalk 配置</td>\n</tr>\n<tr>\n<td><code>tocAd</code></td>\n<td><code>React.ReactNode</code></td>\n<td><code>undefined</code></td>\n<td>展示在 toc 上方的广告</td>\n</tr>\n<tr>\n<td><code>tools</code></td>\n<td></td>\n<td><code>undefined</code></td>\n<td>一些额外的功能</td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE">开发环境配置<a class="anchor" href="#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>配置项</th>\n<th>类型</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>watch</code></td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否观察 <code>srcDir</code> 目录，有变化后重新构建</td>\n</tr>\n<tr>\n<td><code>serve</code></td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否启动一个静态服务</td>\n</tr>\n<tr>\n<td><code>port</code></td>\n<td><code>number</code></td>\n<td><code>8000</code></td>\n<td>静态服务端口号</td>\n</tr>\n</tbody>\n</table></div>\n<hr>\n<p>本文会持续更新，直到 Pagic 1.0 发布。</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u8BBE\u8BA1 pagic.config.ts"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>作为一名<del>高级 Markdown 工程师</del>资深博客爱好者，我热衷于<del>写博客</del>折腾各种博客系统，写过多个博客主题。</p>\n<p>终于，写主题也无法得到满足，我开始写博客系统了。</p>\n<p>或者说是更广义的，静态网站生成器。</p>\n<p>如今 <a href="https://github.com/xcatliu/pagic">Pagic</a> 已经完成了一个雏形，我也邀请了一些朋友试用，经过一些迭代，我决定来重新设计一下 <code>pagic.config.ts</code>，毕竟作为一个静态网站生成器，大部分用户只需要配置一下 <code>pagic.config.ts</code> 就可以构建网站了，所以配置文件的设计是至关重要的。</p>\n<h2 id="%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99">设计原则<a class="anchor" href="#%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99">§</a></h2>\n<ol>\n<li><a href="https://zh.wikipedia.org/wiki/%E7%BA%A6%E5%AE%9A%E4%BC%98%E4%BA%8E%E9%85%8D%E7%BD%AE">约定优于配置</a></li>\n<li>尽可能语义话，一目了然</li>\n<li>类型统一，不要有选项既能传字符串又能传函数</li>\n<li>参考：<a href="https://deno.land/manual/contributing/style_guide">Deno</a>, <a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html">tsconfig.json</a>, <a href="https://webpack.js.org/configuration/">webpack</a>, <a href="https://hexo.io/zh-cn/docs/configuration">Hexo</a>, <a href="https://vuepress.vuejs.org/config/">VuePress</a>, <a href="https://gohugo.io/getting-started/configuration/">Hugo</a></li>\n</ol>\n<h2 id="%E5%91%BD%E5%90%8D%E7%BA%A6%E5%AE%9A">命名约定<a class="anchor" href="#%E5%91%BD%E5%90%8D%E7%BA%A6%E5%AE%9A">§</a></h2>\n<h3 id="%E6%96%87%E4%BB%B6%E5%90%8D%E7%9B%AE%E5%BD%95%E5%90%8D">文件名、目录名<a class="anchor" href="#%E6%96%87%E4%BB%B6%E5%90%8D%E7%9B%AE%E5%BD%95%E5%90%8D">§</a></h3>\n<p>使用下划线命名法 <code>foo_bar/baz_v2.md</code>。</p>\n<p>依据：<a href="https://deno.land/manual/contributing/style_guide#use-underscores-not-dashes-in-filenames">Deno 的建议</a></p>\n<h3 id="%E5%8F%98%E9%87%8F%E5%90%8D%E5%8F%82%E6%95%B0%E5%90%8D">变量名、参数名<a class="anchor" href="#%E5%8F%98%E9%87%8F%E5%90%8D%E5%8F%82%E6%95%B0%E5%90%8D">§</a></h3>\n<p>使用驼峰命名法 <code>fooBar</code>。</p>\n<p>依据：<a href="https://deno.land/manual/contributing/style_guide#exported-functions-max-2-args-put-the-rest-into-an-options-object">Deno 的实际做法</a></p>\n<h3 id="%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%90%8D%E7%A7%B0">配置文件名称<a class="anchor" href="#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%90%8D%E7%A7%B0">§</a></h3>\n<p><code>pagic.config.tsx</code> 或 <code>pagic.config.ts</code>。</p>\n<ul>\n<li>其中 <code>pagic.config.tsx</code> 优先级更高（依据：<a href="https://webpack.js.org/configuration/resolve/#resolveextensions">webpack 的默认加载顺序</a>）</li>\n<li>为什么要提供 <code>tsx</code> 和 <code>ts</code> 两种？为什么不统一为 <code>ts</code>？因为一旦使用了 jsx 语法，则必须命名为 <code>tsx</code>，这是 TypeScript 的限制</li>\n<li>为什么不统一为 <code>tsx</code>？因为大部分情况下用 <code>ts</code> 足够了</li>\n<li>只查找当前运行目录下的配置文件，<strong>不提供</strong> <code>--config</code> 的方式指定配置文件（约定优于配置）</li>\n<li>json 格式和 yaml 格式有诸多限制，故使用 ts 来书写配置文件，<strong>不提供</strong>其他选择（约定优于配置）</li>\n<li>其他静态网站生成器的配置文件中，最让人困惑的就是将主题的配置单独抽离出来了，使得我经常需要犹豫，一个配置项到底是属于主配置文件还是属于主题的配置文件。所以，在 Pagic 中只存在一个配置文件</li>\n</ul>\n<p>命名依据：</p>\n<ul>\n<li><code>tsconfig.json</code>（ts）</li>\n<li><code>webpack.config.js</code>（webpack）</li>\n<li><code>.vuepress/config.js</code>（VuePress）</li>\n<li><code>_config.yml</code>（Hexo）</li>\n<li><code>config.json</code>（Hugo）</li>\n</ul>\n<h2 id="%E6%96%87%E4%BB%B6%E7%9B%B8%E5%85%B3%E7%9A%84%E9%85%8D%E7%BD%AE">文件相关的配置<a class="anchor" href="#%E6%96%87%E4%BB%B6%E7%9B%B8%E5%85%B3%E7%9A%84%E9%85%8D%E7%BD%AE">§</a></h2>\n<p>文件相关的配置大多参考的 <code>tsconfig.json</code>，因为其最贴合需求——支持指定文件（<code>files</code>）构建。</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>配置项</th>\n<th>类型</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>srcDir</code></td>\n<td><code>string</code></td>\n<td><code>\'.\'</code></td>\n<td>构建的源目录。其中的页面都会以相同的目录结构被构建到 <code>outDir</code> 中。默认为当前目录，此时当前目录下的 <code>README.md</code> 会被构建到 <code>${outDir}/index.html</code> 中</td>\n</tr>\n<tr>\n<td><code>outDir</code></td>\n<td><code>string</code></td>\n<td><code>\'dist\'</code></td>\n<td>构建的目标目录</td>\n</tr>\n<tr>\n<td><code>include</code></td>\n<td><code>glob[]</code></td>\n<td><code>[\'**/*\']</code></td>\n<td>在构建的源目录下，所有匹配上 <code>include</code>（并且没有匹配上 <code>exclude</code>）的文件都会被构建。glob 语法<a href="https://github.com/isaacs/minimatch">见此</a></td>\n</tr>\n<tr>\n<td><code>exclude</code></td>\n<td><code>glob[]</code></td>\n<td>较长，后续详细介绍</td>\n<td>构建的根目录下，需要排除的文件</td>\n</tr>\n<tr>\n<td><code>files</code></td>\n<td><code>string[]</code></td>\n<td><code>[]</code></td>\n<td>指定文件构建。当传入的是空数组时，会以 <code>include</code> 和 <code>exclude</code> 来匹配；当传入的数组长度大于 0 时，会忽略 <code>include</code> 和 <code>exclude</code>，精确的按照 <code>files</code> 列表来构建</td>\n</tr>\n<tr>\n<td><code>root</code></td>\n<td><code>string</code></td>\n<td><code>\'/\'</code></td>\n<td>部署站点的基础路径，如果网站部署在一个子路径下，比如 <code>https://xcatliu.github.io/pagic/</code>，那么 <code>root</code> 应该被设置为 <code>\'/pagic/\'</code></td>\n</tr>\n</tbody>\n</table></div>\n<h3 id="exclude"><code>exclude</code><a class="anchor" href="#exclude">§</a></h3>\n<p><code>exclude</code> 的默认值较长：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token punctuation">[</span>\n  <span class="token comment">// Dot files</span>\n  <span class="token string">\'**/.*\'</span><span class="token punctuation">,</span>\n  <span class="token comment">// Node common files</span>\n  <span class="token string">\'**/package.json\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'**/package-lock.json\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'**/node_modules\'</span><span class="token punctuation">,</span>\n  <span class="token comment">// pagic.config.ts and pagic.config.tsx</span>\n  <span class="token string">\'pagic.config.{ts,tsx}\'</span><span class="token punctuation">,</span>\n  <span class="token comment">// <a class="token url-link" href="https://docs.npmjs.com/using-npm/developers.html#keeping-files-out-of-your-package">https://docs.npmjs.com/using-npm/developers.html#keeping-files-out-of-your-package</a></span>\n  <span class="token string">\'**/config.gypi\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'**/CVS\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'**/npm-debug.log\'</span>\n\n  <span class="token comment">// ${config.outDir} will be added later</span>\n<span class="token punctuation">]</span>\n</code></pre>\n<p>注意这里的每一项都可以匹配到文件或目录，以 <code>**/node_modules</code> 为例，它：</p>\n<ul>\n<li>不仅能匹配到 <code>${srcDir}</code> 下的 <code>node_modules</code> 目录（以及此目录下的所有文件）</li>\n<li>也能匹配到 <code>${srcDir}</code> 下的 <code>node_modules</code> 文件</li>\n<li>当然也能匹配到 <code>${srcDir}</code> 下的任意多级子目录下的 <code>node_modules</code> 目录或文件</li>\n</ul>\n<p>实际上，<code>**/node_modules</code> 会被转化为 <code>**/node_modules{,/**}</code>，这样就能匹配到以上所有情况了。</p>\n<p>需要注意的是：</p>\n<ul>\n<li>匹配时以 <code>srcDir</code> 为根目录开始匹配。比如 <code>pagic.config.{ts,tsx}</code> 就只能匹配到 <code>srcDir</code> 下的文件，而不能匹配到 <code>srcDir</code> 的子目录下的文件，若要匹配上子目录，需要加上前缀 <code>*/</code>，若要匹配上任意多级子目录，需要加上前缀 <code>**/</code></li>\n<li><code>include</code> 的匹配策略和 <code>exclude</code> 一致</li>\n<li><code>files</code> 是精确匹配，且只匹配文件，不匹配目录</li>\n<li>用户配置的 <code>include</code> 和 <code>exclude</code> 会 append 到默认值数组中，而不是替换它</li>\n</ul>\n<p>通过这些配置，Pagic 可以灵活的运用于各种场景：</p>\n<h3 id="%E5%9C%BA%E6%99%AF%E4%B8%80%E7%BA%AF%E7%BD%91%E7%AB%99%E7%8B%AC%E7%AB%8B%E7%9A%84%E7%9B%AE%E5%BD%95%E5%AD%98%E6%94%BE%E6%BA%90%E6%96%87%E4%BB%B6">场景一：纯网站，独立的目录存放源文件<a class="anchor" href="#%E5%9C%BA%E6%99%AF%E4%B8%80%E7%BA%AF%E7%BD%91%E7%AB%99%E7%8B%AC%E7%AB%8B%E7%9A%84%E7%9B%AE%E5%BD%95%E5%AD%98%E6%94%BE%E6%BA%90%E6%96%87%E4%BB%B6">§</a></h3>\n<p>如果仅仅是想搭建一个网站，那么最方便的方式是使用这样的目录结构，将源文件与构建好的文件分开：</p>\n<pre class="language-bash"><code class="language-bash">website/\n├── dist/\n<span class="token operator">|</span>   └── index.html\n├── src/\n<span class="token operator">|</span>   ├── _layout.tsx\n<span class="token operator">|</span>   └── README.md\n└── pagic.config.ts\n</code></pre>\n<p>此时 <code>pagic.config.ts</code> 的配置很简单：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  srcDir<span class="token operator">:</span> <span class="token string">\'src\'</span><span class="token punctuation">,</span>\n  outDir<span class="token operator">:</span> <span class="token string">\'dist\'</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%9C%BA%E6%99%AF%E4%BA%8C%E7%BA%AF%E7%BD%91%E7%AB%99%E6%A0%B9%E7%9B%AE%E5%BD%95%E5%AD%98%E6%94%BE%E6%BA%90%E6%96%87%E4%BB%B6">场景二：纯网站，根目录存放源文件<a class="anchor" href="#%E5%9C%BA%E6%99%AF%E4%BA%8C%E7%BA%AF%E7%BD%91%E7%AB%99%E6%A0%B9%E7%9B%AE%E5%BD%95%E5%AD%98%E6%94%BE%E6%BA%90%E6%96%87%E4%BB%B6">§</a></h3>\n<p>项目的根目录下一般都有个 <code>README.md</code>，有时我们希望这个文件也被构建为一个页面，此时我们可以将 <code>srcDir</code> 设置为 <code>\'.\'</code>，比如参考 GitBook 的目录结构组织的话，就是这样的：</p>\n<pre class="language-bash"><code class="language-bash">book/\n├── dist/\n<span class="token operator">|</span>   ├── basics/\n<span class="token operator">|</span>   <span class="token operator">|</span>   └── index.html\n<span class="token operator">|</span>   ├── advenced/\n<span class="token operator">|</span>   <span class="token operator">|</span>   └── index.html\n<span class="token operator">|</span>   └── index.html\n├── basics/\n<span class="token operator">|</span>   └── README.md\n├── advenced/\n<span class="token operator">|</span>   └── README.md\n├── _layout.tsx\n├── README.md\n└── pagic.config.ts\n</code></pre>\n<p>此时 <code>pagic.config.ts</code> 的配置也很简单：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  srcDir<span class="token operator">:</span> <span class="token string">\'.\'</span><span class="token punctuation">,</span>\n  outDir<span class="token operator">:</span> <span class="token string">\'dist\'</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>注意如果有需要排除的文件，可以使用 <code>exclude</code> 排除掉，比如：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  srcDir<span class="token operator">:</span> <span class="token string">\'.\'</span><span class="token punctuation">,</span>\n  outDir<span class="token operator">:</span> <span class="token string">\'dist\'</span><span class="token punctuation">,</span>\n  exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'examples\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%9C%BA%E6%99%AF%E4%B8%89%E9%A1%B9%E7%9B%AE--%E7%BD%91%E7%AB%99">场景三：项目 + 网站<a class="anchor" href="#%E5%9C%BA%E6%99%AF%E4%B8%89%E9%A1%B9%E7%9B%AE--%E7%BD%91%E7%AB%99">§</a></h3>\n<p>如果是在一个项目中要搭建网站，又不想重新建一个仓库，那么前两种方式都可以满足需求：</p>\n<ol>\n<li>网站源文件放到 <code>docs</code> 目录下，<code>srcDir</code> 配置为 <code>\'docs\'</code> 即可。优点是配置简单，不用配置 <code>include</code> 和 <code>exclude</code></li>\n<li>直接在根目录下构建网站，<code>srcDir</code> 配置为 <code>\'.\'</code>，再配置 <code>include</code> 包含网站的存放目录即可。优点是包含了根目录下的 <code>README.md</code></li>\n</ol>\n<h3 id="%E5%9C%BA%E6%99%AF%E5%9B%9B%E4%BB%85%E5%B1%95%E7%A4%BA-readmemd">场景四：仅展示 <a href="http://README.md">README.md</a><a class="anchor" href="#%E5%9C%BA%E6%99%AF%E5%9B%9B%E4%BB%85%E5%B1%95%E7%A4%BA-readmemd">§</a></h3>\n<p>有的项目很简单，只需要一个 <code>README.md</code> 即可，不需要其他页面了，此时可以配置 <code>files</code> 仅包含 <code>README.md</code>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  srcDir<span class="token operator">:</span> <span class="token string">\'.\'</span><span class="token punctuation">,</span>\n  outDir<span class="token operator">:</span> <span class="token string">\'dist\'</span><span class="token punctuation">,</span>\n  files<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'README.md\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="%E6%8F%92%E4%BB%B6">插件<a class="anchor" href="#%E6%8F%92%E4%BB%B6">§</a></h2>\n<p>插件是 Pagic 中最核心的功能，Pagic 甚至将最基本的构建流程也拆分为了插件——内置插件。插件分为三种：</p>\n<ol>\n<li>内置插件：最基本的构建流程，一定会运行</li>\n<li>官方插件：由 Pagic 实现的插件，可选，如：<code>sidebar</code>，<code>ga</code> 等</li>\n<li>第三方插件：由第三方实现的插件，可选。遵循 Deno 的设计，入口为一个 url，如：<code>https://github.com/xcatliu/pagic_plugin_example/blob/master/mod.ts</code></li>\n</ol>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>配置项</th>\n<th>类型</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>plugins</code></td>\n<td><code>string[]</code></td>\n<td><code>[\'init\', \'md\', \'tsx\', \'script\', \'layout\', \'write\']</code></td>\n<td>插件列表，内置插件和官方插件的取值均为插件名，第三方插件的取值为其入口 url</td>\n</tr>\n</tbody>\n</table></div>\n<p>插件执行的顺序按照其配置顺序，除非该插件在实现时配置了一个 <code>insert</code> 属性：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">\'customPlugin\'</span><span class="token punctuation">,</span>\n  insert<span class="token operator">:</span> <span class="token string">\'before:script\'</span><span class="token punctuation">,</span>\n  <span class="token comment">// fn 的设计参考了 Deno <a class="token url-link" href="https://deno.land/manual/testing#writing-tests">https://deno.land/manual/testing#writing-tests</a></span>\n  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span>pagic<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// balabala</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><code>name</code> 是插件的唯一标识，会被用于 <code>insert</code> 中的插件排序。</p>\n<p><code>insert</code> 的语法是 <code>before:${pluginName}</code> 或 <code>after:${pluginName}</code>。这种方式比其他静态网站生成器中需要注册各种各样的生命周期钩子更方便也更灵活。</p>\n<p><code>fn</code> 是一个函数，仅接受一个参数，<code>pagic</code> 实例，它可以访问到 Pagic 在运行中的所有配置、上下文。如果插件需要一些额外的配置，可以约定在 <code>pagic.config.ts</code> 中新增一条配置项 <code>customPlugin</code>，然后在 <code>fn</code> 中可以通过 <code>pagic.config.customPlugin</code> 获取到配置。</p>\n<p>需要注意的是：</p>\n<ul>\n<li>用户配置的 <code>plugins</code> 会 append 到默认数组中，而不是替换它</li>\n<li>插件在运行时会根据其 <code>insert</code> 排序再运行</li>\n<li>可以使用 <code>-</code> 前缀删除掉某个内置插件，这个特性不常用，只有在以下两种情况下需要使用：\n<ol>\n<li>仅仅将 React 作为一个模版引擎，想构建出不加载 React 的 html 页面时，可以使用 <code>-script</code> 去掉构建 js 脚本的插件，注意此时 React 中的脚本比如 <code>useState</code> 就不会在客户端执行了</li>\n<li>想要自己替换掉一些内置插件，比如使用 <code>-md</code> 去掉解析 markdown 文件的插件，然后再添加一个自定义插件 <code>https://github.com/xcatliu/pagic_plugin_custom_md/blob/master/mod.ts</code> 这样可以修改 Pagic 核心的构建流程，实现更高自由度的个性化</li>\n</ol>\n</li>\n<li>第三方插件一般都需要 <code>insert</code> 属性，不然就会在 <code>write</code> 之后运行了，很少有插件需要在构建完成写入文件后再执行</li>\n</ul>\n<h2 id="%E4%B8%BB%E9%A2%98">主题<a class="anchor" href="#%E4%B8%BB%E9%A2%98">§</a></h2>\n<p>主题是 Pagic 中的核心功能之一，有官方主题和第三方主题两种</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>配置项</th>\n<th>类型</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>theme</code></td>\n<td><code>string</code></td>\n<td><code>default</code></td>\n<td>官方主题的取值为主题名，第三方插件的取值为其入口 url</td>\n</tr>\n</tbody>\n</table></div>\n<p>主题的运行机制很容易理解——当运行 <code>pagic build</code> 时，会将主题中的所有文件都“复制”到 <code>srcDir</code> 下，然后按照正常的模式运行 <code>build</code>。</p>\n<p>当然，这个“复制”并不会真的复制文件。而且遇到冲突的文件时，也是以用户的文件为准。</p>\n<p>为什么主题需要一个入口文件呢？</p>\n<p>因为 Deno 的设计中，模块调用是以 url 为基础的，想象一个网址表示一个主题，我们没有办法像 node 一样用 <code>fs.readdir</code> 来找到此主题目录下的所有文件，所以必须有一个入口文件来表示此主题包含了哪些文件：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">\'default\'</span><span class="token punctuation">,</span>\n  files<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">\'assets/index.css\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'assets/reset.css\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'assets/variables.css\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'_layout.tsx\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'favicon.ico\'</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>其中 <code>files</code> 表示需要被“复制”到 <code>srcDir</code> 下的文件。</p>\n<p>另外还支持使用 <code>extends</code> 来继承一个主题，官方主题的取值为主题名，第三方插件的取值为其入口 url。它常用于想基于某个主题自定义样式，创建一个新主题。比如官方的 <code>docs</code> 主题以及很完善了，那么可以继承后覆盖掉其 <code>assets/variables.css</code> 文件，创建一个新样式的主题。</p>\n<h2 id="%E7%BD%91%E7%AB%99%E9%85%8D%E7%BD%AE">网站配置<a class="anchor" href="#%E7%BD%91%E7%AB%99%E9%85%8D%E7%BD%AE">§</a></h2>\n<p>这里列出一些约定好的配置，它们通常由插件或主题来实现。</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>配置项</th>\n<th>类型</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>title</code></td>\n<td><code>string</code></td>\n<td><code>\'\'</code></td>\n<td>网站标题，通常会放到页面的标题后面，如：<code>函数的类型 · TypeScript 入门教程</code>，若该页面不存在页面标题，则只会展示网站标题 <code>TypeScript 入门教程</code></td>\n</tr>\n<tr>\n<td><code>description</code></td>\n<td><code>string</code></td>\n<td><code>\'\'</code></td>\n<td>网站描述，通常会放到 <code>&lt;head&gt;&lt;meta name=&quot;description&quot;&gt;</code> 中展示，也有可能展示在页面中</td>\n</tr>\n<tr>\n<td><code>head</code></td>\n<td><code>React.ReactNode</code></td>\n<td><code>undefined</code></td>\n<td>额外被注入到 <code>&lt;head&gt;</code> 中的内容，可以写 jsx。注意此时需要将配置文件改为 <code>tsx</code> 后缀 <code>pagic.config.tsx</code></td>\n</tr>\n<tr>\n<td><code>sidebar</code></td>\n<td></td>\n<td><code>undefined</code></td>\n<td>侧边栏</td>\n</tr>\n<tr>\n<td><code>nav</code></td>\n<td></td>\n<td><code>undefined</code></td>\n<td>顶部导航</td>\n</tr>\n<tr>\n<td><code>github</code></td>\n<td><code>string</code></td>\n<td><code>undefined</code></td>\n<td>网站的 GitHub 地址，通常会展示在网页的右上角</td>\n</tr>\n<tr>\n<td><code>ga</code></td>\n<td></td>\n<td><code>undefined</code></td>\n<td>Google Analytics 配置</td>\n</tr>\n<tr>\n<td><code>gitalk</code></td>\n<td></td>\n<td><code>undefined</code></td>\n<td>Gitalk 配置</td>\n</tr>\n<tr>\n<td><code>tocAd</code></td>\n<td><code>React.ReactNode</code></td>\n<td><code>undefined</code></td>\n<td>展示在 toc 上方的广告</td>\n</tr>\n<tr>\n<td><code>tools</code></td>\n<td></td>\n<td><code>undefined</code></td>\n<td>一些额外的功能</td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE">开发环境配置<a class="anchor" href="#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE">§</a></h2>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>配置项</th>\n<th>类型</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>watch</code></td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否观察 <code>srcDir</code> 目录，有变化后重新构建</td>\n</tr>\n<tr>\n<td><code>serve</code></td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否启动一个静态服务</td>\n</tr>\n<tr>\n<td><code>port</code></td>\n<td><code>number</code></td>\n<td><code>8000</code></td>\n<td>静态服务端口号</td>\n</tr>\n</tbody>\n</table></div>\n<hr>\n<p>本文会持续更新，直到 Pagic 1.0 发布。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99" }, "\u8BBE\u8BA1\u539F\u5219")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%91%BD%E5%90%8D%E7%BA%A6%E5%AE%9A" }, "\u547D\u540D\u7EA6\u5B9A"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%96%87%E4%BB%B6%E5%90%8D%E7%9B%AE%E5%BD%95%E5%90%8D" }, "\u6587\u4EF6\u540D\u3001\u76EE\u5F55\u540D")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%8F%98%E9%87%8F%E5%90%8D%E5%8F%82%E6%95%B0%E5%90%8D" }, "\u53D8\u91CF\u540D\u3001\u53C2\u6570\u540D")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%90%8D%E7%A7%B0" }, "\u914D\u7F6E\u6587\u4EF6\u540D\u79F0")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%96%87%E4%BB%B6%E7%9B%B8%E5%85%B3%E7%9A%84%E9%85%8D%E7%BD%AE" }, "\u6587\u4EF6\u76F8\u5173\u7684\u914D\u7F6E"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#exclude" }, "exclude")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%9C%BA%E6%99%AF%E4%B8%80%E7%BA%AF%E7%BD%91%E7%AB%99%E7%8B%AC%E7%AB%8B%E7%9A%84%E7%9B%AE%E5%BD%95%E5%AD%98%E6%94%BE%E6%BA%90%E6%96%87%E4%BB%B6" }, "\u573A\u666F\u4E00\uFF1A\u7EAF\u7F51\u7AD9\uFF0C\u72EC\u7ACB\u7684\u76EE\u5F55\u5B58\u653E\u6E90\u6587\u4EF6")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%9C%BA%E6%99%AF%E4%BA%8C%E7%BA%AF%E7%BD%91%E7%AB%99%E6%A0%B9%E7%9B%AE%E5%BD%95%E5%AD%98%E6%94%BE%E6%BA%90%E6%96%87%E4%BB%B6" }, "\u573A\u666F\u4E8C\uFF1A\u7EAF\u7F51\u7AD9\uFF0C\u6839\u76EE\u5F55\u5B58\u653E\u6E90\u6587\u4EF6")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%9C%BA%E6%99%AF%E4%B8%89%E9%A1%B9%E7%9B%AE--%E7%BD%91%E7%AB%99" }, "\u573A\u666F\u4E09\uFF1A\u9879\u76EE + \u7F51\u7AD9")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%9C%BA%E6%99%AF%E5%9B%9B%E4%BB%85%E5%B1%95%E7%A4%BA-readmemd" }, "\u573A\u666F\u56DB\uFF1A\u4EC5\u5C55\u793A README.md")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%8F%92%E4%BB%B6" }, "\u63D2\u4EF6")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%B8%BB%E9%A2%98" }, "\u4E3B\u9898")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%BD%91%E7%AB%99%E9%85%8D%E7%BD%AE" }, "\u7F51\u7AD9\u914D\u7F6E")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE" }, "\u5F00\u53D1\u73AF\u5883\u914D\u7F6E")))),
    'author': "muzi",
    'contributors': [
        "muzi"
    ],
    'date': "2020-07-12T00:00:00.000Z",
    'updated': null,
    'excerpt': "作为一名资深博客爱好者，我热衷于折腾各种博客系统，写过多个博客主题。 终于，写主题也无法得到满足，我开始写博客系统了。 或者说是更广义的，静态网站生成器。 如今 Pagic 已经完成了一个雏形，我也邀请了一些朋友试用，经...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "Pagic"
    ],
    'links': {
        "Pagic": "https://pagic.org",
        "GitHub": "https://github.com/xcatliu/pagic"
    },
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/600_stars_in_7_days.md",
                "title": "7 天 600 stars， Mobi.css 是如何诞生的",
                "link": "posts/600_stars_in_7_days.html",
                "date": "2022-09-05T00:00:00.000Z",
                "updated": "2021-07-02T03:27:45.000Z",
                "author": "muzi",
                "contributors": [
                    "muzi"
                ],
                "categories": [
                    "编程世界2"
                ],
                "tags": [
                    "Mobi.css",
                    "总结思考"
                ],
                "excerpt": "Mobi.css 是一个轻量、灵活的移动端 CSS 框架。发布一周以来，获得了 600+ stars，登上了 GitHub Trending Top1（CSS），在 Hacker News 上进入了前三。 这篇文章会先介绍一下创造 Mobi.css 的思路，再介绍一下我在推广 Mobi.c..."
            },
            {
                "pagePath": "posts/about_me.md",
                "title": "三分钟创建一个简单精致的 About Me 页面",
                "link": "posts/about_me.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/bootstrap_4_preview.md",
                "title": "Bootstrap 4 初探",
                "link": "posts/bootstrap_4_preview.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/debug_android_browser_in_chrome.md",
                "title": "在 Chrome 中调试 Android 浏览器",
                "link": "posts/debug_android_browser_in_chrome.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/full_color_screen.md",
                "title": "随手撸了个测试屏幕坏点的网页",
                "link": "posts/full_color_screen.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/happy-birthday-26.md",
                "title": "写给 26 岁的自己",
                "link": "posts/happy-birthday-26.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/hexo-theme-mobi-css.md",
                "title": "基于 Mobi.css 的官方 Hexo 主题",
                "link": "posts/hexo-theme-mobi-css.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/how-to-get-changelist-in-git-push-hook.md",
                "title": "How to Get Changelist in Git Push Hook",
                "link": "posts/how-to-get-changelist-in-git-push-hook.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/if_the_human_race_die_out.md",
                "title": "假如人类灭绝了，可以留给下一个文明有限的遗产，那么该留些什么呢？",
                "link": "posts/if_the_human_race_die_out.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
                ],
                "excerpt": "这种情况下，是否人文比科学更有价值？更能证明人类的存在？ 科学是客观存在的，在很长的时间跨度下，科技树总有一天会被再次点满，下个文明总有人会发明三角函数，微积分，肯定有人会发现牛顿力学（虽然下一个文明肯定不叫牛顿..."
            },
            {
                "pagePath": "posts/important_announcement_regarding_yui.md",
                "title": "关于 YUI 的重要公告",
                "link": "posts/important_announcement_regarding_yui.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/isarray.md",
                "title": "从 isArray 谈起",
                "link": "posts/isarray.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/learn_typescript.md",
                "title": "Learn TypeScript",
                "link": "posts/learn_typescript.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/my_first_book.md",
                "title": "我写的第一本书《TypeScript 入门教程》",
                "link": "posts/my_first_book.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/on_call.md",
                "title": "在微软 on call 的经历",
                "link": "posts/on_call.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/setup_linux_workspace_in_windows.md",
                "title": "在 Windows 中配置 Linux 工作环境",
                "link": "posts/setup_linux_workspace_in_windows.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/setup_linux_workspace_in_windows_using_hyper-v.md",
                "title": "在 Windows 中配置 Linux 工作环境（使用 Hyper-V）",
                "link": "posts/setup_linux_workspace_in_windows_using_hyper-v.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/test_coverage_for_github.md",
                "title": "GitHub 上的测试覆盖率",
                "link": "posts/test_coverage_for_github.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/the_way_to_become_a_senior_software_engineer.md",
                "title": "高级工程师之路",
                "link": "posts/the_way_to_become_a_senior_software_engineer.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/two_hexo_plugins.md",
                "title": "撸了两个 Hexo 的 Plugins",
                "link": "posts/two_hexo_plugins.html",
                "date": "2021-07-01T05:12:43.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/design_pagic_config_ts.md",
                "title": "设计 pagic.config.ts",
                "link": "posts/design_pagic_config_ts.html",
                "date": "2020-07-12T00:00:00.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "pagePath": "posts/mobi-css.md",
                "title": "「Mobi.css」轻量，灵活的移动端 css 框架",
                "link": "posts/mobi-css.html",
                "date": "2016-08-29T00:00:00.000Z",
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "updated": null,
                "author": "muzi",
                "contributors": [
                    "muzi"
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
                "count": 47
            },
            {
                "name": "多彩生活",
                "count": 7
            },
            {
                "name": "编程世界2",
                "count": 1
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
