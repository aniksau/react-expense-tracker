import { IconButton, List, ListItem, ListItemButton, ListItemText, Typography, Box, CircularProgress, Skeleton } from "@mui/material";
import React, { useCallback, useState, useEffect } from "react";
import { formatRelativeDate, getPrefixedAmount } from "../../utils/functions";
import { TransactionIcon } from "../TransactionIcon/TransactionIcon";
import { green, red } from "@mui/material/colors";
import { useTransactions } from "../../hooks/useTransactions";
import { DeleteDialog } from "../DeleteDialog/DeleteDialog";
import { Transaction } from "../../types/transactions";

export const TransactionsList = () => {
    const { transactions } = useTransactions();
    const formatCurrencyCallback = useCallback(getPrefixedAmount, [transactions]);
    const [loading, setLoading] = useState(true);
    const [targetDeleteItem, setTargetDeleteItem] = useState({
        open: false,
        transaction: {} as Transaction
    });

    const onCloseDeleteDialog = () => {
        setTargetDeleteItem({ ...targetDeleteItem, open: false });
    };

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <>
            {loading ? (
                <List>
                    {Array.from(new Array(5)).map((_, index) => (
                        <ListItem key={index} disablePadding>
                            <Skeleton variant="circular" width={40} height={40} sx={{ marginRight: 2 }} />
                            <ListItemButton>
                                <ListItemText
                                    primary={<Skeleton width="60%" />}
                                    secondary={<Skeleton width="40%" />}
                                />
                                <Skeleton width={50} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            ) : transactions.length === 0 ? (
                <Box sx={{ textAlign: "center", padding: 4, opacity: 0.6 }}>
                    <Typography variant="h6" color="textSecondary">
                        No transactions found
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Add your first transaction to get started.
                    </Typography>
                </Box>
            ) : (
                <List>
                    {transactions.map((transaction, index) => (
                        <ListItem key={index} disablePadding>
                            <a onClick={() => setTargetDeleteItem({ open: true, transaction })}>
                                <TransactionIcon description={transaction.description || ""} />
                            </a>

                            <ListItemButton>
                                <ListItemText
                                    primary={transaction.description}
                                    secondary={formatRelativeDate(transaction.dateTime)}
                                />
                                <Typography
                                    color={transaction.transactionType === "income" ? green[700] : red[700]}
                                >
                                    {formatCurrencyCallback(transaction.amount, transaction.transactionType)}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            )}
            <DeleteDialog open={targetDeleteItem.open} transaction={targetDeleteItem.transaction} closeHandler={onCloseDeleteDialog} />
        </>
    );
};
