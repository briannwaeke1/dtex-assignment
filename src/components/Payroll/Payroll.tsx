import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { TableToolbar } from "../TableToolbar";
import styles from "./Payroll.module.scss";
import { icons, payroll } from "./constants";

export const Payroll = () => {
  return (
    <Box>
      <TableToolbar
        label="Employee payroll"
        icon={<MoreHorizIcon sx={{ fontSize: 16 }} />}
      />
      <Box className={styles.container}>
        {payroll.map(({ label, amount, icon }) => {
          const Icon = icons[icon];
          return (
            <Card
              key={label}
              className={styles.card}
              variant="outlined"
            >
              <CardContent>
                <Typography>{label}</Typography>
                <Box className={styles.cardFooter}>
                  <Icon sx={{ fontSize: 20 }} />
                  <Typography>{amount}</Typography>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
