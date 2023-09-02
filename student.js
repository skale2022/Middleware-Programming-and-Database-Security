// Student Name: Saurabh Kale
// Student ID: 1223450319
// Date: 09/02/2023

var student = {
    name: 'John Smith',
    birthyear: 2002,
    course: 'IFT 458',
    grade: 90,
    age: function(){
        return 2022-this.birthyear;
    }
}
var student2 = {
    name: 'Andy Moore',
    birthyear: 2000,
    course: 'IFT 458',
    grade: 100,
    age: function(){
        return 2022-this.birthyear;
    }
}

// console.log(student['name']);
// console.log(student.name);

console.log(student2.age());
