import { Box } from "@mui/material";
import { EmployeeSummary } from "../../components/EmployeeSummary";
import { Employees } from "../../components/Employees";
import { Header } from "../../components/Header";
import { Payroll } from "../../components/Payroll";
import { Tasks } from "../../components/Tasks";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <Box>
      <Header />
      <EmployeeSummary />
      <Box className={styles.section}>
        <Box className={styles.rowContainer}>
          <Tasks />
          <Tasks />
        </Box>
        <Employees />
        <Payroll />
      </Box>
    </Box>
  );
};
