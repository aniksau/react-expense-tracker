import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { getTotalIncomeOrExpense } from "../../utils/functions";
import { TRANSACTIONS } from "../../data";

export const HeroExpense = () => {
    return <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Total Expenses
            </Typography>
            <Typography variant="body2">
                {getTotalIncomeOrExpense(TRANSACTIONS, 'expense')}
            </Typography>
        </CardContent>
        {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
};