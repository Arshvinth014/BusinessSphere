import type {
  StatItem,
  MarketTickerItem,
  Article,
  Course,
  NewsItem,
  MarketSnapshotItem,
  Company,
  Expert,
  MarketCategory,
  CareerPath,
  CommunityQuestion,
  PopularCommunity,
  PodcastEpisode,
} from '../types';

export const HERO_STATS: StatItem[] = [
  { id: '1', value: '125K+', label: 'Dictionary Terms' },
  { id: '2', value: '42K+', label: 'Articles' },
  { id: '3', value: '18K+', label: 'Courses' },
  { id: '4', value: '190+', label: 'Countries' },
  { id: '5', value: '8K+', label: 'Experts' },
  { id: '6', value: '5K+', label: 'Companies' },
];

export const MARKET_TICKERS: MarketTickerItem[] = [
  { id: '1', symbol: 'S&P 500', name: 'S&P 500 Index', value: '5,648.22', change: '+0.62%', isPositive: true },
  { id: '2', symbol: 'NASDAQ', name: 'Nasdaq Composite', value: '17,882.14', change: '+0.96%', isPositive: true },
  { id: '3', symbol: 'NIKKEI 225', name: 'Nikkei 225', value: '38,487.84', change: '+0.82%', isPositive: true },
  { id: '4', symbol: 'DAX', name: 'DAX Performance Index', value: '18,604.28', change: '-0.48%', isPositive: false },
  { id: '5', symbol: 'FTSE', name: 'FTSE 100', value: '8,348.00', change: '+0.31%', isPositive: true },
  { id: '6', symbol: 'US10Y', name: '10-Year Treasury Bond', value: '3.82', change: '-0.12%', isPositive: false },
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Why Interest Rates Matter More Than You Think',
    excerpt: 'A clear explanation of how interest rates influence businesses, markets, and everyday economic decisions.',
    category: 'ECONOMICS',
    readTime: '4 MIN READ',
    author: {
      name: 'Sohan Aluvsinghe',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    date: 'Sep 14, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    isFeatured: true,
  },
  {
    id: 'art-2',
    title: 'How Companies Actually Make Money',
    excerpt: 'Understanding revenue streams, margins, unit economics, and profitability across modern tech & legacy industries.',
    category: 'FINANCE',
    readTime: '6 MIN READ',
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
    },
    date: 'Sep 12, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'art-3',
    title: 'ETF vs Individual Stocks',
    excerpt: 'What new investors should understand before choosing an investment strategy and asset allocation.',
    category: 'INVESTMENT',
    readTime: '7 MIN READ',
    author: {
      name: 'David Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    date: 'Sep 10, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'art-4',
    title: 'The Future of Real Estate Investment',
    excerpt: 'Trends, opportunities, and risks in global real estate markets, commercial spaces, and residential REITs.',
    category: 'REAL ESTATE',
    readTime: '5 MIN READ',
    author: {
      name: 'Marcus Brody',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    date: 'Sep 08, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80',
  },
];

export const COURSES: Course[] = [
  {
    id: 'crs-1',
    title: 'Corporate Finance Fundamentals',
    category: 'FINANCE',
    level: 'Beginner',
    duration: '12 Hours',
    rating: 4.9,
    studentsCount: '1.2k',
    price: '$49',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'crs-2',
    title: 'Investing Basics & Portfolio Building',
    category: 'INVESTMENT',
    level: 'Beginner',
    duration: '10 Hours',
    rating: 4.8,
    studentsCount: '850',
    price: '$39',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'crs-3',
    title: 'Business Strategy & Management',
    category: 'BUSINESS',
    level: 'Intermediate',
    duration: '15 Hours',
    rating: 4.9,
    studentsCount: '2.1k',
    price: '$59',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'crs-4',
    title: 'Real Estate Investment & Analysis',
    category: 'REAL ESTATE',
    level: 'Intermediate',
    duration: '14 Hours',
    rating: 4.7,
    studentsCount: '910',
    price: '$49',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&auto=format&fit=crop&q=80',
  },
];

export const TRENDING_TOPICS: string[] = [
  'Artificial Intelligence',
  'Interest Rates',
  'Real Estate',
  'Global Trade',
  'Cryptocurrency',
  'Inflation',
  'Entrepreneurship',
  'Private Equity',
  'Venture Capital',
  'Supply Chain',
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    category: 'Markets',
    title: 'Major central banks hint at rate cuts as economic data stabilizes worldwide.',
    timeAgo: '2h ago',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'news-2',
    category: 'Technology',
    title: 'AI investments continue to reshape global business productivity models.',
    timeAgo: '4h ago',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'news-3',
    category: 'Real Estate',
    title: 'Global property markets enter recovery phase amidst shifting yield expectations.',
    timeAgo: '7h ago',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&auto=format&fit=crop&q=80',
  },
];

