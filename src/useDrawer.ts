import { useState } from "react";

export default function useDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  return {
    isOpen,
    toggleDrawer
  };
}
