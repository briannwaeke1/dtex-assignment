import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import { TableHeaderProps } from "./TableHeader.types";

export const TableHeader = ({ label, icon }: TableHeaderProps) => {
  return (
    <Toolbar
      sx={{
        height: 32,
        padding: 0,
        margin: 0,
        border: "1px solid #e0e0e0",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 16 }}>{label}</Typography>
        <IconButton
          disableRipple
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          {icon}
        </IconButton>
      </Box>
    </Toolbar>
  );
};
