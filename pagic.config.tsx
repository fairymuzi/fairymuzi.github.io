export default {
  srcDir: 'src',
  theme: 'blog',
  plugins: ['blog'],
  outDir: 'docs',
  title: '艾诺迪亚文档',
  description: '本文档由艾诺迪亚新手交流群成员提供与整理',
  github: 'https://github.com/fairymuzi/doc_inotia',
  nav: [
    {
      text: '首页',
      link: '/',
      icon: 'czs-home-l'
    },
    {
      text: '分类',
      link: '/categories/',
      icon: 'czs-category-l'
    },
    {
      text: '标签',
      link: '/tags/',
      icon: 'czs-tag-l'
    },
    {
      text: '关于',
      link: '/about/',
      icon: 'czs-about-l'
    },
    {
      text: '归档',
      link: '/archives/',
      icon: 'czs-box-l'
    },
    {
      text: '友情链接',
      link: '/links/',
      icon: 'czs-link-l'
    }
  ],
  blog: {
    root: '/docs/',
    social: {
      github: 'fairymuzi/doc_inotia',
      email: '2249868082@qq.com',
    }
  }
};
