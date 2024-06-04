"use client";
import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import categories from "@/app/InfoCategories";
import { useRouter } from "next/navigation";

export default function NavDrawer({}) {
  const [open, setOpen] = useState(false);
  const [collapseIndex, setCollapseIndex] = useState(null);
  const { push } = useRouter();
  const options = [
    { name: "Categories", sections: categories },
    { name: "Pages" },
    { name: "Contribute" },
  ];

  return (
    <>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={open}
        onClose={() => {
          setCollapseIndex(null);
          setOpen(!open);
        }}
        sx={{ zIndex: 2 }}
      >
        <List sx={{ mt: 9, pb: 0 }}>
          {options.map((option, index) => (
            <>
              <ListItem
                key={option.name}
                onClick={() =>
                  setCollapseIndex(collapseIndex === null ? index : null)
                }
                disablePadding
              >
                <ListItemButton sx={{ px: 3 }}>
                  <ListItemText primary={option.name} />
                  {collapseIndex === index ? (
                    <ExpandLess sx={{ color: "common.dark-gray" }} />
                  ) : (
                    <ExpandMore sx={{ color: "common.dark-gray" }} />
                  )}
                </ListItemButton>
              </ListItem>
              <Divider sx={{ backgroundColor: "common.dark-gray" }} />
              <Collapse in={collapseIndex === index} unmountOnExit>
                {option?.sections?.map((section) => (
                  <List disablePadding>
                    <ListItemButton
                      sx={{ py: 0.75, px: 5 }}
                      onClick={() => {
                        section?.link ? push(section.link) : null;
                        setCollapseIndex(null);
                        setOpen(false);
                      }}
                    >
                      <ListItemText
                        secondary={
                          <Typography
                            variant="body2"
                            color={"foreground.light"}
                          >
                            {section.title}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <Divider
                      sx={{
                        backgroundColor: "common.gray",
                        opacity: 0.8,
                        height: "67%",
                      }}
                    />
                  </List>
                ))}
              </Collapse>
            </>
          ))}
        </List>
      </Drawer>
    </>
  );
}
