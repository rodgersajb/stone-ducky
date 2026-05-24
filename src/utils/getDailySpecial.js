export function getDailySpecial() {
  const specials = [
    {
      day: 0,
      name: "Sunday",
      special: "$5 Kid's Meals",
      description: "Spend $20 and get a Kid's Meal for just $5!",
    },
    { day: 1, name: "Monday", closed: true },
    { day: 2, name: "Tuesday", closed: true },
    { day: 3, name: "Wednesday", description: "$5 off Pasta Dishes" },
    {
      day: 4,
      name: "Thursday",
      special: "Thursday Night Wing Night",
      description: "A 16oz pint & a pound of Chicken Wings for $20!",
    },
    {
      day: 5,
      name: "Friday",
      special: "$5 off all dine-in Pizzas and Pizza Specials",
      description: "(Family Meal Deal, Date Night, Pizza Party)",
    },
    {
      day: 6,
      name: "Saturday",
      special: "BOGO Appetizers",
      description: "Buy one appetizer, get the 2nd 50% off!",
    },
  ];

  const today = new Date().getDay();

  return specials.find((item) => item.day === today);
}
