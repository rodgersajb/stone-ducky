"use client";
import pizzaMenu from "../data/menus/pizzaMenu";
import { useFilterMenu } from "../hooks/useFilterMenu";

export default function PizzaMenu() {

const { filteredMenu, isGlutenFree, isDairyFree, setIsGlutenFree, setIsDairyFree, } = useFilterMenu(pizzaMenu);

  return (
    <section className="w-full">
      <div className="lg:w-3/4 m-auto">
        <div className="mb-6 flex flex-col gap-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={isGlutenFree}
              onChange={() => setIsGlutenFree(!isGlutenFree)}
            />
            Show Gluten-Free Options Only
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={isDairyFree}
              onChange={() => setIsDairyFree(!isDairyFree)}
            />
            Show Dairy-Free Options Only
          </label>
        </div>
        {Object.entries(filteredMenu).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h3 className="text-3xl pt-4 lg:text-4xl font-semibold border-b-2 pb-2 mb-4">
              {category}
            </h3>
            {items.map((item) => (
              <div key={item.title} className="mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-lg font-bold">{item.price}</p>
                </div>
                <p className="text-md text-gray-700 mt-2 lg:w-3/4">
                  {item.description}
                </p>
                {item.additional && (
                  <p className="text-md text-gray-500 italic mt-1">
                    {item.additional}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
