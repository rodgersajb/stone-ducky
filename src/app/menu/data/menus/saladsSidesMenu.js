const glutenFree = "/images/gluten-free.png";
const dairyFree = "/images/dairy-free.png";

const saladSidesMenu = {
  Salads: [
    {
      title: "Caesar Salad",
      price: 16,
      description: "Romaine lettuce, house-made croutons, bacon, parmesan.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Watermelon Feta Salad",
      price: 16,
      description:
        "Arugula, watermelon, feta, cucumber, red onion, blueberries, EVOO, balsamic glaze.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Panzanella",
      price: 16,
      description:
        "Tomatoes, fior di latte mozzarella, croutons, basil, cucumber, red onion, balsamic glaze.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
  "Sides - Add Ons": [
    {
      title: "Chicken (6oz)",
      price: 12,
      glutenFree: true,
      dairyFree: true,
      image: [glutenFree, dairyFree],
    },
    {
      title: "Shrimp (3)",
      price: 15,
      glutenFree: true,
      dairyFree: true,
      image: [glutenFree, dairyFree],
    },
    {
      title: "Brisket (4oz)",
      price: 7,
      glutenFree: true,
      dairyFree: true,
      image: [glutenFree, dairyFree],
    },
    {
      title: "Duck (4oz)",
      price: 7,
      glutenFree: true,
      dairyFree: true,
      image: [glutenFree, dairyFree],
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
