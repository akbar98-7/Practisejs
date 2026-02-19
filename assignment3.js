/* 

Q1). 

Write a program to print numeric counting from 1 to 10.

*/

for (let i = 0; i <= 10; i++) {
  // console.log(i)
}

for (let i = 0; i <= 10; i++) {
  // console.log(`Outer loop value : ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value : ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + '='+ i*j);
  }
}

/* 

Q2). 

 Write a program to print multiplication table of any number
using for loop. Table number & length should be taken as an
input from user

*/

// let tab = Number(prompt("Enter multiplication number"));
// let length = Number(prompt("Enter Length"));

// for(i=1; i<=length; i++) {
//     console.log(`${tab} * ${i} = ${tab * i}`);
// }

/*
Q3). 

Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”]

*/

const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  // console.log("Element at index " + i + " is " + fruits[i]);
}

/*
Q4). 

Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

*/

// Counting:

for (let i = 1; i <= 15; i++) {
  // console.log(i);
}

//Reverse counting:

for (let i = 10; i >= 1; i--) {
  // console.log(i);
}

//Even:

for (let i = 0; i <= 20; i += 2) {
  // console.log(i);
}

//Odd:

for (let i = 1; i <= 19; i += 2) {
  // console.log(i);
}

//Series:

let series = [];

for (let i = 2; i <= 20; i += 2) {
  series.push(i + "k");
}

// console.log("series :" + series.join(", "));

/*
Q5). 

You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example:


*/

let a = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/ma'am?",
);

let index = a.indexOf(userInput);

if (index !== -1) {
  alert(`${userInput} is available at index ${index} in our bakery`);
} else {
  alert(`We are sorry. ${userInput} is not available in our bakery`);
}

/*
Q6). 

Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12].

*/

// let A = [24, 53, 78, 91, 12];

// let largest = Math.max(...A);

// console.log("The Largest Number is" , largest);

/*
Q7). 

Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12].

*/

let A = [24, 53, 78, 91, 12];

let shortest = Math.min(...A);

// console.log("The shortest number is", shortest);

/* 
Q8). 

Write a program to print multiples of 5 ranging 1 to

*/

for (let i = 5; i <= 100; i += 5) {
  //   console.log(i);
}
