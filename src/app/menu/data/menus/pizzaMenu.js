const glutenFree = "/images/gluten-free.png";

const pizzaMenu = {
  Pizzas: [
    {
      title:
        "**All Pizza Dough Made Fresh In House & Cold Fermented For 24 Hours",
    },
    {
      title:
        "** Gluten-Free crusts are available for small pizzas only. Subject to availability.",
    },
    {
      title: "Margherita",
      price: 23,
      description: "Tomato sauce, Fior Di Latte, basil, EVOO.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Pepperoni",
      price: 24,
      description: "Tomato sauce, 3-cheese blend, pepperoni, oregano.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Supreme",
      price: 27,
      description:
        "Tomato sauce, 3-cheese blend, pepperoni, Italian sausage, green peppers, mushrooms, red onions, black olives.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "The Bianca",
      price: 30,
      description:
        "Bianca sauce, smoked mozzarella, Fior Di Latte, apple, pancetta, sesame seed crust.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "BBQ Chicken",
      price: 25,
      description:
        "Bakeapple BBQ sauce, 3-cheese blend, grilled chicken, red onions.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Spicy Duck Diavolo",
      price: 30,
      description:
        "Spicy diavolo sauce, 3-cheese blend, duck confit, roasted red peppers, jalapeños, red onions.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Vegetarian",
      price: 23,
      description:
        "Tomato sauce, 3-cheese blend, mushrooms, green pepper, red onion, black olives, tomato.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
  ],
  Notes: [
    {
      title: "Pizza Notes",
      description:
        "Add sesame crust +1.50. Gluten-free crust available +3.99. Add a dip for 2.75. Pizza dough made daily in-house and cold fermented for 24 hours.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
  Pasta: [
    {
      title: "Chicken Parm",
      price: 28,
      description:
        "Italian herb-crusted chicken, bucatini, spicy diavolo sauce, mozzarella.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "BBQ Rib Mac & Cheese",
      price: 30,
      description:
        "House-made creste di gallo, bakeapple BBQ pork rib, 3-cheese blend.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Burrata Pesto Bucatini",
      price: 30,
      description:
        "House-made bucatini, pesto cream, brown butter, toasted breadcrumbs, shaved lemon.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Pappardelle Carbonara",
      price: 30,
      description:
        "House-made pappardelle, bacon lardon, egg yolk, parmesan, brown butter.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Creste Di Gallo Bolognese",
      price: 29,
      description:
        "Beef and pork ragu sauce, Bella Lodi parmesan, toasted breadcrumbs.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
};

export default pizzaMenu;
