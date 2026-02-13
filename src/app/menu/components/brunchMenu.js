"use client"
import brunchMenu from "../data/menus/brunchMenu"
import { useFilterMenu } from "../hooks/useFilterMenu"
import MenuContent from "./menuContent"

export default function BrunchMenu() {
    const {
      filteredMenu,
      isGlutenFree,
      isDairyFree,
      setIsGlutenFree,
      setIsDairyFree,
    } = useFilterMenu(brunchMenu);
    
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