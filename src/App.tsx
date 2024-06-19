import { Box } from "@mui/material";
import cn from "classnames";
import { useState } from "react";
import styles from "./App.module.scss";
import { SideDrawer } from "./components/SideDrawer";
import { Dashboard } from "./views/Dashboard";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <main>
      <SideDrawer
        open={drawerOpen}
        onOpen={handleDrawerOpen}
      />
      <Box
        className={cn(styles.content, {
          [styles.content_mini_nav]: !drawerOpen,
        })}
      >
        <Dashboard />
      </Box>
    </main>
  );
}

export default App;
