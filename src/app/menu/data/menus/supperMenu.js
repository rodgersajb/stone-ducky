const glutenFree = "/images/gluten-free.png";
const dairyFree = "/images/dairy-free.png";

const supperMenu = {
  Shareables: [
    {
      title: "Nachos",
      price: 21,
      description:
        "Jalapeños, tomatoes, red onions, black olives, green onions.",
      additional: "Add brisket ($7), chicken ($7), or duck ($10)",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Chicken Wings",
      price: 19,
      description:
        "Choice of Mild, Medium, Hot, Honey Garlic, or Bakeapple BBQ sauce.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Southern Fried Calamari",
      price: 19,
      description: "Smoked jalapeño aioli, sesame seed, chive.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Mussels",
      price: 21,
      description: "Shallot, garlic, white wine, smoked jalapeño, cream.",
      glutenFree: false,
      dairyFree: false,
    },
  ],

  Snacks: [
    {
      title: "Truffle Fries",
      price: 14,
      description: "Green onion, truffle, Parmesan, truffle aioli.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Marinated Olives",
      price: 8,
      description: "Chili flakes, fennel, balsamic.",
      glutenFree: true,
      dairyFree: true,
      image: glutenFree,
    },
    {
      title: "Bread & Butter",
      price: 7,
      description: "Whipped butter, balsamic, olive oil.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Whipped Goat Cheese",
      price: 19,
      description:
        "Chive crema, chili flakes, olive oil, honey, toasted pistachio, house bread.",
      glutenFree: false,
      dairyFree: false,
    },
  ],

  "From The Sea": [
    {
      title: "Whole Lobster",
      price: "MP",
      description: "Garlic butter, potato salad, coleslaw.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Fish and Chips",
      price: 24,
      description: "Battered cod, coleslaw, tartar, fries.",
      glutenFree: false,
      dairyFree: true,
      image: dairyFree,
    },
  ],

  "From The Land": [
    {
      title: "Duck Confit Risotto",
      price: 29,
      description:
        "Windy Heights Farm oyster mushrooms, brown butter, balsamic.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Chicken & Ribs",
      price: 35,
      description: "CA's fried chicken, bakeapple BBQ ribs, coleslaw, fries.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Pork Tenderloin",
      price: 32,
      description: "Roasted fingerling potato, romesco sauce, grilled greens.",
      glutenFree: false,
      dairyFree: true,
      image: dairyFree,
    },
  ],

  Handhelds: [
    {
      title: "House Burger",
      price: 25,
      description:
        "Two 3oz chuck patties, bacon, American cheddar, iceberg lettuce, tomato, red onion, ketchup, mustard, potato bun.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Carol Ann’s Fried Chicken Sandwich",
      price: 25,
      description:
        "Smoked jalapeño aioli, crispy bacon, iceberg lettuce, potato bun.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Lobster Roll",
      price: "MP",
      description: "Lobster salad, potato bun, coleslaw.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "The Quack Attack Burger",
      price: 25,
      description:
        "Two 3oz chuck patties, bacon, jalapeño Monterey Jack, iceberg lettuce, caramelized onion aioli, house made hickory sticks, potato bun.",
      glutenFree: false,
      dairyFree: false,
    },
  ],

  "Salads & Soups": [
    {
      title: "Panzanella Salad",
      price: 17,
      description:
        "Tomato, red onion, cucumber, croutons, fior di latte, basil pesto, Italian dressing.",
      glutenFree: false,
      dairyFree: true,
      image: dairyFree,
    },
    {
      title: "Caesar Salad",
      price: 17,
      description:
        "Romaine lettuce, bacon lardons, Parmesan, croutons, fried capers, asiago dressing.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Cup of Seafood Chowder",
      price: 16,
      description:
        "Potato and leek base, corn, cod, ice shrimp, mussels, served with a roll.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Cup of Tomato Bisque",
      price: 9,
      description: "Sundried tomato crumble, EVOO, served with a roll.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
  ],
};

export default supperMenu;
