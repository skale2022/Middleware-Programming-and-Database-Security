//Create a new folder called 'model'
// and inside it, a students.js file. This is where we will implement our CRUD operations.

let students = [];
addStudent = function (student) {
    console.log(`inside add student- ${JSON.stringify(student)}`)
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
    return student1;
};

upDateStudent = function (student) {

    const updateStudent = students[id]
    {
        updateStudent.fname = student.fname;
        updateStudent.mname = student.mname;
        updateStudent.lname = student.lname;
        updateStudent.address = student.address;
         // add rest of the properties of the student by looking at the student info in the index.ejs file
    };
    return student;
};

// prints the students array
const getStudents = function () {
    students.forEach(student => {
        console.log(student);
    });
    return students;
}
exports.getStudents = getStudents;
exports.upDateStudent = upDateStudent;
exports.addStudent = addStudent;
exports.students = students;




