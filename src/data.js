const categoryOptions = {
  clothes: ["shirt", "t-shirt", "pants"],  
  shoes: ["sneaker", "running", "sandals"], 
  accessories: ["hat", "belt", "wallet"]
};

export const typeOptions = ["Men", "Women", "Kids"];

const ratingOptions = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

const brandOptions = ["Nike", "Adidas", "Lacoste"]

export const data = {
  products: [
    {
      _id: '1',
      name: 'Nike Slim Shirt',
      category: categoryOptions["clothes"][0],
      type: typeOptions[0],
      image: '/images/p1.jpg',
      price: 120,
      brand: brandOptions[0],
      rating: ratingOptions[6],
      numReviews: 10,
      description: 'high-quality-product',
    },
    {
      _id: '2',
      name: 'Adidas Fit Shirt',
      category: categoryOptions["clothes"][0],
      type: typeOptions[1],
      image: '/images/p2.jpg',
      price: 100,
      brand: brandOptions[1],
      rating: ratingOptions[8],
      numReviews: 10,
      description: 'high-quality-product',
    },
    {
      _id: '3',
      name: 'Lacoste Free Shirt',
      category: categoryOptions["clothes"][0],
      type: typeOptions[2],
      image: '/images/p3.jpg',
      price: 220,
      brand: brandOptions[2],
      rating: ratingOptions[6],
      numReviews: 17,
      description: 'high-quality-product',
    },
    {
      _id: '4',
      name: 'Nike Slim Pants',
      category: categoryOptions["clothes"][2],
      type: typeOptions[3],
      image: '/images/p4.jpg',
      price: 78,
      brand: brandOptions[0],
      rating: ratingOptions[6],
      numReviews: 14,
      description: 'high-quality-product',
    },
    {
      _id: '5',
      name: 'Lacoste',
      category: categoryOptions["clothes"][2],
      type: typeOptions[3],
      image: '/images/p5.jpg',
      price: 65,
      brand: brandOptions[2],
      rating: ratingOptions[3],
      numReviews: 10,
      description: 'high-quality-product',
    },
    {
      _id: '6',
      name: 'Adidas Fit Pants',
      category: categoryOptions["clothes"][2],
      type: typeOptions[3],
      image: '/images/p6.jpg',
      price: 139,
      brand: brandOptions[1],
      rating: ratingOptions[5],
      numReviews: 15,
      description: 'high-quality-product',
    },
  ],
};

// export default data;
