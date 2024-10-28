import React, { useState } from "react";

import { Button, Menu, MenuItem, Typography, Box } from "@mui/material";

import { ChevronDown } from "lucide-react";

import Link from "next/link";

const NavDown = ({ title, items }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  {
    /* When dropdown is clicked pass location */
  }
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id={`${title.toLowerCase()}-button`}
        aria-controls={open ? `${title.toLowerCase()}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseEnter={handleMouseEnter}
        endIcon={
          <Box
            sx={{
              display: "flex",
              transform: open ? "rotate(-180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <ChevronDown size={20} />
          </Box>
        }
        sx={{
          textTransform: "none",

          padding: 0,

          minWidth: "auto",

          color: "inherit",

          fontSize: "inherit",

          fontFamily: "inherit",

          fontWeight: "inherit",

          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        {title}
      </Button>

      <Menu
        id={`${title.toLowerCase()}-menu`}
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": `${title.toLowerCase()}-button`,
          onMouseLeave: handleMouseLeave,
        }}
        anchorOrigin={{
          vertical: "bottom",

          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",

          horizontal: "left",
        }}
        sx={{
          "& .MuiMenuItem-root": {
            fontSize: "inherit",

            fontFamily: "inherit",

            color: "inherit",
          },
          "& .MuiPaper-root": {
            width: "100vw", // viewport width
            maxWidth: "100%",
            left: "0 !important",
            right: "0",
          },
          "& .MuiMenu-list": {
            padding: "0",
          },
          "& .MuiList-padding": {
            padding: "0",
          },
        }}
      >
        {items.map((item) => (
          <MenuItem
            key={item.title}
            //allows the menu item to have next.js navigation while looking like a normal li element
            component={Link}
            href={item.link}
            sx={{
              gap: 1,

              display: "flex",

              alignItems: "center",
              px: { xs: 4, md: 6, lg: 8 }, // increasing padding on larger screens
              py: { xs: 1, md: 1.5, lg: 2 },
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

            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NavDown;
