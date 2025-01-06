"use client";
import pizzaMenu from "../data/menus/pizzaMenu";

export default function PizzaMenu() {
  return (
    <section className="w-full">
      <div className="w-3/4 m-auto">
        {pizzaMenu.map(({ category, items }) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold text-duckyBlue border-b-2 pb-2 mb-4">
              {category}
            </h2>
            {items.map((item) => (
              <div key={item.name} className="mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <p className="text-lg font-bold">${item.price}</p>
                </div>
                <p className="text-sm text-gray-700 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
