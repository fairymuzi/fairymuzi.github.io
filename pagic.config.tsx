import { React } from 'https://deno.land/x/pagic@v1.0.0/mod.ts';

export default {
  srcDir: '.',
  exclude: ['examples'],
  theme: 'docs',
  plugins: ['sidebar', 'prev_next'],
  title: 'TypeScript 入门教程',
  description: '从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript。',
  head: <link rel="icon" type="image/png" href="/favicon.png" />,
  nav: [
    {
      text: 'inotia4',
      link: '/inotia4/introduction/index.html',
    },
    {
      text: 'inotia3',
      link: '/inotia3/introduction/index.html',
    },
    {
      text: '加入 QQ 群',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=96p53iNUoaEHtfk9_ljkp5e7H-EDpka3&jump_from=webapi',
      target: '_blank',
      popover: (
        <>
          <p style={{ marginTop: 0, marginBottom: '1rem', width: 256 }}>
            QQ群号:217030693
          </p>
          <img src="/assets/join-qq.png" width="256" />
        </>
      ),
    }, {
      text: '关于本站',
      link: '/about/index.html',
    },
  ],
  sidebar: {
    '/inotia4/': [
      {
        link: 'inotia4/introduction/README.md',
        children: [
          'inotia4/introduction/what-is-typescript.md',
          'inotia4/introduction/get-typescript.md',
          'inotia4/introduction/hello-typescript.md',
        ],
      },
    ],
    '/inotia3/': [
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
    backToTop: true,
  },
  port: 8001,
};
