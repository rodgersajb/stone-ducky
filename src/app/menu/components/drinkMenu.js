"use client";
import drinkMenu from "../data/menus/drinkMenu";

export default function DrinkMenu() {
  return (
    <section className="w-full">
      <div className="w-3/4 m-auto">
        {drinkMenu.map(({ category, items }) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold text-duckyBlue border-b-2 pb-2 mb-4">
              {category}
            </h2>
            {items.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium">{item.name}</h3>

                  <p className="text-lg font-bold">
                    {typeof item.price === "object"
                      ? `$${item.price.sixOunce} / $${item.price.nineOunce}`
                      : `$${item.price}`}
                  </p>
                </div>
                <p className="text-sm text-gray-700 mt-2">
                  {item.description || "No description available."}
                </p>
                {item.additional && (
                  <p className="text-sm text-gray-500 italic mt-1">
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
