"use client";
import Image from "next/image";

export default function MenuContent({
  filteredMenu,
  isDairyFree,
  isGlutenFree,
  setIsDairyFree,
  setIsGlutenFree,
}) {
  return (
    <section className="w-full">
      <div className="lg:w-3/4 m-auto">
        <div className="mb-6 flex flex-col gap-4">
          <h3 className="text-2xl lg:4xl font-semibold">Filter by:</h3>
          <div className="flex justify-between">
            <label className="flex items-center relative">
              <input
                type="checkbox"
                className="mr-2"
                checked={isGlutenFree}
                onChange={() => setIsGlutenFree(!isGlutenFree)}
              />
              Gluten-Free By Request Options
            </label>
            <Image
              src="/images/gluten-free.png"
              alt="Gluten-Free Icon"
              width={50}
              height={50}
              className="ml-8"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={isDairyFree}
                onChange={() => setIsDairyFree(!isDairyFree)}
              />
              Dairy-Free Options
            </label>
            <Image
              src="/images/dairy-free.png"
              alt="Dairy-Free Icon"
              width={50}
              height={50}
              className="ml-8"
            />
          </div>
        </div>
     
        {Object.entries(filteredMenu).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h3 className="text-3xl pt-4 lg:text-4xl font-semibold border-b-2 pb-2 mb-4">
              {category}
            </h3>
            {items.map((item) => (
              <div key={item.title} className="mb-6">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <h3 className="text-xl font-semibold first:text-center first:text-mutedOrange">{item.title}</h3>
                    <figure className="flex items-center gap-2">
                      {item.glutenFree && (
                        <Image
                          src="/images/gluten-free.png"
                          alt="Gluten-Free Icon"
                          width={30}
                          height={30}
                        />
                      )}
                      {item.dairyFree && (
                        <Image
                          src="/images/dairy-free.png"
                          alt="Dairy-Free Icon"
                          width={30}
                          height={30}
                        />
                      )}
                    </figure>
                  </div>
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
