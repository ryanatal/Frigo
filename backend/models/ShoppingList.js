import mongoose from "mongoose";
import User from "./User.js";

const shoppingListSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
    items: {
        type: Array,
        default: [],
    }
});

export default mongoose.model("ShoppingList", shoppingListSchema);