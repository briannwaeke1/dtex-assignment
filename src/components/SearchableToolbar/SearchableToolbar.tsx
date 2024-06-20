import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import NotificationsIcon from "@mui/icons-material/Notifications";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Box, Typography } from "@mui/material";
import { SearchBar } from "../SearchBar";

import styles from "./SearchableToolbar.module.scss";

export const SearchableToolbar = () => {
  return (
    <Box className={styles.headerContainer}>
      <Box className={styles.greetingContainer}>
        <Box className={styles.dayIcon}>
          <WbSunnyIcon className={styles.headerIcon} />
        </Box>
        <Typography>Good morning, Brian!</Typography>
      </Box>
      <Box className={styles.actionButtonsContainer}>
        <SearchBar />
        <CalendarTodayIcon sx={{ color: "text.secondary" }} />
        <NotificationsIcon sx={{ color: "text.secondary" }} />
      </Box>
    </Box>
  );
};
