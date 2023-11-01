const API_KEY = "2f6cffc4ed3f4b1694c5054c62356dfa";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes) {   // Function to display food form api
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe)=>{
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";
            /////////////////////////////////
        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerHTML = recipe.title;


        recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong> 
        ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(", ")}`

        recipeItemEl.appendChild(recipeImageEl); // Image
        recipeItemEl.appendChild(recipeTitleEl); // title H2
       recipeItemEl.appendChild(recipeIngredientsEl); // ingredients
        recipeListEl.appendChild(recipeItemEl);  // List
    });
}

async function getRecipes(){      // fetch api
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`) 

    const data = await response.json()
    return data.recipes;
}

async function init() {      // await for api
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

init();