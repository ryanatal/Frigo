import User from "../models/User.js";
import ShoppingList from "../models/ShoppingList.js";
import Pantry from "../models/Pantry.js";

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

export const addItemToPantry = async (req, res) => {
    try {
        const { item } = req.body;
        const user = await User.findById(req.user.id);
        const pantry = await Pantry.findOne({ userId: user._id });
        if (!pantry) {
            const newPantry = new Pantry({
                userId: user._id,
                items: [item],
            });
            await newPantry.save();
            res.status(200).json(newPantry);
        }
        else {
            const itemExists = pantry.items.find((i) => i.name === item.name);
            if (itemExists) {
                res.status(200).json(pantry);
            }
            else {
                pantry.items.push(item);
                await pantry.save();
                res.status(200).json(pantry);
            }
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