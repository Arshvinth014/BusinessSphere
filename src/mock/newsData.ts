export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  subCategory?: string;
  readTime: string;
  imageUrl: string;
  publishedTimeAgo: string;
  date?: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  isLead?: boolean;
}

export interface StockTickerCard {
  symbol: string;
  name: string;
  exchange: string;
  price: string;
  change: string;
  isPositive: boolean;
  logoBg: string;
  logoText: string;
}

export interface Columnist {
  id: string;
  name: string;
  specialty: string;
  articlesCount: number;
  followersCount: string;
  avatar: string;
  isFollowing?: boolean;
}

export const LIVE_TICKER_BAR = {
  status: "LIVE MARKETS",
  items: [
    { label: "S&P 500", value: "5,892.40", change: "+1.24%", positive: true },
    { label: "Nasdaq", value: "18,405.10", change: "+1.08%", positive: true },
    { label: "Fed Funds Rate", value: "4.75%", change: "HOLD", positive: null },
    { label: "10-Yr Treasury", value: "4.18%", change: "-0.04%", positive: false },
    { label: "NYSE & NASDAQ Open", value: "10:24 AM EST", change: "", positive: null }
  ]
};

export const NEWS_CATEGORIES = [
  "All News",
  "Economy & Central Banks",
  "Real Estate",
  "Stock Markets",
  "Expert Opinions"
];

export const LEAD_STORY: NewsArticle = {
  id: "lead-1",
  title: "Why Interest Rates Matter More Than You Think",
  excerpt:
    "A clear explanation of how interest rates influence businesses, mortgage lending, capital allocation, and everyday economic decisions. Understand how Federal Reserve adjustments cascade through stock valuations, bond portfolios, and consumer purchasing power.",
  category: "ECONOMICS",
  subCategory: "Central Banking Policy • Macro Environment",
  readTime: "8 MIN READ",
  imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&auto=format&fit=crop&q=80",
  publishedTimeAgo: "18 minutes ago",
  date: "Sep 28, 2026",
  author: {
    name: "Mohamed Rasheed",
    role: "Senior Macro Strategist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  isLead: true
};

export const SIDE_HIGHLIGHT_ARTICLES: NewsArticle[] = [
  {
    id: "side-1",
    title: "How Companies Actually Make Money",
    excerpt: "Understanding revenue models, EBIT margins, operational cash flow, and financial sustainability.",
    category: "FINANCE",
    readTime: "6 MIN READ",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    publishedTimeAgo: "3 hrs ago",
    author: {
      name: "Sarah Jenkins",
      role: "Financial Analyst",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "side-2",
    title: "ETF vs Individual Stocks: Which is Right for You?",
    excerpt: "What new and intermediate investors must understand before choosing an asset strategy.",
    category: "INVESTMENT",
    readTime: "7 MIN READ",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
    publishedTimeAgo: "5 hrs ago",
    author: {
      name: "David Vance",
      role: "Portfolio Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "side-3",
    title: "The Future of Real Estate Investment",
    excerpt: "Trends, demographic migrations, REIT yields, and driver risk shaping commercial real estate.",
    category: "REAL ESTATE",
    readTime: "5 MIN READ",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    publishedTimeAgo: "8 hrs ago",
    author: {
      name: "Grace Mendez",
      role: "Real Estate Strategist",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    }
  }
];

export const STOCK_FEATURED_CARDS: StockTickerCard[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    exchange: "NASDAQ",
    price: "$180.32",
    change: "+1.32%",
    isPositive: true,
    logoBg: "bg-slate-900 border border-slate-700 text-white",
    logoText: ""
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    exchange: "NASDAQ",
    price: "$424.17",
    change: "+1.32%",
    isPositive: true,
    logoBg: "bg-blue-600/20 border border-blue-500/40 text-blue-400",
    logoText: "田"
  },
  {
    symbol: "VOO",
    name: "Vanguard S&P 500",
    exchange: "NYSE",
    price: "$482.36",
    change: "+1.32%",
    isPositive: true,
    logoBg: "bg-red-900/30 border border-red-700/40 text-red-400",
    logoText: "V"
  }
];

export const INVESTIGATIVE_ARTICLES: NewsArticle[] = [
  {
    id: "inv-1",
    title: "Corporate Finance Fundamentals & Cash Flow Analysis",
    excerpt:
      "Master the differences between operating, investing, and financing activities to determine the true strength of a company.",
    category: "FINANCE",
    subCategory: "Fundamentals",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    publishedTimeAgo: "1 day ago",
    author: {
      name: "Prof. Marcus Ross",
      role: "Finance Professor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "inv-2",
    title: "Global Diversification: Hedging Against Inflation in 2026",
    excerpt:
      "How emerging economies, sovereign debt instruments, and foreign currency exposures can stabilize your purchasing power.",
    category: "GLOBAL MARKETS",
    subCategory: "Hedging",
    readTime: "11 min read",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
    publishedTimeAgo: "2 days ago",
    author: {
      name: "Emma Rodriguez",
      role: "Global Strategist",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "inv-3",
    title: "Retirement Planning at 30: Maximizing Compound Returns",
    excerpt:
      "Why starting early allows moderate risk profiles to surpass aggressive late starters, backed by 50-year historical market data.",
    category: "RETIREMENT",
    subCategory: "Compound Growth",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
    publishedTimeAgo: "2 days ago",
    author: {
      name: "Julian Hayes",
      role: "Wealth Advisor",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "inv-4",
    title: "AI & Algorithmic Trading: Transforming Retail Portfolios",
    excerpt:
      "How everyday retail investors can leverage institutional-grade predictive signals without deep computer science knowledge.",
    category: "FINTECH & AI",
    subCategory: "Quantitative",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    publishedTimeAgo: "3 days ago",
    author: {
      name: "Dr. Aris Thorne",
      role: "FinTech Lead",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
    }
  }
];

export const FEATURED_COLUMNISTS: Columnist[] = [
  {
    id: "col-1",
    name: "Sarah Wilson, CFA",
    specialty: "Equities & Value Investing",
    articlesCount: 34,
    followersCount: "18.4K",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "col-2",
    name: "Michael Chen",
    specialty: "Commercial Real Estate",
    articlesCount: 22,
    followersCount: "12.1K",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "col-3",
    name: "Elena Rostova",
    specialty: "Macroeconomics & Rates",
    articlesCount: 47,
    followersCount: "25.8K",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
  }
];
