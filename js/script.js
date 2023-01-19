
// const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
// };

// const lastFilmF = prompt('Один з останніх переглянутих фільмів?', ''),
//    lastFilmRateF = prompt('На скільки його оціните?', ''),
//    lastFilmS = prompt('Один з останніх переглянутих фільмів?', ''),
//    lastFilmRateS = prompt('На скільки його оціните?', '');

// personalMovieDB.movies[lastFilmF] = lastFilmRateF;
// personalMovieDB.movies[lastFilmS] = lastFilmRateS;

// console.log(personalMovieDB);
// --------------------------------------------------------------------------
// if (4 == 4) {
//    console.log('Ok');
// } else {
//    console.log('Error');
// }
// --------------------------------------------------------------------------
// const num = 50;

// if (num < 50) {
//    console.log('more');
// } else if (num > 50) {
//    console.log('too much');
// } else if (num == 50) {
//    console.log('true');
// }

// (num === 50) ? console.log('True') : console.log('False');

// switch (num) {
//    case 49:
//       console.log('wrong');
//       break;
//    case 67:
//       console.log('wrong');
//       break;
//    case 45:
//       console.log('wrong');
//       break;
//    case 50:
//       console.log('correct');
//       break;
//    default:
//       console.log('no matches');
//       break;
// }

// const hamburger = true;
// const fries = true;
// const cola = false;

// if (hamburger && fries && cola) {
//    console.log('Menu');
// } else {
//    console.log('Not full menu');
// }

// const hamburger = 5;
// const shaurma = 4;
// const cola = 1;
// const tea = 2;

// if (hamburger >= 4 && (cola === 2 || shaurma === 4) && tea === 2) {
//    console.log('Можна посидіти');
// } else {
//    console.log('Ідемо в інший заклад');
// }

// let num = 50;

// while (num <= 60) {
//    console.log(num);
//    num++;
// }

// for (let i = 1; i < 3; i++) {
//    console.log(i);
//    for (let j = 2; j < 4; j++) {
//       console.log(j);
//    }
// }




// let result = '';

// const length = 7;

// for (let i = 1; i < length; i++) {

//    for (let j = 0; j < i; j++) {
//       result += '*';

//    }
//    result += '\n';

// }
// console.log(result);



// first: for (let i = 0; i < 3; i++) {
//    console.log(`First level: ${i}`);
//    for (let j = 0; j < 3; j++) {
//       console.log(`Second level: ${j}`);
//       for (let k = 0; k < 3; k++) {
//          if (k === 2) { continue first; }
//          console.log(`Third level: ${k}`);
//       }
//    }
// }


// задача 1 урок 23-------------------------------------------------------------------------------------

// for (let i = 5; i <= 10; i++) {
//    console.log(i);
// }


// задача 2 урок 23-------------------------------------------------------------------------------------

// for (let i = 20; i >= 10; i--) {
//    if (i === 13) { break; }
//    console.log(i);
// }


// задача 3 урок 23-------------------------------------------------------------------------------------

// for (let i = 2; i <= 10; i++) {
//    if (i % 2 !== 0) { continue; }
//    console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//    if (i % 2 === 0) {
//       continue;
//    } else {
//       console.log(i);
//    }
// }


// задача 4 урок 23-------------------------------------------------------------------------------------

// let i = 2;
// while (i <= 16) {
//    if (i % 2 === 0) {
//       i++;
//       continue;
//    } else {
//       console.log(i);
//       i++;
//    }
// }


// задача 5 урок 23-------------------------------------------------------------------------------------

// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//    arrayOfNumbers[i - 5] = i;

// }
// console.log(arrayOfNumbers);


// задача по посиланню https://learn.javascript.ru/while-for#preryvanie-tsikla-break

// for (let i = 0; i < 3; i++) {
//    alert(`number ${i}!`);
// }


// задача по посиланню https://learn.javascript.ru/while-for#preryvanie-tsikla-break

