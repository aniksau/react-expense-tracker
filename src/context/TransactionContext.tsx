import React, { createContext, ReactNode, JSX } from "react";
import { Transaction } from "../types/transactions";
import { useTransactionMutations, useTransactionsQuery } from "../hooks/useTransactionsQuery";

interface TransactionContextProps {
    transactions: Transaction[];
    addTransaction: (transaction: Transaction) => void;
    deleteTransaction: (transaction: Transaction) => void;
    isLoading: boolean;
}

export const TransactionContext = createContext<TransactionContextProps>({
    transactions: [],
    addTransaction: () => { },
    deleteTransaction: () => { },
    isLoading: false
});

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
    const { data: transactions = [], isLoading: isFetchingTransactions, error } = useTransactionsQuery();
    const { addMutation, deleteMutation } = useTransactionMutations();

    const isLoading = isFetchingTransactions || addMutation.isPending || deleteMutation.isPending;

    const addTransaction = (transaction: Transaction) => {
        addMutation.mutate(transaction);
    };

    const deleteTransaction = (transaction: Transaction) => {
        deleteMutation.mutate(transaction);
    };

    return (
        <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction, isLoading }}>
            {children}
        </TransactionContext.Provider>
    );
};
