import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { TableToolbar } from "../TableToolbar";
import styles from "./Payroll.module.scss";
import { icons, payroll } from "./constants";

export const Payroll = () => {
  return (
    <Box className={styles.container}>
      <TableToolbar
        label="Employee payroll"
        icon={<MoreHorizIcon sx={{ fontSize: 16 }} />}
      />
      <Box className={styles.content}>
        {payroll.map(({ label, amount, icon }) => {
          const Icon = icons[icon];
          return (
            <Card
              key={label}
              className={styles.card}
              variant="outlined"
            >
              <CardContent>
                <Typography color="text.secondary">{label}</Typography>

                <Box className={styles.cardFooter}>
                  <Icon sx={{ fontSize: 16, color: "text.secondary" }} />
                  <Typography
                    sx={{
                      marginLeft: "5px",
                      fontSize: 14,
                      color: "text.secondary",
                    }}
                  >
                    {amount}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
