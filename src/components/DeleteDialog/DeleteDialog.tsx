import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Transaction } from "../../types/transactions";
import React from "react";
import { TransactionIcon } from "../TransactionIcon/TransactionIcon";
import { formatRelativeDate, getPrefixedAmount } from "../../utils/functions";
import { green, red } from "@mui/material/colors";
import { useTransactions } from "../../hooks/useTransactions";

export const DeleteDialog = ({ transaction, open, closeHandler }: { transaction: Transaction, open: boolean, closeHandler: React.MouseEventHandler<HTMLButtonElement> }) => {
    const { deleteTransaction } = useTransactions();

    const confirmDelete = () => {
        deleteTransaction(transaction);
        closeHandler({} as React.MouseEvent<HTMLButtonElement>);
    };

    return <Dialog
        open={open}
        onClose={closeHandler}
    >
        <DialogTitle>
            Delete Transaction?
        </DialogTitle>
        <DialogContent>
            <DialogContentText component={'span'}>
                <Typography>Are you sure you want to delete the transaction below?</Typography>
                <List>
                    <ListItem disablePadding >
                        <TransactionIcon description={transaction.description || ''} toggleDeleteIcon={false} />
                        <ListItemText primary={transaction.description} secondary={formatRelativeDate(transaction.dateTime)} />
                        <Typography color={transaction.transactionType === 'income' ? green[700] : red[700]}>{getPrefixedAmount(transaction.amount, transaction.transactionType)}</Typography>
                    </ListItem>
                </List>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={confirmDelete} variant="contained" color="error">Yes, Delete</Button>
            <Button onClick={closeHandler}>
                No, Close
            </Button>
        </DialogActions>
    </Dialog>
};