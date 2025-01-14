const lunchMenu = [
  {
    category: "Subs",
    items: [
      {
        name: "Brisket Horseradish Sub",
        price: 18,
        description:
          "Tender, slow-braised brisket layered with creamy horseradish aioli, provolone, smothered in a Bakeapple BBQ sauce. Finished with arugula and crispy shallots for an irresistible crunch.",
      },
      {
        name: "Chicken Pesto Sub",
        price: 17,
        description:
          "Perfectly grilled chicken paired with vibrant pesto mayo, sun-dried tomatoes, and arugula, topped with freshly shaved parmesan.",
      },
      {
        name: "Cold Cut Sub",
        price: 18,
        description:
          "A hearty classic stacked with layers of pepperoni, genoa salami, roast beef, ham, and turkey, melted mozza, banana peppers, pickles, lettuce, and mayo.",
      },
    ],
  },
  {
    category: "Burgers",
    items: [
      {
        name: "Carol Ann’s Fried Chicken Burger",
        price: 23,
        description:
          "Tossed in our secret herb and spice blend. Topped with smoky jalapeño aioli, crispy bacon, fresh lettuce. This sandwich is packed with bold flavor that hits the spot every time!",
      },
      {
        name: "The Stone Ducky Burger",
        price: 23,
        description:
          "6oz beef patty, perfectly seasoned and grilled, topped with creamy cheddar, smoky jalapeño aioli, crispy bacon for a bold twist. Fresh lettuce, ripe tomato, and crispy onions.",
      },
      {
        name: "The Stone Ducky Brisket Burger",
        price: 27,
        description:
          "Dressed like our House burger, but smothered in our in-house braised Bakeapple BBQ Brisket.",
      },
    ],
  },
  {
    category: "Mains",
    items: [
      {
        name: "Chicken Wings",
        price: 18,
        description:
          "One pound of juicy chicken wings, cooked to perfection and tossed in your choice of Mild, Medium, Hot, Honey Garlic, or our unique, made-in-house Bakeapple BBQ sauce for a flavor experience to savor.",
          glutenFree: true,
          dairyFree: true,
      },
      {
        name: "Fish & Chips",
        price: 18,
        description:
          "Cod that is delicately battered and fried to golden perfection, is served with a generous portion of fries. Accompanied by our house-made tartar sauce.",
          dairyFree: true,
      },
      {
        name: "Chicken Fingers & Fries",
        price: 18,
        description:
          "5 tender strips of chicken, lightly battered and fried until golden and crispy. Perfectly accompanied by a handful of seasoned fries.",
          dairyFree: true,
      },
    ],
  },
  {
    category: "Shareables",
    items: [
      {
        name: "Nachos",
        price: 21,
        description:
          "A vibrant mix of jalapeños, tomatoes, red onions, black olives, and green onions over house-made nacho chips. Perfectly baked, layered, and packed with flavor in every bite.",
        addOns: "Add Brisket or Duck for 5",
        glutenFree: true,
      },
    ],
  },
];

export default lunchMenu;
