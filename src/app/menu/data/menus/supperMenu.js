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
      title: "Whipped Goat Cheese",
      price: 19,
      description:
        "Chive crema, chili flakes, olive oil, honey, pistachio, bread.",
      glutenFree: false,
      dairyFree: false,
    },
  ],

  Handhelds: [
    {
      title: "The Stone Ducky Burger",
      price: 25,
      description:
        "6oz chuck patty, bacon, American cheddar, romaine lettuce, tomato, red onion, ketchup, mustard, potato bun.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Carol Ann’s Fried Chicken Burger",
      price: 25,
      description:
        "Smoked jalapeño aioli, crispy bacon, romaine lettuce, potato bun.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Brisket Melt",
      price: 24,
      description:
        "Bakeapple BBQ brisket, horseradish aioli, provolone, romaine lettuce, potato bun.",
      glutenFree: false,
      dairyFree: false,
    },
  ],

  Pasta: [
    {
      title: "Chicken Parm",
      price: 28,
      description:
        "Italian herb-crusted chicken, bucatini, diavolo sauce, provolone.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Sausage & Mushroom Campanelle",
      price: 30,
      description:
        "Campanelle pasta, Italian sausage, mushrooms, cream sauce, toasted bread crumbs.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Pesto Bucatini",
      price: 30,
      description: "Bucatini, pesto cream, brown butter, toasted breadcrumbs.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Campanelle Bolognese",
      price: 30,
      description:
        "Campanelle pasta, beef and pork bolognese, Bella Lodi parmesan, toasted breadcrumbs.",
      glutenFree: false,
      dairyFree: false,
    },
  ],

  Entrees: [
    {
      title: "Duck Confit Risotto",
      price: 29,
      description:
        "Brown butter, Parmesan, romesco sauce, celeriac & apple slaw.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Chicken & Ribs",
      price: 35,
      description:
        "Carol Ann’s fried chicken, bakeapple BBQ ribs, coleslaw, fries.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Skin-On Salmon",
      price: 35,
      description:
        "Maple balsamic glaze, celeriac purée, candied pecans, green apple.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Scallops",
      price: 25,
      description: "Smoked pork belly, celeriac purée, apple slaw.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Baked Brie",
      price: 18,
      description:
        "Bakeapple & rosemary, maple–pecan, or caramelized onion & bacon.",
      glutenFree: false,
      dairyFree: false,
    },
  ],

  "Salads and Soups": [
    {
      title: "Roasted Beet Salad",
      price: 16,
      description:
        "Whipped goat cheese, candied pecans, red onion, maple balsamic vinaigrette.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Caesar Salad",
      price: 14,
      description:
        "Romaine lettuce, crisp bacon, Parmesan, croutons, asiago dressing.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Potato & Bacon Chowder",
      price: 18,
      description: "Bacon, corn, green onion, cheddar.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Fisherman’s Soup",
      price: 17,
      description: "Cod, tomato, fennel, chili broth.",
      glutenFree: true,
      dairyFree: true,
      image: glutenFree,
    },
    {
      title: "Tomato Bisque",
      price: 10,
      description: "Sundried tomato crumble, extra virgin olive oil.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
  ],

  
};

export default supperMenu;