// let i = 0;
// while (i < 3) {
//    alert(`number ${i}!`);
//    i++;
// }


// задача по посиланню https://learn.javascript.ru/while-for#preryvanie-tsikla-break

// while (true) {
//    let num = prompt("Введіть число", 0);
//    if (!(num > 100) && num != null) {
//       continue;
//    } else {
//       break;
//    }
// }


// задача по посиланню https://learn.javascript.ru/while-for#preryvanie-tsikla-break

// for (let n = 16; n > 1; n--) {
//    for (let i = 2; i <= n; i++) {
//       if (n % i === 0 && i != n) {
//          break;
//       } else if (i == n) {
//          console.log(i);
//          break;
//       }
//    }
// }


// задача по посиланню https://learn.javascript.ru/while-for#preryvanie-tsikla-break

// let n = 16;
// nextPrime:
// for (let i = 2; i <= n; i++) {
//    for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//          continue nextPrime;
//       }
//    }
//    console.log(i);
// }

// КАК ИМЕННО ОН РАБОТАЕТ:

// Переменная i меньше или равна 10 ? Да!
// Выполняется тело внешнего цикла - все, что внутри фигурных скобок { }.
// Первая строка тела внешнего цикла - внутренний цикл.
//    Проверка: j меньше i ? Нет.
// Javascript выходит из внутреннего цикла, т.к.условие if не выполнено.
//    Мы - в теле внешнего цикла, выполняем следующую строку Alert.
// Alert сейчас 2. 2 - "простое число"(не делится ни на что кроме себя и 1).

// Следующий шаг внешнего цикла: 2 + 1 = 3.
// 3 <= 10 ? Да!
// Javascript выполняет тело внешнего цикла.
// Первая строка тела внешнего цикла - начало внутреннего цикла.
//    Проверка: j меньше i ?
//       Да, 2 меньше 3.
// Выполняется тело внутреннего цикла.То есть все, что внутри вторых(вложенных) фигурных скобок { }.
// Там единственная строка, и это условие, что i должно делиться на j с остатком ноль.
// 3 делится на 2 с остатком ноль ? Нет!
// Условие не выполнено, переходим на второй шаг внутреннего цикла.
// Второй шаг: 2 + 1=3
// Дальше проверка: 3 меньше 3 ? Нет!
// Сравнение вернуло ложь, выходим из внутреннего цикла в тело внешнего цикла.
// Следующая строка в теле внешнего цикла - alert.
// alert такой - 3.
// То, что 3 дошло до строки alert выдержав все испытания, показывает, что 3 это простое число.

// Тело внешнего цикла выполнено, заходим на его следующую итерацию.
// 3 + 1=4
// Проверка: 4 меньше или равно 10 ? Да!
// Выполняем тело внешнего цикла.
// Внутренний цикл сравнивает 2 с 4.
// 2 < 4 ? Да!
// Выполняется тело внутреннего цикла.
// 4 делится на 2 без остатка, т.е.остаток равен нулю.
// Условие if теперь истинно, поэтому выполняется continue.
// Подчиняясь метке nextPrime, выполнение скрипта переходит на следующую итерацию внешнего цикла.
// Поэтому alert не показывается.
// Это значит, что 4 не является простым числом.Оно делится без остатка на что - то кроме себя и единицы(на двойку).
// Новая итерация внешнего цикла: 4 + 1=5.
// Проверка: 5 меньше или равно 10 ? Да!
// Выполняется тело внешнего цикла.
// Внутренний цикл проверяет: 2 меньше 5 ? Да!
// Выполняется тело внутр.цикла.
// 5 без остатка делится на 2 ? Нет!
// Условие не выполнено(интерпретатор вернул false).
// Заход на следующую итерацию внутреннего цикла.
// 2 + 1=3.
// 3 меньше 5 ? Да!
// Выполняем тело внутреннего цикла: 5 делится без остатка на 3 ? Нет!
// Условие не выполнено.
// Заход на следующую итерацию внутреннего цикла.
// 3 + 1=4.
// 4 меньше 5 ? Да!
// Выполняем тело внутреннего цикла: 5 делится без остатка на 4 ? Нет!
// Условие не выполнено.
// Заход на следующую итерацию внутреннего цикла.
// 4 + 1=5.
// 5 меньше 5 ? Нет!
// Прерывается выполнение внутреннего цикла.
// Выполняется остаток тела внешнего цикла, то есть следующая строчка alert.
// Alert выводит 5, и это показывает что 5 это простое число.



