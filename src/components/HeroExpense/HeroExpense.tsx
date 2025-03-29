import { Card, CardContent, Typography, useTheme } from "@mui/material";
import React from "react";
import { getTotalIncomeOrExpense } from "../../utils/functions";
import { TRANSACTIONS } from "../../utils/data";
import { PieChart } from "@mui/x-charts";

export const HeroExpense = () => {
    const theme = useTheme();

    return <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Total Expenses
            </Typography>
            <Typography variant="body2">
                {getTotalIncomeOrExpense(TRANSACTIONS, 'expense')}
            </Typography>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                        ],
                    },
                ]}
                width={400}
                height={200}
            />
        </CardContent>
        {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
};