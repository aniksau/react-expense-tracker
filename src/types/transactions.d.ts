export interface Transaction {
    dateTime: string;
    transactionType: TransactionType;
    amount: number;
    currency: 'INR';
    category: TransactionCategory;
    description?: string;
}

export type TransactionType = 'income' | 'expense';
export type TransactionCategory =
    | 'Income'
    | 'Food & Groceries'
    | 'Housing & Utilities'
    | 'Transportation'
    | 'Entertainment'
    | 'Healthcare'
    | 'Shopping'
    | 'Subscriptions & Services'
    | 'Investments'
    | 'Miscellaneous';