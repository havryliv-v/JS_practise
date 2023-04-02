"use strict";
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
// const numberOfFilms = prompt('Скільки фільмів ви вже подивились?', '');

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
// };

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

// let i = 0;
// do {
//    const a = prompt('Один з останніх переглянутих фільмів?', ''),
//       b = prompt('На скільки його оціните?', '');
//    personalMovieDB.movies[a] = b;
//    i++;
// } while (i < 2);

// console.log(personalMovieDB);

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

// function showFirstMessage(text) {
//    alert(text);
// }
// showFirstMessage("Hello Bitch!!!");

// let a = 3;
// function addTwo(x) {
//    let ret = x + 2;
//    return ret;

// }
// let b = addTwo(a);
// console.log(b);

// function ret() {
//    let num = 500;
//    return num;
// }
// const myPayment = ret();
// console.log(myPayment);


// const usdCurr = 26;
// const eurCurr = 30;


// function convert(amount, curr) {
//    return curr * amount;
// }
// convert(526, usdCurr);


// Урок 6-----------------------------------------------------------------------

// function sayHello(name) {
//    return `Привіт ${name}!`;
// }
// sayHello('Віталій');

// function returnNeighboringNumbers(x) {
//    return [x - 1, x, x + 1];
// }

// console.log(returnNeighboringNumbers(5));

// function getMathResult(num, times) {
//    if (typeof times !== 'number' || times <= 0) {
//       return num;
//    }
//    let str = '';
//    for (let i = 1; i <= times; i++) {
//       if (i === times) {
//          str += `${num * i}`;
//       } else {
//          str += `${num * i}---`;
//       }

//    }
//    return str;
// }

// console.log(getMathResult(10, 5));

// for (let i = 0; i < 2; i++) {
//    const a = prompt('Один з останніх переглянутих фільмів?', ''),
//       b = prompt('На скільки його оціните?', '');
//    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//    } else {
//       i--;
//    }


// const str = "testing new method";

// console.log(str.slice(-6));


// Урок 29------------------------------------------------------------------------------------------------------------

// let numberOfFilms;

// function start() {
//    numberOfFilms = prompt('Скільки фільмів ви вже подивились?', '');

//    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//       numberOfFilms = prompt('Скільки фільмів ви вже подивились?', '');
//    }
// }
// start();

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
// };

// function rememberMyFilms() {
//    for (let i = 0; i < 2; i++) {
//       const a = prompt('Один з останніх переглянутих фільмів?', ''),
//          b = prompt('На скільки його оціните?', '');
//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//          personalMovieDB.movies[a] = b;
//       } else {
//          i--;
//       }

//    }
// }
// // rememberMyFilms();


// function detectPersonalLvl() {
//    if (personalMovieDB.count < 10) {
//       alert('Переглянуто досить мало фільмів');
//    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       alert('Ви класичний глядач');
//    } else if (personalMovieDB.count >= 30) {
//       alert('Ви кіноман');
//    } else {
//       alert('Виникла помилка');
//    }
// }
// // detectPersonalLvl();

// function showMyDB(hidden) {
//    if (!hidden) {
//       console.log(personalMovieDB);
//    }
// }
// // showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//    for (let i = 1; i <= 3; i++) {
//       const genre = prompt(`Ваш улюблений жанр під номером ${i}`, '');
//       if (genre == null || genre == '' || !isNaN(genre)) {
//          i--;
//       } else {
//          personalMovieDB.genres[i - 1] = genre;
//       }
//       console.log(typeof (genre));
//    }
// }

// writeYourGenres();
// console.log(personalMovieDB);


// Урок 7 задачі -----------------Моє рішення---------------------------(не приймає українську)

// function calculateVolumeAndArea(length) {
//    if (length <= 0 || !Number.isInteger(length) || typeof (length) !== 'number') {
//       return `При обчисленні сталася помилка`;
//    } else {
//       return `Об'єм куба: ${Math.pow(length, 3)}, площа всієї поверхні: ${6 * Math.pow(length, 2)}`;
//    }
// }
// console.log(calculateVolumeAndArea(-2));

