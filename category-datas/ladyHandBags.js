const ladyHandBags = 
[
    {
        id: 1,
        imagePath: "./pictures/IMG-20241222-WA0023.jpg",
        title: "Elegant Leather Tote",
        brand: "Prada",
        category: "WomenHandbags",
        price: 249.99,
        offer: undefined,
        reviewNumber: 145,
        reviews: [
            {
                reviewDate: "2023-12-01",
                time: "10:30 AM",
                reviewerName: "Alice Smith",
                reviewerPicturePath: "path_to_reviewer_1.jpg",
                review: "Stylish and spacious, ideal for daily use."
            },
            {
                reviewDate: "2023-12-05",
                time: "02:45 PM",
                reviewerName: "John Doe",
                reviewerPicturePath: "path_to_reviewer_2.jpg",
                review: "Love the quality and design, worth the price."
            }
        ],
        rating: 4,
        tags: ["elegant", "leather", "spacious", "daily", "office", "luxury", "practical", "designer", "classic", "versatile"],
        color: "Black",
        availableSizes: ["M","S","L"],
        description: "An elegant black leather tote perfect for professional and casual settings. Its spacious design provides ample storage while maintaining a sleek and luxurious appearance."
    },
    {
        id: 2,
        imagePath: "./pictures/IMG-20241222-WA0022.jpg",
        title: "Chic Crossbody Bag",
        brand: "Coach",
        category: "WomenHandbags",
        price: 159.99,
        offer: 10,
        reviewNumber: 120,
        reviews: [
            {
                reviewDate: "2023-11-20",
                time: "01:15 PM",
                reviewerName: "Sophie Brown",
                reviewerPicturePath: "path_to_reviewer_3.jpg",
                review: "Comfortable and trendy, great for outings."
            },
            {
                reviewDate: "2023-11-22",
                time: "03:30 PM",
                reviewerName: "Chris Green",
                reviewerPicturePath: "path_to_reviewer_4.jpg",
                review: "Perfect size for carrying essentials in style."
            }
        ],
        rating: 3.4,
        tags: ["crossbody", "trendy", "compact", "casual", "hands-free", "durable", "modern", "functional", "stylish", "daily"],
        color: "Brown",
        availableSizes: ["M","S"],
        description: "This chic crossbody bag is designed for hands-free convenience while maintaining a fashionable appeal. Its compact size is perfect for casual outings and everyday use."
    },
    {
        id: 3,
        imagePath: "./pictures/IMG-20241222-WA0021.jpg",
        title: "Classic Clutch Purse",
        brand: "Chanel",
        category: "WomenHandbags",
        price: 299.99,
        offer: 20,
        reviewNumber: 95,
        reviews: [
            {
                reviewDate: "2023-12-10",
                time: "06:00 PM",
                reviewerName: "Emily Davis",
                reviewerPicturePath: "path_to_reviewer_5.jpg",
                review: "Perfect for formal events and parties."
            },
            {
                reviewDate: "2023-12-12",
                time: "07:45 PM",
                reviewerName: "Tom Wilson",
                reviewerPicturePath: "path_to_reviewer_6.jpg",
                review: "Elegant and timeless, matches any evening outfit."
            }
        ],
        rating: 2,
        tags: ["clutch", "classic", "luxury", "formal", "elegant", "party", "evening", "sophisticated", "designer", "refined"],
        color: "Gold",
        availableSizes: ["M","S","L"],
        description: "A timeless gold clutch purse that exudes elegance and sophistication. Perfect for parties and formal events, it pairs seamlessly with upscale evening wear."
    },
    {
        id: 4,
        imagePath: "./pictures/IMG-20241222-WA0020.jpg",
        title: "Spacious Hobo Bag",
        brand: "Michael Kors",
        category: "WomenHandbags",
        price: 179.99,
        offer: undefined,
        reviewNumber: 110,
        reviews: [
            {
                reviewDate: "2023-11-15",
                time: "11:00 AM",
                reviewerName: "Anna Lee",
                reviewerPicturePath: "path_to_reviewer_7.jpg",
                review: "Spacious and versatile, fits all essentials."
            },
            {
                reviewDate: "2023-11-17",
                time: "05:20 PM",
                reviewerName: "Mark Taylor",
                reviewerPicturePath: "path_to_reviewer_8.jpg",
                review: "Great for work and casual outings, very durable."
            }
        ],
        rating: 4.7,
        tags: ["hobo", "spacious", "versatile", "daily", "modern", "durable", "comfortable", "fashionable", "casual", "practical"],
        color: "Navy Blue",
        availableSizes: ["M","S","L"],
        description: "A navy blue hobo bag offering a roomy interior and versatile design. Ideal for carrying essentials in style, whether for work or casual outings."
    },
    {
        id: 5,
        imagePath: "./pictures/IMG-20241222-WA0019.jpg",
        title: "Trendy Backpack Purse",
        brand: "Kate Spade",
        category: "WomenHandbags",
        price: 129.99,
        offer: 18,
        reviewNumber: 75,
        reviews: [
            {
                reviewDate: "2023-12-03",
                time: "08:15 AM",
                reviewerName: "Olivia Harris",
                reviewerPicturePath: "path_to_reviewer_9.jpg",
                review: "Stylish and functional, great for travel."
            },
            {
                reviewDate: "2023-12-04",
                time: "12:00 PM",
                reviewerName: "Ethan Moore",
                reviewerPicturePath: "path_to_reviewer_10.jpg",
                review: "Compact and lightweight, perfect for daily errands."
            }
        ],
        rating: 4.5,
        tags: ["backpack", "trendy", "functional", "travel", "casual", "lightweight", "hands-free", "practical", "modern", "durable"],
        color: "Pink",
        availableSizes: ["M","S"],
        description: "This trendy backpack purse combines style and functionality. Perfect for travel and daily use, its lightweight design ensures comfort while on the go."
    },{
        id: 6,
        imagePath: "./pictures/IMG-20241222-WA0018.jpg",
        title: "Elegant Leather Tote",
        brand: "Prada",
        category: "WomenHandbags",
        price: 249.99,
        offer: undefined,
        reviewNumber: 145,
        reviews: [
            {
                reviewDate: "2023-12-01",
                time: "10:30 AM",
                reviewerName: "Alice Smith",
                reviewerPicturePath: "path_to_reviewer_1.jpg",
                review: "Stylish and spacious, ideal for daily use."
            },
            {
                reviewDate: "2023-12-05",
                time: "02:45 PM",
                reviewerName: "John Doe",
                reviewerPicturePath: "path_to_reviewer_2.jpg",
                review: "Love the quality and design, worth the price."
            }
        ],
        rating: 4,
        tags: ["elegant", "leather", "spacious", "daily", "office", "luxury", "practical", "designer", "classic", "versatile"],
        color: "Black",
        availableSizes: ["M","S","L"],
        description: "An elegant black leather tote perfect for professional and casual settings. Its spacious design provides ample storage while maintaining a sleek and luxurious appearance."
    },
    {
        id: 7,
        imagePath: "./pictures/IMG-20241222-WA0017.jpg",
        title: "Chic Crossbody Bag",
        brand: "Coach",
        category: "WomenHandbags",
        price: 159.99,
        offer: 10,
        reviewNumber: 120,
        reviews: [
            {
                reviewDate: "2023-11-20",
                time: "01:15 PM",
                reviewerName: "Sophie Brown",
                reviewerPicturePath: "path_to_reviewer_3.jpg",
                review: "Comfortable and trendy, great for outings."
            },
            {
                reviewDate: "2023-11-22",
                time: "03:30 PM",
                reviewerName: "Chris Green",
                reviewerPicturePath: "path_to_reviewer_4.jpg",
                review: "Perfect size for carrying essentials in style."
            }
        ],
        rating: 3,
        tags: ["crossbody", "trendy", "compact", "casual", "hands-free", "durable", "modern", "functional", "stylish", "daily"],
        color: "Brown",
        availableSizes: ["M","S","L"],
        description: "This chic crossbody bag is designed for hands-free convenience while maintaining a fashionable appeal. Its compact size is perfect for casual outings and everyday use."
    },
    {
        id: 8,
        imagePath: "./pictures/IMG-20241222-WA0016.jpg",
        title: "Classic Clutch Purse",
        brand: "Chanel",
        category: "WomenHandbags",
        price: 299.99,
        offer: undefined,
        reviewNumber: 95,
        reviews: [
            {
                reviewDate: "2023-12-10",
                time: "06:00 PM",
                reviewerName: "Emily Davis",
                reviewerPicturePath: "path_to_reviewer_5.jpg",
                review: "Perfect for formal events and parties."
            },
            {
                reviewDate: "2023-12-12",
                time: "07:45 PM",
                reviewerName: "Tom Wilson",
                reviewerPicturePath: "path_to_reviewer_6.jpg",
                review: "Elegant and timeless, matches any evening outfit."
            }
        ],
        rating: 3.4,
        tags: ["clutch", "classic", "luxury", "formal", "elegant", "party", "evening", "sophisticated", "designer", "refined"],
        color: "Gold",
        availableSizes: ["M","S","L"],
        description: "A timeless gold clutch purse that exudes elegance and sophistication. Perfect for parties and formal events, it pairs seamlessly with upscale evening wear."
    },
    {
        id: 9,
        imagePath: "./pictures/IMG-20241222-WA0015.jpg",
        title: "Spacious Hobo Bag",
        brand: "Michael Kors",
        category: "WomenHandbags",
        price: 179.99,
        offer: 12,
        reviewNumber: 110,
        reviews: [
            {
                reviewDate: "2023-11-15",
                time: "11:00 AM",
                reviewerName: "Anna Lee",
                reviewerPicturePath: "path_to_reviewer_7.jpg",
                review: "Spacious and versatile, fits all essentials."
            },
            {
                reviewDate: "2023-11-17",
                time: "05:20 PM",
                reviewerName: "Mark Taylor",
                reviewerPicturePath: "path_to_reviewer_8.jpg",
                review: "Great for work and casual outings, very durable."
            }
        ],
        rating: 4.7,
        tags: ["hobo", "spacious", "versatile", "daily", "modern", "durable", "comfortable", "fashionable", "casual", "practical"],
        color: "Navy Blue",
        availableSizes: ["M","S","L"],
        description: "A navy blue hobo bag offering a roomy interior and versatile design. Ideal for carrying essentials in style, whether for work or casual outings."
    },
    {
        id: 10,
        imagePath: "./pictures/IMG-20241222-WA0014.jpg",
        title: "Trendy Backpack Purse",
        brand: "Kate Spade",
        category: "WomenHandbags",
        price: 129.99,
        offer: 18,
        reviewNumber: 75,
        reviews: [
            {
                reviewDate: "2023-12-03",
                time: "08:15 AM",
                reviewerName: "Olivia Harris",
                reviewerPicturePath: "path_to_reviewer_9.jpg",
                review: "Stylish and functional, great for travel."
            },
            {
                reviewDate: "2023-12-04",
                time: "12:00 PM",
                reviewerName: "Ethan Moore",
                reviewerPicturePath: "path_to_reviewer_10.jpg",
                review: "Compact and lightweight, perfect for daily errands."
            }
        ],
        rating: 2.5,
        tags: ["backpack", "trendy", "functional", "travel", "casual", "lightweight", "hands-free", "practical", "modern", "durable"],
        color: "Pink",
        availableSizes: ["M","S","L"],
        description: "This trendy backpack purse combines style and functionality. Perfect for travel and daily use, its lightweight design ensures comfort while on the go."
    },{
        id: 11,
        imagePath: "./pictures/IMG-20241222-WA0013.jpg",
        title: "Elegant Leather Tote",
        brand: "Prada",
        category: "WomenHandbags",
        price: 249.99,
        offer: undefined,
        reviewNumber: 145,
        reviews: [
            {
                reviewDate: "2023-12-01",
                time: "10:30 AM",
                reviewerName: "Alice Smith",
                reviewerPicturePath: "path_to_reviewer_1.jpg",
                review: "Stylish and spacious, ideal for daily use."
            },
            {
                reviewDate: "2023-12-05",
                time: "02:45 PM",
                reviewerName: "John Doe",
                reviewerPicturePath: "path_to_reviewer_2.jpg",
                review: "Love the quality and design, worth the price."
            }
        ],
        rating: 3.8,
        tags: ["elegant", "leather", "spacious", "daily", "office", "luxury", "practical", "designer", "classic", "versatile"],
        color: "Black",
        availableSizes: ["M","S","L"],
        description: "An elegant black leather tote perfect for professional and casual settings. Its spacious design provides ample storage while maintaining a sleek and luxurious appearance."
    },
    {
        id: 12,
        imagePath: "./pictures/IMG-20241222-WA0012.jpg",
        title: "Chic Crossbody Bag",
        brand: "Coach",
        category: "WomenHandbags",
        price: 159.99,
        offer: 10,
        reviewNumber: 120,
        reviews: [
            {
                reviewDate: "2023-11-20",
                time: "01:15 PM",
                reviewerName: "Sophie Brown",
                reviewerPicturePath: "path_to_reviewer_3.jpg",
                review: "Comfortable and trendy, great for outings."
            },
            {
                reviewDate: "2023-11-22",
                time: "03:30 PM",
                reviewerName: "Chris Green",
                reviewerPicturePath: "path_to_reviewer_4.jpg",
                review: "Perfect size for carrying essentials in style."
            }
        ],
        rating: 4.6,
        tags: ["crossbody", "trendy", "compact", "casual", "hands-free", "durable", "modern", "functional", "stylish", "daily"],
        color: "Brown",
        availableSizes: ["M","S","L"],
        description: "This chic crossbody bag is designed for hands-free convenience while maintaining a fashionable appeal. Its compact size is perfect for casual outings and everyday use."
    },
    {
        id: 13,
        imagePath: "./pictures/ai-generated-8704437_640.webp",
        title: "Classic Clutch Purse",
        brand: "Chanel",
        category: "WomenHandbags",
        price: 299.99,
        offer: undefined,
        reviewNumber: 95,
        reviews: [
            {
                reviewDate: "2023-12-10",
                time: "06:00 PM",
                reviewerName: "Emily Davis",
                reviewerPicturePath: "path_to_reviewer_5.jpg",
                review: "Perfect for formal events and parties."
            },
            {
                reviewDate: "2023-12-12",
                time: "07:45 PM",
                reviewerName: "Tom Wilson",
                reviewerPicturePath: "path_to_reviewer_6.jpg",
                review: "Elegant and timeless, matches any evening outfit."
            }
        ],
        rating: 2.9,
        tags: ["clutch", "classic", "luxury", "formal", "elegant", "party", "evening", "sophisticated", "designer", "refined"],
        color: "Gold",
        availableSizes: ["M","S","L"],
        description: "A timeless gold clutch purse that exudes elegance and sophistication. Perfect for parties and formal events, it pairs seamlessly with upscale evening wear."
    },
    {
        id: 14,
        imagePath: "./pictures/bag-1050607_640.jpg",
        title: "Spacious Hobo Bag",
        brand: "Michael Kors",
        category: "WomenHandbags",
        price: 179.99,
        offer: 12,
        reviewNumber: 110,
        reviews: [
            {
                reviewDate: "2023-11-15",
                time: "11:00 AM",
                reviewerName: "Anna Lee",
                reviewerPicturePath: "path_to_reviewer_7.jpg",
                review: "Spacious and versatile, fits all essentials."
            },
            {
                reviewDate: "2023-11-17",
                time: "05:20 PM",
                reviewerName: "Mark Taylor",
                reviewerPicturePath: "path_to_reviewer_8.jpg",
                review: "Great for work and casual outings, very durable."
            }
        ],
        rating: 2,
        tags: ["hobo", "spacious", "versatile", "daily", "modern", "durable", "comfortable", "fashionable", "casual", "practical"],
        color: "Navy Blue",
        availableSizes: ["M","S","L"],
        description: "A navy blue hobo bag offering a roomy interior and versatile design. Ideal for carrying essentials in style, whether for work or casual outings."
    },
    {
        id: 15,
        imagePath: "./pictures/bag-4817887_640.jpg",
        title: "Trendy Backpack Purse",
        brand: "Kate Spade",
        category: "WomenHandbags",
        price: 129.99,
        offer: 18,
        reviewNumber: 75,
        reviews: [
            {
                reviewDate: "2023-12-03",
                time: "08:15 AM",
                reviewerName: "Olivia Harris",
                reviewerPicturePath: "path_to_reviewer_9.jpg",
                review: "Stylish and functional, great for travel."
            },
            {
                reviewDate: "2023-12-04",
                time: "12:00 PM",
                reviewerName: "Ethan Moore",
                reviewerPicturePath: "path_to_reviewer_10.jpg",
                review: "Compact and lightweight, perfect for daily errands."
            }
        ],
        rating: 3.5,
        tags: ["backpack", "trendy", "functional", "travel", "casual", "lightweight", "hands-free", "practical", "modern", "durable"],
        color: "Pink",
        availableSizes: ["M","S","L"],
        description: "This trendy backpack purse combines style and functionality. Perfect for travel and daily use, its lightweight design ensures comfort while on the go."
    },{
        id: 16,
        imagePath: "./pictures/handbag-2661412_640.jpg",
        title: "Elegant Leather Tote",
        brand: "Prada",
        category: "WomenHandbags",
        price: 249.99,
        offer: undefined,
        reviewNumber: 145,
        reviews: [
            {
                reviewDate: "2023-12-01",
                time: "10:30 AM",
                reviewerName: "Alice Smith",
                reviewerPicturePath: "path_to_reviewer_1.jpg",
                review: "Stylish and spacious, ideal for daily use."
            },
            {
                reviewDate: "2023-12-05",
                time: "02:45 PM",
                reviewerName: "John Doe",
                reviewerPicturePath: "path_to_reviewer_2.jpg",
                review: "Love the quality and design, worth the price."
            }
        ],
        rating: 4,
        tags: ["elegant", "leather", "spacious", "daily", "office", "luxury", "practical", "designer", "classic", "versatile"],
        color: "Black",
        availableSizes: ["M","S","L"],
        description: "An elegant black leather tote perfect for professional and casual settings. Its spacious design provides ample storage while maintaining a sleek and luxurious appearance."
    },
    {
        id: 17,
        imagePath: "./pictures/handbag-8310851_640.webp",
        title: "Chic Crossbody Bag",
        brand: "Coach",
        category: "WomenHandbags",
        price: 159.99,
        offer: 10,
        reviewNumber: 120,
        reviews: [
            {
                reviewDate: "2023-11-20",
                time: "01:15 PM",
                reviewerName: "Sophie Brown",
                reviewerPicturePath: "path_to_reviewer_3.jpg",
                review: "Comfortable and trendy, great for outings."
            },
            {
                reviewDate: "2023-11-22",
                time: "03:30 PM",
                reviewerName: "Chris Green",
                reviewerPicturePath: "path_to_reviewer_4.jpg",
                review: "Perfect size for carrying essentials in style."
            }
        ],
        rating: 3,
        tags: ["crossbody", "trendy", "compact", "casual", "hands-free", "durable", "modern", "functional", "stylish", "daily"],
        color: "Brown",
        availableSizes: ["M","S","L"],
        description: "This chic crossbody bag is designed for hands-free convenience while maintaining a fashionable appeal. Its compact size is perfect for casual outings and everyday use."
    },
    {
        id: 18,
        imagePath: "./pictures/istockphoto-1066632078-612x612.jpg",
        title: "Classic Clutch Purse",
        brand: "Chanel",
        category: "WomenHandbags",
        price: 299.99,
        offer: undefined,
        reviewNumber: 95,
        reviews: [
            {
                reviewDate: "2023-12-10",
                time: "06:00 PM",
                reviewerName: "Emily Davis",
                reviewerPicturePath: "path_to_reviewer_5.jpg",
                review: "Perfect for formal events and parties."
            },
            {
                reviewDate: "2023-12-12",
                time: "07:45 PM",
                reviewerName: "Tom Wilson",
                reviewerPicturePath: "path_to_reviewer_6.jpg",
                review: "Elegant and timeless, matches any evening outfit."
            }
        ],
        rating: 2,
        tags: ["clutch", "classic", "luxury", "formal", "elegant", "party", "evening", "sophisticated", "designer", "refined"],
        color: "Gold",
        availableSizes: ["M","S","L"],
        description: "A timeless gold clutch purse that exudes elegance and sophistication. Perfect for parties and formal events, it pairs seamlessly with upscale evening wear."
    },
    {
        id: 19,
        imagePath: "./pictures/istockphoto-1139982637-612x612.jpg",
        title: "Spacious Hobo Bag",
        brand: "Michael Kors",
        category: "WomenHandbags",
        price: 179.99,
        offer: 12,
        reviewNumber: 110,
        reviews: [
            {
                reviewDate: "2023-11-15",
                time: "11:00 AM",
                reviewerName: "Anna Lee",
                reviewerPicturePath: "path_to_reviewer_7.jpg",
                review: "Spacious and versatile, fits all essentials."
            },
            {
                reviewDate: "2023-11-17",
                time: "05:20 PM",
                reviewerName: "Mark Taylor",
                reviewerPicturePath: "path_to_reviewer_8.jpg",
                review: "Great for work and casual outings, very durable."
            }
        ],
        rating: 3,
        tags: ["hobo", "spacious", "versatile", "daily", "modern", "durable", "comfortable", "fashionable", "casual", "practical"],
        color: "Navy Blue",
        availableSizes: ["M","S","L"],
        description: "A navy blue hobo bag offering a roomy interior and versatile design. Ideal for carrying essentials in style, whether for work or casual outings."
    },
    {
        id: 20,
        imagePath: "./pictures/istockphoto-1174839185-612x612.jpg",
        title: "Trendy Backpack Purse",
        brand: "Kate Spade",
        category: "WomenHandbags",
        price: 129.99,
        offer: undefined,
        reviewNumber: 75,
        reviews: [
            {
                reviewDate: "2023-12-03",
                time: "08:15 AM",
                reviewerName: "Olivia Harris",
                reviewerPicturePath: "path_to_reviewer_9.jpg",
                review: "Stylish and functional, great for travel."
            },
            {
                reviewDate: "2023-12-04",
                time: "12:00 PM",
                reviewerName: "Ethan Moore",
                reviewerPicturePath: "path_to_reviewer_10.jpg",
                review: "Compact and lightweight, perfect for daily errands."
            }
        ],
        rating: 5,
        tags: ["backpack", "trendy", "functional", "travel", "casual", "lightweight", "hands-free", "practical", "modern", "durable"],
        color: "Pink",
        availableSizes: ["M","S","L"],
        description: "This trendy backpack purse combines style and functionality. Perfect for travel and daily use, its lightweight design ensures comfort while on the go."
    },
    {
        id: 21,
        imagePath: "./pictures/istockphoto-1174839185-612x612.jpg",
        title: "Trendy Backpack Purse",
        brand: "Kate Spade",
        category: "WomenHandbags",
        price: 129.99,
        offer: undefined,
        reviewNumber: 75,
        reviews: [
            {
                reviewDate: "2023-12-03",
                time: "08:15 AM",
                reviewerName: "Olivia Harris",
                reviewerPicturePath: "path_to_reviewer_9.jpg",
                review: "Stylish and functional, great for travel."
            },
            {
                reviewDate: "2023-12-04",
                time: "12:00 PM",
                reviewerName: "Ethan Moore",
                reviewerPicturePath: "path_to_reviewer_10.jpg",
                review: "Compact and lightweight, perfect for daily errands."
            }
        ],
        rating: 5,
        tags: ["backpack", "trendy", "functional", "travel", "casual", "lightweight", "hands-free", "practical", "modern", "durable"],
        color: "Pink",
        availableSizes: ["M","S","L"],
        description: "This trendy backpack purse combines style and functionality. Perfect for travel and daily use, its lightweight design ensures comfort while on the go."
    }
];



export default ladyHandBags;
