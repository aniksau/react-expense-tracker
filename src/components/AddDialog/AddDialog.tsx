import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
    Button, Dialog, DialogActions, DialogContent, DialogTitle,
    FormControl, InputAdornment, InputLabel, MenuItem,
    Select, TextField, ToggleButton, ToggleButtonGroup, FormHelperText
} from "@mui/material";
import {
    AccountBalanceWallet, Category, CurrencyRupee, FormatListBulleted, CalendarToday,
    Payments
} from "@mui/icons-material";
import { useTransactions } from "../../hooks/useTransactions";
import { TRANSACTION_CATEGORIES } from "../../constants/constants";
import { Transaction, TransactionCategory } from "../../types/transactions";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { formatIndianCurrency } from "../../utils/functions";

export const AddDialog = ({ open, closeHandler }: { open: boolean, closeHandler: () => void }) => {
    const { addTransaction } = useTransactions();
    const { control, handleSubmit, setValue, reset } = useForm<Transaction>({
        defaultValues: {
            transactionType: "income",
            amount: 0,
            category: "Miscellaneous",
            description: "",
            dateTime: new Date().toISOString().slice(0, 16),
        }
    });

    const [formattedAmount, setFormattedAmount] = useState("");

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, onChange: (value: number) => void) => {
        const rawValue = e.target.value.replace(/[^0-9]/g, "");
        const numericValue = Number(rawValue) || 0;
        setFormattedAmount(formatIndianCurrency(numericValue, 'INR'));
        onChange(numericValue);
    };

    const onAddTransaction = (data: Transaction) => {
        addTransaction(data);
        reset();
        closeHandler();
    };

    const onCloseDialog = () => {
        reset();
        closeHandler();
    };

    return (
        <Dialog open={open} onClose={closeHandler} maxWidth="xs" fullWidth>
            <DialogTitle sx={{ fontWeight: 600, textAlign: "center" }}>Add Transaction</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onAddTransaction)} style={{ display: 'flex', flexDirection: 'column' }}>
                    {/* Toggle Button Group */}
                    <Controller
                        name="transactionType"
                        control={control}
                        render={({ field }) => (
                            <ToggleButtonGroup
                                sx={{ width: "100%", marginBottom: 2 }}
                                color="primary"
                                value={field.value}
                                exclusive
                                onChange={(_, value) => value && setValue("transactionType", value)}
                            >
                                <ToggleButton value="income" sx={{ flex: 1 }}>
                                    <CurrencyRupee color="success" /> Income
                                </ToggleButton>
                                <ToggleButton value="expense" sx={{ flex: 1 }}>
                                    <AccountBalanceWallet color="error" /> Expense
                                </ToggleButton>
                            </ToggleButtonGroup>
                        )}
                    />

                    {/* Amount Input */}
                    <Controller
                        name="amount"
                        control={control}
                        rules={{ required: "Amount is required", min: { value: 1, message: "Must be positive" } }}
                        render={({ field, fieldState }) => (
                            <TextField
                                sx={{ marginBottom: 2 }}
                                variant="outlined"
                                placeholder="Enter amount"
                                value={formattedAmount}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                onChange={(e) => handleAmountChange(e, field.onChange)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Payments />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />

                    {/* Description Input */}
                    <Controller
                        name="description"
                        control={control}
                        rules={{ required: "Description is required" }}
                        render={({ field, fieldState }) => (
                            <TextField
                                sx={{ marginBottom: 2 }}
                                placeholder="Description"
                                variant="outlined"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                {...field}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FormatListBulleted />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />

                    {/* Category Dropdown */}
                    <Controller
                        name="category"
                        control={control}
                        rules={{ required: "Category is required" }}
                        render={({ field, fieldState }) => (
                            <FormControl sx={{ marginBottom: 2 }} error={!!fieldState.error}>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    {...field}
                                    value={field.value}
                                    onChange={(event) =>
                                        setValue("category", event.target.value as TransactionCategory, { shouldValidate: true })
                                    }
                                    displayEmpty
                                    variant="outlined"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Category />
                                        </InputAdornment>
                                    }
                                >
                                    {TRANSACTION_CATEGORIES.map(category => (
                                        <MenuItem key={category} value={category}>
                                            {category}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {fieldState.error && <FormHelperText>{fieldState.error.message}</FormHelperText>}
                            </FormControl>
                        )}
                    />

                    {/* Date and Time Picker */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Controller
                            name="dateTime"
                            control={control}
                            rules={{ required: "Date and time are required" }}
                            render={({ field, fieldState }) => (
                                <DateTimePicker
                                    label="Transaction Date & Time"
                                    value={dayjs(field.value)}
                                    onChange={(value) => setValue("dateTime", value?.toISOString() || "", { shouldValidate: true })}
                                    slotProps={{
                                        textField: {
                                            error: !!fieldState.error,
                                            helperText: fieldState.error?.message,
                                            sx: { marginBottom: 2, width: "100%" },
                                            InputProps: {
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <CalendarToday />
                                                    </InputAdornment>
                                                ),
                                            }
                                        }
                                    }}
                                />
                            )}
                        />
                    </LocalizationProvider>

                    {/* Action Buttons */}
                    <DialogActions >
                        <Button onClick={onCloseDialog} variant="outlined" color="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};
