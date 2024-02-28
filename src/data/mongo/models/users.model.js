import { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "users";
const schema = new Schema(
    {
        name: { type: String, required: true },
        last_name: { type: String },
        email: { type: String, required: true, unique: true, index: true },
        photo: {
        type: String,
        default:
            "",
        },
        age: { type: Number, default: 18 },
    },
    { timestamps: true }
);
schema.plugin(mongoosePaginate);

const User = model(collection, schema);
export default User;