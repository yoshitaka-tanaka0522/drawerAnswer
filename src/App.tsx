import "./styles.css";
import Drawer from "@mui/material/Drawer";
import useDrawer from "./useDrawer";
import Header from "./Header";
import Child from "./Child";
import React from "react";

export const DrawerContext = React.createContext({ isOpen: false });

export default function App() {
  const { isOpen, toggleDrawer } = useDrawer();

  return (
    <div className="App">
      <DrawerContext.Provider value={{ isOpen }}>
        <Header onClickMenuButton={toggleDrawer} />
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
          <p>1行目</p>
          <p>2行目</p>
          <p>3行目</p>
        </Drawer>
        <Child />
      </DrawerContext.Provider>
    </div>
  );
}
