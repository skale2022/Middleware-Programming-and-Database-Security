// Student Name: Saurabh Kale
// Student ID: 1223450319
// Date: 09/02/2023

var age = 10;   // Int
var salary = 15.00; //Double

// console.log(`The variable type of age is ${typeof(age)}`);
// console.log(`The variable type of salary is ${typeof(salary)}`);

// var name = 'Joh Smith';
// console.log(`The variable type of name is ${typeof(name)}`);

const displayGreetings = function(name, year){ //parameter  // Name Function
    console.log(`Happy new year ${year} ${name}`)
}

// console.log(`The variable type of displayGreetings is ${typeof(displayGreetings)}`);

const displayGreetingsWithEMoji = function(name, year){ //parameter  // Name Function
    console.log(`😊 😊 Happy new year ${year} ${name} 😊 😊`)
}

const greet = function(name, year, func){
    func(name, year);
}

greet('Sam', 2022, displayGreetingsWithEMoji);
