// Lecture: Dynamic Properties and Methods in JavaScript

// Good morning, class! Today, we're delving into an exciting aspect of JavaScript: adding properties and methods dynamically to objects.
// By the end of this lecture, you'll be able to extend and modify objects on-the-fly, a skill essential for flexible code.

// 1. Setting the Stage with a Basic Object

/// Before we dive into the dynamic part, let's lay the groundwork. In JavaScript, an object is a collection of key-value pairs.
/// Let's consider a simple example:
// Type javascript code below
let user = {
    name: "John",
    age: 25
};
// This user object has two properties: name and age.

// 2. Introducing Dynamic Properties

// Now, here's where it gets interesting. Instead of defining all properties upfront, we can add them as our program runs. Using either the bracket notation or dot notation, we can introduce new properties to our object.

// Type javascript code below

let propertyName = "country";
user[propertyName] = "USA";
console.log(user);  

propertyName = "state";
user[propertyName] = "Arizona";
console.log(user);  

propertyName = "city";
user[propertyName] = "Tempe";
console.log(user);  
// Outputs: { name: 'John', age: 25, country: 'USA' }

//Print the name of user
console.log(`Name of user is ${user['name']}`);

//Destructing the object
const { name, age, country } = user;

console.log(`Name of the user is ${name}`);
// What we did here is dynamically add the country property to our user.

// 3. Making Things Functional with Dynamic Methods

// Methods in JavaScript are essentially functions associated with an object. Let's add a function or "method" that allows our user to greet:

// Type javascript code below
function greetMessage() {
    console.log(`Hello, my name is ${this.name} and I am from ${this.country}`);
}

user.greet = greetMessage;
user.greet();  // Outputs: "Hello, my name is John and I am from USA"
// With this, our user can now greet people!

// 4. Bundling Properties and Methods Using a Helper Function

//What if we have multiple properties or methods to add? Repeating the process can get tedious. Instead, we can employ a helper function:

// Type javascript code below

function enhanceUser(obj, newProperties) {
    for(let key in newProperties) {
        obj[key] = newProperties[key];
    }
}

let additionalProps = {
    job: "Engineer",
    speak: function() {
        console.log("I love programming!");
    }
};

enhanceUser(user, additionalProps);
console.log(user.job);  // Outputs: "Engineer"
user.speak();  // Outputs: "I love programming!"
// See how our user evolved over time? It's dynamic and can adapt!
