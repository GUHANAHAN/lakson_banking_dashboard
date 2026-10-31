// Fictional sample data. Portfolio values are in ₹ crore.
// "portfolio" means: Savings = deposits, Cards = annual card spend,
// Loans = outstanding balance, Wealth = assets under management.

export const CATEGORIES = ['Savings', 'Cards', 'Loans', 'Wealth'];
export const STATUSES = ['Active', 'Under review', 'Discontinued'];

export const PORTFOLIO_LABELS = {
  Savings: 'Deposits',
  Cards: 'Annual card spend',
  Loans: 'Outstanding balance',
  Wealth: 'Assets under management',
};

export const products = [
  // Savings
  {
    id: 'SAV-101', name: 'Everyday Savings Account', category: 'Savings', status: 'Active',
    launched: '2018-06-04', customers: 214600, portfolio: 5840,
    metrics: [{ label: 'Interest rate', value: 3.0, format: 'percent' }, { label: 'Minimum balance', value: 1000, format: 'rupee' }],
    description: 'Standard retail savings account with a debit card and mobile banking.',
  },
  {
    id: 'SAV-102', name: 'Salary Plus Account', category: 'Savings', status: 'Active',
    launched: '2020-02-17', customers: 128300, portfolio: 3210,
    metrics: [{ label: 'Interest rate', value: 3.25, format: 'percent' }, { label: 'Minimum balance', value: 0, format: 'rupee' }],
    description: 'Zero-balance account for salaried customers with employer payroll tie-ups.',
  },
  {
    id: 'SAV-103', name: 'Senior Citizen Savings', category: 'Savings', status: 'Active',
    launched: '2019-09-23', customers: 61200, portfolio: 2480,
    metrics: [{ label: 'Interest rate', value: 3.75, format: 'percent' }, { label: 'Minimum balance', value: 5000, format: 'rupee' }],
    description: 'Higher-rate savings account for customers aged 60 and above.',
  },
  {
    id: 'SAV-104', name: "Minor's Savings Account", category: 'Savings', status: 'Under review',
    launched: '2021-11-08', customers: 24900, portfolio: 310,
    metrics: [{ label: 'Interest rate', value: 3.0, format: 'percent' }, { label: 'Minimum balance', value: 500, format: 'rupee' }],
    description: 'Guardian-operated account for customers under 18. Eligibility rules are being revised.',
  },
  {
    id: 'SAV-105', name: 'Fixed Deposit Classic', category: 'Savings', status: 'Active',
    launched: '2017-03-15', customers: 47800, portfolio: 6930,
    metrics: [{ label: 'Interest rate', value: 6.8, format: 'percent' }, { label: 'Minimum deposit', value: 10000, format: 'rupee' }],
    description: 'Term deposit with tenures from 7 days to 10 years and flexible payout options.',
  },
  {
    id: 'SAV-106', name: 'Recurring Deposit Plan', category: 'Savings', status: 'Discontinued',
    launched: '2016-08-01', customers: 8100, portfolio: 190,
    metrics: [{ label: 'Interest rate', value: 6.2, format: 'percent' }, { label: 'Minimum monthly deposit', value: 500, format: 'rupee' }],
    description: 'Monthly instalment deposit. Closed to new customers; existing plans run to maturity.',
  },

  // Cards
  {
    id: 'CRD-201', name: 'Classic Debit Card', category: 'Cards', status: 'Active',
    launched: '2018-06-04', customers: 402300, portfolio: 1860,
    metrics: [{ label: 'Annual fee', value: 250, format: 'rupee' }, { label: 'Cashback rate', value: 0.5, format: 'percent' }],
    description: 'Everyday debit card linked to savings accounts, accepted at domestic and international merchants.',
  },
  {
    id: 'CRD-202', name: 'Platinum Credit Card', category: 'Cards', status: 'Active',
    launched: '2019-10-01', customers: 96400, portfolio: 2740,
    metrics: [{ label: 'Annual fee', value: 2500, format: 'rupee' }, { label: 'Reward rate', value: 2.0, format: 'percent' }],
    description: 'Mid-tier credit card with reward points on dining and online spend.',
  },
  {
    id: 'CRD-203', name: 'Travel Rewards Credit Card', category: 'Cards', status: 'Active',
    launched: '2021-03-18', customers: 41800, portfolio: 1190,
    metrics: [{ label: 'Annual fee', value: 4999, format: 'rupee' }, { label: 'Reward rate', value: 3.0, format: 'percent' }],
    description: 'Premium card with airport lounge access and bonus rewards on travel bookings.',
  },
  {
    id: 'CRD-204', name: 'Student Starter Card', category: 'Cards', status: 'Under review',
    launched: '2022-07-11', customers: 18700, portfolio: 96,
    metrics: [{ label: 'Annual fee', value: 0, format: 'rupee' }, { label: 'Credit limit', value: 25000, format: 'rupee' }],
    description: 'Low-limit entry credit card for students. Under review after higher-than-expected delinquency.',
  },
  {
    id: 'CRD-205', name: 'Business Charge Card', category: 'Cards', status: 'Discontinued',
    launched: '2015-05-20', customers: 6200, portfolio: 410,
    metrics: [{ label: 'Annual fee', value: 7500, format: 'rupee' }, { label: 'Credit limit', value: 500000, format: 'rupee' }],
    description: 'Charge card for small businesses, replaced by the commercial card programme.',
  },

  // Loans
  {
    id: 'LON-301', name: 'Home Loan Standard', category: 'Loans', status: 'Active',
    launched: '2016-01-12', customers: 38400, portfolio: 18240,
    metrics: [{ label: 'Interest rate', value: 8.5, format: 'percent' }, { label: 'Maximum tenure', value: 30, format: 'years' }],
    description: 'Floating-rate home purchase and construction loan with part-prepayment allowed.',
  },
  {
    id: 'LON-302', name: 'Personal Loan Express', category: 'Loans', status: 'Active',
    launched: '2019-05-06', customers: 52100, portfolio: 4360,
    metrics: [{ label: 'Interest rate', value: 11.25, format: 'percent' }, { label: 'Maximum tenure', value: 5, format: 'years' }],
    description: 'Unsecured personal loan with digital application and same-day approval for eligible customers.',
  },
  {
    id: 'LON-303', name: 'Auto Loan', category: 'Loans', status: 'Active',
    launched: '2017-08-29', customers: 29700, portfolio: 5120,
    metrics: [{ label: 'Interest rate', value: 9.1, format: 'percent' }, { label: 'Maximum tenure', value: 7, format: 'years' }],
    description: 'Financing for new and used passenger vehicles, up to 90% of on-road price.',
  },
  {
    id: 'LON-304', name: 'Education Loan', category: 'Loans', status: 'Under review',
    launched: '2020-06-15', customers: 14300, portfolio: 1680,
    metrics: [{ label: 'Interest rate', value: 9.75, format: 'percent' }, { label: 'Maximum tenure', value: 15, format: 'years' }],
    description: 'Loan for domestic and overseas higher education. Pricing is under review.',
  },
  {
    id: 'LON-305', name: 'Loan Against Property', category: 'Loans', status: 'Active',
    launched: '2018-11-03', customers: 9800, portfolio: 3790,
    metrics: [{ label: 'Interest rate', value: 9.4, format: 'percent' }, { label: 'Maximum tenure', value: 15, format: 'years' }],
    description: 'Secured loan against residential or commercial property for business and personal needs.',
  },
  {
    id: 'LON-306', name: 'Gold Loan Quick', category: 'Loans', status: 'Discontinued',
    launched: '2014-10-10', customers: 11200, portfolio: 740,
    metrics: [{ label: 'Interest rate', value: 10.5, format: 'percent' }, { label: 'Maximum tenure', value: 1, format: 'years' }],
    description: 'Short-tenure loan secured against gold ornaments. Withdrawn after a product consolidation.',
  },

  // Wealth
  {
    id: 'WLT-401', name: 'Balanced Advantage Fund', category: 'Wealth', status: 'Active',
    launched: '2017-04-03', customers: 72400, portfolio: 3480,
    metrics: [{ label: '1-year return', value: 11.4, format: 'percent' }, { label: 'Expense ratio', value: 1.1, format: 'percent' }],
    description: 'Hybrid mutual fund that shifts between equity and debt based on market valuations.',
  },
  {
    id: 'WLT-402', name: 'Large Cap Equity Fund', category: 'Wealth', status: 'Active',
    launched: '2016-09-19', customers: 58600, portfolio: 5210,
    metrics: [{ label: '1-year return', value: 14.2, format: 'percent' }, { label: 'Expense ratio', value: 0.95, format: 'percent' }],
    description: 'Equity fund investing mainly in the largest 100 listed companies.',
  },
  {
    id: 'WLT-403', name: 'Tax Saver ELSS Fund', category: 'Wealth', status: 'Active',
    launched: '2018-02-26', customers: 41300, portfolio: 1960,
    metrics: [{ label: '1-year return', value: 15.8, format: 'percent' }, { label: 'Expense ratio', value: 1.2, format: 'percent' }],
    description: 'Equity-linked savings scheme with a three-year lock-in and tax deduction benefits.',
  },
  {
    id: 'WLT-404', name: 'Private Wealth Portfolio', category: 'Wealth', status: 'Under review',
    launched: '2022-01-31', customers: 1240, portfolio: 2840,
    metrics: [{ label: '1-year return', value: 12.6, format: 'percent' }, { label: 'Minimum investment', value: 10000000, format: 'rupee' }],
    description: 'Discretionary portfolio management for high-net-worth clients. Fee structure is under review.',
  },
  {
    id: 'WLT-405', name: 'Retirement Pension Plan', category: 'Wealth', status: 'Active',
    launched: '2019-12-02', customers: 22800, portfolio: 1420,
    metrics: [{ label: '1-year return', value: 9.2, format: 'percent' }, { label: 'Minimum contribution', value: 5000, format: 'rupee' }],
    description: 'Long-term pension scheme with a conservative debt-heavy allocation.',
  },
];
