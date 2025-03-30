import { Transaction } from "../types/transactions";

export type TransactionAction =
    | { type: "ADD_TRANSACTION"; payload: Transaction }
    | { type: "DELETE_TRANSACTION"; payload: string }
    | { type: 'LOAD_TRANSACTIONS' }
    | { type: 'SET_TRANSACTIONS', payload: Transaction[] };

export const transactionReducer = (state: Transaction[], action: TransactionAction): Transaction[] => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [action.payload, ...state];
        case 'DELETE_TRANSACTION':
            return state.filter(transaction => transaction.dateTime !== action.payload);
        case 'SET_TRANSACTIONS':
            return [...action.payload];
        case 'LOAD_TRANSACTIONS':
            return state;
        default:
            return state;
    }
}