// Variables that will hold the highest and lowest scores
var lowest = 100;
var highest = 0;

// Scores array
var scores = [75, 71, 61, 51, 91, 50, 80, 70, 60, 97, 63, 58, 87];

//Object to hold the number of grades for each letter
var totalLetGrades = {
                      A : 0,
                      B : 0,
                      C : 0,
                      D : 0,
                      F : 0
                     };

// for loop to iterate over the scores array
for (var i = 0; i < scores.length; i++) {

  // Variable to hold the current index of scores array
  var test = scores[i];

  // Testing to see if the current index of the scores array is lower than the value in lowest var.
  // If it is, assign the value in test to the var lowest
  if (test < lowest) {
    lowest = test;
  }

  // Testing to see if the current index of the scores array is higher than the value in highest var.
  // If it is, assign the value in test to the var highest
  if (test > highest) {
    highest = test;
  }

  // if/else if statements to check what the scores index's current value is and adding one to
  // the correct key:value pair in the totalLetGrades object.
  if (scores[i] > 90) {
    totalLetGrades.A += 1;
  } else if (scores[i] > 80) {
    totalLetGrades.B += 1;
  } else if (scores[i] > 70) {
    totalLetGrades.C += 1;
  } else if (scores[i] > 60) {
    totalLetGrades.D += 1;
  } else if (scores[i] >= 50) {
    totalLetGrades.F += 1;
  }
  // Instead of last else if?  Instructions were 50-60
  // else {
  //   totalLetGrades.F += 1;
  // }
}

// For in loop to loop through totalLetGrades object and output the key:value pairs to the console
for (var variable in totalLetGrades) {
  console.log("There were " + totalLetGrades[variable] + " " + variable + "\'s " );
}

// Using the console to output the highest and lowest grades
console.log("The highest grade is " + highest);
console.log("The lowest grade is " + lowest);
