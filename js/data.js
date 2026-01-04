const PET_DATA = {
  dogs: {
    name: "Dogs",
    description: "Everything your dog needs for a healthy and happy life",
    categories: {
      food: {
        name: "Food",
        subcategories: ["Dry Food", "Wet Food", "Treats"],
        products: [
          {
            id: "dog_food_1",
            name: "Premium Chicken Dry Food",
            brand: "Pedigree",
            subcategory: "Dry Food",
            weight: "3 kg",
            ageGroup: "Adult",
            price: 1200,
            stock: true,
            image: "assets/images/dog_food.jpg",
            description: "Complete balanced nutrition for adult dogs."
          }
        ]
      },
      accessories: {
        name: "Accessories",
        subcategories: ["Toys", "Leashes", "Beds"],
        products: [
          {
            id: "dog_acc_1",
            name: "Nylon Dog Leash",
            brand: "PetSafe",
            size: "Medium",
            price: 450,
            stock: true,
            image: "assets/images/leash.jpg",
            description: "Strong and durable leash for daily walks."
          }
        ]
      }
    }
  },

  cats: {
    name: "Cats",
    description: "Carefully curated products for cats",
    categories: {
      food: {
        name: "Food",
        subcategories: ["Dry Food", "Wet Food"],
        products: []
      }
    }
  }
};
