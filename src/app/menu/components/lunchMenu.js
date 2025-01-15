"use client";

import lunchMenu from "../data/menus/lunchMenu";
import { useFilterMenu } from "../hooks/useFilterMenu";
import MenuContent from "./menuContent";

export default function LunchMenu() {

  const {
    filteredMenu,
    isGlutenFree,
    isDairyFree,
    setIsGlutenFree,
    setIsDairyFree,
  } = useFilterMenu(lunchMenu);
 
  return (
    <MenuContent filteredMenu={filteredMenu} isDairyFree={isDairyFree} isGlutenFree={isGlutenFree} setIsDairyFree={setIsDairyFree} setIsGlutenFree={setIsGlutenFree} />
  );
}
