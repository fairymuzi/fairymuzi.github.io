import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "about/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "about/index.html",
    'title': "关于",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>关于</h1>\n<p>你好！很高兴认识你！</p>\n<p>本站所有文档均由艾诺迪亚4新手交流群成员收集与整理，如有重复，请联系我修改与指正。</p>\n<p>本群QQ：<a href="https://qm.qq.com/cgi-bin/qm/qr?k=0NyTbiXpfPYed6TZ0T-6H14egQG5zxbQ&amp;amp;amp;jump_from=webapi">217030693</a></p>\n<p><img src="/assets/join.png" alt=""></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5173\u4E8E"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>你好！很高兴认识你！</p>\n<p>本站所有文档均由艾诺迪亚4新手交流群成员收集与整理，如有重复，请联系我修改与指正。</p>\n<p>本群QQ：<a href="https://qm.qq.com/cgi-bin/qm/qr?k=0NyTbiXpfPYed6TZ0T-6H14egQG5zxbQ&amp;amp;amp;jump_from=webapi">217030693</a></p>\n<p><img src="/assets/join.png" alt=""></p>'
        } }),
    'toc': null,
    'author': undefined,
    'contributors': [],
    'date': "2021-07-02T06:13:03.800Z",
    'updated': null,
    'excerpt': "你好！很高兴认识你！ 本站所有文档均由艾诺迪亚4新手交流群成员收集与整理，如有重复，请联系我修改与指正。 本群QQ：217030693 ",
    'cover': "/assets/join.png",
    'typora-copy-images-to': "..\\assets",
    'typora-root-url': "..",
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
