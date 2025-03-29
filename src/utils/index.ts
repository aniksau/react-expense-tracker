import { Transaction } from "../types/transactions";
import { TRANSACTIONS } from "./data";

export const getMockTransactions = async (): Promise<Transaction[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return TRANSACTIONS;
}