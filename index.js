// function schet(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return sum;
//   } 
//   const arr = [1, 2, 3, 4, 5];
// const sum = schet(arr);
// console.log(sum);


// function ji(number) {
//     let divisors = [];
//     for (let i = 1; i <= number; i++) {
//       if (number % i === 0) {
//         divisors.push(i);
//       }
//     }
//     return divisors;
//   }
//   const number = 10;
//   const divisors = ji(number);
//   console.log(divisors);


// function harak(str) {
//     return str.split('');
//   }
//   const str = "hobana";
// const characters = harak(str);
// console.log(characters);


// function pel(str) {
//     return str.split('').reverse().join('');
//   }
//   const str = "hell";
// const reversedString = pel(str);
// console.log(reversedString);


// function Oleg(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
//   const str = "astalavista";
// const capitalizedStr = Oleg(str);
// console.log(capitalizedStr);


// function Liza(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
//   }
//   const str = "holla amigo";
//   const capitalizedStr = Liza(str);
//   console.log(capitalizedStr);


// function obratka(n) {
//     const arr = [];
//     for (let i = 1; i <= n; i++) {
//       arr.push(i);
//     }
//     return arr;
//   }
//   const n = 6;
//   const numbers = obratka(n);
//   console.log(numbers);
    

// function cislo(number) {
//     let sum = 0;
//     let num = Math.abs(number);
//     while (num > 0) {
//       sum += num % 10;
//       num = Math.floor(num / 10);
//     }
//     return sum;
//   }
//   const number = 76543;
// const sumOfDigits = cislo(number);
// console.log(sumOfDigits);


// function god(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   const year = 2023;
// const isLeap = god(year);
// console.log(isLeap);


// function day(seconds) {
//     const secondsInADay = 24 * 60 * 60;
//     const days = Math.floor(seconds / secondsInADay);
//     return days;
//   }
//   const seconds = 241237214612;
// const days = day(seconds);
// console.log(days);


// function revork(array) {
//     const randomIndex = Math.floor(Math.random() * array.length);
//     return array[randomIndex];
//   }
//   const arr = [11, 23, 37, 72, 48];
//   const randomElement = revork(arr);
//   console.log(randomElement);


// function chislo(num) {
//     for(var i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
//         if(num % i === 0) {
//             console.log(num + "не простое число");
//             return false; 
//         }
//     console.log(num + "простое число");
//     return num > 1;
// }

// chislo(9);