"use client";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import categories from "@/app/InfoCategories";

export default function NavDrawer({}) {
  const [open, setOpen] = useState(false);
  const options = [
    { name: "Categories", categories: categories },
    { name: "Pages" },
    { name: "Contribute" },
  ];

  return (
    <IconButton onClick={() => setOpen(!open)}>
      <MenuIcon />
      <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(!open)}
        sx={{ zIndex: 2 }}
      >
        <List sx={{ mt: 9 }}>
          {options.map((option, index) => (
            <>
              <ListItem key={option.name} disablePadding>
                <ListItemButton>
                  <ListItemText primary={option.name} />
                </ListItemButton>
              </ListItem>
            </>
          ))}
        </List>
      </Drawer>
    </IconButton>
  );
}
