import { useContext } from "react";
import { DrawerContext } from "./App";

export default function Child() {
  const { isOpen } = useContext(DrawerContext);
  return (
    <>
      {isOpen && <div>Drawerは開いています</div>}
      {!isOpen && <div>Drawerは閉じています</div>}
    </>
  );
}
