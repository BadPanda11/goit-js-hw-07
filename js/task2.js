const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredientsCreator = ingredients.map(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  return listItem;
});

const ingredientList = document.querySelector('#ingredients');
ingredientList.append(...listIngredientsCreator);
