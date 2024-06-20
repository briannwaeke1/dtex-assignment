import { Box } from "@mui/material";
import { useState } from "react";
import { NavigationDrawer } from "./components/NavigationDrawer";
import { Dashboard } from "./views/Dashboard";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const contentWidth = drawerOpen ? 300 : 70;

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Box>
      <NavigationDrawer
        open={drawerOpen}
        onOpen={handleDrawerOpen}
      />
      <Dashboard contentWidth={contentWidth} />
    </Box>
  );
}

export default App;
