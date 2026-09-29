import type {
  PortfolioItem,
  PopularStock,
  Course,
  Article,
  InvestmentPlan,
  NewsItem,
  Expert,
  GoalItem,
} from '../types';

export const PORTFOLIO_ALLOCATION: PortfolioItem[] = [
  { name: 'Funds', percentage: 55, color: '#00E599' },
  { name: 'Stocks', percentage: 20, color: '#3B82F6' },
  { name: 'Cash', percentage: 15, color: '#6366F1' },
  { name: 'Real Estate', percentage: 5, color: '#F59E0B' },
  { name: 'Other', percentage: 5, color: '#EC4899' },
];

export const POPULAR_STOCKS: PopularStock[] = [
  {
    symbol: 'AAPL',
    name: 'Apple',
    price: '$189.50',
    change: '+1.20%',
    isPositive: true,
    logoText: '',
    logoBg: 'bg-black text-white',
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft',
    price: '$424.17',
    change: '+1.30%',
    isPositive: true,
    logoText: '⊞',
    logoBg: 'bg-blue-600 text-white',
  },
  {
    symbol: 'VOO',
    name: 'Vanguard S&P 500',
    price: '$482.36',
    change: '+1.32%',
    isPositive: true,
    logoText: 'V',
    logoBg: 'bg-red-700 text-white font-bold',
  },
  {
    symbol: 'GLD',
    name: 'Gold ETF',
    price: '$218.45',
    change: '+1.32%',
    isPositive: true,
    logoText: 'G',
    logoBg: 'bg-amber-500 text-white font-bold',
  },
];

export const GOALS_DATA: GoalItem[] = [
  {
    id: 'g-1',
    title: 'Buy a House',
    subtitle: '10 years • 50%',
    progressPercent: 50,
    iconName: 'Home',
  },
  {
    id: 'g-2',
    title: 'Retirement',
    subtitle: '25 years • 20%',
    progressPercent: 20,
    iconName: 'Umbrella',
  },
  {
    id: 'g-3',
    title: 'Travel the World',
    subtitle: '3 years • 80%',
    progressPercent: 80,
    iconName: 'Plane',
  },
];

export const FEATURED_COURSES: Course[] = [
  {
    id: 'crs-1',
    title: 'Corporate Finance Fundamentals',
    category: 'FINANCE',
    level: 'Beginner',
    duration: '12 hours',
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
    duration: '10 hours',
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
    duration: '15 hours',
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
    duration: '14 hours',
    rating: 4.7,
    studentsCount: '910',
    price: '$49',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&auto=format&fit=crop&q=80',
  },
];

export const LATEST_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Why Interest Rates Matter More Than You Think',
    excerpt: 'A clear explanation of how interest rates influence businesses, markets and everyday economic decisions.',
    category: 'ECONOMICS',
    readTime: '4 MIN READ',
    author: {
      name: 'Mohamed Al-Mansoori',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    date: 'Sep 24, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    isFeatured: true,
  },
  {
    id: 'art-2',
    title: 'How Companies Actually Make Money',
    excerpt: 'Understanding revenue, margins, cash flow and profitability without complicated terminology.',
    category: 'FINANCE',
    readTime: '6 MIN READ',
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
    },
    date: 'Sep 22, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'art-3',
    title: 'ETF vs Individual Stocks',
    excerpt: 'What new investors should understand before choosing an investment strategy.',
    category: 'INVESTMENT',
    readTime: '7 MIN READ',
    author: {
      name: 'David Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    date: 'Sep 20, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'art-4',
    title: 'The Future of Real Estate Investment',
    excerpt: 'Trends, opportunities and risks in the global real estate market.',
    category: 'REAL ESTATE',
    readTime: '5 MIN READ',
    author: {
      name: 'Marcus Brody',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    date: 'Sep 18, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80',
  },
];

export const INVESTMENT_PLANS: InvestmentPlan[] = [
  {
    id: 'plan-1',
    title: 'Wealth Builder',
    riskLevel: 'MODERATE RISK',
    riskColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    description: 'Grow your wealth over time with balanced investments.',
    expectedReturn: '8.5% – 11.5% p.a.',
    minInvestment: '$500',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'plan-2',
    title: 'Retirement Growth',
    riskLevel: 'LOW RISK',
    riskColor: 'bg-cyan-500/10 text-cyan-700 border-cyan-500/20',
    description: 'Secure your future with steady, long-term growth.',
    expectedReturn: '5.5% – 7.5% p.a.',
    minInvestment: '$1,000',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'plan-3',
    title: 'Education Fund',
    riskLevel: 'MODERATE RISK',
    riskColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    description: "Save for your child's future with a focused plan.",
    expectedReturn: '6.0% – 9.0% p.a.',
    minInvestment: '$500',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'plan-4',
    title: 'Global Diversification',
    riskLevel: 'HIGH RISK',
    riskColor: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
    description: 'Access international markets for higher growth potential.',
    expectedReturn: '9.0% – 13.0% p.a.',
    minInvestment: '$1,500',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
  },
];

export const LATEST_NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    category: 'MARKETS',
    timeAgo: '2H AGO',
    title: 'Major markets reach new economic data',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'news-2',
    category: 'TECHNOLOGY',
    timeAgo: '4H AGO',
    title: 'AI investment continues to reshape global business',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'news-3',
    category: 'REAL ESTATE',
    timeAgo: '7H AGO',
    title: 'Global property markets enter a new phase',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&auto=format&fit=crop&q=80',
  },
];

export const FEATURED_EXPERTS_LIST: Expert[] = [
  {
    id: 'exp-1',
    name: 'Sarah Wilson',
    role: 'CFA, Financial Analyst',
    tags: ['Finance', 'Investment'],
    articlesCount: 45,
    coursesCount: 12,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'exp-2',
    name: 'Michael Chen',
    role: 'Real Estate Investor',
    tags: ['Real Estate', 'Investment'],
    articlesCount: 28,
    coursesCount: 8,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=80',
  },
];
