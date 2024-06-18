import AddIcon from "@mui/icons-material/Add";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { StatsCard } from "../StatsCard";
import styles from "./EmployeeStats.module.scss";
import { employeeStatsItems } from "./constants.ts";

export const EmployeeStats = () => {
  const [sortValue, setSortValue] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setSortValue(event.currentTarget.textContent);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.actionBarContainer}>
        <Box className={styles.leftContainer}>
          <Button
            startIcon={<CalendarTodayRoundedIcon />}
            endIcon={<KeyboardArrowDownIcon />}
            variant="outlined"
            id="stats-sort-button"
            onClick={handleClick}
            defaultValue="Monthly"
            aria-controls={open ? "stats-sort-button" : undefined}
            aria-expanded={open ? "true" : undefined}
            sx={{
              backgroundColor: "#ffffff",
              color: "#000000",
              border: "1px solid #c4c4c4",
              fontSize: 12,
              padding: "5px 10px",
            }}
            disableRipple
          >
            {sortValue || "Monthly"}
          </Button>
        </Box>
        <Menu
          open={open}
          anchorEl={anchorEl}
          id="stats-sort-menu"
          aria-controls={open ? "stats-sort-button" : undefined}
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
            "aria-labelledby": "stats-sort-button",
          }}
        >
          <MenuItem
            onClick={handleClose}
            disableRipple
          >
            Monthly
          </MenuItem>
        </Menu>
        <Box className={styles.rightContainer}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffffff",
              color: "#000000",
              fontSize: 12,
              padding: "5px 10px",
            }}
          >
            <FileDownloadOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography sx={{ ml: 1, fontSize: 12 }}>Export</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              color: "#ffffff",
              fontSize: 12,
              padding: "5px 10px",
            }}
          >
            <AddIcon sx={{ fontSize: 16 }} />
            <Typography sx={{ ml: 1, fontSize: 12 }}>New entry</Typography>
          </Button>
        </Box>
      </Box>

      <Box className={styles.statsCardContainer}>
        {employeeStatsItems.map((item) => (
          <StatsCard
            key={item.label}
            stats={item}
          />
        ))}
      </Box>
    </Box>
  );
};
