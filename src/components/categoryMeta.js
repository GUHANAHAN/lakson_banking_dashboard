import { CreditCard, Landmark, LayoutDashboard, PiggyBank, TrendingUp } from 'lucide-react';

export const CATEGORY_META = {
  All: { label: 'Overview', icon: LayoutDashboard, color: '#14213d' },
  Savings: { label: 'Savings', icon: PiggyBank, color: '#1b365d' },
  Cards: { label: 'Cards', icon: CreditCard, color: '#0f6cbd' },
  Loans: { label: 'Loans', icon: Landmark, color: '#3a9ba8' },
  Wealth: { label: 'Wealth', icon: TrendingUp, color: '#8a9bb5' },
};
