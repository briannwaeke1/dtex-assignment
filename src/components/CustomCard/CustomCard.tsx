import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { icons } from "../../components/EmployeeSummary/constants";
import styles from "./CustomCard.module.scss";
import { CustomCardProps } from "./CustomCard.types";

export const CustomCard = ({ data }: CustomCardProps) => {
  const { label, amount, diff, icon } = data;
  const Icon = icons[icon as keyof typeof icons];
  return (
    <Card
      className={styles.container}
      variant="outlined"
    >
      <CardContent>
        <Box className={styles.cardHeader}>
          <Icon />
          <Typography sx={{ fontSize: 14 }}>{label}</Typography>
        </Box>
        <Box className={styles.cardFooter}>
          <Typography sx={{ fontSize: 20 }}>{amount}</Typography>

          <Box className={styles.footer_rightContainer}>
            <OutboundOutlinedIcon sx={{ fontSize: 16, color: "green" }} />
            <Typography sx={{ fontSize: 14, color: "green" }}>
              {`+${diff}%`}{" "}
              <span className={styles.footerText}>last month</span>
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
