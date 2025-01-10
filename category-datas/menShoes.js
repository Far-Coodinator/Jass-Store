const menShoes = 
[
    {
      id: 1,
      imagePath: "./pictures/IMG-20241222-WA0045.jpg",
      title: "Casual Sneakers",
      brand: "Nike",
      category: "MenShoes",
      price: 69.99,
      offer: 10,
      reviewNo: 45,
      reviews:[
        {
          reviewDate: "2024-12-23",
          reviewTime: "10:15",
          reviewerName: "Alice Smith",
          reviewerPicturePath: "./reviewers/alice_smith.png",
          review: "Great comfort and support, perfect for long walks."
        }
      ],
      rating: 2.5,
      tags: ["casual", "sneakers", "comfortable"],
      color: "White",
      availableSizes: [7, 8, 9, 10, 11],
      description: "Lightweight and breathable casual sneakers designed for all-day comfort. Perfect for daily activities, blending style and functionality to keep your feet fresh and relaxed."
    },
    {
      id: 2,
      imagePath: "./pictures/feet-1840619_1280.jpg",
      title: "Running Shoes",
      brand: "Adidas",
      category: "MenShoes",
      price: 89.99,
      offer: 15,
      reviewNo: 120,
      reviews:[
        {
          reviewDate: "2024-12-23",
          reviewTime: "11:45",
          reviewerName: "Bob Johnson",
          reviewerPicturePath: "./reviewers/bob_johnson.png",
          review: "Stylish design, but slightly tight around the toes."
        }
      ],
      rating: 3.8,
      tags: ["running", "sports", "lightweight"],
      color: "White",
      availableSizes: [6, 7, 8, 9, 10],
      description: "High-performance running shoes designed for athletes. Provides excellent grip, cushioning, and durability, ensuring maximum support for your feet during intense workouts or running sessions."
    },
    {
      id: 3,
      imagePath: "./pictures/leather-shoe-3706748_1280.jpg",
      title: "Leather Loafers",
      brand: "Clarks",
      category: "MenShoes",
      price: 109.99,
      offer: 20,
      reviewNo: 35,
      reviews:[
        {
          reviewDate: "2024-12-24",
          reviewTime: "09:00",
          reviewerName: "Charlie Brown",
          reviewerPicturePath: "./reviewers/charlie_brown.png",
          review: "Love the cushioning, makes every step feel soft."
        }
      ],
      rating: 1.2,
      tags: ["formal", "leather", "loafers"],
      color: "Brown",
      availableSizes: [8, 9, 10, 11],
      description: "Premium leather loafers offering timeless elegance. Perfect for formal occasions or office wear, providing a polished appearance combined with unmatched comfort and durability."
    },
    {
      id: 4,
      imagePath: "./pictures/shoe-3743507_1280.jpg",
      title: "Hiking Boots",
      brand: "Timberland",
      category: "MenShoes",
      price: 129.99,
      offer: 15,
      reviewNo: 50,
      reviews:[
        {
          reviewDate: "2024-12-24",
          reviewTime: "12:30",
          reviewerName: "Diana Miller",
          reviewerPicturePath: "./reviewers/diana_miller.png",
          review: "The shoes fit perfectly, and the color is amazing."
        }
      ],
      rating: 3.7,
      tags: ["hiking", "boots", "durable"],
      color: "Green",
      availableSizes: [7, 8, 9, 10],
      description: "Rugged and durable hiking boots built for tough terrains. Provides excellent ankle support, grip, and waterproof protection, making them the ultimate choice for outdoor adventures."
    },
    {
      id: 5,
      imagePath: "./pictures/IMG-20241222-WA0055.jpg",
      title: "Formal Derby Shoes",
      brand: "Allen Edmonds",
      category: "MenShoes",
      price: 199.99,
      offer: 25,
      reviewNo: 60,
      reviews:[
        {
          reviewDate: "2024-12-25",
          reviewTime: "08:00",
          reviewerName: "Ethan White",
          reviewerPicturePath: "./reviewers/ethan_white.png",
          review: "Very durable and perfect for outdoor activities."
        }
      ],
      rating: 4.6,
      tags: ["formal", "derby", "premium"],
      color: "Black",
      availableSizes: [9, 10, 11],
      description: "Sophisticated formal derby shoes crafted with precision. Designed for elegance, these shoes complement any professional or formal attire, delivering unmatched style and premium comfort."
    },
    {
      id: 6,
      imagePath: "./pictures/sneaker-5408068_1280.jpg", // Add image imagePath
      title: "Sports Trainers",
      brand: "Puma",
      category: "MenShoes",
      price: 74.99,
      offer: 10,
      reviewNo: 85,
      oneReview: "Great trainers for sports and gym.",
      rating: 4.4,
      tags: ["sports", "trainers", "flexible"],
      color: "Blue",
      availableSizes: [6, 7, 8, 9],
      description: "Lightweight and flexible trainers engineered for sports enthusiasts. Perfect for gym sessions or outdoor activities, offering exceptional support and comfort during high-intensity movements."
    },
    {
      id: 7,
      imagePath: "./pictures/IMG-20241222-WA0056.jpg", // Add image imagePath
      title: "Slip-On Canvas Shoes",
      brand: "Vans",
      category: "MenShoes",
      price: 54.99,
      offer: 5,
      reviewNo: 80,
      oneReview: "Classic style with ultimate convenience.",
      rating: 4.3,
      tags: ["casual", "canvas", "slip-on"],
      color: "Gray",
      availableSizes: [7, 8, 9, 10, 11],
      description: "Easy-to-wear slip-on canvas shoes combining timeless style and lightweight comfort. Perfect for casual outings and versatile enough to pair with any outfit."
    },
    {
      id: 8,
      imagePath: "./pictures/IMG-20241222-WA0058.jpg", // Add image imagePath
      title: "Chelsea Boots",
      brand: "Dr. Martens",
      category: "MenShoes",
      price: 139.99,
      offer: 20 ,
      reviewNo: 95,
      oneReview: "Stylish and durable boots for all seasons.",
      rating: 2.7,
      tags: ["boots", "chelsea", "leather"],
      color: "Black",
      availableSizes: [8, 9, 10, 11, 12],
      description: "Classic Chelsea boots crafted from premium leather. Perfect for a polished look, offering durability and all-day comfort for both formal and casual occasions."
    },
    {
      id: 9,
      imagePath: "./pictures/IMG-20241222-WA0065.jpg", // Add image imagePath
      title: "High-Top Basketball Shoes",
      brand: "Under Armour",
      category: "MenShoes",
      price: 124.99,
      offer: 10,
      reviewNo: 110,
      oneReview: "Exceptional support and style for the court.",
      rating: 4.6,
      tags: ["basketball", "high-top", "sports"],
      color: "Red",
      availableSizes: [7, 8, 9, 10, 11, 12],
      description: "Performance-driven high-top basketball shoes designed for stability and support. Engineered for players who need excellent grip, cushioning, and ankle protection during intense matches."
    },
    {
      id: 10,
      imagePath: "./pictures/shoe-629645_1280.jpg", // Add image imagePath
      title: "Desert Chukka Boots",
      brand: "Clarks",
      category: "MenShoes",
      price: 99.99,
      offer: 15,
      reviewNo: 75,
      oneReview: "Stylish boots with remarkable comfort.",
      rating: 3.4,
      tags: ["boots", "chukka", "suede"],
      color: "Beige",
      availableSizes: [8, 9, 10, 11],
      description: "Versatile desert chukka boots with a sleek design. Made with soft suede and a cushioned sole, these boots are ideal for casual or semi-formal wear."
    },
    {
      id: 11,
      imagePath: "./pictures/IMG-20241222-WA0067.jpg", // Add image imagePath
      title: "Waterproof Rain Boots",
      brand: "Hunter",
      category: "MenShoes",
      price: 89.99,
      offer: 20,
      reviewNo: 55,
      oneReview: "Keeps your feet dry and comfortable.",
      rating: 4.5,
      tags: ["rain", "waterproof", "boots"],
      color: "Navy",
      availableSizes: [7, 8, 9, 10, 11],
      description: "Durable waterproof rain boots perfect for wet conditions. Provides excellent traction and comfort, making them an essential choice for rainy days and muddy terrains."
    },
    {
      id: 12,
      imagePath: "./pictures/shoe-629643_1280.jpg", // Add image imagePath
      title: "Trail Running Shoes",
      brand: "Salomon",
      category: "MenShoes",
      price: 119.99,
      offer: 15,
      reviewNo: 98,
      oneReview: "Exceptional grip and support for trails.",
      rating: 3.8,
      tags: ["trail", "running", "outdoor"],
      color: "Green",
      availableSizes: [7, 8, 9, 10, 11],
      description: "High-performance trail running shoes for outdoor enthusiasts. Designed for rugged terrains, offering superior grip, support, and durability for long adventures."
    },
    {
      id: 13,
      imagePath: "./pictures/IMG-20241222-WA0047.jpg", // Add image imagePath
      title: "Minimalist Gym Shoes",
      brand: "Reebok",
      category: "MenShoes",
      price: 64.99,
      offer: 10,
      reviewNo: 65,
      oneReview: "Lightweight and ideal for workouts.",
      rating: 4.4,
      tags: ["gym", "minimalist", "flexible"],
      color: "White",
      availableSizes: [7, 8, 9, 10, 11],
      description: "Minimalist gym shoes offering flexibility and lightweight design. Provides maximum comfort for lifting, training, or cardio sessions in the gym."
    },
    {
      id: 14,
      imagePath: "./pictures/fashion-3082528_1280.jpg", // Add image imagePath
      title: "Oxford Dress Shoes",
      brand: "Johnston & Murphy",
      category: "MenShoes",
      price: 149.99,
      offer: 30,
      reviewNo: 40,
      oneReview: "Elegance and comfort combined perfectly.",
      rating: 2.6,
      tags: ["formal", "oxford", "leather"],
      color: "Brown",
      availableSizes: [9, 10, 11, 12],
      description: "Classic Oxford dress shoes crafted for formal occasions. Features premium leather and a refined finish to elevate your professional or formal attire."
    },
    {
      id: 15,
      imagePath: "./pictures/shoe-3458280_1280.jpg", // Add image imagePath
      title: "Flip-Flop Sandals",
      brand: "Crocs",
      category: "MenShoes",
      price: 29.99,
      offer: 5,
      reviewNo: 30,
      oneReview: "Comfortable and durable summer sandals.",
      rating: 1.2,
      tags: ["casual", "flip-flops", "beachwear"],
      color: "Blue",
      availableSizes: [8, 9, 10, 11],
      description: "Easy-to-wear flip-flop sandals designed for ultimate comfort. Perfect for casual outings, summer days, or beach trips, offering lightweight and durable construction."
    },
    {
      id: 16,
      imagePath: "./pictures/shoes-men-3743554_1280.jpg", // Add image imagePath
      title: "Slip-Resistant Work Shoes",
      brand: "Skechers",
      category: "MenShoes",
      price: 79.99,
      offer: 10,
      reviewNo: 65,
      oneReview: "Perfect for long work shifts, very comfortable.",
      rating: 2.5,
      tags: ["work", "slip-resistant", "comfortable"],
      color: "Black",
      availableSizes: [7, 8, 9, 10, 11],
      description: "Slip-resistant work shoes designed for comfort and safety. Perfect for long hours, ensuring excellent grip and support in workplace environments."
    },
    {
      id: 17,
      imagePath: "./pictures/IMG-20241222-WA0059.jpg", // Add image imagePath
      title: "Outdoor Sandals",
      brand: "Teva",
      category: "MenShoes",
      price: 49.99,
      offer: 15,
      reviewNo: 50,
      oneReview: "Durable and comfortable for outdoor activities.",
      rating: 2.3,
      tags: ["sandals", "outdoor", "durable"],
      color: "Gray",
      availableSizes: [8, 9, 10, 11, 12],
      description: "Durable outdoor sandals perfect for hiking or beach adventures. Lightweight and water-resistant, providing excellent grip and comfort for all-day wear."
    },
    {
      id: 18,
      imagePath: "./pictures/shoes-men-3743533_1280.jpg", // Add image imagePath
      title: "Winter Snow Boots",
      brand: "Columbia",
      category: "MenShoes",
      price: 129.99,
      offer: 20,
      reviewNo: 85,
      oneReview: "Keeps your feet warm in freezing temperatures.",
      rating: 3.7,
      tags: ["winter", "snow", "boots"],
      color: "Brown",
      availableSizes: [7, 8, 9, 10, 11],
      description: "Insulated snow boots designed for extreme cold. Waterproof and durable, these boots provide warmth and excellent traction on icy surfaces."
    },
    {
      id: 19,
      imagePath: "./pictures/IMG-20241222-WA0053.jpg", // Add image imagePath
      title: "Retro Running Shoes",
      brand: "New Balance",
      category: "MenShoes",
      price: 94.99,
      offer: 10,
      reviewNo: 40,
      oneReview: "Classic design with modern comfort.",
      rating: 4.4,
      tags: ["retro", "running", "classic"],
      color: "White",
      availableSizes: [6, 7, 8, 9, 10],
      description: "Retro-inspired running shoes offering a stylish blend of vintagse design and modern cushioning for all-day comfort and performance."
    },
    {
      id: 20,
      imagePath: "./pictures/shoe-2073425_1280.jpg", // Add image imagePath
      title: "Tactical Boots",
      brand: "Bates",
      category: "MenShoes",
      price: 139.99,
      offer: 25,
      reviewNo: 55,
      oneReview: "Reliable boots for tough environments.",
      rating: 1.6,
      tags: ["tactical", "boots", "rugged"],
      color: "Black",
      availableSizes: [8, 9, 10, 11, 12],
      description: "Heavy-duty tactical boots built for rugged terrains. Offers excellent durability, grip, and protection, making them ideal for outdoor or tactical use."
    },
    {
      id: 21,
      imagePath: "./pictures/IMG-20241222-WA0046.jpg", // Add image imagePath
      title: "Espadrilles",
      brand: "Toms",
      category: "MenShoes",
      price: 39.99,
      offer: 10,
      reviewNo: 30,
      oneReview: "Light and breathable summer shoes.",
      rating: 2.2,
      tags: ["casual", "espadrilles", "lightweight"],
      color: "Beige",
      availableSizes: [8, 9, 10, 11],
      description: "Breathable and lightweight espadrilles perfect for casual summer outings. Crafted with soft canvas for a stylish and comfortable experience."
    },
    {
      id: 22,
      imagePath: "./pictures/IMG-20241222-WA0048.jpg", // Add image path
      title: "Skateboarding Shoes",
      brand: "DC Shoes",
      category: "MenShoes",
      price: 74.99,
      offer: 15,
      reviewNo: 70,
      oneReview: "Great grip and durability for skating.",
      rating: 3.5,
      tags: ["skateboarding", "grip", "durable"],
      color: "Red",
      availableSizes: [7, 8, 9, 10],
      description: "Skateboarding shoes designed for performance and durability. Provides excellent grip and cushioning, making them perfect for both beginners and professional skaters."
    }
]
    







