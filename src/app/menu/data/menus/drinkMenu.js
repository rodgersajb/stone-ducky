const drinkMenu = [
  {
    category: "Cocktails",
    items: [
      {
        name: "Bramble al Nero",
        price: 12,
        description: "Tanqueray Gin, Blackberry, Ginger, Lemon, Soda",
      },
      {
        name: "The Amore",
        price: 13,
        description:
          "Cherry Brandy, Bulleit Bourbon, Lemon, Spiced Cherry, Soda",
      },
      {
        name: "Strawberry Kiwi Martini",
        price: 13,
        description: "Absolut Vodka, Melon Liquor, Strawberry, Kiwi, Lemon",
      },
      {
        name: "Rylei's Blu Fresco",
        price: 12,
        description: "White Rum, Blueberry, Mint, Lime, Soda",
      },
      {
        name: "Cutler's Fiamma Tropicale",
        price: 13,
        description: "Sauza, Coconut Milk, Lime, Smoked Jalapeno",
      },
      {
        name: "The Ducky Frozen Bellinis",
        price: 13,
        description: "Strawberry or Peach",
      },
    ],
  },
  {
    category: "Classics",
    items: [
      {
        name: "Mojito",
        price: 11,
        description: "Rum, Lime, Mint, Sugar, Soda Water",
      },
      { name: "Daiquiri", price: 12, description: "Rum, Strawberry" },
      {
        name: "Margarita",
        price: 11,
        description: "Tequila, Triple Sec, Lime, Agava",
      },
      {
        name: "Whiskey Sour",
        price: 11,
        description: "Whiskey, Egg White, Simple Syrup, Lemon",
      },
      {
        name: "Pina Colada",
        price: 12,
        description: "Rum, Coconut, Pineapple",
      },
      {
        name: "Seabreeze",
        price: 11,
        description: "Vodka, Cranberry, Grapefruit Juice",
      },
    ],
  },
  {
    category: "Spirits",
    items: [
      {
        name: "Rum",
        description:
          "Lambs White, Lambs Palm Breeze, Captain Morgan Spiced, Screech, Appleton",
      },
      {
        name: "Whisky",
        description: "Wisers, Crown Royal, Bulleit Bourbon, Proper 12",
      },
      { name: "Gin", description: "Tanqueray, Beef Eater, Old Tom, Empress" },
      { name: "Vodka", description: "Absolut, Tito's, Grey Goose" },
      { name: "Scotch", description: "Bowmore 12, Glenlivet 12" },
      {
        name: "Liqueur",
        description:
          "Bailey's, Khaluha, Campari, Aperol, Cherry Brandy, Apple Sourpuss",
      },
    ],
  },
  {
    category: "By The Glass",
    items: [
      {
        name: "Copper Moon",
        price: { sixOunce: 12, nineOunce: 15 },
        description: "Pinot Grigio, Canada",
      },
      {
        name: "Bread & Butter",
        price: { sixOunce: 19, nineOunce: 23 },
        description: "2022, Chardonnay, USA",
      },
      {
        name: "Nespolino",
        price: { sixOunce: 12, nineOunce: 15 },
        description: "2019, Sangiovese & Merlot, Italy",
      },
      {
        name: "Catena",
        price: { sixOunce: 19, nineOunce: 23 },
        description: "2021, Malbec, Argentina",
      },
    ],
  },
  {
    category: "By The Bottle",
    items: [
      {
        name: "Bread & Butter",
        price: 62,
        description: "2021, Rose, California, USA",
      },
      {
        name: "Satellite, by Spy Valley",
        price: 57,
        description: "2022, Sauvignon Blanc, New Zealand",
      },
      {
        name: "Duckhorn Decoy",
        price: 94,
        description: "2021, Cabernet Sauvignon, USA",
      },
      { name: "El Gringo", price: 52, description: "2019, Tempranillo, Spain" },
    ],
  },
  {
    category: "Beer",
    items: [
      {
        name: "Domestic",
        price: 7,
        description: "Michelob Ultra, Coors Light, Canadian, Bud Light, Blue",
      },
      { name: "Premium", price: 8.5, description: "Corona, Heineken" },
      { name: "Iceberg", price: 10 },
      { name: "Tall Cans", price: 10 },
      { name: "Draught (16oz)", description: "Ask about our rotating taps" },
    ],
  },
  {
    category: "Non-Alcoholic",
    items: [
      {
        name: "Soda",
        price: 4,
        description:
          "Pepsi, Diet Pepsi, Root Beer, Ice Tea, Ginger Ale, 7up, Lemonade",
      },
      {
        name: "Ducky Sunrise",
        price: 8,
        description: "Guava, Passion Fruit, Cranberry, Pineapple, Boba",
      },
      { name: "Heineken 0.0", price: 6 },
      {
        name: "Mocktail",
        price: 8,
        description: "Daquiri, Caesar, Pina Colada, Mojito, Margarita",
      },
      {
        name: "Limonata",
        price: 8,
        description: "Blackberry, Blueberry, Strawberry",
      },
    ],
  },
];

export default drinkMenu;