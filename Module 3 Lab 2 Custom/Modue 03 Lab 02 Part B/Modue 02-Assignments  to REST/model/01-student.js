//Create a new folder called 'model'
// and inside it, a students.js file. This is where we will implement our CRUD operations.

let students = [];// represts student database

// create a new student
addStudent = function (student) {
    const student1 = {
        id: students.length + 1, 
        fname: student.fname,
        mname: student.mname,
        lname: student.lname,
        address: student.address,
        phone: student.phone,
        email: student.email,
        description: student.description
        // add rest of the properties of the student by looking at the student info in the index.ejs file
    };
    students.push(student1);
    return student;
};

//update specific student
upDateStudent = function (id,student) {

    const updateStudent = students[id]
    {
        updateStudent.fname = student.fname;
        updateStudent.mname = student.mname;
        updateStudent.lname = student.lname;
        updateStudent.address = student.address;
         // add rest of the properties of the student by looking at the student info in the index.ejs file
    };
    return students;
};

// get all students
getStudents = function () {
    return students;
};

// get a specific student
getSpecificStudent = function (id) {
    const specificStudent = students[id]
    if(specificStudent){
        return [specificStudent];
    }
    return [];
}
// delete a specific student
delSpecificStudent = function (id) {
    const specificStudent = students[id]
    if(specificStudent){
        students.splice(id, 1) ;
    }
    return students;
}
exports.getSpecificStudent = getSpecificStudent;
exports.deleteStudent = delSpecificStudent;
exports.getStudents = getStudents;
exports.upDateStudent = upDateStudent;
exports.addStudent = addStudent;
exports.students = students;




