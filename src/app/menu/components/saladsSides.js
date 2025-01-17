"use client";
import saladSidesMenu from "../data/menus/saladsSidesMenu";
import { useFilterMenu } from "../hooks/useFilterMenu";
import MenuContent from "./menuContent";

export default function SaladsSidesMenu() {
  const {
    filteredMenu,
    isGlutenFree,
    isDairyFree,
    setIsGlutenFree,
    setIsDairyFree,
  } = useFilterMenu(saladSidesMenu);

  // reusable Menu Component that will display the filtered menu
  return (
    <MenuContent
      filteredMenu={filteredMenu}
      isDairyFree={isDairyFree}
      isGlutenFree={isGlutenFree}
      setIsDairyFree={setIsDairyFree}
      setIsGlutenFree={setIsGlutenFree}
    />
  );
}
