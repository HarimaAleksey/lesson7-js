const students = ["Андрей", "Тимофей", "Роберт", "Кирилл", "Глеб"];
// pop() - удаляет последний элем. 
// массива и возвращает удаленный элемент, при этом изменяя исходный массив
console.log(students.pop()); // Глеб
console.log(students); //  ["Андрей", "Тимофей", "Роберт", "Кирилл"]

// push() - добавлять элем. в конец массива
// возвращает длину, при этом изменяя исходный массив
console.log(students.push('Глеб')); // 5
console.log(students); // ["Андрей", "Тимофей", "Роберт", "Кирилл", "Глеб"]

// shift() - удаляет первый элемент массива
// возвращает удаленный элемент, при этом изменяя исходный массив
console.log(students.shift()); // Андрей
console.log(students); // ["Тимофей", "Роберт", "Кирилл", "Глеб"]

// unshift() - добавляет элемент в начало массива
// возвращает длину, при этом изменяя исходный массив
console.log(students.unshift('Андрей')); // 5
console.log(students); // ["Андрей", "Тимофей", "Роберт", "Кирилл", "Глеб"]

// join() - преобразует массив в строку, через указанный разделитель
const studentsRow = students.join(';');
console.log(typeof studentsRow); // string
console.log(studentsRow); // Андрей;Тимофей;Роберт;Кирилл;Глеб

// split() - преобразует строку в массив, по разделителю
const studentsAr = studentsRow.split(';');
console.log(studentsAr); // ["Андрей", "Тимофей", "Роберт", "Кирилл", "Глеб"]
console.log('--------------------------------------------')
// slice(begin, end) - срез, возвращает участок массива от begin до end, не вкл. end
// исходный массив при этом не меняется
// используется для создании копии массива
let copyStudents = students.slice(); // создаем копию
console.log(copyStudents); // ['Андрей', 'Тимофей', 'Роберт', 'Кирилл', 'Глеб']

// так делать не правильно, потому что при изменении copyStudents2 будет изм. и students
// поскольку указатель на ячейку памяти останется тем же
// let copyStudents2 = students; 
// copyStudents2[2] = 'Алексей';
// console.log(copyStudents2); // ['Андрей', 'Тимофей', 'Алексей', 'Кирилл', 'Глеб']
// console.log(students); // ['Андрей', 'Тимофей', 'Алексей', 'Кирилл', 'Глеб']

// let sliceStudents = students.slice(1, 3); // ['Тимофей', 'Роберт']
const lastStudentName = students.slice(-1);
console.log(lastStudentName); // ['Глеб']

const lastStudentsNames = students.slice(-3, -1); // ['Роберт', 'Кирилл']
const lastStudentsNames2 = students.slice(-3); // ['Роберт', 'Кирилл', 'Глеб']

// splice(start[, deleteCount[, item1[, item2[, ...]]]) - позволяет удалять, добавлять
// заменять элементы по очередно или одновременно
// меняет исходный массив и возвращает его
students.splice(1, 1); // Тимофея удалили
console.log(students); // ['Андрей', 'Роберт', 'Кирилл', 'Глеб']

const additionalStudents = ['Тимофей', 'Алексей'];
students.splice(2, 0, ...additionalStudents);
console.log(students); // ['Андрей', 'Роберт', 'Тимофей', 'Алексей', 'Кирилл', 'Глеб']

// reverse() - переворачивает массив, меняя исходный
const reverseStudents = students.slice().reverse();
console.log(reverseStudents);
// sort() - сортировка массива по убывани/возрастанию
const sortStudents = students.slice().sort();
console.log(sortStudents); // ['Андрей', 'Глеб', 'Кирилл', 'Роберт', Array(2)]
// concat() - объединяет массивы
const concatStudents = students.concat(reverseStudents)
console.log(concatStudents);