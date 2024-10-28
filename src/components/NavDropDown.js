import React, { useState, useRef } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const NavDropDown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const dropdownButtonRef = useRef();
  const listItemsRef = useRef();

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleDrawerMouseLeave = (e) => {
    // Check if we're not moving back to the trigger
    if (!dropdownButtonRef.current?.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={dropdownButtonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: 0.5,
          mt: "-25px",
          pt: "25px",
          mb: "-25px",
          pb: "25px",
        }}
      >
        {title}
        {/* <Box>
          <ChevronDown
            size={20}
            sx={{
              display: "flex",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease-in-out",
              marginTop: -25,
            }}
          />
        </Box> */}
      </Box>

      <Drawer
        anchor="top"
        open={open}
        ModalProps={{
          container: document.body,
          //prevents background from scrolling when the drawer is open
          disableScrollLock: false,
        }}
        PaperProps={{
          onMouseLeave: handleDrawerMouseLeave,
          sx: {
            position: "fixed",
            height: "auto",
            maxHeight: "calc(100vh - 80px)",
            //disabling scrollbar on dropdown menu
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
          },
        }}
        sx={{
          zIndex: 2,
        }}
      >
        <List sx={{ mt: 9, py: 0 }} ref={listItemsRef}>
          {items.map((item) => (
            <div key={item.title}>
              <ListItem component={Link} href={item.link} disablePadding>
                <ListItemButton
                  sx={{
                    px: { xs: 4, md: 6, lg: 8 },
                    py: { xs: 1, md: 1.5, lg: 2 },
                    display: "flex",
                    gap: 1,
                  }}
                >
                  {item.img && (
                    <Box
                      component="img"
                      src={item.img}
                      alt={item.altImg || `${item.title} icon`}
                      sx={{
                        width: { xs: "24px", md: "28px", lg: "32px" },
                        height: { xs: "24px", md: "28px", lg: "32px" },
                        objectFit: "contain",
                      }}
                    />
                  )}
                  <ListItemText
                    primary={item.title}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: {
                          xs: "inherit",
                          md: "1.1rem",
                          lg: "1.2rem",
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider sx={{ backgroundColor: "common.dark-gray" }} />
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default NavDropDown;
