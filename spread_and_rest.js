// ES6 появился оператор ...
// в зависимости от контекста исп. он называется или spread или rest

// spread базовые примеры:
// Пример 1. Создание копии массива
const students = ["Андрей", "Тимофей", "Роберт", "Кирилл", "Глеб"];
const copyStudents = [...students]; // исп. вместо slice()
console.log(copyStudents);

// Пример 2. Объединение массивов
const concatStudents = [...students, ...copyStudents]; // исп. вместо concat()
console.log(concatStudents);

// Пример 3. Распределение параметров функции
const log = (param1, param2, param3) =>
    document.write(`<h1>${param1} -- ${param2} -- ${param3}</h1>`);

log(...["Кирилл", "Андрей", "Глеб", "Алексей"]);  // Алексей в аргументы ф-и не попадет


// rest - остаток
// Базовые примеры с rest:
// Пример 1. Распределение параметров функции
const logRest = (param1, param2, param3, ...rest) =>
    document.write(`<h1>${param1} -- ${param2} -- ${param3} ** ${rest.join(' -- ')}</h1>`);

logRest(...["Кирилл", "Андрей", "Глеб", "Алексей", "Роберт"]);  // Алексей в аргументы ф-и не попадет


// Способы применения ...
// 1 пример. Добавление свойств
const user = { id: 1, name: 'Aleksey'};
const userWithPass = { ...user, password: 'Password!' };
console.log(userWithPass);

// 2 пример. Удаление свойств объекта (не рекомендованный способ для "сложных" объектов, 
// т.е. у которых под ключами лежат геттеры/сеттеры или дескрипторы )
const noPassword = ({ password, ...rest }) => rest;
const noPasswordUser = noPassword(userWithPass);
console.log(noPasswordUser); // {id: 1, name: 'Aleksey'}

// 3 пример. Динамическое удаление свойств объекта
const removeKeys = key => ({ [key]: undefined, ...rest }) => rest;
// function removeKeys(key) {
//     return function({ [key]: undefined, ...rest }) {
//         return rest;
//     }
// }
const cutUser = removeKeys('name');
console.log(cutUser(user));

// 4 пример. Переименование значений
const user2 = {
    ID: 500,
    name: 'Aleksey',
}

const renamed = ({ ID, ...rest }) => ({ identificator: ID, ...rest });
console.log(renamed(user2));

// 5 пример. Добавление условных свойств
const address = 'ul. Pushkina';
const userWithAddress = {
    ...user,
    phone: '+58379572582',
    ...(address && { address }) // в случае, если address эквивалентен true, то подставится значение из address
};
console.log(userWithAddress);