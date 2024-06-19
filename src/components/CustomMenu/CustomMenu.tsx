import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";

export const CustomMenu = () => {
  const [value] = useState<string>("Monthly");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        startIcon={<CalendarTodayRoundedIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        variant="outlined"
        id="menu-button"
        onClick={handleClick}
        aria-controls={open ? "menu-button" : undefined}
        aria-expanded={open ? "true" : undefined}
        sx={{
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "1px solid #e0e0e0;",
          padding: "5px 10px",
        }}
        disableRipple
      >
        <Typography sx={{ fontSize: 12 }}>{value}</Typography>
      </Button>

      <Menu
        open={open}
        anchorEl={anchorEl}
        id="menu-button"
        aria-controls={open ? "menu-button" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiMenu-paper": {
            width: 120,
          },
        }}
        defaultValue="Monthly"
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
      >
        {["Daily", "Weekly", "Monthly"].map((option) => (
          <MenuItem
            key={option}
            onClick={handleClose}
            disableRipple
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