const reviews = [
  {
      reviewDate: "2024-12-25",
      reviewTime: "08:00",
      reviewerName: "Ethan White",
      reviewerPicturePath: "./reviewers/ethan_white.png",
      review: "Very durable and perfect for outdoor activities."
  },
  {
      reviewDate: "2024-12-25",
      reviewTime: "15:00",
      reviewerName: "Fiona Green",
      reviewerPicturePath: "./reviewers/fiona_green.png",
      review: "Comfortable and lightweight, great for sports."
  },
  {
      reviewDate: "2024-12-26",
      reviewTime: "13:45",
      reviewerName: "George Black",
      reviewerPicturePath: "./reviewers/george_black.png",
      review: "They look amazing, but they are a bit narrow."
  },
  {
      reviewDate: "2024-12-26",
      reviewTime: "16:30",
      reviewerName: "Hannah Adams",
      reviewerPicturePath: "./reviewers/hannah_adams.png",
      review: "Excellent grip and support, great for running."
  },
  {
      reviewDate: "2024-12-27",
      reviewTime: "14:00",
      reviewerName: "Isaac Clark",
      reviewerPicturePath: "./reviewers/isaac_clark.png",
      review: "Super comfy, perfect for daily wear."
  },
  {
      reviewDate: "2024-12-27",
      reviewTime: "17:00",
      reviewerName: "Jasmine Lewis",
      reviewerPicturePath: "./reviewers/jasmine_lewis.png",
      review: "They feel a bit stiff at first, but they loosen up nicely."
  },
  {
      reviewDate: "2024-12-28",
      reviewTime: "10:00",
      reviewerName: "Kevin Hall",
      reviewerPicturePath: "./reviewers/kevin_hall.png",
      review: "Great shoes for hiking, very sturdy and reliable."
  },
  {
      reviewDate: "2024-12-28",
      reviewTime: "12:15",
      reviewerName: "Lily Wright",
      reviewerPicturePath: "./reviewers/lily_wright.png",
      review: "Not the best for long walks, but stylish for casual wear."
  },
  {
      reviewDate: "2024-12-29",
      reviewTime: "11:00",
      reviewerName: "Mike Taylor",
      reviewerPicturePath: "./reviewers/mike_taylor.png",
      review: "I love the design, but they feel a little stiff."
  },
  {
      reviewDate: "2024-12-29",
      reviewTime: "14:30",
      reviewerName: "Nina Harris",
      reviewerPicturePath: "./reviewers/nina_harris.png",
      review: "Perfect for both gym and casual outings."
  },
  {
      reviewDate: "2024-12-30",
      reviewTime: "09:45",
      reviewerName: "Oliver King",
      reviewerPicturePath: "./reviewers/oliver_king.png",
      review: "They fit well and feel comfortable all day long."
  },
  {
      reviewDate: "2024-12-30",
      reviewTime: "18:00",
      reviewerName: "Paige Scott",
      reviewerPicturePath: "./reviewers/paige_scott.png",
      review: "Amazing shoes, but they could use more arch support."
  },
  {
      reviewDate: "2024-12-31",
      reviewTime: "07:30",
      reviewerName: "Quinn Turner",
      reviewerPicturePath: "./reviewers/quinn_turner.png",
      review: "A bit snug at first, but they break in nicely."
  },
  {
      reviewDate: "2024-12-31",
      reviewTime: "13:00",
      reviewerName: "Rachel Evans",
      reviewerPicturePath: "./reviewers/rachel_evans.png",
      review: "Very comfortable and stylish for everyday use."
  },
  {
      reviewDate: "2024-12-31",
      reviewTime: "19:00",
      reviewerName: "Sammy Martinez",
      reviewerPicturePath: "./reviewers/sammy_martinez.png",
      review: "I love the color and the comfort, perfect for workouts."
  },
  {
      reviewDate: "2024-12-31",
      reviewTime: "22:00",
      reviewerName: "Tina Robinson",
      reviewerPictureimagePath: "./reviewers/tina_robinson.png",
      review: "The quality is great, but they are a bit heavy."
  }
];



export default menShoes;