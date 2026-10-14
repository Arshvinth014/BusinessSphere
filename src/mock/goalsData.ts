import type {
  GoalMetricCard,
  DedicatedGoalCard,
  CashRoutingProtocol,
} from '../types';

export const GOALS_METRIC_CARDS: GoalMetricCard[] = [
  {
    id: 'total-capital',
    title: 'TOTAL GOALS CAPITAL',
    value: '$164,800',
    subValue: '/ $515k',
    fundedText: '53.3% Funded Overall',
    horizonText: '4 Active Horizons',
    iconName: 'Wallet',
  },
  {
    id: 'monthly-autopilot',
    title: 'MONTHLY AUTOPILOT',
    value: '$2,150',
    subValue: '/ mo',
    fundedText: 'ACH + Dividend Sweeps',
    horizonText: 'Next: Nov 1',
    iconName: 'RefreshCw',
  },
  {
    id: 'confidence-level',
    title: 'CONFIDENCE LEVEL',
    value: '96.4%',
    subValue: '+1.8%',
    fundedText: '10,000 Monte Carlo Passes',
    horizonText: 'LOW RISK',
    iconName: 'ShieldCheck',
    badge: 'LOW RISK',
    badgeClass: 'bg-emerald-500/15 text-[#00E599] border-emerald-500/30',
  },
  {
    id: 'nearest-target',
    title: 'NEAREST TARGET',
    value: '14 Mo',
    subValue: 'to horizon',
    fundedText: 'Dream Home Downpayment',
    horizonText: 'Aug 2027',
    iconName: 'Flag',
  },
];

export const GOALS_FILTER_TABS = [
  { id: 'all', label: 'All (4)' },
  { id: 'personal', label: 'Personal' },
  { id: 'retirement', label: 'Retirement' },
  { id: 'education', label: 'Education' },
];

export const DEDICATED_GOAL_CARDS: DedicatedGoalCard[] = [
  {
    id: 'dream-home',
    category: 'personal',
    badge: 'CAPITAL SHIELD',
    targetBadge: 'Target: Oct 2027',
    title: 'Buy a Dream Home',
    subtitle: 'Primary residence downpayment with automated short-duration ladder.',
    progressPercent: 55,
    fundedAmount: '$68,400',
    targetAmount: '$120,000 target',
    assetMix: [
      { label: '50% EQ', percent: 50, color: 'bg-[#00E599]' },
      { label: '35% FI', percent: 35, color: 'bg-blue-500' },
      { label: '15% CASH', percent: 15, color: 'bg-amber-400' },
    ],
    depositText: 'Autopilot Deposit: $850 / month',
    buttonLabel: 'Deposit',
    buttonVariant: 'green',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'retirement-freedom',
    category: 'retirement',
    badge: 'ALPHA COMPOUNDER',
    targetBadge: 'Target: Year 2042',
    title: 'Retirement Freedom',
    subtitle: 'Global broad-index equity alpha with sovereign bond yield stabilizers.',
    progressPercent: 33,
    fundedAmount: '$412,000',
    targetAmount: '$1,250,000 target',
    assetMix: [
      { label: '75% EQ', percent: 75, color: 'bg-[#00E599]' },
      { label: '15% FI', percent: 15, color: 'bg-blue-500' },
      { label: '10% COMM', percent: 10, color: 'bg-amber-400' },
    ],
    depositText: 'Autopilot Deposit: $800 / mo + Match',
    buttonLabel: 'Rebalance',
    buttonVariant: 'dark',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'ivy-league-529',
    category: 'education',
    badge: 'DYNAMIC GLIDEPATH',
    targetBadge: 'Target: Aug 2033',
    title: 'Ivy League 529 Fund',
    subtitle: 'Tax-shielded tuition fund automatically transitioning to short municipal notes.',
    progressPercent: 61,
    fundedAmount: '$58,200',
    targetAmount: '$95,000 target',
    assetMix: [
      { label: '60% EQ', percent: 60, color: 'bg-[#00E599]' },
      { label: '35% MUNI', percent: 35, color: 'bg-blue-400' },
      { label: '5% CASH', percent: 5, color: 'bg-amber-400' },
    ],
    depositText: 'Autopilot Deposit: $350 / month',
    buttonLabel: 'Manage',
    buttonVariant: 'dark',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'emergency-vault',
    category: 'personal',
    badge: 'TREASURY SWEEP',
    targetBadge: '100% COMPLETE',
    title: 'Emergency Liquidity Vault',
    subtitle: 'Instant 24/7 liquidity in ultra-short US T-Bills generating risk-free daily compounding.',
    progressPercent: 100,
    isCompleted: true,
    fundedAmount: '$25,000',
    targetAmount: '+$1,725 earned yield YTD',
    yieldApy: '5.15% APY',
    protectionStatus: '6 Mo Runway Secured',
    assetMix: [
      { label: '85% T-BILLS', percent: 85, color: 'bg-[#00E599]' },
      { label: '15% SOV', percent: 15, color: 'bg-blue-400' },
    ],
    depositText: 'Autorebalance Sweep: $150 / mo Auto',
    buttonLabel: 'Settings',
    buttonVariant: 'dark',
  },
];

