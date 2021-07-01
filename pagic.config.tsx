import { React } from 'https://deno.land/x/pagic@v1.0.0/mod.ts';

export default {
  srcDir: '.',
  exclude: ['examples'],
  theme: 'docs',
  plugins: ['sidebar', 'prev_next'],
  title: '艾诺迪亚文档',
  description: '艾诺迪亚新手交流群文档',
  head: <link rel="icon" type="image/png" href="/favicon.png" />,
  nav: [
    {
      text: '艾诺迪亚4',
      link: 'inotia4/introduction.html',
    },
    {
      text: '艾诺迪亚3',
      link: 'inotia3/introduction.html',
    },
    {
      text: '加入 QQ 群',
      link: 'https://jq.qq.com/?_wv=1027&k=5nkkFCl',
      target: '_blank',
      popover: (
        <>
          <p style={{ marginTop: 0, marginBottom: '1rem', width: 256 }}>
            一群（767142358）已满，请扫码加二群（706191218）
          </p>
          <img src="/assets/join-qq.jpg" width="256" />
        </>
      ),
    },
    {
      text: '本网站使用 Pagic 构建',
      link: 'https://github.com/xcatliu/pagic',
      target: '_blank',
    },
  ],
  sidebar: {
    '/inotia4': [
      {
        link: 'inotia4/introduction/README.md',
        children: [
          'inotia4/introduction/what-is-typescript.md',
          'inotia4/introduction/get-typescript.md',
          'inotia4/introduction/hello-typescript.md',
        ],
      },
      {
        link: 'inotia4/basics/README.md',
        children: [
          'inotia4/basics/primitive-data-types.md',
          'inotia4/basics/any.md',
          'inotia4/basics/type-inference.md',
          'inotia4/basics/union-types.md',
          'inotia4/basics/type-of-object-interfaces.md',
          'inotia4/basics/type-of-array.md',
          'inotia4/basics/type-of-function.md',
          'inotia4/basics/type-assertion.md',
          'inotia4/basics/declaration-files.md',
          'inotia4/basics/built-in-objects.md',
        ],
      },
      {
        link: 'inotia4/advanced/README.md',
        children: [
          'inotia4/advanced/type-aliases.md',
          'inotia4/advanced/string-literal-types.md',
          'inotia4/advanced/tuple.md',
          'inotia4/advanced/enum.md',
          'inotia4/advanced/class.md',
          'inotia4/advanced/class-and-interfaces.md',
          'inotia4/advanced/generics.md',
          'inotia4/advanced/declaration-merging.md',
          'inotia4/advanced/further-reading.md',
        ],
      },
      {
        link: 'inotia4/engineering/README.md',
        children: ['inotia4/engineering/lint.md', 'inotia4/engineering/compiler-options.md'],
      },
      'inotia4/thanks/README.md',
    ],
    '/inotia3': [
      {
        link: 'inotia3/introduction/README.md',
        children: [
          'inotia3/introduction/what-is-typescript.md',
          'inotia3/introduction/get-typescript.md',
          'inotia3/introduction/hello-typescript.md',
        ],
      },
      {
        link: 'inotia3/basics/README.md',
        children: [
          'inotia3/basics/primitive-data-types.md',
          'inotia3/basics/any.md',
          'inotia3/basics/type-inference.md',
          'inotia3/basics/union-types.md',
          'inotia3/basics/type-of-object-interfaces.md',
          'inotia3/basics/type-of-array.md',
          'inotia3/basics/type-of-function.md',
          'inotia3/basics/type-assertion.md',
          'inotia3/basics/declaration-files.md',
          'inotia3/basics/built-in-objects.md',
        ],
      },
      {
        link: 'inotia3/advanced/README.md',
        children: [
          'inotia3/advanced/type-aliases.md',
          'inotia3/advanced/string-literal-types.md',
          'inotia3/advanced/tuple.md',
          'inotia3/advanced/enum.md',
          'inotia3/advanced/class.md',
          'inotia3/advanced/class-and-interfaces.md',
          'inotia3/advanced/generics.md',
          'inotia3/advanced/declaration-merging.md',
          'inotia3/advanced/further-reading.md',
        ],
      },
      {
        link: 'inotia3/engineering/README.md',
        children: ['inotia3/engineering/lint.md', 'inotia3/engineering/compiler-options.md'],
      },
      'inotia3/thanks/README.md',
    ],
  },
  tools: {
    editOnGitHub: false,
    backToTop: true,
  },
  //   tocAd: (
  //     <div
  //       dangerouslySetInnerHTML={{
  //         __html: `
  // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  // <!-- 192*128 -->
  // <ins
  //   class="adsbygoogle"
  //   style="display:inline-block;width:192px;height:128px"
  //   data-ad-client="ca-pub-8483371329009107"
  //   data-ad-slot="6487368873"
  // ></ins>
  // <script>
  //   (adsbygoogle = window.adsbygoogle || []).push({});
  // </script>`
  //       }}
  //     />
  //   ),
  port: 8000,
};
