import moment from "moment";
import { Transaction, TransactionType } from "../types/transactions";
import { PieValueType } from "@mui/x-charts";
import { MakeOptional } from "@mui/x-charts/internals";
import { CURRENCY_INR } from "../constants/constants";

export const getTotalIncomeOrExpense = (transactions: Transaction[], transactionType: TransactionType) => {
  return transactions.reduce((sum: number, transaction: Transaction) => {
    return transaction.transactionType === transactionType ? sum + Number(transaction.amount) : sum;
  }, 0);
};

export const getPrefixedAmount = (amount: number, transactionType: TransactionType) => {
  if (transactionType === 'expense') {
    return `- ${formatIndianCurrency(amount, 'INR')}`;
  }
  return `+ ${formatIndianCurrency(amount, 'INR')}`;
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
};

export const getChartData = (transactions: Transaction[]): MakeOptional<PieValueType, "id">[] => {
  const typeTotals = transactions
    .reduce((acc, txn) => {
      acc[txn.transactionType] = (acc[txn.transactionType] || 0) + txn.amount;
      return acc;
    }, {} as Record<string, number>);

  return Object.keys(typeTotals).map((type, index) => ({
    id: index,
    value: typeTotals[type],
    label: `Total ${type}: ${formatIndianCurrency(typeTotals[type], 'INR')}`
  }));
};

export const formatIndianCurrency = (amount: number, currency?: string) => {
  if (isNaN(amount)) return "Invalid amount";

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}
