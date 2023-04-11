import User from "../models/User.js";
import ShoppingList from "../models/ShoppingList.js";

/* Add items */

export const addItems = async (req, res) => {
    try {
        const { items } = req.body;
        const user = await User.findById(req.user.id);
        const shoppingList = await ShoppingList.findOne({ userId: user._id });
        if (!shoppingList) {
            const newShoppingList = new ShoppingList({
                userId: user._id,
                items: items,
            });
            await newShoppingList.save();
            res.status(200).json(newShoppingList);
        }
        else {
            shoppingList.items = items;
            await shoppingList.save();
            res.status(200).json(shoppingList);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getItems = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const shoppingList = await ShoppingList.findOne({ userId: user._id });
        if (!shoppingList) {
            res.status(404).json({ error: "Shopping list not found" });
        }
        res.status(200).json(shoppingList.items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}