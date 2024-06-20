import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { icons } from "../../components/EmployeeSummary/constants";
import styles from "./CustomCard.module.scss";
import { CustomCardProps } from "./CustomCard.types";

export const CustomCard = ({ data }: CustomCardProps) => {
  const { label, amount, diff, icon } = data;
  const Icon = icons[icon as keyof typeof icons];
  return (
    <Card sx={{ display: "flex", width: "100%", margin: 0, padding: 0 }}>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Box className={styles.headerContainer}>
          <Icon sx={{ fontSize: 16, color: "text.secondary" }} />
          <Typography
            color="text.secondary"
            sx={{
              marginLeft: "5px",
              fontSize: 14,
            }}
          >
            {label}
          </Typography>
        </Box>
        <Box className={styles.footerContainer}>
          <Box className={styles.footerItem}>
            <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
              {amount}
            </Typography>
          </Box>

          <Box className={styles.footerItem}>
            <OutboundOutlinedIcon sx={{ fontSize: 16, color: "green" }} />
            <Typography sx={{ fontSize: 14 }}>
              {`+${diff}% last month`}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