export const MARKET_SNAPSHOT: MarketSnapshotItem[] = [
  { id: 'ms-1', name: 'S&P 500', value: '5,648.22', change: '+0.62%', isPositive: true },
  { id: 'ms-2', name: 'NASDAQ', value: '17,882.14', change: '+0.96%', isPositive: true },
  { id: 'ms-3', name: 'NIKKEI', value: '38,487.84', change: '+0.82%', isPositive: true },
  { id: 'ms-4', name: 'US10Y', value: '3.82', change: '-0.12%', isPositive: false },
  { id: 'ms-5', name: 'GOLD', value: '2,512.70', change: '+0.45%', isPositive: true },
  { id: 'ms-6', name: 'BTC', value: '63,541.20', change: '+2.14%', isPositive: true },
];

export const POPULAR_COMPANIES: Company[] = [
  {
    id: 'comp-1',
    name: 'Apple',
    category: 'Technology',
    marketCap: '3.1T',
    logoText: '',
    logoBg: 'bg-black text-white',
    isFollowing: false,
  },
  {
    id: 'comp-2',
    name: 'Microsoft',
    category: 'Technology',
    marketCap: '3.0T',
    logoText: '⊞',
    logoBg: 'bg-blue-600 text-white',
    isFollowing: false,
  },
  {
    id: 'comp-3',
    name: 'Toyota',
    category: 'Automotive',
    marketCap: '262B',
    logoText: 'T',
    logoBg: 'bg-red-600 text-white font-bold',
    isFollowing: false,
  },
  {
    id: 'comp-4',
    name: 'JPMorgan Chase',
    category: 'Banking',
    marketCap: '566B',
    logoText: 'JPM',
    logoBg: 'bg-slate-800 text-white text-xs font-bold',
    isFollowing: false,
  },
  {
    id: 'comp-5',
    name: 'Amazon',
    category: 'Commerce',
    marketCap: '1.8T',
    logoText: 'a',
    logoBg: 'bg-amber-500 text-black font-bold italic',
    isFollowing: false,
  },
  {
    id: 'comp-6',
    name: 'NVIDIA',
    category: 'Semiconductors',
    marketCap: '3.2T',
    logoText: 'NV',
    logoBg: 'bg-emerald-600 text-white font-bold',
    isFollowing: false,
  },
];

export const FEATURED_EXPERTS: Expert[] = [
  {
    id: 'exp-1',
    name: 'Sarah Wilson',
    role: 'VP of Finance @ Nova',
    tags: ['Finance', 'Investment'],
    articlesCount: 45,
    coursesCount: 12,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    isFollowing: false,
  },
  {
    id: 'exp-2',
    name: 'Michael Chen',
    role: 'Real Estate Investor',
    tags: ['Real Estate', 'Investment'],
    articlesCount: 28,
    coursesCount: 8,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=80',
    isFollowing: false,
  },
  {
    id: 'exp-3',
    name: 'Emma Rodriguez',
    role: 'Tech Founder',
    tags: ['Insurance', 'Fintech'],
    articlesCount: 34,
    coursesCount: 15,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    isFollowing: false,
  },
  {
    id: 'exp-4',
    name: 'David Kim',
    role: 'Business Consultant',
    tags: ['Strategy', 'Management'],
    articlesCount: 51,
    coursesCount: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
    isFollowing: false,
  },
  {
    id: 'exp-5',
    name: 'Lisa Patel',
    role: 'Senior Analyst',
    tags: ['Entrepreneurship', 'Venture'],
    articlesCount: 19,
    coursesCount: 4,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    isFollowing: false,
  },
];

