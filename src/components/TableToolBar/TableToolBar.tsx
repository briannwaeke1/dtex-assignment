import { IconButton, Toolbar, Typography } from "@mui/material";
import styles from "./TableToolBar.module.scss";
import { TableToolBarProps } from "./TableToolBar.types";

export const TableToolBar = ({ label, icon }: TableToolBarProps) => {
  return (
    <Toolbar className={styles.container}>
      <Typography variant="inherit">{label}</Typography>
      <IconButton
        disableRipple
        sx={{
          border: label === "Tasks" ? "1px solid #e0e0e0" : "none",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        {icon}
      </IconButton>
    </Toolbar>
  );
};
