import User from '../models/User.js';
import Pantry from '../models/Pantry.js';

/* Add ingredients */

export const addIngredients = async (req, res) => {
    try {
        const { ingredients } = req.body;
        const user = await User.findById(req.user.id);
        const pantry = await Pantry.findOne({ userId: user._id });
        if (!pantry) {
            const newPantry = new Pantry({
                userId: user._id,
                ingredients: ingredients,
            });
            await newPantry.save();
            res.status(200).json(newPantry);
        } 
        else {
            pantry.ingredients = ingredients;
            await pantry.save();
            res.status(200).json(pantry);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getIngredients = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const pantry = await Pantry.findOne({ userId: user._id });
        if (!pantry) {
            res.status(404).json({ error: "Pantry not found" });
        } else {
            res.status(200).json(pantry.ingredients);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}