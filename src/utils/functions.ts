import { Transaction, TransactionType } from "../types/transactions";

export const getTotalIncomeOrExpense = (transactions: Transaction[], transactionType: TransactionType) => {
    return transactions.reduce((sum: number, transaction: Transaction) => {
        return transaction.transactionType === transactionType ? sum + Number(transaction.amount) : sum;
    }, 0);
};