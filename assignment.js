/* Q1. 
Make a program that will filter out all the even numbers
var numbers = [1, 3, 4, 6, 8, 9];
HINT: Array.filter */

function Evennumbers(items) {
  return items % 2 == 0;
}

let results = [1, 3, 4, 6, 8, 9].filter(Evennumbers);
// console.log(results);

/* Q2. 
Make a function that will check either the word is palindrome or not ?
Palindrome: A palindrome is a word, number, phrase, or other sequence of characters which
reads the same backward as forward, such as madam or dad. */

function isPalindrome(word) {
  let reversing = word.split("").reverse("").join("");

  return word === reversing;
}

console.log(isPalindrome("madam")); // True
console.log(isPalindrome("dad")); // True
console.log(isPalindrome("hello")); // False

/*Q3. 
Filter out students which has the substring ‘an.’ So it will return an array consisting of those students
names as per the matching criteria
var students = ['hassan', 'salman', 'kamran', 'rashid', 'faizan', ‘noor’];
HINT: String.includes */

const students = ["hassan", "salman", "kamran", "rashid", "faizan", "noor"];

// const result = students.filter(students=> students.includes("an"));

// console.log(result);

/*Q4. 
You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of
occurrences of word “the” in given string.
HINT: String.split */

const words = "The quick brown fox jumps over the lazy dog";

const lower = words.toLowerCase();

const splits = lower.split(" ");

const finder = splits.filter((word) => word === "the").length;

const resultant = `The Ocuurences  of word is ${finder} times`;

// console.log(resultant);

/*Q5. 
Write a two dimensional for loop program that will print. Get prompt from user & make identity matrix
accordingly
eg; if user enters 3 then output matrix will be of 3 x 3
1 0 0
0 1 0
0 0 1 */

// let size = +prompt("Enter the size of identity matrix:");

// for (let i = 0; i < size; i++) {
//   let row = "";

//   for (let j = 0; j < size; j++) {
//     if (i === j) {
//       row += "1 ";
//     } else {
//       row += "0 ";
//     }
//   }

// //   console.log(row);
// }

/*Q6. 
Write a for loop program that will print
12345 *****
1234 ****
123 ***
12 **
1 * */

for (let i = 5; i >= 1; i--) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += j;
  }

  row += " ";

  for (let k = 1; k <= i; k++) {
    row += "*";
  }

  // console.log(row);
}

/*Q7. 
Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and
undefined. */

const myData = {
  fullName: "Akber Mirza", // String
  Age: 27, // Number
  isLoggedIn: false, // Boolean
  height: {}, // Object
  weight: undefined, // Undefined
};

function name(value) {
  return value;
} // Function

// console.log(typeof myData.height);

/*Q8. 
Make a javascript function, that should take arguments (2 operands + 1 operator) & based on that
perform these actions.
i) Sum
ii) Divide
iii) Subtract
iv) Multiply
Note: Take values from user */

function calculate(a, b) {
  return {
    sum: a + b,
    diff: a - b,
    mul: a * b,
    div: a / b,
  };
}

// const n1 = Number(prompt("Enter First Number:"));
// const n2 = Number(prompt("Enter Second Number:"));

// const result = calculate(n1, n2);
// console.log(result);

/*Q9. 
We need to store studentData into a variable, which data type we will be using to store that ? Could you
make that variable & store these values
- firstName
- lastName
- rollNumber
- className
- midtermScore
- finalScore
- hasClassRepresentativeRole */

const studentData = {
  firstName: "Akber",
  lastName: "Mirza",
  rollNumber: 1122,
  className: "C",
  midtermScore: 89,
  finalScore: 91,
  hasClassRepresentativeRole: true,
};

/*Q10. 
 After storing these above values, could you access these below properties using javascript
- className
- finalScore
- hasClassRepresentativeRole */

// console.log(studentData.className);
// console.log(studentData.finalScore);
// console.log(studentData.hasClassRepresentativeRole);
