import type { CuratedPlan, SafeguardItem } from '../types';

export const HERO_STATS = [
  { value: '$420M+', label: 'ASSETS MANAGED' },
  { value: '8.6%', label: '3-YR AVG RETURN' },
  { value: '0%', label: 'ADVISORY SURCHARGE' },
  { value: 'SIPC', label: 'PROTECTED TO $500K' },
];

export const LIVE_MARKETS_TICKER = [
  { symbol: 'S&P 500', value: '5,642.10', change: '+1.24%', isPositive: true },
  { symbol: 'Nasdaq', value: '17,890.70', change: '+1.02%', isPositive: true },
  { symbol: 'Fed Funds Rate', value: '4.75%', change: '', isPositive: true },
  { symbol: '10-Yr Treasury', value: '3.78%', change: '-0.05%', isPositive: false },
];

export const PLAN_CATEGORIES = [
  { id: 'all', label: 'All Plans (12)' },
  { id: 'low-risk', label: 'Capital Preservation (Low Risk)' },
  { id: 'moderate', label: 'Balanced Growth (Moderate)' },
  { id: 'high-yield', label: 'High Yield & Aggressive' },
  { id: 'tax-iras', label: 'Tax-Advantaged IRAs' },
  { id: 'esg', label: 'ESG & Sustainable' },
];

export const CURATED_PLANS: CuratedPlan[] = [
  {
    id: 'wealth-builder',
    title: 'Wealth Builder',
    subtitleTag: 'Balanced',
    riskBadge: 'MODERATE RISK',
    riskBadgeClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    description: 'Balanced blue-chip equities & high sovereign debt.',
    expectedReturn: '6.5% – 8.5%',
    minDeposit: '$500 Initial',
    assetAllocationText: '60% Eq • 30% Bd • 10% Gold',
    allocationBreakdown: [
      { label: 'Equities', percent: 60, color: 'bg-emerald-400' },
      { label: 'Bonds', percent: 30, color: 'bg-blue-500' },
      { label: 'Gold', percent: 10, color: 'bg-amber-400' },
    ],
    features: [
      'Automated dividend reinvestment (DRIP)',
      'Low expense ratio: 0.12% net asset fee',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80',
    buttonLabel: 'Invest Now',
    buttonVariant: 'emerald',
  },
  {
    id: 'retirement-growth',
    title: 'Retirement Growth',
    subtitleTag: 'Capital Shield',
    riskBadge: 'LOW RISK',
    riskBadgeClass: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    description: 'Inflation-hedged compounding for peace of mind.',
    expectedReturn: '5.5% – 7.5%',
    minDeposit: '$1,000 Initial',
    assetAllocationText: '50% Gov Bd • 35% Eq • 15% REIT',
    allocationBreakdown: [
      { label: 'Gov Bonds', percent: 50, color: 'bg-cyan-400' },
      { label: 'Equities', percent: 35, color: 'bg-emerald-400' },
      { label: 'REIT', percent: 15, color: 'bg-indigo-400' },
    ],
    features: [
      'Treasury Inflation-Protected Securities (TIPS)',
      'Automated tax-loss harvesting enabled',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80',
    buttonLabel: 'View Plan Details',
    buttonVariant: 'dark',
  },
  {
    id: 'education-fund',
    title: 'Education & Future Fund',
    subtitleTag: 'Milestone',
    riskBadge: 'MODERATE RISK',
    riskBadgeClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    description: 'Goal-based compounding for 5–15 year horizons.',
    expectedReturn: '6.0% – 8.0%',
    minDeposit: '$250/mo',
    assetAllocationText: 'Dynamic Shifting',
    allocationBreakdown: [
      { label: 'Growth Eq', percent: 50, color: 'bg-[#00E599]' },
      { label: 'Fixed Inc', percent: 35, color: 'bg-sky-400' },
      { label: 'Cash Eq', percent: 15, color: 'bg-slate-400' },
    ],
    features: [
      'Automatically de-risks as maturity nears',
      'Family gifting link with direct deposit',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&auto=format&fit=crop&q=80',
    buttonLabel: 'View Plan Details',
    buttonVariant: 'dark',
  },
  {
    id: 'global-tech',
    title: 'Global Frontiers & Tech',
    subtitleTag: 'Exponential',
    riskBadge: 'HIGH RISK',
    riskBadgeClass: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    description: 'AI, chips, renewable tech and venture scale equities.',
    expectedReturn: '8.0% – 13.0%',
    minDeposit: '$1,000 Initial',
    assetAllocationText: '85% Eq • 10% Credit • 5% Alt',
    allocationBreakdown: [
      { label: 'Tech & AI', percent: 85, color: 'bg-rose-500' },
      { label: 'Private Credit', percent: 10, color: 'bg-purple-500' },
      { label: 'Alts', percent: 5, color: 'bg-amber-400' },
    ],
    features: [
      'Exposure to semiconductors, AI & space tech',
      'Direct custody with Tier-1 clearing house',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
    buttonLabel: 'Invest Now',
    buttonVariant: 'emerald',
  },
];

export const SAFEGUARDS_DATA: SafeguardItem[] = [
  {
    id: 'sg-1',
    title: 'SIPC Protection',
    subtitle: 'Securities covered up to $500,000',
    iconName: 'Shield',
  },
  {
    id: 'sg-2',
    title: '256-Bit TLS Security',
    subtitle: 'End-to-end encrypted transactions',
    iconName: 'Lock',
  },
  {
    id: 'sg-3',
    title: 'Direct Custody',
    subtitle: 'Assets held directly at Apex Clearing',
    iconName: 'Building',
  },
  {
    id: 'sg-4',
    title: 'Tax Optimization',
    subtitle: 'Smart algorithmic tax-loss harvesting',
    iconName: 'Percent',
  },
];
