import { Fab } from "@mui/material";
import React, { useState } from "react";
import './BottomNav.css';
import AddIcon from '@mui/icons-material/Add';
import { AddDialog } from "../AddDialog/AddDialog";

export const BottomNav = () => {
    const [addDialogOpen, setAddDialogOpen] = useState(false);
    return <>
        <div className="bottom-nav">
            <Fab color="primary" aria-label="add" onClick={() => setAddDialogOpen(true)}>
                <AddIcon />
            </Fab>
        </div>

        <AddDialog open={addDialogOpen} closeHandler={() => setAddDialogOpen(false)} />
    </>


}