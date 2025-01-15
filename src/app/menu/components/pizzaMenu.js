"use client";
import pizzaMenu from "../data/menus/pizzaMenu";
import { useFilterMenu } from "../hooks/useFilterMenu";
import MenuContent from "./menuContent";

export default function PizzaMenu() {

const { filteredMenu, isGlutenFree, isDairyFree, setIsGlutenFree, setIsDairyFree, } = useFilterMenu(pizzaMenu);

  // reusable Menu Component that will display the filtered menu
   return (
     <MenuContent filteredMenu={filteredMenu} isDairyFree={isDairyFree} isGlutenFree={isGlutenFree} setIsDairyFree={setIsDairyFree} setIsGlutenFree={setIsGlutenFree} />
   );
}
