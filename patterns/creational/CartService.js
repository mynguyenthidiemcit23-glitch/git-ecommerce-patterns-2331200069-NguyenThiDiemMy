// TODO: Implement the Singleton pattern.
// 1. Create a variable `instance` to hold the single instance of the class.
// 2. In the constructor, check if `instance` already exists.
// 3. If it exists, return `instance`.
// 4. If it does not exist, initialize the class properties (like `this.products`)
//    and assign the new instance to `instance`.
// 5. Export the class.

// 1. Create a variable to hold the single instance
let instance = null;

class CartService {
  constructor() {
    // 2 & 3. Check if instance already exists and return it
    if (instance) {
      return instance;
    }

    // 4. Initialize class properties and assign to instance
    this.products = [];
    instance = this;

    // Return the instance (important for Singleton pattern)
    return instance;
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    this.products = this.products.filter((p) => p.id !== productId);
  }

  getProducts() {
    return this.products;
  }
}

// 5. Export the class
export { CartService };
