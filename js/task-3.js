const inputElement = document.querySelector('#name-input'); //знаходимо елементи input та span за їхніми ID.
const outputElement = document.querySelector('#name-output'); //Додаємо обробник події input до елемента input, який виконується кожного разу, коли користувач вводить текст.

inputElement.addEventListener("input", () => {
    const trimmedValue = inputElement.value.trim(); //очищаємо значення інпуту від пробілів по краях
    outputElement.textContent = trimmedValue || 'Anonymous'; //Якщо очищене значення інпуту порожнє, ми підставляємо в span рядок "Anonymous", інакше підставляємо значення інпуту.
})

