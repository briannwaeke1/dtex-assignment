import { IconButton, Toolbar, Typography } from "@mui/material";
import styles from "./TableToolBar.module.scss";
import { TableToolbarProps } from "./TableToolbar.types";

export const TableToolbar = ({ label, icon }: TableToolbarProps) => {
  return (
    <Toolbar className={styles.container}>
      <Typography variant="inherit">{label}</Typography>
      <IconButton
        disableRipple
        sx={{
          border: label === "Today's Tasks" ? "1px solid #e0e0e0" : "none",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        {icon}
      </IconButton>
    </Toolbar>
  );
};
