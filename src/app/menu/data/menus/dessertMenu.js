const glutenFree = "/images/gluten-free.png";
const dairyFree = "/images/dairy-free.png";

const dessertMenu = {
  Desserts: [
    {
      title: "Chocolate Cake",
      price: 12,
      description: "Whipped cream, cocoa nibs.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "GF Turtle Cheesecake",
      price: 10,
      description: "Whipped cream, chocolate sauce, caramel sauce.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "White Chocolate Blueberry Cheesecake",
      price: 10,
      description: "Whipped cream, blueberry sauce.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Ice Cream",
      price: null,
      description:
        "Three scoops with raspberry coulis, chocolate sauce, or caramel sauce.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
  ],
};

export default dessertMenu;
