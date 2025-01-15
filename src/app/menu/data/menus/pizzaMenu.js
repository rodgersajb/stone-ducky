const pizzaMenu = {
  Pizzas: [
    {
      title: "Margherita",
      price: 20,
      description:
        "San Marzano tomato sauce, fior di latte mozzarella, basil, drizzle of EVOO.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Pepperoni",
      price: 22,
      description:
        "San Marzano tomato sauce, Stone Ducky's 3-cheese blend, pepperoni, oregano.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Stone Ducky Supreme",
      price: 25,
      description:
        "San Marzano tomato sauce, Stone Ducky's 3-cheese blend, pepperoni, Newlander's Italian sausage, green peppers, mushrooms, red onion, black olives.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Meat Lovers",
      price: 27,
      description:
        "San Marzano tomato sauce, Stone Ducky's 3-cheese blend, pepperoni, Genoa salami, ham, Newlander Meat's Italian sausage.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "BBQ Chicken",
      price: 22,
      description:
        "Bakeapple BBQ sauce, Stone Ducky's 3-cheese blend, grilled chicken, red onions.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Spicy Duck Diavolo",
      price: 23,
      description:
        "Firey garlic tomato sauce, Stone Ducky's 3-cheese blend, duck confit, roasted red peppers, red onions, jalapeños.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Vegetarian",
      price: 21,
      description:
        "San Marzano tomato sauce, Stone Ducky's 3-cheese blend, Windy Heights Farm's mushrooms, green pepper, red onion, black olives, tomato.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Chicken Alfredo",
      price: 22,
      description:
        "Roasted garlic cream, Stone Ducky's 3-cheese blend, Windy Heights Farm's mushroom, chicken, spinach.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
  Salads: [
    {
      title: "Caesar Salad",
      price: 16,
      description: "Romaine lettuce, house-made croutons, bacon, parmesan.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Watermelon Feta Salad",
      price: 16,
      description:
        "Arugula, watermelon, feta, cucumber, red onion, blueberries, EVOO, balsamic glaze.",
      glutenFree: true,
      dairyFree: false,
    },
    {
      title: "Panzanella",
      price: 16,
      description:
        "Tomatoes, fior di latte mozzarella, croutons, basil, cucumber, red onion, balsamic glaze.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
  "Sides - Add Ons": [
    { title: "Chicken (6oz)", price: 12, glutenFree: true, dairyFree: true },
    { title: "Shrimp (3)", price: 15, glutenFree: true, dairyFree: true },
    { title: "Brisket (4oz)", price: 7, glutenFree: true, dairyFree: true },
    { title: "Duck (4oz)", price: 7, glutenFree: true, dairyFree: true },
    { title: "Fries", price: 8, glutenFree: true, dairyFree: true },
    { title: "Poutine", price: 4, glutenFree: false, dairyFree: false },
    {
      title: "Dressing & Gravy",
      price: 2,
      glutenFree: false,
      dairyFree: false,
    },
  ],
};

export default pizzaMenu;