// Урок 7 задачі -----------------Правильне рішення---------------------------(не приймає українську)

// function calculateVolumeAndArea(length) {
//    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//       return "При обчисленні сталася помилка";
//    }

//    let volume = 0,
//       area = 0;
//    volume = length * length * length;
//    area = 6 * (length * length);

//    return `Об'єм куба: ${volume}, площа всієї поверхні: ${area}`;
// }
// console.log(calculateVolumeAndArea(7));
// -------------------------------------------------------------------

// let number;
// function asklength() {
//    number = +prompt('Сторона куба?', '');
//    return number;
// }

// console.log(asklength());

// function calculateVolumeAndArea(length) {
//    if (length < 0 || !Number.isInteger(length) || typeof (length) !== 'number') {
//       return alert(`При обчисленні сталася помилка`);
//    } else {
//       return alert(`Об'єм куба ${Math.pow(length, 3)}, Площа куба ${6 * Math.pow(length, 2)}`);
//    }
// }

// console.log(calculateVolumeAndArea(number));


// Урок 7* задачі --------------------------------------------

// function getCoupeNumber(seat) {
//    if (typeof (seat) !== 'number' || !Number.isInteger(seat) || seat < 0) {
//       return "Помилка. Перевірте правильність введеного номера місця";
//    } else if (seat >= 37 || seat == 0) {
//       return "Таких місць у вагоні не існує";
//    } else {
//       return Math.ceil(seat / 4);
//    }
// }
// console.log(getCoupeNumber(33));


// Урок 8* задачі --------------------------------------------

// function getTimeFromMinutes(time) {
//    if (time < 0 || !Number.isInteger(time)) {
//       return `Помилка, перевірте дані`;
//    } else if (time <= 59) {
//       return `Це 0 годин і ${time} хвилин`;
//    } else if (time <= 119) {
//       return `Це 1 годинa і ${time - 60} хвилин`;
//    } else if (time <= 179) {
//       return `Це 2 години і ${time - 120} хвилин`;
//    } else if (time <= 239) {
//       return `Це 3 годинa і ${time - 180} хвилин`;
//    } else if (time <= 299) {
//       return `Це 4 години і ${time - 240} хвилин`;
//    } else if (time <= 359) {
//       return `Це 5 годин і ${time - 300} хвилин`;
//    } else if (time <= 419) {
//       return `Це 6 годин і ${time - 360} хвилин`;
//    } else if (time <= 479) {
//       return `Це 7 годин і ${time - 420} хвилин`;
//    } else if (time <= 539) {
//       return `Це 8 годин і ${time - 480} хвилин`;
//    } else if (time <= 119) {
//       return `Це 9 годин і ${time - 540} хвилин`;
//    } else if (time == 600) {
//       return `Це 10 годин і ${time - 600} хвилин`;
//    }
// }
// console.log(getTimeFromMinutes(456));


// function getTimeFromMinutes(currTime) {
//    if (typeof (currTime) !== 'number' || currTime < 0 || !Number.isInteger(currTime)) {
//       return `Помилка, перевірте дані`;
//    }

//    const hours = Math.floor(currTime / 60);
//    const minutes = currTime % 60;
//    let hoursStr = '';
//    switch (hours) {
//       case 0:
//          hoursStr = 'часов';
//          break;
//       case 1:
//          hoursStr = 'час';
//          break;
//       case 2:
//       case 3:
//       case 4:
//          hoursStr = 'часа';
//          break;
//       default:
//          hoursStr = 'часов';
//    }
//    return `Это  ${hours} ${hoursStr} i ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(1480));


// -------------------------------------------------------------------------------------------

// function findMaxNumber(a, b, c, d) {
//    if (arguments.length < 4 ||
//       typeof (a) !== 'number' ||
//       typeof (b) !== 'number' ||
//       typeof (c) !== 'number' ||
//       typeof (d) !== 'number') {
//       return 0;
//    } else {
//       return Math.max(a, b, c, d);
//    }
// }
// console.log(findMaxNumber(1, 5, 7, 90.5));


