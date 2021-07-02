import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/thinking_in_react.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/thinking_in_react.html",
    'title': "Thinking in React",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Thinking in React</h1>\n<iframe src="//www.slideshare.net/slideshow/embed_code/key/3pZSE2dB085cKD" width="620" height="504" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/XcatLiu/thinking-in-react" title="Thinking in React" target="_blank">Thinking in React</a> </strong> from <strong><a href="//www.slideshare.net/XcatLiu" target="_blank">Xcat Liu</a></strong> </div>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Thinking in React"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<iframe src="//www.slideshare.net/slideshow/embed_code/key/3pZSE2dB085cKD" width="620" height="504" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/XcatLiu/thinking-in-react" title="Thinking in React" target="_blank">Thinking in React</a> </strong> from <strong><a href="//www.slideshare.net/XcatLiu" target="_blank">Xcat Liu</a></strong> </div>'
        } }),
    'toc': null,
    'author': undefined,
    'contributors': [],
    'date': "2014-12-04T00:00:00.000Z",
    'updated': null,
    'excerpt': "Thinking in React from Xcat Liu",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "React",
        "分享"
    ],
    'links': {
        "Slide": "http://www.slideshare.net/XcatLiu/thinking-in-react"
    },
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
