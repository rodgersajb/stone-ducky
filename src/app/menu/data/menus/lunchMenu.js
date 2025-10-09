const glutenFree = "/images/gluten-free.png";
const dairyFree = "/images/dairy-free.png";

const lunchMenu = {
  Sandwiches: [
    {
      title: "Cod Sandwich",
      price: 24,
      description:
        "Fresh battered cod, served on our homemade brioche with tartar sauce and coleslaw.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Chicken Club Sandwich",
      price: 23,
      description:
        "Tender chicken breast stacked with smoky bacon, lettuce, tomato, and smoked jalapeño aioli on toasted white bread.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
  Burgers: [
    {
      title: "The Stone Ducky House Burger",
      price: 25,
      description:
        "6oz beef patty, perfectly seasoned and grilled, topped with creamy cheddar, smoky jalapeño aioli, crispy bacon for a bold twist. Fresh lettuce, ripe tomato, and crispy onions.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
  Mains: [
    {
      title: "Chicken Wings",
      price: 19,
      description:
        "One pound of juicy chicken wings, cooked to perfection and tossed in your choice of Mild, Medium, Hot, Honey Garlic, or our unique, made in house Bakeapple BBQ sauce for a flavour experience to savour.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
    {
      title: "Fish & Chips",
      price: 22,
      description:
        "Cod that is delicately battered and fried to golden perfection, served with a generous portion of fries. Accompanied by our housemade tartar sauce & coleslaw.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Chicken & Ribs",
      price: 35,
      description:
        "Golden fried chicken and fall-off-the-bone slow-braised ribs, brushed with our signature Bakeapple BBQ sauce. Served with coleslaw, and a choice of side.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
  Salads: [
    {
      title: "Kale Caesar Salad",
      price: 16,
      description:
        "Kale, house-made croutons, bacon lardons, shaved Bella Lodi cheese, and fried capers.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Roasted Beet Salad",
      price: 16,
      description:
        "Roasted beets, whipped goat cheese, arugula, shallots, candied pecans, maple balsamic dressing.",
      glutenFree: true,
      dairyFree: false,
      image: glutenFree,
    },
  ],
  Soups: [
    {
      title: "Split Pea Soup",
      price: 14,
      description:
        "Traditional split peas gently simmered with root vegetables and salt beef, served with a warm bread roll.",
      glutenFree: false,
      dairyFree: false,
    },
    {
      title: "Creamy Tomato Soup",
      price: 13,
      description:
        "Silky tomato soup enriched with cream, topped with house-made croutons and a drizzle of balsamic glaze.",
      glutenFree: false,
      dairyFree: false,
    },
  ],
};

export default lunchMenu;
