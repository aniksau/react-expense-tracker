import React, { createContext, useReducer, ReactNode, JSX } from "react";
import { Transaction } from "../types/transactions";
import { transactionReducer } from "./TransactionReducer";

interface TransactionContextProps {
    transactions: Transaction[];
    addTransaction: (transaction: Transaction) => void;
    deleteTransaction: (dateTime: string) => void;
}

const initialState: Transaction[] = [];

export const TransactionContext = createContext<TransactionContextProps>({
    transactions: [],
    addTransaction: () => { },
    deleteTransaction: () => { },
});

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(transactionReducer, initialState);

    const addTransaction = (transaction: Transaction) => {
        dispatch({ type: "ADD_TRANSACTION", payload: transaction });
    };

    const deleteTransaction = (dateTime: string) => {
        dispatch({ type: "DELETE_TRANSACTION", payload: dateTime });
    };

    return (
        <TransactionContext.Provider value={{ transactions: state, addTransaction, deleteTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};
