const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

ingredients.forEach( item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.classList.add('item');
  ingredientsList.append(listItem);
});
