"use client";

import dessertMenu from "../data/menus/dessertMenu";
import { useFilterMenu } from "../hooks/useFilterMenu";
import MenuContent from "./menuContent";

export default function DessertMenu() {

      const {
        filteredMenu,
        isGlutenFree,
        isDairyFree,
        setIsGlutenFree,
        setIsDairyFree,
      } = useFilterMenu(dessertMenu);

 return (
   <MenuContent filteredMenu={filteredMenu} isDairyFree={isDairyFree} isGlutenFree={isGlutenFree} setIsDairyFree={setIsDairyFree} setIsGlutenFree={setIsGlutenFree} />
 );
}
