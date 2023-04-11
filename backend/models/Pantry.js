import mongoose from "mongoose";
import User from "./User.js";

const pantrySchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
    ingredients: {
        type: Array,
        default: [],
    },
});

export default mongoose.model("Pantry", pantrySchema);