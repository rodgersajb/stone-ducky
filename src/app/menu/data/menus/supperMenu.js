const glutenFree = "/images/gluten-free.png";
const dairyFree = "/images/dairy-free.png";

const supperMenu = {
  Starters: [
    {
      title: "Duck Wings",
      price: 20,
      description:
        "Four succulent duck wings seared in a tangy orange-chili glaze, topped with toasted sesame seeds and fresh green onion.",
      glutenFree: true,
      dairyFree: true,
      image: [glutenFree, dairyFree],
    },
    {
      title: "Duck Arancini",
      price: 16,
      description:
        "Three crispy duck confit arancini, filled with rich, savoury duck and chive, perfectly golden and served with a balsamic glaze and arugula.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Chicken Wings",
      price: 18,
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
        "A vibrant mix of jalapeños, tomatoes, red onions, black olives, and green onions over house-made nacho chips. Perfectly baked, layered, and packed with flavour in every bite.",
      additional: "Add Brisket or Duck: $5",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Spinach & Artichoke Dip",
      price: 19,
      description:
        "A creamy blend of tender spinach, artichoke hearts, melted cheddar cheese, and smoked jalapeño. Served with our house-made nacho chips.",
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
        "Newlander Meat’s Italian sausage and earthy, locally sourced Windy Heights Farm's mushrooms, all tossed in a rich, creamy sauce. Topped with freshly grated parmesan.",
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
      title: "Crispy Skin-on Salmon",
      price: 36,
      description:
        "Served on a creamy sun-dried tomato and basil risotto, creating a harmonious balance of textures and tastes in every bite.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "8oz Striploin",
      price: 45,
      description:
        "Grilled to perfection and served with creamy dauphinoise potatoes, honey-roasted carrots, and a bright chimichurri sauce. A classic with a fresh twist.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
  ],
  Handhelds: [
    {
      title: "The Stone Ducky House Burger",
      price: 23,
      description:
        "6oz beef patty, perfectly seasoned and grilled, topped with creamy cheddar, smoky jalapeño aioli, crispy bacon for a bold twist. Fresh lettuce, ripe tomato, and crispy onions.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Carol Ann’s Fried Chicken Sandwich",
      price: 23,
      description:
        "Tossed in a secret herb and spice blend. Topped with smoky jalapeño aioli, crispy bacon, fresh lettuce. This sandwich is packed with bold flavour that hits the spot every time!",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "The Stone Ducky Brisket Burger",
      price: 27,
      description:
        "Dressed like our House burger, but smothered in our in-house braised Bakeapple BBQ Brisket.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
};

export default supperMenu;
