import { model, Schema, Types } from "mongoose";
import monoosePaginate from "mongoose-paginate-v2";

const collection = "orders";
const schema = new Schema(
    {
        u_id: { type: Types.ObjectId, required: true, ref: "users" },
        p_id: { type: Types.ObjectId, required: true, ref: "products" },
        quantity: { type: Number, default: 1 },
        state: {
        type: String,
        default: "reserved",
        enum: ["reserved", "paid", "delivered"],
        },
    },
    
    { timestamps: true }
);
    

const Order = model(collection, schema);
export default Order;