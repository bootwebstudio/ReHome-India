const mainData = [
  // 🛋️ Seating
  {
    id: 1,
    parentCat: "Seating",
    cat: "Sofas & Sofa Sets",
    name: "Green Modern 2-Seater Sofa",
    condition: "Excellent Condition",
    price: 20000,
    originalPrice: 40000,
    image:
      "https://i.pinimg.com/1200x/15/a6/e6/15a6e691b2863239f54f7b0a46cd187b.jpg",
  },
  {
    id: 2,
    parentCat: "Seating",
    cat: "Recliners",
    name: "Classic Brown Leather Recliner",
    condition: "Good Condition",
    price: 15000,
    originalPrice: 32000,
    image:
      "https://i.pinimg.com/1200x/d7/d5/11/d7d5115fe4f0e8ccad611dc41027bcf5.jpg",
  },
  {
    id: 3,
    parentCat: "Seating",
    cat: "Lounge Chairs",
    name: "Blue Fabric Lounge Chair",
    condition: "Excellent Condition",
    price: 8500,
    originalPrice: 18000,
    image:
      "https://i.pinimg.com/1200x/dd/a1/84/dda18433c068af0971ddcddd9030726f.jpg",
  },
  {
    id: 4,
    parentCat: "Seating",
    cat: "Dining Chairs",
    name: "Set of 4 Wooden Dining Chairs",
    condition: "Good Condition",
    price: 12000,
    originalPrice: 24000,
    image:
      "https://i.pinimg.com/1200x/5f/0e/75/5f0e755114a8839471c664ddac77d5fa.jpg",
  },
  {
    id: 5,
    parentCat: "Seating",
    cat: "Office Chairs",
    name: "Ergonomic Mesh Office Chair",
    condition: "Like New",
    price: 7000,
    originalPrice: 15000,
    image:
      "https://i.pinimg.com/1200x/f6/82/56/f68256b9bae8f5f2d192446d144034e0.jpg",
  },

  // 🪵 Tables
  {
    id: 6,
    parentCat: "Tables",
    cat: "Coffee Tables",
    name: "Round Marble Coffee Table",
    condition: "Excellent Condition",
    price: 9500,
    originalPrice: 20000,
    image:
      "https://i.pinimg.com/1200x/fe/87/07/fe87070443eecc4bfb76401eb22019e1.jpg",
  },
  {
    id: 7,
    parentCat: "Tables",
    cat: "Dining Tables",
    name: "6-Seater Teak Wood Dining Table",
    condition: "Good Condition",
    price: 18000,
    originalPrice: 40000,
    image:
      "https://i.pinimg.com/1200x/95/53/48/955348a4173356f943a596974cbe9d2a.jpg",
  },
  {
    id: 8,
    parentCat: "Tables",
    cat: "Office Tables",
    name: "Compact Table with Drawer",
    condition: "Excellent Condition",
    price: 5500,
    originalPrice: 12000,
    image:
      "https://i.pinimg.com/1200x/90/14/d7/9014d7d5b4a1c617f8e663d6bd04f3f9.jpg",
  },
  {
    id: 9,
    parentCat: "Tables",
    cat: "Bedside Tables",
    name: "Minimal Wooden Bedside Table",
    condition: "Like New",
    price: 4000,
    originalPrice: 9000,
    image:
      "https://i.pinimg.com/736x/b8/34/26/b834261fd0288f1687132a741e44d91a.jpg",
  },
  {
    id: 10,
    parentCat: "Tables",
    cat: "Console Tables",
    name: "Modern Console Table with Storage",
    condition: "Good Condition",
    price: 7500,
    originalPrice: 16000,
    image:
      "https://i.pinimg.com/1200x/75/f3/4a/75f34a7e91f87b77eac65916f54b9bcd.jpg",
  },

  // 🛏️ Beds
  {
    id: 11,
    parentCat: "Beds",
    cat: "King Size Beds",
    name: "King Size Bed with Headboard",
    condition: "Excellent Condition",
    price: 22000,
    originalPrice: 45000,
    image:
      "https://i.pinimg.com/1200x/de/bc/46/debc4660cebb71cabaf8360e2be63e20.jpg",
  },
  {
    id: 12,
    parentCat: "Beds",
    cat: "Queen Size Beds",
    name: "Queen Bed with Hydraulic Storage",
    condition: "Like New",
    price: 20000,
    originalPrice: 42000,
    image:
      "https://i.pinimg.com/1200x/eb/16/0c/eb160cfe8ec1c01fd80ad5110763384c.jpg",
  },
  {
    id: 13,
    parentCat: "Beds",
    cat: "Single Beds",
    name: "Single Bed with Mattress",
    condition: "Good Condition",
    price: 9500,
    originalPrice: 18000,
    image:
      "https://i.pinimg.com/736x/8a/25/13/8a2513f0d147c63d064ae363c76716e4.jpg",
  },
  {
    id: 14,
    parentCat: "Beds",
    cat: "Bunk Beds",
    name: "Kids Wooden Bunk Bed",
    condition: "Excellent Condition",
    price: 15000,
    originalPrice: 30000,
    image:
      "https://i.pinimg.com/736x/ea/7d/cc/ea7dcc6440c9b8b86e49dbe6aa9eada2.jpg",
  },
  {
    id: 15,
    parentCat: "Beds",
    cat: "Storage Beds",
    name: "King Bed with Box Storage",
    condition: "Like New",
    price: 24000,
    originalPrice: 48000,
    image:
      "https://i.pinimg.com/736x/f8/28/e4/f828e4193a884b53ab19af0bab016020.jpg",
  },

  // 🗄️ Storage
  {
    id: 16,
    parentCat: "Storage",
    cat: "Wardrobes",
    name: "3-Door Wooden Wardrobe",
    condition: "Good Condition",
    price: 14000,
    originalPrice: 28000,
    image:
      "https://i.pinimg.com/736x/33/ef/64/33ef640c8281fa5ca095da2268e98a31.jpg",
  },
  {
    id: 17,
    parentCat: "Storage",
    cat: "Shoe Racks",
    name: "Compact Shoe Rack with Shelves",
    condition: "Excellent Condition",
    price: 4500,
    originalPrice: 9000,
    image:
      "https://i.pinimg.com/1200x/56/1c/9e/561c9ede755c6216147663b776e5f817.jpg",
  },
  {
    id: 18,
    parentCat: "Storage",
    cat: "Bookshelves",
    name: "5-Layer Open Bookshelf",
    condition: "Like New",
    price: 7500,
    originalPrice: 16000,
    image:
      "https://i.pinimg.com/1200x/de/7c/2e/de7c2e3d6e5b2aaee1a31284bf3f3935.jpg",
  },
  {
    id: 19,
    parentCat: "Storage",
    cat: "TV Units",
    name: "Modern Floating TV Unit",
    condition: "Good Condition",
    price: 8000,
    originalPrice: 18000,
    image:
      "https://i.pinimg.com/1200x/f9/53/83/f95383c373e36aeb33875e4dafa03834.jpg",
  },
  {
    id: 20,
    parentCat: "Storage",
    cat: "Shelves",
    name: "Dresser with Mirror & Drawers",
    condition: "Excellent Condition",
    price: 11000,
    originalPrice: 23000,
    image:
      "https://i.pinimg.com/736x/8f/93/5a/8f935a1ab7c3fa17d304d3fef7f83da6.jpg",
  },

  // 🏠 Home Decor
  {
    id: 21,
    parentCat: "Home Decor",
    cat: "Painting",
    name: "Abstract Canvas Wall Art",
    condition: "New",
    price: 3500,
    originalPrice: 7000,
    image:
      "https://i.pinimg.com/1200x/9c/3b/05/9c3b05c652c1c8537d8b71e2b1d029ac.jpg",
  },
  {
    id: 22,
    parentCat: "Home Decor",
    cat: "Mirrors",
    name: "Round Gold-Framed Mirror",
    condition: "Like New",
    price: 5000,
    originalPrice: 10000,
    image:
      "https://i.pinimg.com/736x/af/ee/6f/afee6f33320847d510bc8d01063cc429.jpg",
  },
  {
    id: 23,
    parentCat: "Home Decor",
    cat: "Lightings",
    name: "Modern Floor Lamp with Shade",
    condition: "Excellent Condition",
    price: 4200,
    originalPrice: 9000,
    image:
      "https://i.pinimg.com/1200x/44/9c/72/449c728df0318cf7d02009df8cebe0f9.jpg",
  },
  {
    id: 24,
    parentCat: "Home Decor",
    cat: "Vases",
    name: "Ceramic Vase Set of 2",
    condition: "New",
    price: 2200,
    originalPrice: 5000,
    image:
      "https://i.pinimg.com/736x/aa/5d/62/aa5d62b1b1ce5cb80561c0a198aeb382.jpg",
  },
  {
    id: 25,
    parentCat: "Home Decor",
    cat: "Rugs & Carpets",
    name: "Handwoven Cotton Rug",
    condition: "Excellent Condition",
    price: 5500,
    originalPrice: 12000,
    image:
      "https://i.pinimg.com/1200x/77/49/54/774954bd4dfd2ea71d065c939dae0ae2.jpg",
  },
];

export default mainData;
