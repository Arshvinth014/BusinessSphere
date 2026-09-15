export interface MarketTickerItem {
  id: string;
  symbol: string;
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
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

export interface Course {
  id: string;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  studentsCount: string;
  price: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  timeAgo: string;
  imageUrl: string;
}

export interface MarketSnapshotItem {
  id: string;
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface Company {
  id: string;
  name: string;
  category: string;
  marketCap: string;
  logoText: string;
  logoBg: string;
  isFollowing?: boolean;
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

export interface MarketCategory {
  id: string;
  title: string;
  iconName: string;
  description?: string;
}

export interface CareerPath {
  id: string;
  title: string;
  progressPercent: number;
  coursesCount: number;
  certificatesCount: number;
  iconName: string;
}

export interface CommunityQuestion {
  id: string;
  question: string;
  answersCount: number;
  viewsCount: string;
  tags: string[];
  author: string;
}

export interface PopularCommunity {
  id: string;
  name: string;
  membersCount: string;
  iconName: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  duration: string;
  category: string;
  episodeNumber: string;
  imageUrl: string;
}
