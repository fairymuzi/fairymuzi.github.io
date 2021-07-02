import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/how-to-get-changelist-in-git-push-hook.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/how-to-get-changelist-in-git-push-hook.html",
    'title': "How to Get Changelist in Git Push Hook",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>How to Get Changelist in Git Push Hook</h1>\n<p>Git hooks is a useful tool to run scripts before or after events. We usually use it to check the format of commit message, lint our code, prevent pushing code to master branch, or run test scripts before pushing.</p>\n<p>Sometimes we need to get the changelist in pre-push hook. It may not be as easy as you think -- It\'s hard to know how many commits you have been submitted since you last checking out to the new branch.</p>\n<p>After some investigation, I\'ve found a way to get the diff file list between the current <code>HEAD</code> and <code>origin/master</code>:</p>\n<pre class="language-bash"><code class="language-bash"><span class="token comment"># Find the common ancestor of current hash and origin/master</span>\n<span class="token comment"># <a class="token url-link" href="https://stackoverflow.com/questions/1549146/find-common-ancestor-of-two-git-branches">https://stackoverflow.com/questions/1549146/find-common-ancestor-of-two-git-branches</a></span>\n<span class="token comment"># Command inside `` will be executed and pass to the variable</span>\n<span class="token assign-left variable">common_ancestor</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">git</span> merge-base HEAD origin/master<span class="token variable">`</span></span>\n<span class="token comment"># --diff-filter=ACMRT Only show files which is appended, copied, modified, renamed or type-changed</span>\n<span class="token assign-left variable">changelist</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">git</span> <span class="token function">diff</span> $common_ancestor HEAD --name-only --diff-filter<span class="token operator">=</span>ACMRT<span class="token variable">`</span></span>\n</code></pre>\n<p>Posted to <a href="https://gist.github.com/xcatliu/ddc2aec4e4cde0824429477f7ea233cd">gist</a></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "How to Get Changelist in Git Push Hook"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Git hooks is a useful tool to run scripts before or after events. We usually use it to check the format of commit message, lint our code, prevent pushing code to master branch, or run test scripts before pushing.</p>\n<p>Sometimes we need to get the changelist in pre-push hook. It may not be as easy as you think -- It\'s hard to know how many commits you have been submitted since you last checking out to the new branch.</p>\n<p>After some investigation, I\'ve found a way to get the diff file list between the current <code>HEAD</code> and <code>origin/master</code>:</p>\n<pre class="language-bash"><code class="language-bash"><span class="token comment"># Find the common ancestor of current hash and origin/master</span>\n<span class="token comment"># <a class="token url-link" href="https://stackoverflow.com/questions/1549146/find-common-ancestor-of-two-git-branches">https://stackoverflow.com/questions/1549146/find-common-ancestor-of-two-git-branches</a></span>\n<span class="token comment"># Command inside `` will be executed and pass to the variable</span>\n<span class="token assign-left variable">common_ancestor</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">git</span> merge-base HEAD origin/master<span class="token variable">`</span></span>\n<span class="token comment"># --diff-filter=ACMRT Only show files which is appended, copied, modified, renamed or type-changed</span>\n<span class="token assign-left variable">changelist</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">git</span> <span class="token function">diff</span> $common_ancestor HEAD --name-only --diff-filter<span class="token operator">=</span>ACMRT<span class="token variable">`</span></span>\n</code></pre>\n<p>Posted to <a href="https://gist.github.com/xcatliu/ddc2aec4e4cde0824429477f7ea233cd">gist</a></p>'
        } }),
    'toc': null,
    'author': undefined,
    'contributors': [],
    'date': "2021-07-02T06:13:03.800Z",
    'updated': null,
    'excerpt': "Git hooks is a useful tool to run scripts before or after events. We usually use it to check the format of commit message, lint our code, prevent pushing code to master branch, or run test scripts before pushin...",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "Git",
        "Git Hooks"
    ],
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
