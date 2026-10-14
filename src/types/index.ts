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

export interface CuratedPlan {
  id: string;
  title: string;
  subtitleTag: string;
  riskBadge: 'LOW RISK' | 'MODERATE RISK' | 'HIGH RISK';
  riskBadgeClass: string;
  description: string;
  expectedReturn: string;
  minDeposit: string;
  assetAllocationText: string;
  allocationBreakdown: { label: string; percent: number; color: string }[];
  features: string[];
  imageUrl: string;
  buttonLabel: string;
  buttonVariant: 'emerald' | 'dark';
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

export interface SafeguardItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}

// Markets Page Interfaces
export interface MarketBenchmark {
  id: string;
  symbol: string;
  name: string;
  categoryTag: string;
  price: string;
  changePts: string;
  changePercent: string;
  isPositive: boolean;
  low52w: string;
  high52w: string;
  currentPercent52w: number;
}

export interface SectorPerformanceItem {
  id: string;
  sectorName: string;
  labelStatus: string;
  changePercent: string;
  isPositive: boolean;
  stocks: { symbol: string; change: string; isPositive: boolean }[];
}

export interface WatchlistItem {
  id: string;
  name: string;
  symbol: string;
  exchange: string;
  sector: string;
  lastPrice: string;
  changePercent: string;
  changeValue: string;
  isPositive: boolean;
  dayRangeLow: string;
  dayRangeHigh: string;
  rangePercent: number;
  volume: string;
  avgVolume: string;
  marketCap: string;
  peRatio: string;
}

export interface MacroEvent {
  id: string;
  day: string;
  time: string;
  title: string;
  importance: 'CRITICAL' | 'MEDIUM' | 'LOW';
  description: string;
  forecast: string;
  previous: string;
}

// Goals Page Interfaces
export interface GoalMetricCard {
  id: string;
  title: string;
  value: string;
  subValue?: string;
  fundedText: string;
  horizonText: string;
  iconName: string;
  badge?: string;
  badgeClass?: string;
}

export interface DedicatedGoalCard {
  id: string;
  category: 'personal' | 'retirement' | 'education';
  badge: string;
  targetBadge: string;
  title: string;
  subtitle: string;
  progressPercent: number;
  isCompleted?: boolean;
  fundedAmount: string;
  targetAmount: string;
  assetMix: { label: string; percent: number; color: string }[];
  depositText: string;
  buttonLabel: string;
  buttonVariant: 'green' | 'dark';
  imageUrl?: string;
  yieldApy?: string;
  protectionStatus?: string;
}

export interface CashRoutingProtocol {
  id: string;
  title: string;
  statusText: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  targetLabel: string;
  iconName: string;
}

