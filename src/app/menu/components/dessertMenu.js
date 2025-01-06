"use client";
import dessertMenu from "../data/menus/dessertMenu";

export default function DessertMenu() {
  return (
    <section className="w-full">
      <div className="w-3/4 m-auto">
        {dessertMenu.map(({ category, items }) => (
          <div key={category} className="mb-8">
            <h2 className="text-4xl font-semibold text-duckyBlue border-b-2 pb-2 mb-4">
              {category}
            </h2>
            {items.map((item) => (
              <div key={item.name} className="mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <p className="text-lg font-bold">${item.price}</p>
                </div>
                <p className="text-sm text-gray-700 mt-2">{item.description}</p>
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
