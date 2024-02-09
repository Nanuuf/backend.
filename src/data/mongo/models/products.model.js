import { model, Schema } from "mongoose";

const collection = "products";
const schema = new Schema(
    {
        title: { type: String, required: true },
        photo: {
        type: String,
        default:
            "",
        },
        price: { type: Number, default: 10 },
        stock: { type: Number, default: 50 },
        data: { type: Date, default: new Date() },
    },
    { timestamps: true }
);

const Product = model(collection, schema);
export default Product;