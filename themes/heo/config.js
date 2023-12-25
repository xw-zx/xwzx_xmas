const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2023-03-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到xwzx的主页', url: 'https://blog.tangly1024.com' },
    { title: '不知道躺了做什么？', url: 'https://docs.tangly1024.com' },
    { title: '今天吃点啥？', url: 'https://docs.tangly1024.com' }
  ],

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '体验',
  HEO_HERO_TITLE_2: '依靠',
  HEO_HERO_TITLE_3: '舒服步调',
  HEO_HERO_TITLE_4: '最后的燃烧',
  HEO_HERO_TITLE_5: '咖啡调调和极限运动',
  HEO_HERO_TITLE_LINK: 'https://xwzx.ca',
  
  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '好次不胖饭饭', url: '/tag/饭饭' },
  HEO_HERO_CATEGORY_2: { title: '手机先吃', url: '/tag/Pictures' },
  HEO_HERO_CATEGORY_3: { title: 'Whats Done', url: '/tag/Done' },


  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片
  
  
  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '这是xwzx展示地',
    '🔍 好吃不胖的饭饭',
    '🤝 有趣的技能',
    '🏃 脚踏实地做过的小项目',
    '🏠 舒服的家具设计',
    '🤖️ 数码科技爱好者',
    '🧱 两个不同”社恐“人的奇怪组合'
  ],
  HEO_INFO_CARD_URL: 'https://blog.xwzx.ca', // 个人资料底部按钮链接

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'Ubereats',
      img_1: '/images/heo/ubereats_logo.png',
      color_1: '#989bf8',
      title_2: 'Fantuan',
      img_2: '/images/heo/fantuan_logo.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Youtube',
      img_1: '/images/heo/youtube_logo.png',
      color_1: '#57b6e6',
      title_2: 'Red',
      img_2: '/images/heo/red_logo.png',
      color_2: '#4082c3'
    },
    {
      title_1: 'GoogleMap',
      img_1: '/images/heo/googlemap_logo.png',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Amazon',
      img_1: '/images/heo/amazon_logo.png',
      color_1: '#df5b40',
      title_2: 'Ticketmaster',
      img_2: '/images/heo/ticketmaster_logo.png',
      color_2: '#1f1f1f'
    },
     {
      title_1: 'Discord',
      img_1: '/images/heo/discord_logo.png',
      color_1: '#df5b40',
      title_2: 'Ubereats',
      img_2: '/images/heo/ubereats_logo.png',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
