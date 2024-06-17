import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField } from "@mui/material";
import styles from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <Box className={styles.inputContainer}>
      <TextField
        size="small"
        placeholder="Quick Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <p className={styles.searchButton}>/</p>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
