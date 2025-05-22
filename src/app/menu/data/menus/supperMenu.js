const glutenFree = "/images/gluten-free.png";
const dairyFree = "/images/dairy-free.png";

const supperMenu = {
  Starters: [
    {
      title: "Mussels",
      price: 20,
      description:
        "White wine and garlic or Smoked jalapeño cream sauce. Served with lemon, and slice of house made bread.",
      glutenFree: false,
      dairyFree: true,
      image: dairyFree,
    },
    {
      title: "Mushroom Arancini",
      price: 16,
      description:
        "Crispy risotto balls filled with Windy Heights Farms mushrooms, fried to golden perfection. Served with a truffle aioli and shaved Parmesan for a rich, earthy finish.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Chicken Wings",
      price: 19,
      description:
        "One pound of juicy chicken wings, cooked to perfection and tossed in your choice of Mild, Medium, Hot, Honey Garlic, or our unique, made-in-house Bakeapple BBQ sauce for a flavour experience to savour.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
  ],
  Shareables: [
    {
      title: "Nachos",
      price: 21,
      description:
        "A vibrant mix of jalapeños, tomatoes, red onions, black olives, and green onions over house-made nacho chips. Perfectly baked, layered and packed with flavour in every bite.",
      additional: "Add Brisket or Spiced Chicken: $6",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Spinach & Artichoke Dip",
      price: 19,
      description:
        "A creamy blend of tender spinach, artichoke hearts, melted cheddar cheese and smoked jalapeño. Served with our house-made nacho chips.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Focaccia",
      price: 6,
      description: "House baked daily, EVOO & balsamic.",
      glutenFree: false,
      dairyFree: true,
      image: dairyFree,
    },
  ],
  Entrees: [
    {
      title: "Sausage & Mushroom Cavatappi",
      price: 29,
      description:
        "Newlander Meat’s Italian sausage and earthy, locally sourced Windy Heights Farm's mushrooms, tossed in our 60 clove garlic tomato sauce.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Spaghetti Carbonara",
      price: 29,
      description:
        "A classic Italian favorite! Crisp bacon coated in a creamy sauce of rich egg yolks and freshly grated parmesan.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Lobster Mac & Cheese",
      price: "MP",
      description:
        "Baked cavatappi pasta in a rich 3 Cheese cream sauce, loaded with local lobster and baked with a crispy garlic bread crumb.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Crispy Skin-on Salmon",
      price: 36,
      description:
        "Served on a creamy sun-dried tomato and basil risotto, creating a harmonious balance of textures and tastes in every bite.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
  ],
  Handhelds: [
    {
      title: "The Stone Ducky House Burger",
      price: 25,
      description:
        "6oz beef patty, perfectly seasoned and grilled, topped with creamy cheddar, smoky jalapeño aioli, crispy bacon for a bold twist. Fresh lettuce, ripe tomato, and crispy onions.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Carol Ann’s Fried Chicken Sandwich",
      price: 25,
      description:
        "Tossed in a secret herb and spice blend. Topped with smoky jalapeño aioli, crispy bacon, fresh lettuce. This sandwich is packed with bold flavour that hits the spot every time!",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "The Stone Ducky Brisket Burger",
      price: 28,
      description:
        "Dressed like our House burger, but smothered in our in-house braised Bakeapple BBQ Brisket.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
};

export default supperMenu;
