const glutenFree = "/images/gluten-free.png";
const dairyFree = "/images/dairy-free.png";

const dessertMenu = {
  Desserts: [
    {
      title: "Tiramisu",
      price: 12,
      description:
        "Espresso-soaked ladyfingers, cocoa powder, mascarpone cream.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "House Made Crumble",
      price: 10,
      description:
        "Daily rotating crumble, ask your server for today’s creation served with vanilla ice cream.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Chocolate Delice",
      price: 10,
      description: "Rich chocolate ganache, cherry sauce, whipped cream.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Screech Fruit Cake",
      price: 10,
      description: "Whipped cream, caramel sauce, vanilla ice cream.",
      glutenFree: false,
      dairyFree: false,
      
    },
    {
      title: "Ice Cream",
      price: 8,
      description:
        "3 Scoops; choice of sauce: chocolate, caramel, or blueberry.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
  ],
  Coffee: [
    {
      title: "Coffee",
      price: 4,
      glutenFree: true,
      dairyFree: true,
      image: [glutenFree, dairyFree],
    },
    {
      title: "Tea",
      price: 4,
      description: "Tetley, Green, Peppermint, Earl Grey.",
      glutenFree: true,
      dairyFree: true,
      image: [glutenFree, dairyFree],
    },
    {
      title: "Iced Coffee",
      price: 5,
      glutenFree: true,
      dairyFree: true,
      image: [glutenFree, dairyFree],
    },
    {
      title: "Hot Chocolate",
      price: 5,
      glutenFree: false,
      dairyFree: false,
    },
  ],
};

export default dessertMenu;
