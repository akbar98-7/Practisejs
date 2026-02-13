// Singleton

// Object Literals



const mysym = Symbol("key1")

const JsUser ={
    name: "Akber",
    "full name": "Akber Mirza",
    [mysym]: "mykey1",
    age: 24,
    location: "Karachi",
    email: "akbarmirza29@gmail.com"
    
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log( JsUser [mysym])