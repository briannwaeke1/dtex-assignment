import { Box } from "@mui/material";
import { EmployeeSummary } from "../../components/EmployeeSummary";
import { EmployeesTable } from "../../components/EmployeesTable";
import { Payroll } from "../../components/Payroll";
import { SearchableToolbar } from "../../components/SearchableToolbar";
import { TasksTable } from "../../components/TasksTable";
import styles from "./Dashboard.module.scss";

export const Dashboard = ({ contentWidth }: { contentWidth: number }) => {
  return (
    <Box
      component="main"
      sx={{
        marginLeft: `${contentWidth}px`,
        transition: "0.2s ease-in-out",
        padding: "5px 10px;",
        height: "100%",
      }}
    >
      <Box
        component="section"
        className={styles.section}
      >
        <SearchableToolbar />
        <EmployeeSummary />
      </Box>
      <Box
        className={styles.section}
        component="section"
      >
        <Box className={styles.rowContainer}>
          <TasksTable />
          <TasksTable />
        </Box>
      </Box>
      <Box
        component="section"
        className={styles.section}
      >
        <EmployeesTable />
      </Box>
      <Box
        component="section"
        className={styles.section}
      >
        <Payroll />
      </Box>
    </Box>
  );
};
