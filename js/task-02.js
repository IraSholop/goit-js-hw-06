const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

function creatingListIngredients(obj) {
  return obj.map(ingredient => {
    const createItemEl = document.createElement('li');
    createItemEl.textContent = ingredient;
    createItemEl.classList = 'item';
    return createItemEl;
  });
}
const ingredientsEl = document.getElementById('ingredients');
const addIngredientsItem = ingredientsEl.append(...creatingListIngredients(ingredients));
