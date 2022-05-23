// On start quiz button

// change the start quiz text to stop quiz

// take the object and set it to a variable

const startButton = document.querySelector("a");

console.log(startButton);

// set variable of clicks equal to 0

let click = 0;

// add an event listener to that button

function quizCycle() {
  startButton.addEventListener("click", () => {
    click++;
    console.log(click);
    startButton.innerHTML = "Stop Quiz";
    if (click > 0) {
      // change the text content of that element
      // add the time section
      //  add text to the paragraph time
      // select paragraph time
      const time = document.querySelector(".time");
      // add text to the paragraph
      time.innerHTML = "time: 60";
      // change the paragraph to a question
      const question = document.querySelector(".question");
      // select the paragraph of the question
      question.innerHTMl = "Commonly used data types do not include";
      //   change the text of the paragraph to the first question

      // add a new division section

      // add the first button to the division

      // add the second button to the division

      // add the third button to the division

      // add the fourth button to the division / add a right answer to this button/

      startButton.addEventListener("click", () => {
        click++;
        console.log(click);
        startButton.innerHTML = "Restart Quiz";
        quizCycle();
      });
    }
  });
}

quizCycle();
