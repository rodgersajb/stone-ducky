const glutenFree = "/images/gluten-free.png";
const dairyFree = "/images/dairy-free.png";

const brunchMenu = {
  Breakfast: [
    {
      title: "Eggs Benedict",
      price: 25,
      description: "Brie, Thai chili sauce.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Stone Ducky Breakfast",
      price: 24,
      description:
        "Two eggs with bacon, sausage, or ham. Served with choice of toast and hash browns.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Brisket Hash",
      price: 25,
      description:
        "Hash browns, roasted red peppers, red onion, provolone, sunny side up egg, bakeapple BBQ sauce.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Breakfast Poutine",
      price: 24,
      description:
        "Hash browns, red onion, cheese curds, hollandaise, sunny side up egg.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Duck Confit Grilled Cheese",
      price: 25,
      description: "Duck confit, melted cheese, grilled bread.",
      glutenFree: false,
      dairyFree: false,
    },
  ],

  Handhelds: [
    {
      title: "Chicken Club Sandwich",
      price: 23,
      description:
        "Carol Ann’s fried chicken, bacon, cheddar, lettuce, tomato, smoked jalapeño aioli.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "The Stone Ducky House Burger",
      price: 24,
      description:
        "Beef patty, cheddar, smoked jalapeño aioli, bacon, lettuce, tomato.",
      glutenFree: false,
      dairyFree: false,
    },
  ],

  Favourites: [
    {
      title: "Chicken & Waffles",
      price: 25,
      description:
        "Buttermilk waffle, Carol Ann’s fried chicken, smoked jalapeño maple syrup.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Stone Ducky Quack Stack",
      price: 19,
      description:
        "Three buttermilk pancakes, bacon, maple syrup, Chantilly cream.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Banana Bread French Toast",
      price: 19,
      description:
        "Bakeapple toffee sauce, Chantilly cream, house-made berry jam, icing sugar, cocoa nibs.",
      glutenFree: false,
      dairyFree: false,
    },
  ],

  Extras: [
    {
      title: "Bacon",
      price: 5,
      description: "",
      glutenFree: true,
      dairyFree: true,
      image: glutenFree,
    },
    {
      title: "Ham",
      price: 5,
      description: "",
      glutenFree: true,
      dairyFree: true,
      image: glutenFree,
    },
    {
      title: "Sausage",
      price: 5,
      description: "",
      glutenFree: true,
      dairyFree: true,
      image: glutenFree,
    },
    {
      title: "Toast",
      price: 4,
      description: "",
      glutenFree: false,
      dairyFree: true,
    },
    {
      title: "Touton",
      price: 8,
      description: "",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Fruit Bowl",
      price: 8,
      description: "",
      glutenFree: true,
      dairyFree: true,
      image: glutenFree,
    },
  ],
};

export default brunchMenu;
