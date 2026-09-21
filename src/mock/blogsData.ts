export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  imageUrl: string;
  isFeaturedLead?: boolean;
  isEditorsPick?: boolean;
  trendingRank?: number;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  viewsCount?: string;
}

export interface Columnist {
  id: string;
  name: string;
  title: string;
  avatar: string;
  quote: string;
  latestTopic: string;
  articlesCount: number;
}

export const BLOG_CATEGORIES = [
  'All',
  'Leadership',
  'Markets',
  'Tech & AI',
  'Money & Crypto',
  'Real Estate',
  'Venture Capital',
  'Innovation',
] as const;

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'blog-1',
    title: 'The AI Revolution in Global Wealth Management: How Algorithms Are Reshaping $120 Trillion',
    excerpt: 'Generative AI and quantitative machine learning algorithms are dismantling traditional portfolio management models. Here is how institutional capital is adapting in 2026.',
    category: 'Tech & AI',
    readTime: '6 min read',
    publishedAt: '2 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    isFeaturedLead: true,
    author: {
      name: 'Dr. Evelyn Sterling',
      role: 'Chief AI Economist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    },
    tags: ['Artificial Intelligence', 'Fintech', 'Wealth Management'],
    viewsCount: '14.2k',
  },
  {
    id: 'blog-2',
    title: 'Central Banks Face the Next Monetary Frontier: Interest Rate Trajectories Through 2027',
    excerpt: 'As inflation targets stabilize, global central banks are navigating delicate liquidity recalibrations.',
    category: 'Markets',
    readTime: '4 min read',
    publishedAt: '3 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop&q=80',
    isEditorsPick: true,
    trendingRank: 1,
    author: {
      name: 'Marcus Vance',
      role: 'Macro Strategist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    },
    tags: ['Economics', 'Interest Rates', 'Global Trade'],
    viewsCount: '9.8k',
  },
  {
    id: 'blog-3',
    title: 'The Unseen Shift in Commercial Real Estate: Hybrid Spaces & Sovereign Wealth Plays',
    excerpt: 'Prime urban towers are transforming into high-yield multi-use hubs backed by Middle Eastern and Asian funds.',
    category: 'Real Estate',
    readTime: '5 min read',
    publishedAt: '5 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    isEditorsPick: true,
    trendingRank: 2,
    author: {
      name: 'Elena Rostova',
      role: 'Senior Property Analyst',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    },
    tags: ['REITs', 'Commercial Real Estate', 'Sovereign Capital'],
    viewsCount: '8.4k',
  },
  {
    id: 'blog-4',
    title: 'Billionaire Founder Playbook: Scalable Leadership in Hyper-Growth Startups',
    excerpt: 'Exclusive interviews with founders who crossed $1B valuation in under 36 months.',
    category: 'Leadership',
    readTime: '7 min read',
    publishedAt: '6 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80',
    isEditorsPick: true,
    trendingRank: 3,
    author: {
      name: 'Sohan Aluvsinghe',
      role: 'Venture Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    },
    tags: ['Leadership', 'Unicorns', 'Executive Strategy'],
    viewsCount: '7.1k',
  },
  {
    id: 'blog-5',
    title: 'Tokenized Treasury Bonds & On-Chain Liquidity: The $50B Digital Asset Breakthrough',
    excerpt: 'Institutional adoption of real-world asset (RWA) tokenization hits record highs.',
    category: 'Money & Crypto',
    readTime: '5 min read',
    publishedAt: '8 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=600&auto=format&fit=crop&q=80',
    isEditorsPick: true,
    trendingRank: 4,
    author: {
      name: 'Julian Thorne',
      role: 'Crypto Infrastructure Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    },
    tags: ['DeFi', 'RWA Tokenization', 'Web3 Finance'],
    viewsCount: '6.5k',
  },
  {
    id: 'blog-6',
    title: 'Venture Capital 2.0: Why Micro-VCs Are Outperforming Legacy Mega-Funds',
    excerpt: 'Specialized seed funds under $100M are generating superior IRR compared to traditional behemoths.',
    category: 'Venture Capital',
    readTime: '6 min read',
    publishedAt: '12 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop&q=80',
    author: {
      name: 'Claire Zhang',
      role: 'Partner @ Horizon Ventures',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    },
    tags: ['Venture Capital', 'Startup Funding', 'Private Equity'],
    viewsCount: '5.9k',
  },
  {
    id: 'blog-7',
    title: 'Green Hydrogen & Clean Tech Valuations: Navigating the Next Energy Transition Wave',
    excerpt: 'How government tax incentives and infrastructure breakthroughs are spurring multi-billion-dollar deals.',
    category: 'Innovation',
    readTime: '8 min read',
    publishedAt: '1 day ago',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&auto=format&fit=crop&q=80',
    author: {
      name: 'David Kim',
      role: 'Energy Policy Analyst',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
    },
    tags: ['CleanTech', 'Energy Transition', 'ESG Investing'],
    viewsCount: '4.8k',
  },
  {
    id: 'blog-8',
    title: 'The Semiconductor Supply Chain Reshoring: Winners and Losers of Chip Sovereignty',
    excerpt: 'Geopolitical moves in North America, Europe, and Asia are reshaping supply chains for the next decade.',
    category: 'Tech & AI',
    readTime: '6 min read',
    publishedAt: '1 day ago',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
    author: {
      name: 'Sarah Wilson',
      role: 'Hardware Industry Correspondent',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    },
    tags: ['Semiconductors', 'Supply Chain', 'Global Tech'],
    viewsCount: '4.2k',
  },
  {
    id: 'blog-9',
    title: 'Corporate Governance in the Age of Founder Control: Dual-Class Shares under Fire',
    excerpt: 'Institutional proxy advisors are demanding tighter accountability as governance concerns escalate.',
    category: 'Leadership',
    readTime: '5 min read',
    publishedAt: '2 days ago',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
    author: {
      name: 'Michael Chen',
      role: 'Governance Specialist',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=80',
    },
    tags: ['Corporate Governance', 'Boardroom', 'Public Equities'],
    viewsCount: '3.9k',
  },
];

export const FEATURED_COLUMNISTS: Columnist[] = [
  {
    id: 'col-1',
    name: 'Sohan Aluvsinghe',
    title: 'Senior Global Editor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    quote: 'The true value of modern capital lies in its speed of adaptation to technological paradigm shifts.',
    latestTopic: 'The Next Billion-Dollar AI Moat',
    articlesCount: 142,
  },
  {
    id: 'col-2',
    name: 'Elena Rostova',
    title: 'Chief Financial Columnist',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    quote: 'Interest rates don\'t just move bond prices; they redefine the psychological hurdle rate of every entrepreneur.',
    latestTopic: 'Liquidity Traps & Yield Curves',
    articlesCount: 98,
  },
  {
    id: 'col-3',
    name: 'Dr. Evelyn Sterling',
    title: 'Technology & AI Lead',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    quote: 'Artificial Intelligence isn\'t taking over enterprise software—it is becoming the enterprise software.',
    latestTopic: 'Compute Markets & Autonomous Agents',
    articlesCount: 115,
  },
  {
    id: 'col-4',
    name: 'Marcus Vance',
    title: 'Macroeconomics Contributor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    quote: 'The global supply chain of tomorrow is hyper-localized, automated, and heavily stress-tested.',
    latestTopic: 'Decoupling vs Reshoring Metrics',
    articlesCount: 86,
  },
];
