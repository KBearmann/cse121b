// scripts/recipeBook.js

document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipeForm');
    const recipeList = document.getElementById('recipeList');
  
    let recipes = [];
  
    // Fetch external recipe data using the jsonplaceholder API for demonstration
    async function fetchExternalData() {
      try {
        const response = await fetch('https://kbehrmann.github.io/cse121b/Project/json/recipe');
        const externalData = await response.json();
        externalData.forEach(recipe => addRecipeFromExternalData(recipe));
      } catch (error) {
        console.error('Error fetching external data:', error);
      }
    }
  

    // Function to add a new recipe
    function addRecipeFromExternalData(recipe) {
      const newRecipe = {
        recipeName: recipe.title,
        ingredients: recipe.body,
        instructions: 'Example instructions from external data.',
      };
      recipes.push(newRecipe);
      displayRecipes();
    }
  
    // Display existing recipes
    displayRecipes();
  
    // Event listener for form submission
    recipeForm.addEventListener('submit', (event) => {
      event.preventDefault();
      addRecipe();
    });
  
    // Function to add a new recipe
    function addRecipe() {
      const recipeName = document.getElementById('recipeName').value;
      const ingredients = document.getElementById('ingredients').value;
      const instructions = document.getElementById('instructions').value;
  
      const newRecipe = { recipeName, ingredients, instructions };
      recipes.push(newRecipe);
  
      // Display updated recipe list
      displayRecipes();
  
      // Clear form inputs
      recipeForm.reset();
    }
  
    // Function to display recipes
    function displayRecipes() {
      recipeList.innerHTML = ''; // Clears existing list
  
      recipes.forEach((recipe, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <strong>${recipe.recipeName}</strong>
          <button onclick="deleteRecipe(${index})">Delete</button>
          <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
          <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        recipeList.appendChild(listItem);
      });
    }
  
    // Function to delete a recipe
    
    window.deleteRecipe = function (index) {
      recipes.splice(index, 1);
      
      // Display updated recipe list
      
      displayRecipes();
    };
  
    // Call fetchExternalData when the page loads
    
    fetchExternalData();
  });
  
