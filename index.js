// On start quiz button
// create a function to remove element by class name
function removeElementsByClass(className) {
  var elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
// change the start quiz text to stop quiz

// take the object and set it to a variable

const startButton = document.querySelector("a");

console.log(startButton);

// set variable of clicks equal to 0

let click = 0;
var value = 0;
// add an event listener to that button

function quizCycle() {
  startButton.addEventListener("click", () => {
    click++;
    console.log(click);
    startButton.innerHTML = "Stop Quiz";
    if (click > 0) {
      document.querySelector("h1").remove();
      // change the text content of that element
      // add the time section
      //  add text to the paragraph time
      // select paragraph time
      var time = document.querySelector(".time");
      // add text to the paragraph
      time.innerHTML = "time: 60";
      // change the paragraph to a question
      var question = document.querySelector(".question");
      // select the paragraph of the question
      question.textContent = "Commonly used data types do not include";
      //change the text of the paragraph to the first question
      // add the first button to the division
      var firstBtn = document.createElement("buttom");
      firstBtn.setAttribute("class", "btn btn-primary qbtn");
      firstBtn.innerHTML = "booleans";
      document.getElementById("myDiv").appendChild(firstBtn);
      // add event listener to the buttons
      firstBtn.addEventListener("click", () => {
        time.innerHTML = "time: 15        ";
        // remove all buttons

        firstBtn.remove();
        secondBtn.remove();
        thirdBtn.remove();
        fourthBtn.remove();
        // create and add buttons once again
        var firstBtn1 = document.createElement("buttom");
        firstBtn1.setAttribute("class", "btn btn-primary qbtn");
        firstBtn1.innerHTML = "numbers and strings";
        document.getElementById("myDiv").appendChild(firstBtn1);
        var secondBtn1 = document.createElement("buttom");
        secondBtn1.setAttribute("class", "btn btn-primary qbtn");
        secondBtn1.innerHTML = "booleans";
        document.getElementById("myDiv").appendChild(secondBtn1);
        var thirdBtn1 = document.createElement("buttom");
        thirdBtn1.setAttribute("class", "btn btn-primary qbtn");
        thirdBtn1.innerHTML = "all of the above";
        document.getElementById("myDiv").appendChild(thirdBtn1);
        var fourthBtn1 = document.createElement("buttom");
        fourthBtn1.setAttribute("class", "btn btn-primary qbtn");
        fourthBtn1.innerHTML = "other arrays";
        document.getElementById("myDiv").appendChild(fourthBtn1);
        // change question content
        question.textContent = "Arrays in Javascript can be used to store";
        // create a new h3 stating wrong question
        var answer = document.createElement("h5");
        // set the text of the h3 as wrong question
        answer.innerHTML = " wrong answer ";
        var value = 0;
        console.log(value);
        // add an attribute of class to that button
        answer.setAttribute("class", "answer");
        // append to a div
        document.getElementById("myDiv").appendChild(answer);

        firstBtn1.addEventListener("click", () => {
          if (value == 0) {
            removeElementsByClass("qbtn");
            removeElementsByClass("question");
            removeElementsByClass("time");
            var lostMessage = document.querySelector(".lost-won-message");
            // select the paragraph of the question
            lostMessage.textContent = "Sorry, you lost";
            // show score
            var yourScore = document.querySelector(".your-score");
            yourScore.innerHTML = "Your score: 0";
          }
          removeElementsByClass("qbtn");
          // create and add buttons once again
          var firstBtn2 = document.createElement("buttom");
          firstBtn1.setAttribute("class", "btn btn-primary qbtn");
          firstBtn1.innerHTML = "";
          document.getElementById("myDiv").appendChild(firstBtn1);
          var secondBtn2 = document.createElement("buttom");
          secondBtn1.setAttribute("class", "btn btn-primary qbtn");
          secondBtn1.innerHTML = "";
          document.getElementById("myDiv").appendChild(secondBtn1);
          var thirdBtn2 = document.createElement("buttom");
          thirdBtn1.setAttribute("class", "btn btn-primary qbtn");
          thirdBtn1.innerHTML = "";
          document.getElementById("myDiv").appendChild(thirdBtn1);
          var fourthBtn2 = document.createElement("buttom");
          fourthBtn1.setAttribute("class", "btn btn-primary qbtn");
          fourthBtn1.innerHTML = "";
          document.getElementById("myDiv").appendChild(fourthBtn1);
          // change question content
          question.textContent = "Arrays in Javascript can be used to store";
          // create a new h3 stating wrong question
          var answer = document.createElement("h5");
          // set the text of the h3 as wrong question
          answer.innerHTML = " wrong answer ";

          var question = document.querySelector(".question");
          // select the paragraph of the question
          question.textContent = "Sorry, you lost";
          time.innerHTML = "time: 0";
          answer.innerHTML = " wrong answer, sorry you lost";
          question.textContent = "Sorry you lost";

          // remove all buttons

          // create and add buttons once again

          firstBtn.remove();
          secondBtn.remove();
          thirdBtn.remove();
          fourthBtn.remove();
          var firstBtn1 = document.createElement("buttom");
          firstBtn1.setAttribute("class", "btn btn-primary qbtn");
          firstBtn1.innerHTML = "numbers and strings";
          document.getElementById("myDiv").appendChild(firstBtn1);
          var secondBtn1 = document.createElement("buttom");
          secondBtn1.setAttribute("class", "btn btn-primary qbtn");
          secondBtn1.innerHTML = "booleans";
          document.getElementById("myDiv").appendChild(secondBtn1);
          var thirdBtn1 = document.createElement("buttom");
          thirdBtn1.setAttribute("class", "btn btn-primary qbtn");
          thirdBtn1.innerHTML = "all of the above";
          document.getElementById("myDiv").appendChild(thirdBtn1);
          var fourthBtn1 = document.createElement("buttom");
          fourthBtn1.setAttribute("class", "btn btn-primary qbtn");
          fourthBtn1.innerHTML = "other arrays";
          document.getElementById("myDiv").appendChild(fourthBtn1);
          // change question content
          question.textContent = "Arrays in Javascript can be used to store";
          // create a new h3 stating wrong question
          var answer = document.createElement("h5");
          // set the text of the h3 as wrong question
          answer.innerHTML = " wrong answer ";
          // add an attribute of class to that button
          answer.setAttribute("class", "answer");
          // append to a div
          document.getElementById("myDiv").appendChild(answer);
        });
      });
      // add the second button to the division
      var secondBtn = document.createElement("buttom");
      secondBtn.setAttribute("class", "btn btn-primary qbtn");
      secondBtn.innerHTML = "strings";
      document.getElementById("myDiv").appendChild(secondBtn);
      // add event listener to the buttons
      secondBtn.addEventListener("click", () => {
        time.innerHTML = "time: 15        ";
        // remove all buttons

        firstBtn.remove();
        secondBtn.remove();
        thirdBtn.remove();
        fourthBtn.remove();
        // create and add buttons once again
        var firstBtn1 = document.createElement("buttom");
        firstBtn1.setAttribute("class", "btn btn-primary qbtn");
        firstBtn1.innerHTML = "numbers and strings";
        document.getElementById("myDiv").appendChild(firstBtn1);
        var secondBtn1 = document.createElement("buttom");
        secondBtn1.setAttribute("class", "btn btn-primary qbtn");
        secondBtn1.innerHTML = "booleans";
        document.getElementById("myDiv").appendChild(secondBtn1);
        var thirdBtn1 = document.createElement("buttom");
        thirdBtn1.setAttribute("class", "btn btn-primary qbtn");
        thirdBtn1.innerHTML = "all of the above";
        document.getElementById("myDiv").appendChild(thirdBtn1);
        var fourthBtn1 = document.createElement("buttom");
        fourthBtn1.setAttribute("class", "btn btn-primary qbtn");
        fourthBtn1.innerHTML = "other arrays";
        document.getElementById("myDiv").appendChild(fourthBtn1);
        // change question content
        question.textContent = "Arrays in Javascript can be used to store";
        // create a new h3 stating wrong question
        var answer = document.createElement("h5");
        // set the text of the h3 as wrong question
        answer.innerHTML = " wrong answer ";
        // add an attribute of class to that button
        answer.setAttribute("class", "answer");
        // append to a div
        document.getElementById("myDiv").appendChild(answer);
      });
      // add the second button to the division
      // add the third button to the division
      var thirdBtn = document.createElement("buttom");
      thirdBtn.setAttribute("class", "btn btn-primary qbtn");
      thirdBtn.innerHTML = "numbers";
      document.getElementById("myDiv").appendChild(thirdBtn);
      // add event listener to the buttons
      thirdBtn.addEventListener("click", () => {
        time.innerHTML = "time: 15        ";
        // remove all buttons

        firstBtn.remove();
        secondBtn.remove();
        thirdBtn.remove();
        fourthBtn.remove();
        // create and add buttons once again
        var firstBtn1 = document.createElement("buttom");
        firstBtn1.setAttribute("class", "btn btn-primary qbtn");
        firstBtn1.innerHTML = "numbers and strings";
        document.getElementById("myDiv").appendChild(firstBtn1);
        var secondBtn1 = document.createElement("buttom");
        secondBtn1.setAttribute("class", "btn btn-primary qbtn");
        secondBtn1.innerHTML = "booleans";
        document.getElementById("myDiv").appendChild(secondBtn1);
        var thirdBtn1 = document.createElement("buttom");
        thirdBtn1.setAttribute("class", "btn btn-primary qbtn");
        thirdBtn1.innerHTML = "all of the above";
        document.getElementById("myDiv").appendChild(thirdBtn1);
        var fourthBtn1 = document.createElement("buttom");
        fourthBtn1.setAttribute("class", "btn btn-primary qbtn");
        fourthBtn1.innerHTML = "other arrays";
        document.getElementById("myDiv").appendChild(fourthBtn1);
        // change question content
        question.textContent = "Arrays in Javascript can be used to store";
        // create a new h3 stating wrong question
        var answer = document.createElement("h5");
        // set the text of the h3 as wrong question
        answer.innerHTML = " wrong answer ";
        // add an attribute of class to that button
        answer.setAttribute("class", "answer");
        // append to a div
        document.getElementById("myDiv").appendChild(answer);
      });
      // add the fourth button to the division / add a right answerto this button/
      var fourthBtn = document.createElement("buttom");
      fourthBtn.setAttribute("class", "btn btn-primary qbtn");
      fourthBtn.innerHTML = "alerts";
      fourthBtn.addEventListener("click", () => {
        firstBtn.remove();
        secondBtn.remove();
        thirdBtn.remove();
        fourthBtn.remove();
        // create and add buttons once again
        var firstBtn1 = document.createElement("buttom");
        firstBtn1.setAttribute("class", "btn btn-primary qbtn");
        firstBtn1.innerHTML = "numbers and strings";
        document.getElementById("myDiv").appendChild(firstBtn1);
        var secondBtn1 = document.createElement("buttom");
        secondBtn1.setAttribute("class", "btn btn-primary qbtn");
        secondBtn1.innerHTML = "booleans";
        document.getElementById("myDiv").appendChild(secondBtn1);
        var thirdBtn1 = document.createElement("buttom");
        thirdBtn1.setAttribute("class", "btn btn-primary qbtn");
        thirdBtn1.innerHTML = "all of the above";
        document.getElementById("myDiv").appendChild(thirdBtn1);
        var fourthBtn1 = document.createElement("buttom");
        fourthBtn1.setAttribute("class", "btn btn-primary qbtn");
        fourthBtn1.innerHTML = "other arrays";
        document.getElementById("myDiv").appendChild(fourthBtn1);
        // change question content
        question.textContent = "Arrays in Javascript can be used to store";
        // create a new h3 stating wrong question
        var answer = document.createElement("h5");
        // set the text of the h3 as wrong question
        answer.innerHTML = " right answer ";
        value = 1;
        // add an attribute of class to that button
        answer.setAttribute("class", "answer");
        // append to a div
        document.getElementById("myDiv").appendChild(answer);
      });
      document.getElementById("myDiv").appendChild(fourthBtn);
      // add event listener to the buttons
      thirdBtn.addEventListener("click", () => {
        time.innerHTML = "time: 15        ";
        // remove all buttons

        firstBtn.remove();
        secondBtn.remove();
        thirdBtn.remove();
        fourthBtn.remove();
        // create and add buttons once again
        var firstBtn1 = document.createElement("buttom");
        firstBtn1.setAttribute("class", "btn btn-primary qbtn");
        firstBtn1.innerHTML = "numbers and strings";
        document.getElementById("myDiv").appendChild(firstBtn1);
        var secondBtn1 = document.createElement("buttom");
        secondBtn1.setAttribute("class", "btn btn-primary qbtn");
        secondBtn1.innerHTML = "booleans";
        document.getElementById("myDiv").appendChild(secondBtn1);
        var thirdBtn1 = document.createElement("buttom");
        thirdBtn1.setAttribute("class", "btn btn-primary qbtn");
        thirdBtn1.innerHTML = "all of the above";
        document.getElementById("myDiv").appendChild(thirdBtn1);
        var fourthBtn1 = document.createElement("buttom");
        fourthBtn1.setAttribute("class", "btn btn-primary qbtn");
        fourthBtn1.innerHTML = "other arrays";
        document.getElementById("myDiv").appendChild(fourthBtn1);
        // change question content
        question.textContent = "Arrays in Javascript can be used to store";
        // create a new h3 stating wrong question
        var answer = document.createElement("h5");
        // set the text of the h3 as wrong question
        answer.innerHTML = " wrong answer ";
        // add an attribute of class to that button
        answer.setAttribute("class", "answer");
        // append to a div
        document.getElementById("myDiv").appendChild(answer);
      });
    }
    startButton.addEventListener("click", () => {
      click++;
      console.log(click);
      startButton.innerHTML = "Restart Quiz";
      quizCycle();
    });
  });
}

quizCycle();
