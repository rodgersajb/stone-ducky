export function getDailySpecial() {
  const specials = [
    { day: 0, name: "Sunday", special: "Kids Eat Free" },
    { day: 1, name: "Monday", special: "Half-Price Wings" },
    { day: 2, name: "Tuesday", special: "Taco Tuesday - $3 Tacos" },
    { day: 3, name: "Wednesday", special: "Free Dessert with Entrée" },
    { day: 4, name: "Thursday", special: "2-for-1 Burgers" },
    { day: 5, name: "Friday", special: "Fish & Chips Special" },
    { day: 6, name: "Saturday", special: "Prime Rib Night" },
  ];

  const today = new Date().getDay(); 

  return specials.find((item) => item.day === today);
}
