import { Transaction } from "../types/transactions";

const TRANSACTIONS_KEY = "transactions";

const getStoredTransactions = (): Transaction[] => {
    const stored = localStorage.getItem(TRANSACTIONS_KEY);
    return stored ? JSON.parse(stored) : [];
};

const saveTransactions = (transactions: Transaction[]) => {
    localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
};

export const getTransactions = async (): Promise<Transaction[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return getStoredTransactions();
};

export const addTransaction = async (transaction: Transaction): Promise<Transaction[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const transactions = [transaction, ...getStoredTransactions()];
    saveTransactions(transactions);
    return transactions;
};

export const deleteTransaction = async (targetItem: Transaction): Promise<Transaction[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const transactions = getStoredTransactions().filter(transaction => transaction.dateTime !== targetItem.dateTime);
    saveTransactions(transactions);
    return transactions;
};
