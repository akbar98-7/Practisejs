/*

Q2). 
Create an object with properties name, email, password, age, gender, city,
country.
● Check if age and country properties exist in the object
or not.
● Also check firstName and lastName properties in the
object.

*/

const details = {
  name: "Akber",
  email: "akbarmirza29@gmail.com",
  password: "Akbar123",
  age: 27,
  gender: "Male",
  City: "Karachi",
  Country: "Pakistan",
};

// console.log("Age Exist ? :", "age" in details);
// console.log("Country Exist ? :", "Country" in details);
// console.log("firstName Exist ? :", "firstName" in details);
// console.log("lastName Exist ? :", "lastName" in details);

/*

Q3). 

Create a constructor function with some properties. Now create multiple
records using the constructor.

*/

function human(human_name, human_age, human_city) {
  this.name = human_name;
  this.age = human_age;
  this.city = human_city;
}

let human1 = new human("Akber", 27, "Karachi");
let human2 = new human("Ahmed", 26, "Lahore");
let human3 = new human("Ali", 25, "Islamabad");

console.log(human1);
console.log(human2);
console.log(human3);
