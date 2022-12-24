const categoriesListEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesListEl.children.length}`);

for (let i = 0; i < categoriesListEl.childElementCount; i++) {
  const categoriesValue = categoriesListEl.children[i].querySelector('h2').textContent;
  const categoriesLength = categoriesListEl.children[i].querySelectorAll('li').length;
  console.log(`Category: ${categoriesValue} \n` + `Elements: ${categoriesLength}`);
}
