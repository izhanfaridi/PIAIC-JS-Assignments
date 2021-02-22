var course_1 = parseFloat(prompt("Course 1 Marks: "));
var course_2 = parseFloat(prompt("Course 2 Marks: "));
var course_3 = parseFloat(prompt("Course 3 Marks: "));
var course_4 = parseFloat(prompt("Course 4 Marks: "));
var course_5 = parseFloat(prompt("Course 5 Marks: "));

var totalMarks = 500;
var marksObt = course_1 + course_2 + course_3 + course_4 + course_5;
var percentage = (marksObt * 100)/500;

alert("Your percentage is : "+percentage+" %")