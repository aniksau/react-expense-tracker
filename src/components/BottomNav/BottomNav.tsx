import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import './BottomNav.css';
import AddCircle from "@mui/icons-material/AddCircle";

export const BottomNav = () => {
    const [value, setValue] = React.useState(0);
    return (
        <BottomNavigation
            className="bottom-nav"
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Add" icon={< AddCircle />} />
        </BottomNavigation>
    )
}