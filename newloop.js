// For Loop

let num = [3, 54, 1, 2, 4];

for (let i = 0; i < num.length; i++) {
  // console.log(num[i])
}

// ForEach Loop

num.forEach((element) => {
  // console.log(element * element)
});

//Array.from

let name = "Akber";
let arr = Array.from(name);
// console.log(arr);

// for...off

for (let i of num) {
  // console.log(i);
}

/* Q). var cabs = ["careem", "uber", "bykea"]
 Output required using above array using for loops:
`careem and uber are good services`
`careem and bykea are good services`
`uber and careem are good services`
`uber and bykea are good services`
`bykea and careem are good services`
`bykea and uber are good services */

var cabs = ["careem", "uber", "bykea"];

for (var i = 0; i < cabs.length; i++) {
  for (var j = 0; j < cabs.length; j++) {
    if (i !== j) {
      console.log(`${cabs[i]} and ${cabs[j]} are good services`);
    }
  }
}

