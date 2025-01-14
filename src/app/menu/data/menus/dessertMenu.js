const dessertMenu = [
  {
    category: "Desserts",
    items: [
      {
        name: "Tiramisu",
        price: 12,
        description:
          "Espresso-soaked ladyfingers, cocoa powder, mascarpone cream.",
      },
      {
        name: "House Made Crumble",
        price: 10,
        description:
          "Daily rotating crumble, ask your server for today’s creation served with vanilla ice cream.",
          glutenFree: true,
      },
      {
        name: "Chocolate Delice",
        price: 10,
        description: "Rich chocolate ganache, cherry sauce, whipped cream.",
        glutenFree: true,
      },
      {
        name: "Screech Fruit Cake",
        price: 10,
        description: "Whipped cream, caramel sauce, vanilla ice cream.",
        dairyFree: true,
      },
      {
        name: "Ice Cream",
        price: 8,
        description:
          "3 Scoops; choice of sauce: chocolate, caramel, or blueberry.",
          glutenFree: true,
      },
    ],
  },
  {
    category: "Coffee",
    items: [
      { name: "Coffee", price: 4 },
      {
        name: "Tea",
        price: 4,
        description: "Tetley, Green, Peppermint, Earl Grey.",
      },
      { name: "Iced Coffee", price: 5 },
      { name: "Hot Chocolate", price: 5 },
    ],
  },
];

export default dessertMenu;