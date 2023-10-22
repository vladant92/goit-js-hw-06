const categories = document.querySelectorAll('.item');
const categoriesNumber = `Number of categories: ${categories.length}`;
console.log(categoriesNumber);
const categoryNameAndCount = categories.forEach( category => {
    const categoryName = category.querySelector('h2').textContent;
    const elementsCount = category.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryName}` + '\n' + `Elements: ${elementsCount}`);
});
