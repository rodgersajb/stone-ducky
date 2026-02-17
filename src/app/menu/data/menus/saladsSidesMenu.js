const glutenFree = "/images/gluten-free.png";
const dairyFree = "/images/dairy-free.png";

const saladSidesMenu = {
  Salads: [
    {
      title: "Kale Caesar Salad",
      price: 16,
      description:
        "Kale, house-made croutons, bacon lardons, shaved Bella Lodi cheese, fried capers.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Roasted Beet Salad",
      price: 16,
      description:
        "Roasted Beets, Whipped Goat Cheese, Arugula, Shallots, Candied Pecans, Maple Balsamic Dressing.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
  "Sides - Add Ons": [
    {
      title: "Chicken",
      price: 10,
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Shrimp (5)",
      price: 14,
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Brisket",
      price: 7,
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Duck Confit",
      price: 12,
      glutenFree: true,
      dairyFree: true,
      image: glutenFree,
    },
    {
      title: "Fries",
      price: 8,
      glutenFree: true,
      dairyFree: true,
      image: [glutenFree, dairyFree],
    },
    {
      title: "Poutine",
      price: 4,
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Dressing & Gravy",
      price: 2,
      glutenFree: false,
      dairyFree: false,
    },
  ],
};

export default saladSidesMenu;
