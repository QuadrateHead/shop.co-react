export const newArrivalsData = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    image: "/src/assets/newArrivalsImage/Frame 32.png",
    gender: "male",
    type: "t-shirt"
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    image: "/src/assets/newArrivalsImage/Frame 33.png",
    gender: "female",
    type: "jeans"
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: "/src/assets/newArrivalsImage/Frame 34.png",
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 3.5,
    image: "/src/assets/newArrivalsImage/Frame 38.png",
  },
  {
    id: 5,
    name: "One Life Graphic T-shirt",
    price: 260,
    originalPrice: 300,
    discount: 40,
    rating: 4.5,
    gender: "male",
    type: "t-shirt",
    describtion: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    colors: [
      {
        color: "#4f4631",
        image: [
          "/src/assets/newArrivalsImage/id5/image 2.png",
          "/src/assets/newArrivalsImage/id5/image 5.png",
          "/src/assets/newArrivalsImage/id5/image 6.png",
        ],
      },
      {
        color: "#314f4a",
        image: [
          "/src/assets/newArrivalsImage/id5/image 5.png",
          "/src/assets/newArrivalsImage/id5/image 6.png",
          "/src/assets/newArrivalsImage/id5/image 2.png",
        ],
      },
      {
        color: "#31344f",
        image: [
          "/src/assets/newArrivalsImage/id5/image 5.png",
          "/src/assets/newArrivalsImage/id5/image 2.png",
          "/src/assets/newArrivalsImage/id5/image 6.png",
         
        ],
      }
    ],
    sizes: [
      "small", "medium", "large", "x-large"
    ]
  },
];

export const topSellingData = [
  {
    id: 1,
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    discount: 20,
    rating: 5.0,
    image: "/src/assets/topSellingImage/Frame 32.png",
  },
  {
    id: 2,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    image: "/src/assets/topSellingImage/Frame 33.png",
  },
  {
    id: 3,
    name: "Loose Fit Bermuda Shorts",
    price: 212,
    originalPrice: 232,
    discount: 20,
    rating: 3.0,
    image: "/src/assets/topSellingImage/Frame 34.png",
  },
  {
    id: 4,
    name: "Faded Skinny Jeans",
    price: 145,
    rating: 4.5,
    image: "/src/assets/topSellingImage/Frame 38.png",
  },
];
export const alsoLikeData = [
  {
    id: 201,
    name: "Polo with Contrast Trims",
    price: 212,
    originalPrice: 242,
    discount: 20,
    rating: 4.0,
    image: "/src/assets/topSellingImage/Frame 32.png",
  },
  {
    id: 202,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: "/src/assets/topSellingImage/Frame 33.png",
  },
  {
    id: 203,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "/src/assets/topSellingImage/Frame 34.png",
  },
  {
    id: 204,
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    discount: 30,
    rating: 5.0,
    image: "/src/assets/topSellingImage/Frame 38.png",
  },
];
export const casualData = [
  {
    id: 301,
    name: "Polo with Contrast Trims",
    price: 212,
    originalPrice: 242,
    discount: 20,
    rating: 4.0,
    image: "/src/assets/topSellingImage/Frame 32.png",
  },
  {
    id: 302,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: "/src/assets/topSellingImage/Frame 33.png",
  },
  {
    id: 303,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "/src/assets/topSellingImage/Frame 34.png",
  },
  {
    id: 304,
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    discount: 30,
    rating: 5.0,
    image: "/src/assets/topSellingImage/Frame 38.png",
  },
];
export const allProducts = [
  ...newArrivalsData,...topSellingData
]