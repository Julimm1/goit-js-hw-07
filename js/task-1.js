const numberOfCategories = (document.querySelectorAll(".item")); // Отримуємо посилання на ul#categories
console.log(`Number of categories: ${numberOfCategories.length}`); // Виводимо кількість категорій в консоль

numberOfCategories.forEach(function (element){
    const categorieTitle = element.querySelector("h2").textContent; // Знаходимо заголовок (тег <h2>) всередині кожного елемента li.item
    const categorieElements = element.querySelectorAll("li").length; // Знаходимо всі <li> всередині поточного елемента li.item

    // Виводимо назву категорії та кількість елементів в консоль
    console.log(`Category: ${categorieTitle}`)
    console.log(`Elements: ${categorieElements}`)
    
})