// завдання 1* урок 23-------------------------------------------------------------------------------------

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//    result[i] = arr[i];
// }

// console.log(result);


// завдання 2* урок 23-------------------------------------------------------------------------------------

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//    if (typeof (data[i]) === 'number') {
//       data[i] = data[i] * 2;
//    } else if (typeof (data[i]) === 'string') {
//       data[i] = `${data[i]} - done`;
//    }
// }
// console.log(data);


// завдання 3* урок 23-------------------------------------------------------------------------------------

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = 1; i <= data.length; i++) {
//    result[i - 1] = data[data.length - i];
// }
// console.log(result);

// завдання 1** урок 23-------------------------------------------------------------------------------------

// const lines = 5;
// let result = '';
// for (let i = 1; i <= lines + 1; i++) {
//    for (let k = lines + 1; k > i; k--) {
//       result += ' ';

//    }
//    for (let j = 0; j < i; j++) {
//       if (j === 0) {
//          result += '*';
//       } else {
//          result += '**';
//       }

//    }
//    result += "\n";
// }
// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//    for (let j = 0; j < lines - i; j++) {
//       result += " ";
//    }
//    for (let j = 0; j < 2 * i + 1; j++) {
//       result += "*";
//    }
//    result += "\n";
// }

// console.log(result)


// let result = '';

// const length = 7;

// for (let i = 1; i < length; i++) {

//    for (let j = 0; j < i; j++) {
//       result += '*';

//    }
//    result += '\n';

// }
// console.log(result);



// const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
// };

// const a = prompt('Один з останніх переглянутих фільмів?', ''),
//    b = prompt('На скільки його оціните?', ''),
//    c = prompt('Один з останніх переглянутих фільмів?', ''),
//    d = prompt('На скільки його оціните?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {
//    const a = prompt('Один з останніх переглянутих фільмів?', ''),
//       b = prompt('На скільки його оціните?', '');

//    personalMovieDB.movies[a] = b;

// }

// console.log(personalMovieDB);

// while (true) {
//    let num = prompt("Введіть число", 0);
//    if (!(num > 100) && num != null) {
//       continue;
//    } else {
//       break;
//    }
// }
const numberOfFilms = prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

// for (let i = 0; i < 2; i++) {
//    const a = prompt('Один з останніх переглянутих фільмів?', ''),
//       b = prompt('На скільки його оціните?', '');
//    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//    } else {
//       i--;
//    }

// }

// let i = 0;
// while (i < 2) {
//    const a = prompt('Один з останніх переглянутих фільмів?', ''),
//       b = prompt('На скільки його оціните?', '');
//    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       i++;
//    }
// }

let i = 0;
do {
   const a = prompt('Один з останніх переглянутих фільмів?', ''),
      b = prompt('На скільки його оціните?', '');
   personalMovieDB.movies[a] = b;
   i++;
} while (i < 2);

console.log(personalMovieDB);

// if (personalMovieDB.count < 10) {
//    alert('Переглянуто досить мало фільмів');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//    alert('Ви класичний глядач');
// } else if (personalMovieDB.count >= 30) {
//    alert('Ви кіноман');
// } else {
//    alert('Виникла помилка');
// }
// console.log(personalMovieDB);