// -----------------------------------------------------------------------------------------


// function fib(fibNum) {
//    if (typeof (fibNum) !== 'number' || fibNum <= 0 || !Number.isInteger(fibNum)) {
//       return "";
//    }
//    let result = '';
//    let first = 0;
//    let second = 1;
//    for (let i = 0; i < fibNum; i++) {
//       if (i + 1 === fibNum) {
//          result += `${first}`;
//       } else {
//          result += `${first} `;
//       }
//       let third = first + second;
//       first = second;
//       second = third;
//    }
//    return result;
// }
// console.log(fib(5));

// -------------------------------------------------------------------------------------------

// const persInfo = {
//    name: "Vitalii",
//    age: 24,
//    birth: "15/06/1998",
//    bType: "strong",
//    int: {
//       young: "smart",
//       older: "smarter"
//    }
// };

// console.log(Object.keys(persInfo).length);
// const { young, older } = persInfo.int;
// console.log(young, older);

// function convertCtoF(celsius) {
//    let fahrenheit = celsius * 9 / 5 + 32;
//    return fahrenheit;
// }

// console.log(convertCtoF(-30));


// --------------------------- Algorithms--------------------------

// const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35];
// const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function ArrSearch(n, ArrTarget) {
//    let steps = 0;
//    for (let i = 0; i < ArrTarget.length; i++) {
//       steps++;
//       if (ArrTarget[i] === n) {
//          return `found ${ArrTarget[i]} on ${steps} poition`;
//       }
//    }
//    return 'Error!!!';
// }

// console.log(ArrSearch(1, unsortedArr));
// console.log(sortedArr.length);




// function Search(n, Arr) {
//    let start = 0,
//       end = Arr.length,
//       mid = Math.floor((start + end) / 2),
//       step = 0;
//    for (let i = 0; i < Arr.length; i++) {
//       if (Arr[mid] !== n) {
//          if (n < Arr[mid]) {
//             end = mid;
//          } else {
//             start = mid;
//          }
//          mid = Math.floor((start + end) / 2);
//          step++;
//       }
//       if (Arr[mid] === n) {
//          return `Number ${n} was found in ${step} steps`;
//       }
//    }
// }

// console.log(Search(9, sortedArr));

// const arr = [15, 2, 9, 5, 3, 7, 4, 10, 13, 11, 14, 6, 1, 8, 12];

// function Sort(Sarr, callback) {
//    let isSorted;
//    for (let i = 0; i < Sarr.length; i++) {
//       isSorted = true;
//       for (let j = 0; j < Sarr.length; j++) {
//          if (Sarr[j] > Sarr[j + 1]) {
//             let tmp = Sarr[j];
//             Sarr[j] = Sarr[j + 1];
//             Sarr[j + 1] = tmp;
//             isSorted = false;
//          }
//       }
//       if (isSorted) {
//          return Sarr;
//       }

//    }
//    callback();
//    return Sarr;
// }