export const MARKET_CATEGORIES: MarketCategory[] = [
  { id: 'mc-1', title: 'Market Data', iconName: 'LineChart', description: 'Real-time quotes & index tracking' },
  { id: 'mc-2', title: 'Stocks', iconName: 'TrendingUp', description: 'Global equities and company metrics' },
  { id: 'mc-3', title: 'ETFs', iconName: 'PieChart', description: 'Exchange-traded funds & portfolios' },
  { id: 'mc-4', title: 'Indices', iconName: 'BarChart3', description: 'Major international market indices' },
  { id: 'mc-5', title: 'Commodities', iconName: 'Coins', description: 'Gold, oil, metals, and agriculture' },
  { id: 'mc-6', title: 'Currencies', iconName: 'Globe2', description: 'Forex pairs and global FX trends' },
  { id: 'mc-7', title: 'Real Estate', iconName: 'Building2', description: 'Commercial & residential REITs' },
  { id: 'mc-8', title: 'Economic Indicators', iconName: 'Activity', description: 'GDP, inflation, interest rate metrics' },
];

export const CAREER_PATHS: CareerPath[] = [
  {
    id: 'cp-1',
    title: 'Finance Professional',
    progressPercent: 75,
    coursesCount: 8,
    certificatesCount: 3,
    iconName: 'Building',
  },
  {
    id: 'cp-2',
    title: 'Investment Analyst',
    progressPercent: 60,
    coursesCount: 5,
    certificatesCount: 2,
    iconName: 'BarChart',
  },
  {
    id: 'cp-3',
    title: 'Entrepreneur',
    progressPercent: 85,
    coursesCount: 10,
    certificatesCount: 4,
    iconName: 'Rocket',
  },
  {
    id: 'cp-4',
    title: 'Business Manager',
    progressPercent: 50,
    coursesCount: 6,
    certificatesCount: 2,
    iconName: 'Briefcase',
  },
];

export const COMMUNITY_QUESTIONS: CommunityQuestion[] = [
  {
    id: 'cq-1',
    question: 'How do interest rates affect small businesses?',
    answersCount: 24,
    viewsCount: '1.8k',
    tags: ['Economics', 'SmallBusiness'],
    author: 'Alex Mercer',
  },
  {
    id: 'cq-2',
    question: 'Is an ETF better than individual stocks for beginners?',
    answersCount: 38,
    viewsCount: '3.4k',
    tags: ['Investing', 'Stocks'],
    author: 'Priya Sharma',
  },
];

export const POPULAR_COMMUNITIES: PopularCommunity[] = [
  { id: 'pop-1', name: 'Finance', membersCount: '24.2k members', iconName: 'CircleDollarSign' },
  { id: 'pop-2', name: 'Entrepreneurship', membersCount: '18.8k members', iconName: 'Lightbulb' },
  { id: 'pop-3', name: 'Stock Market', membersCount: '15.1k members', iconName: 'TrendingUp' },
  { id: 'pop-4', name: 'Accounting', membersCount: '12.4k members', iconName: 'Calculator' },
  { id: 'pop-5', name: 'Investment', membersCount: '11.5k members', iconName: 'PiggyBank' },
  { id: 'pop-6', name: 'Business Students', membersCount: '8.8k members', iconName: 'GraduationCap' },
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'pod-1',
    title: 'The Future of Global Trade',
    duration: '42 min • Finance',
    category: 'Finance',
    episodeNumber: 'EP 104',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'pod-2',
    title: 'Building a Global Business',
    duration: '58 min • Entrepreneurship',
    category: 'Entrepreneurship',
    episodeNumber: 'EP 103',
    imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'pod-3',
    title: 'AI & The Future of Markets',
    duration: '35 min • Technology',
    category: 'Technology',
    episodeNumber: 'EP 102',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&auto=format&fit=crop&q=80',
  },
];
