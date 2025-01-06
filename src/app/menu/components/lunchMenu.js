"use client";

import lunchMenu from "../data/menus/lunchMenu";

export default function LunchMenu() {
  return (
    <section className="w-full">
      <div className="w-3/4 m-auto">
        {lunchMenu.map(({ category, items }) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl lg:text-4xl font-semibold text-duckyBlue border-b-2 pb-2 mb-4">
              {category}
            </h2>
            {items.map(({ name, price, description, addOns }) => (
              <div key={name} className="mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-lg font-bold">{price}</p>
                </div>
                <p className="text-md text-gray-700 mt-2 w-3/4">{description}</p>
                {addOns && (
                  <p className="text-md text-gray-500 italic mt-1">{addOns}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
