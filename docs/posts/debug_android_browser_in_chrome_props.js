import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/debug_android_browser_in_chrome.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/debug_android_browser_in_chrome.html",
    'title': "在 Chrome 中调试 Android 浏览器",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>在 Chrome 中调试 Android 浏览器</h1>\n<p>最近需要使用 Chrome Developer Tools 调试 Android 浏览器，但是<a href="https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging">官方指南</a>并不是很好使，经过一番折腾，终于调试成功了，在此把经验分享给需要的朋友。</p>\n<p>Chrome Developer Tools 是前端工程师必不可少的工具，它极大的提高了我们的开发调试效率。在移动开发的时代，我们也必须掌握手机浏览器在 Chrome 中调试的方法。本篇仅介绍 Android。</p>\n<h2 id="%E7%8E%AF%E5%A2%83">环境<a class="anchor" href="#%E7%8E%AF%E5%A2%83">§</a></h2>\n<p>不同的环境可能存在一些差异，我的环境是：</p>\n<ul>\n<li>Windows 10</li>\n<li>电脑 Chrome 50.0.2661.75 m</li>\n<li>Galaxy Node 3</li>\n<li>Android 5.0</li>\n<li>手机 Chrome Dev 51.0.2704.10 （从豌豆荚下载的）</li>\n</ul>\n<h2 id="%E5%AE%89%E8%A3%85-usb-driver">安装 USB driver<a class="anchor" href="#%E5%AE%89%E8%A3%85-usb-driver">§</a></h2>\n<p>首先需要安装的是 USB 驱动，虽说现在大部分操作系统都可以自动安装识别手机的驱动，但是如果要用于连上电脑调试，还是得手动安装一个，我安装的是：<a href="http://developer.samsung.com/android/tools-sdks/Samsung-Andorid-USB-Driver-for-Windows">Samsung Andorid USB Driver for Windows</a></p>\n<p>其他设备也可以在这里找到对应的驱动：<a href="https://developer.android.com/tools/extras/oem-usb.html">OEM USB Drivers</a></p>\n<h2 id="%E5%90%AF%E5%8A%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E6%A8%A1%E5%BC%8F">启动手机上的开发者模式<a class="anchor" href="#%E5%90%AF%E5%8A%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E6%A8%A1%E5%BC%8F">§</a></h2>\n<p>进入设置，找到开发者模式即可。但是 Android 4.2 之后的机器，开发者模式都被隐藏了，需要在关于设备中找到 Build Number，中文对应的可能是「内部版本号」，找到之后狂点它，过一会儿就会提示是否开启开发者模式了。</p>\n<p><img src="../assets/debug_android_browser_in_chrome/android_build_number.png" alt="Android Build Number"></p>\n<h2 id="%E8%BF%9E%E6%8E%A5%E6%89%8B%E6%9C%BA%E5%92%8C%E7%94%B5%E8%84%91">连接手机和电脑<a class="anchor" href="#%E8%BF%9E%E6%8E%A5%E6%89%8B%E6%9C%BA%E5%92%8C%E7%94%B5%E8%84%91">§</a></h2>\n<p>连接之后，如果手机弹框询问是否允许 Debug，点击允许之后，可以跳过以下安装 ADB Server 的步骤，直接进入最后一步。</p>\n<p>如果手机上没有弹框，八成是没有启动 ADB Server，请接着往下看。</p>\n<h2 id="%E5%AE%89%E8%A3%85-adb-server">安装 ADB Server<a class="anchor" href="#%E5%AE%89%E8%A3%85-adb-server">§</a></h2>\n<p>ADB 是 Android Debug Bridge 的简称，是 Android SDK Platform-tools 中的一个工具。根据这个 <a href="http://stackoverflow.com/questions/21925992/chrome-devtools-devices-does-not-detect-device-when-plugged-in">Stackoverflow 上的指南</a>，可以只用安装 single ADB package。但是我遇到一些问题，于是我把整个 Android Studio 安装了，说不定以后要开发 Android 应用呢。</p>\n<h2 id="%E5%90%AF%E5%8A%A8-adb-server">启动 ADB Server<a class="anchor" href="#%E5%90%AF%E5%8A%A8-adb-server">§</a></h2>\n<p>我是直接安装的 Android Studio，于是根据这个 <a href="http://stackoverflow.com/questions/30812493/adb-exe-not-found-after-installing-android-studio">Stackoverflow 上的解答</a>，找到了 adb 的地址：<code>C:\Users\&lt;insert username here&gt;\AppData\Local\Android\sdk\platform-tools\adb.exe</code></p>\n<p>在 cmd 中运行</p>\n<pre class="language-shell"><code class="language-shell"><span class="token builtin class-name">cd</span> C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span><span class="token operator">&lt;</span>insert username here<span class="token operator">></span><span class="token punctuation">\</span>AppData<span class="token punctuation">\</span>Local<span class="token punctuation">\</span>Android<span class="token punctuation">\</span>sdk<span class="token punctuation">\</span>platform-tools\nadb start-server\n</code></pre>\n<p>即可。</p>\n<p>Tips：重启电脑之后，如果还需要调试，得重新执行一遍 <code>adb start-server</code>。</p>\n<h2 id="%E5%9C%A8-chrome-%E4%B8%AD%E8%B0%83%E8%AF%95">在 Chrome 中调试<a class="anchor" href="#%E5%9C%A8-chrome-%E4%B8%AD%E8%B0%83%E8%AF%95">§</a></h2>\n<p>打开电脑中的 Chrome，浏览器中输入 <code>chrome://inspect</code>，进入后勾选 Discover USB devices，就可以看到手机的 Chrome 上打开的页面了。</p>\n<p>点击 inspect，会在新窗口打开一个 Chrome Developer Tools 的页面，即可以调试了。</p>\n<p>Tips：手机上的原生浏览器也支持在 Chrome 中调试，但是看不到预览图。</p>\n<p>Tips：电脑上打开的 Chrome Developer Tools 的页面，是根据手机上的 Chrome 版本生成的，所以可能和电脑上的页面有点不同。</p>\n<p>这里我遇到一个问题，手机中如果安装的是 Chrome，则在电脑中一点 inspect 就会闪退。后来在手机中安装了 Chrome Dev 就好了。不清楚是哪儿的问题。</p>\n<p>最后来一个成功的截图吧！</p>\n<p><img src="../assets/debug_android_browser_in_chrome/chrome_inspect_android_browser.png" alt="Chrome Inspect Android Browser"></p>\n<h2 id="links">Links<a class="anchor" href="#links">§</a></h2>\n<ul>\n<li><a href="http://stackoverflow.com/questions/21925992/chrome-devtools-devices-does-not-detect-device-when-plugged-in">Stackoverflow 上的指南</a></li>\n<li><a href="https://developer.chrome.com/devtools/docs/remote-debugging">官方指南（旧）</a></li>\n<li><a href="https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging">官方指南（新）</a></li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5728 Chrome \u4E2D\u8C03\u8BD5 Android \u6D4F\u89C8\u5668"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>最近需要使用 Chrome Developer Tools 调试 Android 浏览器，但是<a href="https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging">官方指南</a>并不是很好使，经过一番折腾，终于调试成功了，在此把经验分享给需要的朋友。</p>\n<p>Chrome Developer Tools 是前端工程师必不可少的工具，它极大的提高了我们的开发调试效率。在移动开发的时代，我们也必须掌握手机浏览器在 Chrome 中调试的方法。本篇仅介绍 Android。</p>\n<h2 id="%E7%8E%AF%E5%A2%83">环境<a class="anchor" href="#%E7%8E%AF%E5%A2%83">§</a></h2>\n<p>不同的环境可能存在一些差异，我的环境是：</p>\n<ul>\n<li>Windows 10</li>\n<li>电脑 Chrome 50.0.2661.75 m</li>\n<li>Galaxy Node 3</li>\n<li>Android 5.0</li>\n<li>手机 Chrome Dev 51.0.2704.10 （从豌豆荚下载的）</li>\n</ul>\n<h2 id="%E5%AE%89%E8%A3%85-usb-driver">安装 USB driver<a class="anchor" href="#%E5%AE%89%E8%A3%85-usb-driver">§</a></h2>\n<p>首先需要安装的是 USB 驱动，虽说现在大部分操作系统都可以自动安装识别手机的驱动，但是如果要用于连上电脑调试，还是得手动安装一个，我安装的是：<a href="http://developer.samsung.com/android/tools-sdks/Samsung-Andorid-USB-Driver-for-Windows">Samsung Andorid USB Driver for Windows</a></p>\n<p>其他设备也可以在这里找到对应的驱动：<a href="https://developer.android.com/tools/extras/oem-usb.html">OEM USB Drivers</a></p>\n<h2 id="%E5%90%AF%E5%8A%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E6%A8%A1%E5%BC%8F">启动手机上的开发者模式<a class="anchor" href="#%E5%90%AF%E5%8A%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E6%A8%A1%E5%BC%8F">§</a></h2>\n<p>进入设置，找到开发者模式即可。但是 Android 4.2 之后的机器，开发者模式都被隐藏了，需要在关于设备中找到 Build Number，中文对应的可能是「内部版本号」，找到之后狂点它，过一会儿就会提示是否开启开发者模式了。</p>\n<p><img src="../assets/debug_android_browser_in_chrome/android_build_number.png" alt="Android Build Number"></p>\n<h2 id="%E8%BF%9E%E6%8E%A5%E6%89%8B%E6%9C%BA%E5%92%8C%E7%94%B5%E8%84%91">连接手机和电脑<a class="anchor" href="#%E8%BF%9E%E6%8E%A5%E6%89%8B%E6%9C%BA%E5%92%8C%E7%94%B5%E8%84%91">§</a></h2>\n<p>连接之后，如果手机弹框询问是否允许 Debug，点击允许之后，可以跳过以下安装 ADB Server 的步骤，直接进入最后一步。</p>\n<p>如果手机上没有弹框，八成是没有启动 ADB Server，请接着往下看。</p>\n<h2 id="%E5%AE%89%E8%A3%85-adb-server">安装 ADB Server<a class="anchor" href="#%E5%AE%89%E8%A3%85-adb-server">§</a></h2>\n<p>ADB 是 Android Debug Bridge 的简称，是 Android SDK Platform-tools 中的一个工具。根据这个 <a href="http://stackoverflow.com/questions/21925992/chrome-devtools-devices-does-not-detect-device-when-plugged-in">Stackoverflow 上的指南</a>，可以只用安装 single ADB package。但是我遇到一些问题，于是我把整个 Android Studio 安装了，说不定以后要开发 Android 应用呢。</p>\n<h2 id="%E5%90%AF%E5%8A%A8-adb-server">启动 ADB Server<a class="anchor" href="#%E5%90%AF%E5%8A%A8-adb-server">§</a></h2>\n<p>我是直接安装的 Android Studio，于是根据这个 <a href="http://stackoverflow.com/questions/30812493/adb-exe-not-found-after-installing-android-studio">Stackoverflow 上的解答</a>，找到了 adb 的地址：<code>C:\Users\&lt;insert username here&gt;\AppData\Local\Android\sdk\platform-tools\adb.exe</code></p>\n<p>在 cmd 中运行</p>\n<pre class="language-shell"><code class="language-shell"><span class="token builtin class-name">cd</span> C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span><span class="token operator">&lt;</span>insert username here<span class="token operator">></span><span class="token punctuation">\</span>AppData<span class="token punctuation">\</span>Local<span class="token punctuation">\</span>Android<span class="token punctuation">\</span>sdk<span class="token punctuation">\</span>platform-tools\nadb start-server\n</code></pre>\n<p>即可。</p>\n<p>Tips：重启电脑之后，如果还需要调试，得重新执行一遍 <code>adb start-server</code>。</p>\n<h2 id="%E5%9C%A8-chrome-%E4%B8%AD%E8%B0%83%E8%AF%95">在 Chrome 中调试<a class="anchor" href="#%E5%9C%A8-chrome-%E4%B8%AD%E8%B0%83%E8%AF%95">§</a></h2>\n<p>打开电脑中的 Chrome，浏览器中输入 <code>chrome://inspect</code>，进入后勾选 Discover USB devices，就可以看到手机的 Chrome 上打开的页面了。</p>\n<p>点击 inspect，会在新窗口打开一个 Chrome Developer Tools 的页面，即可以调试了。</p>\n<p>Tips：手机上的原生浏览器也支持在 Chrome 中调试，但是看不到预览图。</p>\n<p>Tips：电脑上打开的 Chrome Developer Tools 的页面，是根据手机上的 Chrome 版本生成的，所以可能和电脑上的页面有点不同。</p>\n<p>这里我遇到一个问题，手机中如果安装的是 Chrome，则在电脑中一点 inspect 就会闪退。后来在手机中安装了 Chrome Dev 就好了。不清楚是哪儿的问题。</p>\n<p>最后来一个成功的截图吧！</p>\n<p><img src="../assets/debug_android_browser_in_chrome/chrome_inspect_android_browser.png" alt="Chrome Inspect Android Browser"></p>\n<h2 id="links">Links<a class="anchor" href="#links">§</a></h2>\n<ul>\n<li><a href="http://stackoverflow.com/questions/21925992/chrome-devtools-devices-does-not-detect-device-when-plugged-in">Stackoverflow 上的指南</a></li>\n<li><a href="https://developer.chrome.com/devtools/docs/remote-debugging">官方指南（旧）</a></li>\n<li><a href="https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging">官方指南（新）</a></li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%8E%AF%E5%A2%83" }, "\u73AF\u5883")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%AE%89%E8%A3%85-usb-driver" }, "\u5B89\u88C5 USB driver")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%90%AF%E5%8A%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E6%A8%A1%E5%BC%8F" }, "\u542F\u52A8\u624B\u673A\u4E0A\u7684\u5F00\u53D1\u8005\u6A21\u5F0F")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%BF%9E%E6%8E%A5%E6%89%8B%E6%9C%BA%E5%92%8C%E7%94%B5%E8%84%91" }, "\u8FDE\u63A5\u624B\u673A\u548C\u7535\u8111")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%AE%89%E8%A3%85-adb-server" }, "\u5B89\u88C5 ADB Server")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%90%AF%E5%8A%A8-adb-server" }, "\u542F\u52A8 ADB Server")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%9C%A8-chrome-%E4%B8%AD%E8%B0%83%E8%AF%95" }, "\u5728 Chrome \u4E2D\u8C03\u8BD5")),
            React.createElement("li", null,
                React.createElement("a", { href: "#links" }, "Links")))),
    'author': undefined,
    'contributors': [],
    'date': "2021-07-02T06:13:03.800Z",
    'updated': null,
    'excerpt': "最近需要使用 Chrome Developer Tools 调试 Android 浏览器，但是官方指南并不是很好使，经过一番折腾，终于调试成功了，在此把经验分享给需要的朋友。 Chrome Developer Tools 是前端工程师必不可少的工具，它极大的提高了我们...",
    'cover': "../assets/debug_android_browser_in_chrome/android_build_number.png",
    'categories': [
        "编程世界"
    ],
    'tags': [
        "Debug",
        "Android"
    ],
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