// function searchValue(n, arr) {
//    let start = 0,
//       end = arr.length,
//       mid = Math.floor((start + end) / 2),
//       steps = 0;
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[mid] !== n) {
//          if (n < arr[mid]) {
//             end = mid;
//          } else {
//             start = mid;
//          }
//          mid = Math.floor((start + end) / 2);
//          steps++;
//       }
//       if (arr[mid] === n) {
//          return `Знайшов ${n} на ${steps} позиції`;
//       }
//    }
// }

// console.log(Sort(arr, searchValue));
// console.log(searchValue(6, arr));

// function countDown(n) {

//    for (let i = n; i > 0; i--) {

//       console.log(i);

//    }

//    return ('Финиш');

// }
// console.log(countDown(12));

// function countDownRecursive(n) {

//    if (n <= 0) {

//       console.log('Финиш');

//       return;

//    }

//    console.log(n);

//    countDownRecursive(n - 1);
// }


// function ask(quescion, yes, no) {
//    if (confirm(quescion)) {
//       yes();
//    } else {
//       no();
//    }
// }
// function Good() { alert('Good'); }
// ask(
//    'Вам сподобався наш сайт?',
//    Good,
//    function () { alert('Fuck you'); }
// );

// function ask(question, yes, no) {
//    if (confirm(question)) {
//       yes();
//    }
//    else {
//       no();
//    }
// }

// ask(
//    "Ви згодні?",
//    () => alert("Ви погодились!"),
//    () => alert("Ви відмінили")
// );

// const arr = {
//    one: 1,
//    two: 2,
//    five: 5
// };

// const newArr = { ...arr };

// console.log(newArr);

// -----------------------10------------11--------------12--------------------


// const personalPlanPeter = {
//    name: "Peter",
//    age: "29",
//    skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//          js: '20%',
//          php: '10%'
//       },
//       exp: '1 month'
//    }
// };

// // const { exp } = personalPlanPeter.skills;

// // console.log(exp);

// function showExperience(plan) {
//    const { exp } = plan.skills;
//    return console.log(exp);
// }




// const personalPlanPeter = {
//    name: "Peter",
//    age: "29",
//    skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//          js: '20%',
//          php: '10%'
//       },
//       exp: '1 month'
//    }
// };


// function showProgrammingLangs(plan) {
//    let str = '';
//    const { programmingLangs } = plan.skills;
//    for (let key in programmingLangs) {
//       str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;

//    }
//    return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));


// const personalPlanPeter = {
//    name: "Peter",
//    age: "29",
//    skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//          js: '20%',
//          php: '10%'
//       },
//       exp: '1 month'
//    },
//    showAgeAndLangs: function (plan) {
//       const { age } = plan;
//       const { languages } = plan.skills;
//       let str = `Мне ${age} и я владею языками: `;

//       languages.forEach(function (lang) {
//          str += `${lang.toUpperCase()} `;
//       });
//       return str;
//    }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//    let str = '';
//    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из:';
//    arr.forEach(member => {
//       str += ` ${member}`;
//    });
//    return str;
// }

// console.log(showFamily(family));



// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//    arr.forEach(city => {
//       console.log(city.toLowerCase());
//    });
// }

// standardizeStrings(favoriteCities);



// const someString = 'This is some strange string';

// function reverse(str) {
//    if (typeof str !== 'string') {
//       return 'Ошибка';
//    }
//    return str.split('').reverse().join('');
// }

// console.log(reverse(someString));




// const someString = 'This is some strange string';

// function reverse(str) {
//    if (typeof (str) !== 'string') {
//       return "Ошибка!";
//    }
//    let newStr = '';
//    for (let i = str.length - 1; i >= 0; i--) {
//       newStr += str[i];
//    }
//    return newStr;
// }

// console.log(reverse(someString));



// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//    let str = '';
//    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
//    arr.forEach(function (curr, i) {
//       if (curr !== missingCurr) {
//          str += `${curr} \n`;
//       }
//    });
//    return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));


// let user = {
//    name: "John",
//    age: 30
// };


// let sayHi = function () {
//    return 'Hello';
// };

// user.sayHi = sayHi;

// console.log(user.sayHi());


// --------------------------------------------Урок 37-----------------------------------------



// const personalMovieDB = {
//    count: 0,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
//    start: function () {
//       personalMovieDB.count = prompt('Скільки фільмів ви вже подивились?', '');

//       while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//          personalMovieDB.count = prompt('Скільки фільмів ви вже подивились?', '');
//       }
//    },

//    rememberMyFilms: function () {
//       for (let i = 0; i < 2; i++) {
//          const a = prompt('Один з останніх переглянутих фільмів?', ''),
//             b = prompt('На скільки його оціните?', '');
//          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//          } else {
//             i--;
//          }

//       }
//    },

//    detectPersonalLvl: function () {
//       if (personalMovieDB.count < 10) {
//          alert('Переглянуто досить мало фільмів');
//       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//          alert('Ви класичний глядач');
//       } else if (personalMovieDB.count >= 30) {
//          alert('Ви кіноман');
//       } else {
//          alert('Виникла помилка');
//       }
//    },

//    showMyDB: function (hidden) {
//       if (!hidden) {
//          console.log(personalMovieDB);
//       }
//    },

//    toggleVisibleMyDB: function (hidden) {
//       if (personalMovieDB.privat) {
//          personalMovieDB.privat = false;
//       } else {
//          personalMovieDB.privat = true;
//       }
//    },

//    writeYourGenres: function () {
//       for (let i = 1; i < 2; i++) {

//          const genre = prompt(`Напишіть ваші улюблені жанри через кому`).toLowerCase;
//          if (genre == null || genre == '' || !isNaN(genre)) {
//             alert('Ви ввели неправильну інформацію');
//             i--;
//          } else {
//             personalMovieDB.genres = genre.split(', ');
//             personalMovieDB.genres.sort();
//          }

//          personalMovieDB.genres.forEach((item, i,) => {
//             console.log(`Улюблений жанр ${i + 1} - це ${item}`);
//          });
//       }
//    }
// };

// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB(personalMovieDB.privat);



// ---------------------------------------практика 13------------------------------

// const shoppingMallData = {
//    shops: [
//       {
//          width: 10,
//          length: 5
//       },
//       {
//          width: 15,
//          length: 7
//       },
//       {
//          width: 20,
//          length: 5
//       },
//       {
//          width: 8,
//          length: 10
//       }
//    ],
//    height: 5,
//    moneyPer1m3: 30,
//    budget: 50000
// };

// function isBudgetEnough(data) {
//    let moneyPerShop = [];

//    data.shops.forEach((shop, i) => {
//       moneyPerShop[i] = (shop.width * shop.length * data.height * data.moneyPer1m3);
//    });
//    if ((moneyPerShop.reduce((a, b) => a + b)) < data.budget) {
//       return 'Бюджета достаточно';

//    } else {
//       return 'Бюджета недостаточно';
//    }
// }
// console.log(isBudgetEnough(shoppingMallData));


// ----------------------------------------------Практика 14-------------------------------

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Vital'];

// function sortStudentsByGroups(arr) {
//    arr.sort();
//    let a = [], b = [], c = [], rest = [];


//    for (let i = 0; i < arr.length; i++) {
//       if (i < 3) {
//          a.push(arr[i]);
//       } else if (i < 6) {
//          b.push(arr[i]);
//       } else if (i < 9) {
//          c.push(arr[i]);
//       } else {
//          rest.push(arr[i]);
//       }
//    }
//    return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
// }

// console.log(sortStudentsByGroups(students));



// function createCounter() {
//    let counter = 0;

//    const myFunction = function () {
//       counter = counter + 1;
//       return counter;
//    };
//    return myFunction;
// }
// const increment = createCounter();

// const c1 = increment();
// const c2 = increment();
// const c3 = increment();


// let number = 5; debugger

// function logNumber() {
//    let number = 4; debugger
//    console.log(number);
// }

// number = 6;

// logNumber(); debugger
// const UserFName = prompt('Enter First name');
// const UserLName = prompt('Enter Last name');

// function SayHiBye(firstName, lastName) {
//    function getFullName() {
//       return firstName + " " + lastName;
//    }
//    alert(`Hello ${getFullName()}, nice to see you`);
//    alert(`Bye ${getFullName()}, see you next time`);
// }

// SayHiBye(UserFName, UserLName);


// let value = "Сюрприз!";

// function f() {
//    let value = "ближайшее значение";

//    function g() {
//       debugger; // в консоли: напишите alert(value); Сюрприз!
//    }

//    return g;
// }

// let g = f();
// g();


// function sum(a) {
//    return function (b) {
//       return a + b;
//    };
// }

// console.log(sum(5)(2));


// alert('1'[2]);

// const restorantData = {
//    menu: [
//       {
//          name: 'Salad Caesar',
//          price: '14$'
//       },
//       {
//          name: 'Pizza Diavola',
//          price: '9$'
//       },
//       {
//          name: 'Beefsteak',
//          price: '17$'
//       },
//       {
//          name: 'Napoleon',
//          price: '7$'
//       }
//    ],
//    waitors: [
//       { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
//    ],
//    averageLunchPrice: '20$',
//    openNow: true
// };

// function isOpen(prop) {
//    let answer = '';
//    prop ? answer = 'Открыто' : answer = 'Закрыто';

//    return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//    if ((+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1))) < average.slice(0, -1)) {
//       return 'Цена ниже средней';
//    } else {
//       return 'Цена выше средней';
//    }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//    const copy = Object.assign({}, data);

//    copy.waitors = [{ name: 'Mike', age: 32 }];
//    return copy;
// }

// console.log(transferWaitors(restorantData));


// ----------------- Lesson 47-----------------------

// {
//    let studentsInfo = {
//       js: [{
//          name: 'John',
//          progress: 100
//       }, {
//          name: 'Ivan',
//          progress: 80
//       }],
//       html: {
//          basic: [{
//             name: 'Peter',
//             progress: 20
//          }, {
//             name: 'Ann',
//             progress: 90
//          }],
//          pro: [{
//             name: 'Sam',
//             progress: 40
//          }]
//       }
//    };

   // let getTotalProgressByIteration = (data) => {
   //    let total = 0,
   //       students = 0;

   //    for (let course of Object.values(data)) {
   //       if (Array.isArray(course)) {
   //          students += course.length;
   //          for (let i = 0; i < course.length; i++) {
   //             total += course[i].progress;
   //          }
   //       } else {
   //          for (let subCourse of Object.values(course)) {
   //             students += subCourse.length;
   //             for (let i = 0; i < subCourse.length; i++) {
   //                total += subCourse[i].progress;
   //             }

   //          }
   //       }
   //    }
   //    return total / students;
   // };


//    let getTotalProgressByRecursion = (data) => {
//       if (Array.isArray(data)) {
//          let total = 0;
//          for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//          }
//          return [total, data.length];
//       } else {
//          let total = [0, 0];
//          for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//          }
//          return total;
//       }
//    };

//    const result = getTotalProgressByRecursion(studentsInfo);
//    console.log(result[0] / result[1]);

// }



// function amountOfPages(summary) {
//    let result = '';
//    let n = 0;

//    for (let i = 1; i <= summary; i++) {
//       result += i;
//       if (result.length === summary) {
//          n = i;
//          break;
//       }
//    }
//    if (result.length === summary) {
//       return n;
//    } else if (result.length > summary) {
//       return 'Error';
//    }

// }
// console.log(amountOfPages(10));


// function amountOfPages(summary) {
//    let result = '';
//    let n = 0;
//    for (let i = 1; i <= summary; i++) {
//       result += i;
//       if (result.length === summary) {
//          n = i;
//          break;
//       } else if (result.length > summary) {
//          i--;
//          n = i;
//          break;
//       }
//    }
//    return n;
// }

// console.log(amountOfPages(24));



// window.addEventListener('DOMContentLoaded', () => {

//    const tabs = document.querySelectorAll('.tabheader__item'),
//       tabsContent = document.querySelectorAll('.tabcontent'),
//       tabsParent = document.querySelector('.tabheader__items');
//    function hideTabContent() {
//       tabsContent.forEach(item => {
//          item.classList.add('hide');
//          item.classList.remove('show', 'fade');
//       });
//       tabs.forEach(tab => {
//          tab.classList.remove('tabheader__item_active');
//       });
//    }

//    function showTabContent(i = 0) {
//       tabsContent[i].classList.add('show', 'fade');
//       tabsContent[i].classList.remove('hide');
//       tabs[i].classList.add('tabheader__item_active');
//    }
//    hideTabContent();
//    showTabContent();


//    tabsParent.addEventListener('click', (event) => {
//       const target = event.target;
//       if (target && target.classList.contains('tabheader__item')) {
//          tabs.forEach((item, i) => {
//             if (target == item) {
//                hideTabContent();
//                showTabContent(i);
//             }
//          });
//       }
//    });
// });