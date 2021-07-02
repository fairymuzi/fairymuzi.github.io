import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/types_of_tests.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/types_of_tests.html",
    'title': "测试的分类",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>测试的分类</h1>\n<p>一直以来，我都听到过各式各样的测试——单元测试、黑盒测试、压力测试等等，但是很难对所有的测试方式有一个总体的认知。</p>\n<p>在经过大量的谷歌之后，我终于把各种种类的测试弄清白了，下面针对每一种测试做一个简单的一句话介绍，更详细的介绍可以自行搜索。</p>\n<h2 id="%E6%8C%89%E6%B5%8B%E8%AF%95%E9%98%B6%E6%AE%B5%E5%88%86%E7%B1%BB">按测试阶段分类<a class="anchor" href="#%E6%8C%89%E6%B5%8B%E8%AF%95%E9%98%B6%E6%AE%B5%E5%88%86%E7%B1%BB">§</a></h2>\n<ul>\n<li>单元测试：针对单个函数、类进行测试</li>\n<li>集成测试：将各单元组合之后进行测试，用来验证各个组件之间能否互相配合，正常工作</li>\n<li>系统测试：针对整个系统进行全面的测试，涵盖功能和非功能（兼容性、性能等）方面\n<ul>\n<li>端到端测试：与系统测试类似，模仿完全真实的用户环境，如网络通信、数据库交互等，也会验证其他关联系统。通常会手动测试，很难自动化</li>\n</ul>\n</li>\n<li>验收测试：验证交付的产品是否符合预期的各项要求，测试内容通常是系统测试的子集\n<ul>\n<li>alpha 测试：验收测试的一种，由内部用户在测试环境进行测试</li>\n<li>beta 测试：验收测试的一种，由外部用户在正式环境下进行测试</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E6%98%AF%E5%90%A6%E6%9F%A5%E7%9C%8B%E6%BA%90%E4%BB%A3%E7%A0%81">是否查看源代码<a class="anchor" href="#%E6%98%AF%E5%90%A6%E6%9F%A5%E7%9C%8B%E6%BA%90%E4%BB%A3%E7%A0%81">§</a></h2>\n<ul>\n<li>黑盒测试：不关心内部细节，只要输入和输出符合要求即可</li>\n<li>白盒测试：验证代码中的每条语句，每个分支都能正确运行\n<ul>\n<li>分支测试：白盒测试的一种，在单元测试期间进行，通过遍历每个分支进行彻底的测试</li>\n</ul>\n</li>\n<li>灰盒测试：既考虑产品设计要求，又考虑代码的实现细节</li>\n</ul>\n<h2 id="%E6%98%AF%E5%90%A6%E8%BF%90%E8%A1%8C%E7%A8%8B%E5%BA%8F">是否运行程序<a class="anchor" href="#%E6%98%AF%E5%90%A6%E8%BF%90%E8%A1%8C%E7%A8%8B%E5%BA%8F">§</a></h2>\n<ul>\n<li>静态测试：不运行程序，仅通过语法分析来检查程序的正确性。代表：ESLint</li>\n<li>动态测试：通过运行程序，检查运行结果与预期结果的差异</li>\n</ul>\n<h2 id="%E6%98%AF%E5%90%A6%E9%AA%8C%E8%AF%81%E4%BA%A7%E5%93%81%E5%8A%9F%E8%83%BD">是否验证产品功能<a class="anchor" href="#%E6%98%AF%E5%90%A6%E9%AA%8C%E8%AF%81%E4%BA%A7%E5%93%81%E5%8A%9F%E8%83%BD">§</a></h2>\n<ul>\n<li>功能测试：验证产品功能是否符合预期</li>\n<li>非功能测试：可用性、兼容性、性能、负载、压力、可伸缩性、安全性等\n<ul>\n<li>可用性测试：验证新用户是否可以轻松理解如何使用产品</li>\n<li>可访问性测试：残疾人能否正常使用产品</li>\n<li>兼容性测试：验证在不同版本的终端上是否能正确运行</li>\n<li>边界值测试：检查输入为边界值时程序能否正确运行</li>\n<li>负载测试：考察当前软硬件环境下系统所能承受的最大负荷</li>\n<li>压力测试：在一定的负载下系统长时间运行的稳定性</li>\n<li>性能测试：检查系统是否满足性能要求</li>\n<li>体积测试：当遇到大量数据时是否会影响系统性能</li>\n<li>安全测试：检查系统是否存在安全漏洞</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%85%B6%E4%BB%96">其他<a class="anchor" href="#%E5%85%B6%E4%BB%96">§</a></h2>\n<ul>\n<li>猴子测试：无需理解程序，由随机的输入进行测试</li>\n<li>突变测试：修改一小段源代码，验证现有测试用例能否识别此缺陷</li>\n<li>恢复测试：验证系统能否从灾难（断电、断网等）中恢复</li>\n<li>冒烟测试：对一个新版本进行系统大规模的测试之前，先验证一下软件的基本功能是否实现，是否具备可测性</li>\n<li>回归测试：验证代码更改是否不会影响产品的现有功能</li>\n</ul>\n<p>还有很多种测试，由于比较偏门所以我没有列出来。</p>\n<p>我参考了大量<a href="https://www.softwaretestinghelp.com/types-of-software-testing/">这个网站</a>的内容，感兴趣的可以看看。</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6D4B\u8BD5\u7684\u5206\u7C7B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>一直以来，我都听到过各式各样的测试——单元测试、黑盒测试、压力测试等等，但是很难对所有的测试方式有一个总体的认知。</p>\n<p>在经过大量的谷歌之后，我终于把各种种类的测试弄清白了，下面针对每一种测试做一个简单的一句话介绍，更详细的介绍可以自行搜索。</p>\n<h2 id="%E6%8C%89%E6%B5%8B%E8%AF%95%E9%98%B6%E6%AE%B5%E5%88%86%E7%B1%BB">按测试阶段分类<a class="anchor" href="#%E6%8C%89%E6%B5%8B%E8%AF%95%E9%98%B6%E6%AE%B5%E5%88%86%E7%B1%BB">§</a></h2>\n<ul>\n<li>单元测试：针对单个函数、类进行测试</li>\n<li>集成测试：将各单元组合之后进行测试，用来验证各个组件之间能否互相配合，正常工作</li>\n<li>系统测试：针对整个系统进行全面的测试，涵盖功能和非功能（兼容性、性能等）方面\n<ul>\n<li>端到端测试：与系统测试类似，模仿完全真实的用户环境，如网络通信、数据库交互等，也会验证其他关联系统。通常会手动测试，很难自动化</li>\n</ul>\n</li>\n<li>验收测试：验证交付的产品是否符合预期的各项要求，测试内容通常是系统测试的子集\n<ul>\n<li>alpha 测试：验收测试的一种，由内部用户在测试环境进行测试</li>\n<li>beta 测试：验收测试的一种，由外部用户在正式环境下进行测试</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E6%98%AF%E5%90%A6%E6%9F%A5%E7%9C%8B%E6%BA%90%E4%BB%A3%E7%A0%81">是否查看源代码<a class="anchor" href="#%E6%98%AF%E5%90%A6%E6%9F%A5%E7%9C%8B%E6%BA%90%E4%BB%A3%E7%A0%81">§</a></h2>\n<ul>\n<li>黑盒测试：不关心内部细节，只要输入和输出符合要求即可</li>\n<li>白盒测试：验证代码中的每条语句，每个分支都能正确运行\n<ul>\n<li>分支测试：白盒测试的一种，在单元测试期间进行，通过遍历每个分支进行彻底的测试</li>\n</ul>\n</li>\n<li>灰盒测试：既考虑产品设计要求，又考虑代码的实现细节</li>\n</ul>\n<h2 id="%E6%98%AF%E5%90%A6%E8%BF%90%E8%A1%8C%E7%A8%8B%E5%BA%8F">是否运行程序<a class="anchor" href="#%E6%98%AF%E5%90%A6%E8%BF%90%E8%A1%8C%E7%A8%8B%E5%BA%8F">§</a></h2>\n<ul>\n<li>静态测试：不运行程序，仅通过语法分析来检查程序的正确性。代表：ESLint</li>\n<li>动态测试：通过运行程序，检查运行结果与预期结果的差异</li>\n</ul>\n<h2 id="%E6%98%AF%E5%90%A6%E9%AA%8C%E8%AF%81%E4%BA%A7%E5%93%81%E5%8A%9F%E8%83%BD">是否验证产品功能<a class="anchor" href="#%E6%98%AF%E5%90%A6%E9%AA%8C%E8%AF%81%E4%BA%A7%E5%93%81%E5%8A%9F%E8%83%BD">§</a></h2>\n<ul>\n<li>功能测试：验证产品功能是否符合预期</li>\n<li>非功能测试：可用性、兼容性、性能、负载、压力、可伸缩性、安全性等\n<ul>\n<li>可用性测试：验证新用户是否可以轻松理解如何使用产品</li>\n<li>可访问性测试：残疾人能否正常使用产品</li>\n<li>兼容性测试：验证在不同版本的终端上是否能正确运行</li>\n<li>边界值测试：检查输入为边界值时程序能否正确运行</li>\n<li>负载测试：考察当前软硬件环境下系统所能承受的最大负荷</li>\n<li>压力测试：在一定的负载下系统长时间运行的稳定性</li>\n<li>性能测试：检查系统是否满足性能要求</li>\n<li>体积测试：当遇到大量数据时是否会影响系统性能</li>\n<li>安全测试：检查系统是否存在安全漏洞</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%85%B6%E4%BB%96">其他<a class="anchor" href="#%E5%85%B6%E4%BB%96">§</a></h2>\n<ul>\n<li>猴子测试：无需理解程序，由随机的输入进行测试</li>\n<li>突变测试：修改一小段源代码，验证现有测试用例能否识别此缺陷</li>\n<li>恢复测试：验证系统能否从灾难（断电、断网等）中恢复</li>\n<li>冒烟测试：对一个新版本进行系统大规模的测试之前，先验证一下软件的基本功能是否实现，是否具备可测性</li>\n<li>回归测试：验证代码更改是否不会影响产品的现有功能</li>\n</ul>\n<p>还有很多种测试，由于比较偏门所以我没有列出来。</p>\n<p>我参考了大量<a href="https://www.softwaretestinghelp.com/types-of-software-testing/">这个网站</a>的内容，感兴趣的可以看看。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%8C%89%E6%B5%8B%E8%AF%95%E9%98%B6%E6%AE%B5%E5%88%86%E7%B1%BB" }, "\u6309\u6D4B\u8BD5\u9636\u6BB5\u5206\u7C7B")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%98%AF%E5%90%A6%E6%9F%A5%E7%9C%8B%E6%BA%90%E4%BB%A3%E7%A0%81" }, "\u662F\u5426\u67E5\u770B\u6E90\u4EE3\u7801")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%98%AF%E5%90%A6%E8%BF%90%E8%A1%8C%E7%A8%8B%E5%BA%8F" }, "\u662F\u5426\u8FD0\u884C\u7A0B\u5E8F")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%98%AF%E5%90%A6%E9%AA%8C%E8%AF%81%E4%BA%A7%E5%93%81%E5%8A%9F%E8%83%BD" }, "\u662F\u5426\u9A8C\u8BC1\u4EA7\u54C1\u529F\u80FD")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%85%B6%E4%BB%96" }, "\u5176\u4ED6")))),
    'author': undefined,
    'contributors': [],
    'date': "2019-03-11T00:00:00.000Z",
    'updated': null,
    'excerpt': "一直以来，我都听到过各式各样的测试——单元测试、黑盒测试、压力测试等等，但是很难对所有的测试方式有一个总体的认知。 在经过大量的谷歌之后，我终于把各种种类的测试弄清白了，下面针对每一种测试做一个简单的一句话介绍，...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "测试"
    ],
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
