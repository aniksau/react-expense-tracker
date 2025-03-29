import React from "react";
import Restaurant from "@mui/icons-material/Restaurant";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import Home from "@mui/icons-material/Home";
import AttachMoney from "@mui/icons-material/AttachMoney";
import Receipt from "@mui/icons-material/Receipt";

const expenseIconMap = [
  { keywords: ["food", "restaurant", "dining"], icon: <Restaurant color="primary" /> },
  { keywords: ["grocery", "shopping", "supermarket"], icon: <ShoppingCart color="secondary" /> },
  { keywords: ["transport", "fuel", "gas", "car", "uber"], icon: <DirectionsCar color="warning" /> },
  { keywords: ["rent", "mortgage", "house"], icon: <Home color="primary" /> },
  { keywords: ["salary", "income", "paycheck", "dividend", "payment", "job", "business"], icon: <AttachMoney color="success" /> },
  { keywords: ["bill", "utility", "internet", "phone"], icon: <Receipt color="info" /> },
];

export const TransactionIcon = ({ description }: { description: string }) => {
  const match = expenseIconMap.find(entry =>
    entry.keywords.some(keyword => description.toLowerCase().includes(keyword))
  );
  return match ? match.icon : <Receipt color="info" />;
};