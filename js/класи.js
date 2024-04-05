// Створюємо два порожніх об'єкта для зберігання наших елементів DOM
const cartors = {};
const cartorSs = {};

// Цикл від 1 до 19 (включно), щоб отримати всі елементи 'cartor'
for (let i = 1; i <= 25; i++) {
    const element = document.getElementById(`cartor${i}`);
    // Перевіряємо, чи існує елемент, перш ніж додати його до об'єкта
    if (element) {
        cartors[`cartor${i}`] = element;
    }
}

// Два вкладені цикли для отримання всіх елементів 'cartorXsY'
for (let i = 1; i <= 25; i++) {
    cartorSs[`cartor${i}s`] = {};
    for (let j = 1; j <= 40; j++) {
        const element = document.getElementById(`cartor${i}s${j}`);
        // Перевіряємо, чи існує елемент, перш ніж додати його до об'єкта
        if (element) {
            cartorSs[`cartor${i}s`][`cartor${i}s${j}`] = element;
        }
    }
}

// Функція, яка приймає два масиви елементів: один для відображення, інший для приховування
function showHideElements(showElements, hideElements) {
    // Відображаємо всі елементи в масиві showElements
    showElements.forEach(element => element && (element.style.display = 'block'));
    // Приховуємо всі елементи в масиві hideElements
    hideElements.forEach(element => element && (element.style.display = 'none'));
}

for (let i = 1; i <= 19; i++) {
    if (cartors[`cartor${i}`]) {
        cartors[`cartor${i}`].addEventListener('click', () => {
            // Приховуємо всі елементи
            for (let j = 1; j <= 19; j++) {
                Object.values(cartorSs[`cartor${j}s`]).forEach(element => element && (element.style.display = 'none'));
            }
            // Відображаємо потрібні елементи
            Object.values(cartorSs[`cartor${i}s`]).forEach(element => element && (element.style.display = 'block'));
        });
    }
}

;
