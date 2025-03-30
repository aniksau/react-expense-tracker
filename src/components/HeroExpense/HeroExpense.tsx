import { Card, CardContent, Typography, useTheme, Box, Skeleton } from "@mui/material";
import React, { useCallback, useState, useEffect } from "react";
import { formatIndianCurrency, getChartData, getTotalIncomeOrExpense } from "../../utils/functions";
import { PieChart } from "@mui/x-charts";
import { useTransactions } from "../../hooks/useTransactions";
import { SentimentDissatisfied } from "@mui/icons-material";

export const HeroExpense = () => {
    const { transactions } = useTransactions();
    const formatCurrencyCallback = useCallback(formatIndianCurrency, [transactions]);
    const theme = useTheme();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <Card
            sx={{
                width: "100%",
                maxHeight: 320,
                borderRadius: theme.shape.borderRadius * 1.5,
                padding: theme.spacing(2),
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                    boxShadow: theme.shadows[6],
                },
            }}
        >
            <CardContent>
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: theme.typography.fontWeightBold,
                        marginBottom: theme.spacing(1),
                        color: theme.palette.text.secondary,
                        textTransform: "uppercase",
                        fontSize: "0.9rem"
                    }}
                >
                    Transaction Breakdown
                </Typography>

                {loading ? (
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: 200 }}>
                        <Skeleton variant="circular" width={120} height={120} />
                    </Box>
                ) : transactions.length === 0 ? (
                    <Box sx={{ textAlign: "center", padding: theme.spacing(2) }}>
                        <SentimentDissatisfied
                            sx={{ fontSize: 60, color: theme.palette.text.disabled }}
                        />
                        <Typography
                            variant="body1"
                            sx={{
                                marginTop: theme.spacing(1),
                                color: theme.palette.text.secondary
                            }}
                        >
                            No transactions found
                        </Typography>
                    </Box>
                ) : (
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box sx={{ flex: 1 }}>
                            <PieChart
                                margin={{ left: 80 }}
                                series={[
                                    {
                                        data: getChartData(transactions),
                                        innerRadius: 40,
                                        outerRadius: 80,
                                        paddingAngle: 5,
                                        cornerRadius: 5,
                                    },
                                ]}
                                height={250}
                                slotProps={{
                                    legend: {
                                        direction: 'row',
                                        position: { vertical: 'bottom', horizontal: 'middle' },
                                        padding: 5,
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};
