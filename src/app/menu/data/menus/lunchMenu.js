const glutenFree = "/images/gluten-free.png";
const dairyFree = "/images/dairy-free.png";

const lunchMenu = {
  Subs: [
    {
      title: "Brisket Horseradish Sub",
      price: 21,
      description:
        "Tender, slow-braised brisket layered with creamy horseradish aioli, provolone. Smothered in a Bakeapple BBQ sauce. Finished with arugula and crispy shallots for an irresistible crunch.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Chicken Pesto Sub",
      price: 20,
      description:
        "Perfectly grilled chicken paired with vibrant pesto mayo, sun-dried tomatoes, and arugula, topped with freshly shaved parmesan.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
  Burgers: [
    {
      title: "Carol Ann’s Fried Chicken Burger",
      price: 25,
      description:
        "Tossed in our secret herb and spice blend. Topped with smoky jalapeño aioli, crispy bacon, fresh lettuce. This sandwich is packed with bold flavour that hits the spot every time!",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "The Stone Ducky Brisket Burger",
      price: 28,
      description:
        "Dressed like our House burger, but smothered in our in house braised Bakeapple BBQ Brisket.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
  Mains: [
    {
      title: "Lobster Roll",
      price: null, // Market Price
      description:
        "Decadent house made lobster salad in a garlic butter toasted roll, crisp lettuce, served with lemon, coleslaw, and fries.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Chicken Wings",
      price: 19,
      description:
        "One pound of juicy chicken wings, cooked to perfection and tossed in your choice of Mild, Medium, Hot, Honey Garlic, or our unique, made in house Bakeapple BBQ sauce for a flavour experience to savour.",
      glutenFree: true,
      dairyFree: true,
      image: [glutenFree, dairyFree],
    },
    {
      title: "Fish & Chips",
      price: 22,
      description:
        "Cod that is delicately battered and fried to golden perfection, is served with a generous portion of fries. Accompanied by our housemade tartar sauce & coleslaw.",
      glutenFree: false,
      dairyFree: true,
      image: dairyFree,
    },
    {
      title: "Chicken Fingers & Fries",
      price: 19,
      description:
        "5 southern fried strips of chicken, fried until golden and crispy. Perfectly accompanied by a handful of seasoned fries.",
      glutenFree: false,
      dairyFree: true,
      image: dairyFree,
    },
    {
      title: "Mussels",
      price: 20,
      description:
        "White wine and garlic or Smoked jalapeno cream sauce. Served with lemon, and slice of house made bread.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Lobster Mac & Cheese",
      price: "MP", // Market Price
      description:
        "Baked cavatappi pasta in a rich 3 Cheese cream sauce, loaded with local lobster and baked with a crispy garlic bread crumb.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Seafood Chowder",
      price: { cup: 12, bowl: 19 },
      description:
        "Creamy potato and leek base, delicate chunks of fresh cod, shrimp and mussels, corn and crispy bacon.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
};

export default lunchMenu;
