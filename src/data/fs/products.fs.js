import fs from "fs";
import crypto from "crypto";

class ProductManager {
  #products = [];

  async init() {
    try {
      const exists = fs.existsSync(this.path);
      
      if (!exists) {
        const data = JSON.stringify([], null, 2);
        fs.writeFileSync(this.path, data);
      } else {
        this.#products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        
      }
    } catch (error) {
      return error.message;
    }
  }

  constructor(path) {
    this.path = path;
    this.#products = [];
    this.init().then(() => {
      console.log("Initialization complete.");
    });
  }

  async updateProduct(id, newData) {
    try {
      const index = this.#products.findIndex((product) => product.id === id);

      if (index === -1) {
        throw new Error("Product not found");
      }

      const updatedProduct = { ...this.#products[index], ...newData };
      this.#products[index] = updatedProduct;

      const jsonData = JSON.stringify(this.products, null, 2);
      await fs.promises.writeFile(this.path, jsonData);

      return updatedProduct;
    } catch (error) {
      
      throw new Error("Failed to update product");
    }
  }

  async createProduct(data) {
    try {
      const product = {
        id: crypto.randomBytes(12).toString("hex"),
        title: data.title,
        photo: data.photo,
        price: data.price || 10,
        stock: data.stock || 50,
      };
      this.#products.push(product);
      const jsonData = JSON.stringify(this.#products, null, 2);
      await fs.promises.writeFile(this.path, jsonData);
      
      return product.id;
    } catch (error) {
      
      return error.message;
    }
  }

  readProducts() {
    try {
      if (this.#products.length === 0) {
        throw new Error("There are not products!");
      } else {
        
        return this.#products;
      }
    } catch (error) {
      
      return error.message;
    }
  }

  readProductById(id) {
    try {
      
      const one = this.#products.find((each) => each.id === parseInt(id));
      
      if (!one) {
        throw new Error(`There isn't any product with id=${id}`);
      } else {
        
        return one;
      }
    } catch (error) {
      
      return error.message;
    }
  }

  async removeProductById(id) {
    try {
      let one = this.#products.find((each) => each.id === id);
      if (!one) {
        throw new Error("There isn't any product with id=" + id);
      } else {
        this.#products = this.#products.filter((each) => each.id !== id);
        const jsonData = JSON.stringify(this.#products, null, 2);
        await fs.promises.writeFile(this.path, jsonData);
        
        return id;
      }
    } catch (error) {
      
      return error.message;
    }
  }
}

const products = new ProductManager("./src/data/fs/products.json");
export default products;