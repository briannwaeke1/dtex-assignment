import { Box } from "@mui/material";
import { EmployeeSummary } from "../../components/EmployeeSummary";
import { EmployeesTable } from "../../components/EmployeesTable";
import { Header } from "../../components/Header";
import { Payroll } from "../../components/Payroll";
import { TasksTable } from "../../components/TasksTable";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <Box>
      <Header />
      <EmployeeSummary />
      <Box className={styles.section}>
        <Box className={styles.rowContainer}>
          <TasksTable />
        </Box>
        <EmployeesTable />
        <Payroll />
      </Box>
    </Box>
  );
};
