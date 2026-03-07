var student = {
 name: "Rahul",
 class: "VI",
 rollno: 12
};

console.log("Before:", student);
delete student.rollno;
console.log("After:", student);