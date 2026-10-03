/* Question 1: Create Student Objects */

/* Create an array containing student objects with their basic information and grades. */

const students = [
  {
    id: 1,
    name: 'Ugonna Anyanwu',
    age: 22,
    grades: [91, 90, 94]
  },
  
  {
    id: 2,
    name: 'Zaddy Gat',
    age: 28,
    grades: [80, 79, 81]
  },
  
  {
    id: 3,
    name: 'Dagbeyon Mautin', 
    age: 27,
    grades: [71, 72, 70]
  }, 
  
{
  id: 4,
  name: 'Trex frek',
  age: 29,
  grades: [66, 59, 60]
},

{
  id: 5,
  name: 'Dagbe Abel',
  age: 25,
  grades: [60, 62, 58]
}, 

{
  id: 6,
  name: 'Anna Bela',
  age: 25,
  grades: [59, 59, 59]
}
];

/* Question 2: Calculate Averages */

/* Calculate the average of a student's grades using reduce(). */

function calculateAverage(grades){
  const total = grades.reduce((total, grade) => {
  
    return total + grade;
    
},0);

const average = total / grades.length;

/* Round the average to 2 decimal places and convert the result back to a number. */

return Number(average.toFixed(2));

}



/* Use map() to create a new array with each student's calculated average. */

const studentsWithAverage = students.map((student) => {
  const average = calculateAverage(student.grades);
  
  return {
    ...student, 
    average:average
  };
});

/* Test the students with their calculated averages. */

console.log(studentsWithAverage);

/* Question 3: Filter Passing Students */

/* Use filter() to return only 
students whose average is 60 or higher. */

function getPassingStudents(students){
  return students.filter((student) => {
   return student.average >= 60;
  });
} 

/* Test the function that returns only passing students. */

console.log(getPassingStudents(studentsWithAverage));

/* Question 4: Functions & Callbacks */

/* Use map() to apply the callback function to each student and return a new array. */

function processStudents(students, callBack){
  
 return students.map((student) => {
 return callBack(student);
 });
}

/* Assign a letter grade to each student based on their average. */

function addLetterGrade(student){
  
let letterGrade = "";

  if(student.average >= 90){
    letterGrade = "A";
  }else if(student.average >= 80){
    letterGrade = "B";
  }else if(student.average >= 70){
    letterGrade = "C";
  }else if (student.average >= 60){
    letterGrade = "D";
  }else{
    letterGrade = "F";
  }
  
  return {
    ...student, 
    letterGrade:letterGrade
  };
}

/* Assign Pass or Fail status based on whether the student's average is 60 or higher. */

function addStatus(student){
  let status = "";
  
  if(student.average >= 60){
    status = "Pass";
  }else{
    status = "Fail";
  }
  
  return {
    ...student, 
    status:status
  };
}



const studentsWithLetterGrade = processStudents(studentsWithAverage, addLetterGrade);

/* Test the callback that adds letter grades. */

console.log(studentsWithLetterGrade);

const studentsWithStatus = processStudents(studentsWithAverage, addStatus);

/* Test the callback that adds Pass or Fail status. */

console.log(studentsWithStatus);
