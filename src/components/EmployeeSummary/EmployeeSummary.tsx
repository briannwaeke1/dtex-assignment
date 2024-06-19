import AddIcon from "@mui/icons-material/Add";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Box, Button, Typography } from "@mui/material";
import { CustomCard } from "../CustomCard/index.ts";
import { CustomMenu } from "../CustomMenu";
import styles from "./EmployeeSummary.module.scss";
import { employeeSummaryData } from "./constants.ts";

export const EmployeeSummary = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.actionBarContainer}>
        <CustomMenu />
        <Box className={styles.buttonsContainer}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffffff",
              color: "#000000",
              padding: "5px 10px",
            }}
          >
            <FileDownloadOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography sx={{ ml: 1, fontSize: 12 }}>Export</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              color: "#ffffff",
              padding: "5px 10px",
            }}
          >
            <AddIcon sx={{ fontSize: 16 }} />
            <Typography sx={{ ml: 1, fontSize: 12 }}>New entry</Typography>
          </Button>
        </Box>
      </Box>

      <Box className={styles.cardsContainer}>
        {employeeSummaryData.map((data) => (
          <CustomCard
            key={data.label}
            data={data}
          />
        ))}
      </Box>
    </Box>
  );
};