export const CASH_ROUTING_PROTOCOLS: CashRoutingProtocol[] = [
  {
    id: 'spare-change',
    title: 'Spare Change Round-Ups',
    statusText: 'ACTIVE DEPLOYMENT',
    description: 'Rounds debit checking card purchases to the nearest integer dollar, sweeping accrued cash into the Buy a Dream Home fund.',
    metricLabel: 'Accumulated This Month',
    metricValue: '+$92.40',
    targetLabel: 'Target: Dream Home (Oct 2027)',
    iconName: 'Coins',
  },
  {
    id: 'paycheck-windfall',
    title: 'Paycheck Windfall Split',
    statusText: 'ACTIVE DEPLOYMENT',
    description: 'Identifies direct deposits > $4,500 baseline and splits excess 60% into Retirement Freedom and 40% into Ivy League 529.',
    metricLabel: 'Last Trigger (Oct 01)',
    metricValue: '+$1,200.00',
    targetLabel: 'Split Ratio: 60/40 Equity',
    iconName: 'GitFork',
  },
  {
    id: 'dynamic-drip',
    title: 'Dynamic DRIP+ Reinvestment',
    statusText: 'ACTIVE DEPLOYMENT',
    description: 'Quarterly stock dividends bypass idle cash drag and auto-route to whichever active goal has the lowest funding velocity percentage.',
    metricLabel: 'Reinvested YTD',
    metricValue: '+$1,480.35',
    targetLabel: 'Routing to: Retirement (CRSP)',
    iconName: 'Repeat',
  },
];

export const SIMULATION_GOAL_OPTIONS = [
  'Buy a Dream Home ($120,000 Target - 2027)',
  'Retirement Freedom ($1,250,000 Target - 2042)',
  'Ivy League 529 Fund ($95,000 Target - 2033)',
  'Emergency Liquidity Vault ($25,000 Complete)',
];

export const MACRO_RETURN_SCENARIOS = [
  { id: 'bearish', label: 'Bearish Recess.', cagr: '+3.4% CAGR', rate: 0.034 },
  { id: 'historic', label: 'Historic Avg', cagr: '+7.4% CAGR', rate: 0.074 },
  { id: 'bull', label: 'Bull Surge', cagr: '+12.1% CAGR', rate: 0.121 },
];

export const PEER_COHORT_DATA = {
  multiplier: '3.8x faster',
  headline: 'Investors utilizing automated glidepaths achieve major life milestones',
  description: 'Eliminating emotional timing through programmatic de-risking and automated dividend sweeps delivers an empirical +1.84% annual net performance uplift across 42,000 active portfolios.',
  client: {
    name: 'Elena Rostova',
    verified: true,
    goalCompleted: 'Completed Goal: $120k Real Estate Equity',
    quote: '"The automated horizon de-risking algorithm saved my family from the 2022 market volatility right before we closed on our property. InvestWise executes like an elite family office."',
    targetMet: 'Target Met: 4 Months Ahead of Schedule • Verified Client',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
  },
};
