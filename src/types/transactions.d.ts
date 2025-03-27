export interface Transaction {
    dataTime: string;
    transactionType: TransactionType;
    amount: number;
    currency: 'INR';
    description?: string;
}

export type TransactionType = 'income' | 'expense';