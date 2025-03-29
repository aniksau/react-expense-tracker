import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import { getMockTransactions } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import { formatRelativeDate, getPrefixedAmount } from "../../utils/functions";
import { TransactionIcon } from "../TransactionIcon/TransactionIcon";
import { green, red } from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const TransactionsList = () => {
    const { data: allTransactions, isLoading } = useQuery({
        queryFn: () => getMockTransactions(),
        queryKey: ['getTransactions']
    });
    return (
        <List>
            {allTransactions?.map(transaction => (
                <ListItem disablePadding>
                    <ListItemAvatar>
                        <Avatar>
                            <TransactionIcon description={transaction.description || ''} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemButton>
                        <ListItemText primary={transaction.description} secondary={formatRelativeDate(transaction.dateTime)} />
                        <Typography color={transaction.transactionType === 'income' ? green[700] : red[700]}>{getPrefixedAmount(transaction)}</Typography>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};