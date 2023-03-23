export const getIngredients = async () => {
    const module = await import("../data/data.js");
    return module.Ingredients;
}