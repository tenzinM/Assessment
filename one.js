// 1. The for loop is a control flow statement in JavaScript and in many other programming languages which allows us to repeat a block of code a specified number of times. 
// Demonstration of 'for' loop in JavaScript:

const colors = ['red', 'blue', 'white', 'pink', 'orange'];
// Print each color to the console
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// here we define an array called colors that contains five strings. We then use a for loop to iterate over the array, starting with the first element (colors[0]) and ending with the last element (colors[4]).
// On each iteration of the loop, the current element of the array is accessed using the index i, and then printed to the console using console.log(). The loop continues until i is no longer less than colors.length, which is 5 in this case.
// OUTPUT : 
// red 
// blue
// white
// pink
// orange

// 2. The while loop is another type of loop in JavaScript that allows you to execute a block of code repeatedly as long as a specified condition is true. 
// Demonstration of while loop in JavaScript:
// Keep prompting the user for input until a valid number is entered

let number;
while (true) {
  number = parseInt(prompt('Enter a number:'));
  if (!isNaN(num)) {
    break;
  }
  alert('Invalid input. Please enter a valid number.');
}
console.log('You entered: ' + num);

// In this example, we use a while loop to repeatedly prompt the user to enter a number until a valid number is entered.
// The loop runs indefinitely because the condition is true (which is always true), so we use a break statement inside the loop to exit the loop when a valid number is entered.
// On each iteration of the loop, we use the prompt() function to display a dialog box and ask the user to enter a number. We then use parseInt() to convert the input string to a number, and check if the result is NaN (which indicates that the input was not a valid number).
// OUTPUT :
// Enter a number:
// not a number
// Invalid input. Please enter a valid number.
// Enter a number:
// -3.14159
// You entered: -3

// 3. The continue statement is used inside loops to skip the current iteration and continue with the next iteration of the loop.
// demonstration of continue in a for loop to skip over even numbers:
// Print only odd numbers between 1 and 10

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
  console.log('Done!');

// In this example, we use a for loop to iterate over the numbers from 1 to 10. We use the modulus operator (%) to check if each number is even, and if it is, we use the continue statement to skip over that number and continue with the next iteration of the loop.
// If the number is odd, we print it to the console using console.log(). After the loop finishes, the message 'Done!' is printed to the console.
// OUTPUT: 
// 1
// 3
// 5
// 7
// 9
// Done!


// 4. In JavaScript, if-else is a conditional statement that allows you to execute certain code based on a certain condition. The if-else statement consists of an if clause followed by an optional else clause.
//  Demonstration of if else statement in JavaScript:
function calculateGrade(score) {
    let grade;
    if (score >= 90) {
      grade = 'A';
    } else if (score >= 80) {
      grade = 'B';
    } else if (score >= 70) {
      grade = 'C';
    } else if (score >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
    return grade;
  }
  
  console.log(calculateGrade(95));  // A
  console.log(calculateGrade(85));  // B
  console.log(calculateGrade(75));  // C
  console.log(calculateGrade(65));  // D
  console.log(calculateGrade(55));  // F

//In this example, we define a function calculateGrade() that takes a single argument score, which represents the exam score of a student.
//Inside the function, we use if-else statements to determine the grade that the student earned based on their score. We start with the highest grade (A) and work our way down to the lowest grade (F), assigning the appropriate grade to the grade variable based on the student's score.
// After we have determined the student's grade, we return it from the function using the return statement.
// Finally, we call the calculateGrade() function with a few different scores (95, 85, 75, 65, and 55) and print the result to the console using console.log().


// In JavaScript, switch is a conditional statement that allows us to execute different code based on different possible values of a variable or expression. 
// The switch statement consists of a switch keyword followed by a set of cases, each of which corresponds to a possible value of the variable or expression being tested.
// Demonstration of switch statement in JavaScript:

function getMessage(str) {
    let message;
    switch (str.length) {
      case 0:
        message = "The string is empty.";
        break;
      case 1:
        message = "The string has only one character.";
        break;
      case 2:
        message = "The string has two characters.";
        break;
      default:
        message = "The string has more than two characters.";
        break;
    }
    return message;
  }
  
  console.log(getMessage(""));         // The string is empty.
  console.log(getMessage("a"));        // The string has only one character.
  console.log(getMessage("ab"));       // The string has two characters.
  console.log(getMessage("hello"));    // The string has more than two characters.

// In this example, we define a function getMessage() that takes a single argument str, which represents the input string.
// Inside the function, we use a switch statement to check the length of the input string, and assign a corresponding message to the message variable using the case blocks.
// If the input string has length 0, the message "The string is empty." is assigned to the message variable. If it has length 1, the message "The string has only one character." is assigned to message. If it has length 2, the message "The string has two characters." is assigned to message. For all other lengths, the message "The string has more than two characters." is assigned to message.
// Finally, the getMessage() function returns the message variable.