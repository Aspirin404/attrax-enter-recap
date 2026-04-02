// ============================================================
//  CONTENT.JS — 所有可编辑内容都在这里
//  改文案、改链接、改数据 → 只需修改这个文件
//  注意：不要在字符串里写 HTML 标签
//        高亮词用 [[词]] 包裹，main.js 会自动转成紫色
// ============================================================

export const site = {

  // ── 顶部导航 ──────────────────────────────────────────────
  nav: {
    logo:   'AttraX × Enter',
    meta:   'Event Recap · April 1, 2026 · Tsinghua University, Beijing',
    ctaText:'enter.pro',
    ctaLink:'https://enter.pro',
  },

  // ── Hero 区块 ─────────────────────────────────────────────
  hero: {
    tag:       '✦ Event Recap',
    titleLine1: 'We Brought [[Vibe Coding]] to Tsinghua.',
    titleLine2: 'The Room Went Wild.',
    subtitle:  'A hands-on AI workshop that turned 79 students from 30+ countries into builders — in a single afternoon.',
    tags: [
      { icon: '📍', bold: 'Tsinghua University', rest: '· School of Economics & Management' },
      { icon: '📅', bold: 'April 1, 2026',        rest: '· Beijing' },
      { icon: '👥', bold: '79 participants',       rest: 'from 30+ countries' },
    ],
    photos: [
      { file: '/assets/img_00.jpg', alt: 'Workshop session' },
      { file: '/assets/img_01.jpg', alt: 'Participants building' },
      { file: '/assets/img_02.jpg', alt: 'Group activity' },
    ],
  },

  // ── 数据统计 ──────────────────────────────────────────────
  stats: [
    { number: '79',  suffix: '',  label: 'Participants' },
    { number: '20',  suffix: '+', label: 'Countries' },
    { number: '12',  suffix: '',  label: 'Projects Built' },
    { number: '1',   suffix: '',  label: 'Afternoon' },
  ],

  // ── 活动概述 ──────────────────────────────────────────────
  overview: {
    tag:   '🗓 What Happened',
    title: 'One Afternoon. Real [[Products.]]',
    sub:   "AttraX and Enter brought vibe coding to one of China's top universities.",
    body: [
      'The workshop challenged students to go from zero to deployed product — using AI as their co-founder, designer, and developer. No prior coding experience required.',
      'The result? Twelve working prototypes, a room full of first-time builders, and a lot of people who will never look at software the same way again.',
    ],
    quote: 'I shipped my first app in 40 minutes. I did not even know what a deployment was this morning.',
    agenda: {
      title: 'HOW THE DAY RAN',
      items: [
        { time: '2:00 PM', text: 'Doors open · Networking' },
        { time: '2:30 PM', text: 'Welcome from AttraX & Enter', primary: true },
        { time: '3:00 PM', text: 'Live demo: zero to deployed in 10 min' },
        { time: '3:20 PM', text: 'Build sprint begins', primary: true },
        { time: '4:30 PM', text: 'Project showcase & peer review' },
        { time: '5:00 PM', text: 'Wrap-up & next steps', primary: true },
      ],
    },
    sponsors: {
      title: 'CO-ORGANIZERS',
      items: [
        { name: 'AttraX',                  primary: true },
        { name: 'Enter.pro' },
        { name: 'Tsinghua SEM · CEMS' },
        { name: 'Yenching Academy · PKU' },
        { name: 'PKU Innovation Society' },
        { name: '创新壬 (Ren)' },
      ],
    },
  },

  // ── 优秀项目展示 ──────────────────────────────────────────
  projects: {
    tag:   '🏆 Outstanding Projects',
    title: 'What They [[Built]]',
    sub:   'Selected standouts from the build sprint. All shipped during the event.',
    items: [
      {
        rank:  '🥇',
        badge: 'Best Overall',
        title: 'Campus Meal Planner',
        team:  'Team Alpha',
        desc:  'AI-powered weekly meal planner tailored for Tsinghua canteen options. Students input dietary preferences and get a full week plan with nutrition breakdown.',
        tags:  ['AI', 'Nutrition', 'Campus Life'],
        link:  'https://enter.pro',
      },
      {
        rank:  '🥈',
        badge: 'Most Creative',
        title: 'Language Exchange Matcher',
        team:  'Team Babel',
        desc:  'Matches international and Chinese students for language exchange based on schedules, learning goals, and personality. Built with Supabase backend.',
        tags:  ['Social', 'Education', 'NLP'],
        link:  'https://enter.pro',
      },
      {
        rank:  '🥉',
        badge: 'Best UX',
        title: 'Event Discovery App',
        team:  'Team Compass',
        desc:  'Aggregates student events across Tsinghua, PKU, and surrounding universities into one clean feed. Filter by interest, language, and time.',
        tags:  ['Events', 'Community', 'Aggregator'],
        link:  'https://enter.pro',
      },
      {
        rank:  '⭐',
        badge: 'Audience Favorite',
        title: 'AI Study Buddy',
        team:  'Team Spark',
        desc:  'A Socratic AI tutor that never gives direct answers — it asks guiding questions to help students reason through problems themselves.',
        tags:  ['EdTech', 'AI Tutor', 'Learning'],
        link:  'https://enter.pro',
      },
      {
        rank:  '⭐',
        badge: 'Most Practical',
        title: 'Thesis Citation Helper',
        team:  'Team Scholar',
        desc:  'Paste any paragraph, get properly formatted citations. Supports APA, MLA, Chicago. Built for international students navigating citation styles.',
        tags:  ['Academic', 'Writing', 'Productivity'],
        link:  'https://enter.pro',
      },
      {
        rank:  '⭐',
        badge: 'Best Pitch',
        title: 'Dorm Room Marketplace',
        team:  'Team Exchange',
        desc:  'Buy/sell secondhand items within verified campus communities. Trust layer built on student ID verification and peer ratings.',
        tags:  ['Marketplace', 'Campus', 'P2P'],
        link:  'https://enter.pro',
      },
    ],
  },

  // ── 参与者 ────────────────────────────────────────────────
  participants: {
    tag:   '🌏 Who Was in the Room',
    title: 'Global Minds. [[One Campus.]]',
    sub:   '79 participants from across the world — united by curiosity and the will to build.',
    stats: [
      { number: '79',  label: 'Total Participants' },
      { number: '20+', label: 'Countries Represented' },
      { number: '6',   label: 'Universities' },
    ],
    programs: ['CEMS MIM', 'MBA', 'PhD', 'Exchange Students', 'Undergrad'],
    schools:  ['Tsinghua SEM', 'PKU', 'BFSU', 'Beihang', 'UCSD', 'Warwick', 'Schwarzman', 'Lomonosov MSU', '+ more'],
  },

  // ── 现场照片 ──────────────────────────────────────────────
  gallery: {
    tag:   '📸 On the Ground',
    title: 'In the [[Room]]',
    photos: [
      { file: '/assets/img_03.jpg', alt: 'Full room',  size: 'large' },
      { file: '/assets/img_04.jpg', alt: 'Keynote',    size: 'normal' },
      { file: '/assets/img_05.jpg', alt: 'Networking', size: 'normal' },
      { file: '/assets/img_06.jpg', alt: 'Team photo', size: 'tall' },
      { file: '/assets/img_07.jpg', alt: 'Presenter',  size: 'normal' },
    ],
    albumLink: 'https://lcn09aufxjsv.feishu.cn/wiki/QcMKwiTL1iRg5qkZSl5cpE0EnBn',
  },

  // ── CTA / 结尾 ────────────────────────────────────────────
  cta: {
    eyebrow: "We're Just Getting Started",
    title:   'Tsinghua Was [[One Stop.]]',
    body:    "Want the Enter team at your campus? We'll bring the energy. You bring the ideas.",
    buttons: [
      { text: 'Start Building Free →', link: 'https://enter.pro', style: 'white' },
      { text: 'Invite Us to Your Event', link: 'mailto:support@enter.pro', style: 'outline' },
    ],
  },

  // ── 页脚 ──────────────────────────────────────────────────
  footer: {
    left: 'AttraX × Enter · China AI Ecosystem Workshop · April 1, 2026 · Beijing',
    links: [
      { text: 'enter.pro',    href: 'https://enter.pro' },
      { text: 'Full Article', href: 'https://lcn09aufxjsv.feishu.cn/wiki/TKvBwjW7TigYx8kGzMzcbowknte' },
      { text: 'WeChat',       href: 'https://mp.weixin.qq.com/s/Iv-t6ueF60nIp2Bfb5Rfaw' },
    ],
  },
}
