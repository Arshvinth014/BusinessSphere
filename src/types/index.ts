export interface PortfolioItem {
  name: string;
  percentage: number;
  color: string;
}

export interface PopularStock {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  logoBg?: string;
  logoText?: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  studentsCount: string;
  price: string;
  imageUrl: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export interface InvestmentPlan {
  id: string;
  title: string;
  riskLevel: 'LOW RISK' | 'MODERATE RISK' | 'HIGH RISK';
  riskColor: string;
  description: string;
  expectedReturn: string;
  minInvestment: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  category: string;
  timeAgo: string;
  title: string;
  imageUrl: string;
}

export interface Expert {
  id: string;
  name: string;
  role: string;
  tags: string[];
  articlesCount: number;
  coursesCount: number;
  avatar: string;
  isFollowing?: boolean;
}

export interface GoalItem {
  id: string;
  title: string;
  subtitle: string;
  progressPercent: number;
  iconName: string;
}
