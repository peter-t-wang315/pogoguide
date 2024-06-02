"use client";
import {
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
      <Drawer open={open} onClose={() => setOpen(!open)}>
        <List>
          {options.map((option, index) => (
            <ListItem key={option.name}>
              <ListItemButton>
                <ListItemText primary={option.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </IconButton>
  );
}
