import { Box } from "@mui/material";
import cn from "classnames";
import { useState } from "react";
import styles from "./App.module.scss";
import { EmployeeStats } from "./components/EmployeeStats";
import { Header } from "./components/Header";
import { SideDrawer } from "./components/SideDrawer";
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
      </Box>
    </main>
  );
}

export default App;
