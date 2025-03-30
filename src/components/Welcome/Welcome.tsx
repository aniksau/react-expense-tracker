import React, { useState } from "react";
import { Box, Button, Typography, useTheme, Card, CardContent } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Lottie from "lottie-react";
import welcomeAnimation from "../../assets/Welcome.json";
import { AddDialog } from "../AddDialog/AddDialog";
import { useTransactions } from "../../hooks/useTransactions";

export const Welcome = () => {
    const theme = useTheme();
    const { isLoading } = useTransactions();
    const [addDialogOpen, setAddDialogOpen] = useState(false);

    return (
        <>
            <Card
                sx={{
                    maxWidth: 500,
                    margin: "auto",
                    textAlign: "center",
                    padding: theme.spacing(3),
                    borderRadius: theme.shape.borderRadius * 2,
                    boxShadow: theme.shadows[4],
                    background: theme.palette.background.paper,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                        transform: "scale(1.02)",
                    },
                }}
            >
                <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                        <Lottie animationData={welcomeAnimation} style={{ height: 250 }} />
                    </Box>

                    <Typography variant="h5" fontWeight="bold" color="textPrimary" gutterBottom>
                        Welcome to Your Expense Tracker!
                    </Typography>
                    <Typography variant="body1" color="textSecondary" mb={2}>
                        Easily manage your expenses and track your spending.
                    </Typography>

                    <Button
                        loading={isLoading}
                        variant="contained"
                        color="primary"
                        startIcon={<AddCircleOutlineIcon />}
                        onClick={() => setAddDialogOpen(true)}
                        sx={{
                            borderRadius: theme.shape.borderRadius * 1.5,
                            padding: theme.spacing(1.5, 3),
                            fontWeight: "bold",
                        }}
                    >
                        Add Transaction
                    </Button>
                </CardContent>
            </Card>
            <AddDialog open={addDialogOpen} closeHandler={() => setAddDialogOpen(false)} />
        </>

    );
};
