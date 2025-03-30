import React, { useCallback, useMemo, useState } from "react";
import Restaurant from "@mui/icons-material/Restaurant";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import Home from "@mui/icons-material/Home";
import Receipt from "@mui/icons-material/Receipt";
import { CurrencyRupee, Delete } from "@mui/icons-material";
import { Avatar, ListItemAvatar } from "@mui/material";

const hoverDeleteIcon = <Delete color="error" />;

const expenseIconMap = [
  {
    keywords: ["food", "restaurant", "dining"],
    icon: <Restaurant color="primary" />
  },
  {
    keywords: ["grocery", "shopping", "supermarket"],
    icon: <ShoppingCart color="secondary" />
  },
  {
    keywords: ["transport", "fuel", "gas", "car", "uber"],
    icon: <DirectionsCar color="warning" />
  },
  {
    keywords: ["rent", "mortgage", "house"],
    icon: <Home color="primary" />
  },
  {
    keywords: ["salary", "income", "paycheck", "dividend", "payment", "job", "business"],
    icon: <CurrencyRupee color="success" />
  },
  {
    keywords: ["bill", "utility", "internet", "phone"],
    icon: <Receipt color="info" />
  }
];

export const TransactionIcon = ({ description, toggleDeleteIcon = true }: { description: string, toggleDeleteIcon?: boolean }) => {
  const match = useMemo(() => expenseIconMap.find(entry =>
    entry.keywords.some(keyword => description.toLowerCase().includes(keyword))
  ), [description]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setTimeout(() => setIsHovered(true), 100);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTimeout(() => setIsHovered(false), 100);
  }, []);

  return (
    <ListItemAvatar onMouseEnter={handleMouseEnter} sx={{ cursor: 'pointer' }}
      onMouseLeave={handleMouseLeave}>
      <Avatar
      >
        {isHovered && toggleDeleteIcon ? hoverDeleteIcon : (match ? match.icon : <Receipt color="info" />)}
      </Avatar>
    </ListItemAvatar >
  );
};