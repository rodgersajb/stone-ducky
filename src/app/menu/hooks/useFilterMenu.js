"use client"

import { useState } from "react";

export const useFilterMenu = (menuData) => {
     const [isGlutenFree, setIsGlutenFree] = useState(false);
     const [isDairyFree, setIsDairyFree] = useState(false);

     // filter method that will return menu items that are gluten Free and/or dairy Free
     const filteredMenu = Object.entries(menuData).reduce(
       (filtered, [category, items]) => {
         filtered[category] = items.filter((item) => {
            console.log(item, 'item');
           return (
             (!isGlutenFree || item.glutenFree) &&
             (!isDairyFree || item.dairyFree)
           );
         });
         return filtered;
       },
       {}
     );

     return { isGlutenFree, setIsGlutenFree, isDairyFree, setIsDairyFree, filteredMenu };
}
