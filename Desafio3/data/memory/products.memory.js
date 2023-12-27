import fs from "fs" 
import crypto from "crypto"

class ProductsManager {
    static #products = []
    init () {
        try {
            const exists = fs.existsSync(this.path)
            if (!exists) {
                const data = JSON.stringify([], null, 2)
                fs.writeFileSync(this.path, data)
            } else {
                this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"))
            }
        } catch (error) {
            return error.message
        }
    }

    constructor(path) {
        this.path = path
        this.products = []
        this.init()
    }
    async createProduct(data) {
        try {
            if (!data.title || !data.photo || !data.price || !data.stock) {
                throw new Error("Title, photo, price & stock are required")
            }
            const product = {
                id: 
                    ProductsManager.#products.length === 0
                    ? 1 : ProductsManager.#products[ProductsManager.#products.length -1]
                        .id +1,
                title,
                photo,
                price: data.price,
                stock: data.stock
            }
            ProductsManager.#products.push(product)
            return product.id
        } catch (error) {
            return error.message
        }
    }
    readProducts() {
        try {
            if (ProductsManager.#products.length === 0) {
                throw new Error("Product not found")
            } else {
                return ProductsManager.#products
            }
        } catch (error) {
            return error.message
        }
    }

    readOn(id) {
        try {
            let one = ProductsManager.#products.find((each) => each.id === Number(id))
            if (one) {
                return one 
            } else {
                throw new Error("there isnt any product with this id" + id)
            }
        }catch (error) {
            return error.message
        }
    }
}

const products = new ProductsManager()