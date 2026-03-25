// sandwichRecipes.js

// Sample sandwich recipes
const sandwichRecipes = [
    {
        name: "Classic BLT",
        ingredients: ["Bacon", "Lettuce", "Tomato", "Bread", "Mayonnaise"],
        instructions: "Layer bacon, lettuce, and tomato on bread with mayo."
    },
    {
        name: "Turkey Club",
        ingredients: ["Turkey", "Bacon", "Lettuce", "Tomato", "Mayo", "Toast"],
        instructions: "Layer turkey, bacon, lettuce, and tomato between toast."
    },
    {
        name: "Veggie Delight",
        ingredients: ["Cucumber", "Tomato", "Avocado", "Lettuce", "Hummus", "Whole Grain Bread"],
        instructions: "Spread hummus on bread and layer veggies."
    }
];

// Function to display all recipes
function displayRecipes() {
    sandwichRecipes.forEach(recipe => {
        console.log(`Name: ${recipe.name}`);
        console.log(`Ingredients: ${recipe.ingredients.join(", ")}`);
        console.log(`Instructions: ${recipe.instructions}`);
        console.log("-----");
    });
}

// Function to search for a recipe by name
function searchRecipe(name) {
    const recipe = sandwichRecipes.find(recipe => recipe.name.toLowerCase() === name.toLowerCase());
    if (recipe) {
        console.log(`Found Recipe: ${recipe.name}`);
        console.log(`Ingredients: ${recipe.ingredients.join(", ")}`);
        console.log(`Instructions: ${recipe.instructions}`);
    } else {
        console.log("Recipe not found.");
    }
}

// Example usage
displayRecipes();
// searchRecipe("Turkey Club"); // Uncomment to test search functionality