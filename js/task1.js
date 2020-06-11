const categoriesRef = document.querySelector('#categories');
const listItems = categoriesRef.children;

console.log(`в списке ${listItems.length} категории.`);
const titles = [...listItems].map(title => {
  console.log(`Категория:${title.children[0].textContent}`);
  console.log(`Количество элементов:${title.children[1].children.length}`);
});
