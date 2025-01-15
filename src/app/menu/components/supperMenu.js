"use client";
import supperMenu from "../data/menus/supperMenu";
import { useFilterMenu } from "../hooks/useFilterMenu";
import MenuContent from "./menuContent";

export default function SupperMenu() {
  const {
    filteredMenu,
    isGlutenFree,
    isDairyFree,
    setIsGlutenFree,
    setIsDairyFree,
  } = useFilterMenu(supperMenu); 

 
  return (
    <MenuContent filteredMenu={filteredMenu} isDairyFree={isDairyFree} isGlutenFree={isGlutenFree} setIsDairyFree={setIsDairyFree} setIsGlutenFree={setIsGlutenFree} />
  );
}
