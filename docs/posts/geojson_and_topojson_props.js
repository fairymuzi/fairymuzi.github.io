import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/geojson_and_topojson.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/geojson_and_topojson.html",
    'title': "GeoJSON 和 TopoJSON",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>GeoJSON 和 TopoJSON</h1>\n<blockquote>\n<p>GeoJSON 是用来描述一系列几何形状的数据结构。它可以描述以下几种几何类型：Point、LineString、Polygon、MultiPoint、MultiLineString 和 MultiPolygon。</p>\n</blockquote>\n<blockquote>\n<p>TopoJSON 是 GeoJSON 的拓展，用来描述拓扑结构。通过提取图形中公用的点来减少冗余，一般可以把 GeoJSON 的大小压缩到原来的 20%。</p>\n</blockquote>\n<h2 id="geojson">GeoJSON<a class="anchor" href="#geojson">§</a></h2>\n<p>GeoJSON 使用 <code>type</code> 表示数据的类型。</p>\n<p>当 <code>type</code> 取值 <code>Point</code>、<code>LineString</code>、<code>Polygon</code>、<code>MultiPoint</code>、<code>MultiLineString</code>、<code>MultiPolygon</code> 或 <code>GeometryCollection</code> 时，用来表示几何图。</p>\n<p>当 <code>type</code> 取值 <code>Feature</code> 时，除了几何图外，还可以包含其他自定义信息。</p>\n<p>当 <code>type</code> 取值 <code>FeatureCollection</code> 时，可以包含多个 Feature Objects。</p>\n<p>GeoJSON 使用一维数组表示 <code>Point</code>，二维数组表示 <code>MultiPoint</code> 或 <code>LineString</code>（或 <code>LinearRing</code> 即环线），三维数组表示 <code>MultiLineString</code> 或 <code>Polygon</code>（包含洞的面），四维数组表示 <code>MultiPolygon</code>。</p>\n<p>具体的规则，请直接看 <a href="http://geojson.org/geojson-spec.html">GeoJSON 规范</a>（最好阅读完了再继续往下看）。</p>\n<h2 id="topojson">TopoJSON<a class="anchor" href="#topojson">§</a></h2>\n<p>TopoJSON 通过四种方式压缩了 GeoJSON 的大小。</p>\n<h3 id="topojson-%E7%9A%84%E5%8E%8B%E7%BC%A9%E7%AE%97%E6%B3%95">TopoJSON 的压缩算法<a class="anchor" href="#topojson-%E7%9A%84%E5%8E%8B%E7%BC%A9%E7%AE%97%E6%B3%95">§</a></h3>\n<ol>\n<li>把所有点提取到一个数组中，其他需要用到点的地方，都直接填入 index 即可。这样做的话，可以极大的减少数据的冗余，比如两个图形交界的地方只用存一份数据</li>\n<li>把浮点数转化为整型数，通过 transform 来转化</li>\n<li>点列表除了第一个点以外，其他的点都只存储相对位置</li>\n<li>通过 <code>topojson.simplify</code> 压缩（官方没有具体介绍）</li>\n</ol>\n<p>通过前三种方式，即可使得大小能被压缩到原本的 20%。</p>\n<h3 id="topojson-%E7%9A%84%E8%A7%84%E8%8C%83">TopoJSON 的规范<a class="anchor" href="#topojson-%E7%9A%84%E8%A7%84%E8%8C%83">§</a></h3>\n<p>具体的规范可以直接阅读 <a href="https://github.com/topojson/topojson-specification/blob/master/README.md">TopoJSON 规范</a>。</p>\n<h3 id="topojson-api">TopoJSON API<a class="anchor" href="#topojson-api">§</a></h3>\n<p>官方只给出了 JavaScript 版本（另外有人实现了 python 版本），下面做个简单介绍。</p>\n<h4 id="client-api">Client API<a class="anchor" href="#client-api">§</a></h4>\n<ul>\n<li><code>topojson.feature</code>：从一个 <code>TopoJSON</code> 中获取指定的 <code>Feature</code> 或 <code>FeatureCollection</code></li>\n<li><code>topojson.merge</code>：把指定的面融合成一个面</li>\n<li><code>topojson.mergeArcs</code>：和 <code>topojson.merge</code> 一样，不过返回一个 <code>TopoJSON MultiPolygon</code> 而不是 <code>GeoJSON</code></li>\n<li><code>topojson.mesh</code>：输入多个面，输出多条线，若两个面共用一条线，则只输出一次，用于防止边界被重复渲染</li>\n<li><code>topojson.meshArcs</code>：和 <code>topojson.mesh</code> 一样，不过返回一个 <code>TopoJSON MultiLineString</code> 而不是 <code>GeoJSON</code></li>\n<li><code>topojson.neighbors</code>：对每个面找到与其相邻的面，可以用于四色问题</li>\n<li><code>topojson.presimplify</code>：没有官方文档</li>\n</ul>\n<h4 id="server-api">Server API<a class="anchor" href="#server-api">§</a></h4>\n<ul>\n<li><code>topojson.topology</code>：把 <code>GeoJSON</code> 转换成 <code>TopoJSON</code></li>\n<li><code>topojson.simplify</code>：没有官方介绍</li>\n<li><code>topojson.prune</code>：去掉没有用上的点</li>\n<li><code>topojson.filter</code>：没有官方介绍</li>\n<li><code>topojson.bind</code>：没有官方介绍</li>\n</ul>\n<h4 id="command-line-tools">Command Line Tools<a class="anchor" href="#command-line-tools">§</a></h4>\n<ul>\n<li>可以把 GeoJSON、SHP 或 CSV 转化为 TopoJSON</li>\n</ul>\n<p>更多请阅读 <a href="https://github.com/mbostock/topojson/wiki/API-Reference">TopoJSON API Reference</a> 和 <a href="https://github.com/mbostock/topojson/wiki/Command-Line-Reference">Command Line Reference</a>。</p>\n<h2 id="links">Links<a class="anchor" href="#links">§</a></h2>\n<ul>\n<li><a href="http://geojson.org/geojson-spec.html">GeoJSON 规范</a></li>\n<li><a href="https://github.com/topojson/topojson-specification/blob/master/README.md">TopoJSON 规范</a></li>\n<li><a href="https://github.com/mbostock/topojson/wiki/API-Reference">TopoJSON API Reference</a></li>\n<li><a href="https://github.com/mbostock/topojson/wiki/Command-Line-Reference">Command Line Reference</a></li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "GeoJSON \u548C TopoJSON"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<blockquote>\n<p>GeoJSON 是用来描述一系列几何形状的数据结构。它可以描述以下几种几何类型：Point、LineString、Polygon、MultiPoint、MultiLineString 和 MultiPolygon。</p>\n</blockquote>\n<blockquote>\n<p>TopoJSON 是 GeoJSON 的拓展，用来描述拓扑结构。通过提取图形中公用的点来减少冗余，一般可以把 GeoJSON 的大小压缩到原来的 20%。</p>\n</blockquote>\n<h2 id="geojson">GeoJSON<a class="anchor" href="#geojson">§</a></h2>\n<p>GeoJSON 使用 <code>type</code> 表示数据的类型。</p>\n<p>当 <code>type</code> 取值 <code>Point</code>、<code>LineString</code>、<code>Polygon</code>、<code>MultiPoint</code>、<code>MultiLineString</code>、<code>MultiPolygon</code> 或 <code>GeometryCollection</code> 时，用来表示几何图。</p>\n<p>当 <code>type</code> 取值 <code>Feature</code> 时，除了几何图外，还可以包含其他自定义信息。</p>\n<p>当 <code>type</code> 取值 <code>FeatureCollection</code> 时，可以包含多个 Feature Objects。</p>\n<p>GeoJSON 使用一维数组表示 <code>Point</code>，二维数组表示 <code>MultiPoint</code> 或 <code>LineString</code>（或 <code>LinearRing</code> 即环线），三维数组表示 <code>MultiLineString</code> 或 <code>Polygon</code>（包含洞的面），四维数组表示 <code>MultiPolygon</code>。</p>\n<p>具体的规则，请直接看 <a href="http://geojson.org/geojson-spec.html">GeoJSON 规范</a>（最好阅读完了再继续往下看）。</p>\n<h2 id="topojson">TopoJSON<a class="anchor" href="#topojson">§</a></h2>\n<p>TopoJSON 通过四种方式压缩了 GeoJSON 的大小。</p>\n<h3 id="topojson-%E7%9A%84%E5%8E%8B%E7%BC%A9%E7%AE%97%E6%B3%95">TopoJSON 的压缩算法<a class="anchor" href="#topojson-%E7%9A%84%E5%8E%8B%E7%BC%A9%E7%AE%97%E6%B3%95">§</a></h3>\n<ol>\n<li>把所有点提取到一个数组中，其他需要用到点的地方，都直接填入 index 即可。这样做的话，可以极大的减少数据的冗余，比如两个图形交界的地方只用存一份数据</li>\n<li>把浮点数转化为整型数，通过 transform 来转化</li>\n<li>点列表除了第一个点以外，其他的点都只存储相对位置</li>\n<li>通过 <code>topojson.simplify</code> 压缩（官方没有具体介绍）</li>\n</ol>\n<p>通过前三种方式，即可使得大小能被压缩到原本的 20%。</p>\n<h3 id="topojson-%E7%9A%84%E8%A7%84%E8%8C%83">TopoJSON 的规范<a class="anchor" href="#topojson-%E7%9A%84%E8%A7%84%E8%8C%83">§</a></h3>\n<p>具体的规范可以直接阅读 <a href="https://github.com/topojson/topojson-specification/blob/master/README.md">TopoJSON 规范</a>。</p>\n<h3 id="topojson-api">TopoJSON API<a class="anchor" href="#topojson-api">§</a></h3>\n<p>官方只给出了 JavaScript 版本（另外有人实现了 python 版本），下面做个简单介绍。</p>\n<h4 id="client-api">Client API<a class="anchor" href="#client-api">§</a></h4>\n<ul>\n<li><code>topojson.feature</code>：从一个 <code>TopoJSON</code> 中获取指定的 <code>Feature</code> 或 <code>FeatureCollection</code></li>\n<li><code>topojson.merge</code>：把指定的面融合成一个面</li>\n<li><code>topojson.mergeArcs</code>：和 <code>topojson.merge</code> 一样，不过返回一个 <code>TopoJSON MultiPolygon</code> 而不是 <code>GeoJSON</code></li>\n<li><code>topojson.mesh</code>：输入多个面，输出多条线，若两个面共用一条线，则只输出一次，用于防止边界被重复渲染</li>\n<li><code>topojson.meshArcs</code>：和 <code>topojson.mesh</code> 一样，不过返回一个 <code>TopoJSON MultiLineString</code> 而不是 <code>GeoJSON</code></li>\n<li><code>topojson.neighbors</code>：对每个面找到与其相邻的面，可以用于四色问题</li>\n<li><code>topojson.presimplify</code>：没有官方文档</li>\n</ul>\n<h4 id="server-api">Server API<a class="anchor" href="#server-api">§</a></h4>\n<ul>\n<li><code>topojson.topology</code>：把 <code>GeoJSON</code> 转换成 <code>TopoJSON</code></li>\n<li><code>topojson.simplify</code>：没有官方介绍</li>\n<li><code>topojson.prune</code>：去掉没有用上的点</li>\n<li><code>topojson.filter</code>：没有官方介绍</li>\n<li><code>topojson.bind</code>：没有官方介绍</li>\n</ul>\n<h4 id="command-line-tools">Command Line Tools<a class="anchor" href="#command-line-tools">§</a></h4>\n<ul>\n<li>可以把 GeoJSON、SHP 或 CSV 转化为 TopoJSON</li>\n</ul>\n<p>更多请阅读 <a href="https://github.com/mbostock/topojson/wiki/API-Reference">TopoJSON API Reference</a> 和 <a href="https://github.com/mbostock/topojson/wiki/Command-Line-Reference">Command Line Reference</a>。</p>\n<h2 id="links">Links<a class="anchor" href="#links">§</a></h2>\n<ul>\n<li><a href="http://geojson.org/geojson-spec.html">GeoJSON 规范</a></li>\n<li><a href="https://github.com/topojson/topojson-specification/blob/master/README.md">TopoJSON 规范</a></li>\n<li><a href="https://github.com/mbostock/topojson/wiki/API-Reference">TopoJSON API Reference</a></li>\n<li><a href="https://github.com/mbostock/topojson/wiki/Command-Line-Reference">Command Line Reference</a></li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#geojson" }, "GeoJSON")),
            React.createElement("li", null,
                React.createElement("a", { href: "#topojson" }, "TopoJSON"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#topojson-%E7%9A%84%E5%8E%8B%E7%BC%A9%E7%AE%97%E6%B3%95" }, "TopoJSON \u7684\u538B\u7F29\u7B97\u6CD5")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#topojson-%E7%9A%84%E8%A7%84%E8%8C%83" }, "TopoJSON \u7684\u89C4\u8303")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#topojson-api" }, "TopoJSON API"),
                        React.createElement("ol", null)))),
            React.createElement("li", null,
                React.createElement("a", { href: "#links" }, "Links")))),
    'author': undefined,
    'contributors': [],
    'date': "2015-04-24T00:00:00.000Z",
    'updated': null,
    'excerpt': "GeoJSON GeoJSON 使用 type 表示数据的类型。 当 type 取值 Point、LineString、Polygon、MultiPoint、MultiLineString、MultiPolygon 或 GeometryCollection 时，用来表示几何图。 当 type 取值 Feature 时，除了几何图外，还...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "GeoJSON",
        "TopoJSON",
        "JSON"
    ],
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
