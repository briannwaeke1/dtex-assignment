import cn from "classnames";
import { useState } from "react";
import styles from "./App.module.scss";
import { Header } from "./components/Header";
import { SideDrawer } from "./components/SideDrawer";
("use client");

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
      <section className={cn(styles.content, { [styles.contentShift]: !open })}>
        <Header />
      </section>
    </main>
  );
}

export default App;
