import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
import { Box, Card, CardContent, Typography } from "@mui/material";
import styles from "./StatsCard.module.scss";
import { StatsCardProps } from "./StatsCard.types";

export const StatsCard = ({ stats }: StatsCardProps) => {
  const { label, amount, diff } = stats;
  return (
    <Card
      className={styles.container}
      variant="outlined"
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          gutterBottom
        >
          {label}
        </Typography>
        <Box className={styles.footerContainer}>
          <Box>
            <Typography
              sx={{ fontSize: 20 }}
              component="div"
            >
              {amount}
            </Typography>
          </Box>
          <Box
            component="div"
            className={styles.footer_rightContainer}
          >
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
