import moment from "moment";
import { Transaction, TransactionType } from "../types/transactions";

export const getTotalIncomeOrExpense = (transactions: Transaction[], transactionType: TransactionType) => {
    return transactions.reduce((sum: number, transaction: Transaction) => {
        return transaction.transactionType === transactionType ? sum + Number(transaction.amount) : sum;
    }, 0);
};

export const getPrefixedAmount = (transaction: Transaction) => {
    if(transaction.transactionType === 'expense') {
        return `- \u20B9${transaction.amount}`;
    }
    return `+ \u20B9${transaction.amount}`;
};

export const formatRelativeDate = (date: string) => {
  const inputDate = moment(date);
  const today = moment().startOf('day');
  
  if (inputDate.isSame(today, 'day')) {
    return 'Today';
  } else if (inputDate.isSame(today.clone().subtract(1, 'day'), 'day')) {
    return 'Yesterday';
  } else if (inputDate.isSame(today, 'year')) {
    return inputDate.format('DD MMMM');
  } else {
    return inputDate.format("DD MMMM 'YY");
  }
}
