import { Box, Stack } from "@mui/material";
import cn from "classnames";
import { useState } from "react";
import styles from "./App.module.scss";
import { EmployeeStats } from "./components/EmployeeStats";
import { Employees } from "./components/Employees";
import { Header } from "./components/Header";
import { Payroll } from "./components/Payroll";
import { SideDrawer } from "./components/SideDrawer";
import { Tasks } from "./components/Tasks";
function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <main className={styles.container}>
      <SideDrawer
        open={drawerOpen}
        onOpen={handleDrawerOpen}
      />
      <Box
        className={cn(styles.content, { [styles.contentShift]: !drawerOpen })}
      >
        <Header />
        <EmployeeStats />
        <Box className={styles.tasksContainer}>
          <Stack spacing={2}>
            <Tasks />
          </Stack>
        </Box>
        <Box className={styles.employeesContainer}>
          <Employees />
        </Box>
        <Box className={styles.payrollContainer}>
          <Payroll />
        </Box>
      </Box>
    </main>
  );
}

export default App;
