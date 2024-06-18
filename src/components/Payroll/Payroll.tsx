import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { TableHeader } from "../TableHeader";
import styles from "./Payroll.module.scss";
import { icons, payroll } from "./constants";

export const Payroll = () => {
  return (
    <Box className={styles.container}>
      <TableHeader
        label="Payroll"
        icon={<MoreHorizIcon />}
      />
      <Box className={styles.cardsContainer}>
        {payroll.map(({ label, amount, icon }) => {
          const Icon = icons[icon];
          return (
            <Card
              key={label}
              className={styles.card}
              variant="outlined"
            >
              <CardContent>
                <Box className={styles.headerContainer}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                  >
                    {label}
                  </Typography>
                </Box>
                <Box className={styles.footerContainer}>
                  <Icon />

                  <Typography sx={{ fontSize: 20 }}>{amount}</Typography>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
