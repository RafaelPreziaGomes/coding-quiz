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

startButton.addEventListener("click", initialQuestion);

var questionCounter = 0;

var questions = [
  {
    question: "Commonly used data types do not include",
    choices: ["booleans", "strings", "numbers", "alerts"],
    answer: "alerts",
  },
  {
    question: "Arrays in Javascript can be used to store",
    choices: [
      "numbers and strings",
      "booleans",
      "other arrays",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question: "Some other question",
    choices: ["a", "b", "c", "d"],
    answer: "a",
  },
];

function initialQuestion() {
  document.querySelector(".startBtn").remove();
  var question = document.querySelector(".question");
  question.textContent = questions[questionCounter].question;
  document.querySelector("h1").remove();
  var firstBtn = document.createElement("buttom");
  firstBtn.setAttribute("id", "btn1");
  firstBtn.setAttribute("class", "btn btn-primary qbtn");
  firstBtn.innerHTML = questions[questionCounter].choices[0];
  document.getElementById("myDiv").appendChild(firstBtn);
  var secondBtn = document.createElement("buttom");
  secondBtn.setAttribute("id", "btn2");
  secondBtn.setAttribute("class", "btn btn-primary qbtn");
  secondBtn.innerHTML = questions[questionCounter].choices[1];
  document.getElementById("myDiv").appendChild(secondBtn);
  var thirdBtn = document.createElement("buttom");
  thirdBtn.setAttribute("id", "btn3");
  thirdBtn.setAttribute("class", "btn btn-primary qbtn");
  thirdBtn.innerHTML = questions[questionCounter].choices[2];
  document.getElementById("myDiv").appendChild(thirdBtn);
  var fourthBtn = document.createElement("buttom");
  fourthBtn.setAttribute("id", "btn4");
  fourthBtn.setAttribute("class", "btn btn-primary qbtn");
  fourthBtn.innerHTML = questions[questionCounter].choices[3];
  document.getElementById("myDiv").appendChild(fourthBtn);

  firstBtn.addEventListener("click", nextQuestion);
  secondBtn.addEventListener("click", nextQuestion);
  thirdBtn.addEventListener("click", nextQuestion);
  fourthBtn.addEventListener("click", function () {
    value++;
    nextQuestion();
  });

document.querySelector("a").addEventListener( function() {
    removeElementsByClass("qbtn")
    var question = document.querySelector(".question");
    question.textContent = "Score";
});

function nextQuestion() {
  questionCounter++;
  console.log(questionCounter);

  var question = document.querySelector(".question");
  question.textContent = "What is an object in javascript";

  console.log("getting clicked");
  var firstBtn = document.getElementById("btn1");
  var secondBtn = document.getElementById("btn2");
  var thirdBtn = document.getElementById("btn3");
  var fourthBtn = document.getElementById("btn4");

  removeElementsByClass("qbtn");

  var firstBtn1 = document.createElement("buttom");
  firstBtn1.setAttribute("id", "btn1");
  firstBtn1.setAttribute("class", "btn btn-primary qbtn");
  firstBtn1.innerHTML = questions[questionCounter].choices;
  document.getElementById("myDiv").appendChild(firstBtn1);
  var secondBtn1 = document.createElement("buttom");
  secondBtn1.setAttribute("id", "btn2");
  secondBtn1.setAttribute("class", "btn btn-primary qbtn");
  secondBtn1.innerHTML = questions[questionCounter].choices[1];
  document.getElementById("myDiv").appendChild(secondBtn1);
  var thirdBtn1 = document.createElement("buttom");
  thirdBtn1.setAttribute("id", "btn3");
  thirdBtn1.setAttribute("class", "btn btn-primary qbtn");
  thirdBtn1.innerHTML = questions[questionCounter].choices[2];
  document.getElementById("myDiv").appendChild(thirdBtn1);
  var fourthBtn1 = document.createElement("buttom");
  fourthBtn1.setAttribute("id", "btn4");
  fourthBtn1.setAttribute("class", "btn btn-primary qbtn");
  fourthBtn1.innerHTML = questions[questionCounter].choices[3];
  document.getElementById("myDiv").appendChild(fourthBtn1);

  firstBtn1.addEventListener("click", function () {
    if (value > 0) {
      nextQuestion2();
    } else {
      removeElementsByClass("qbtn");
      question.textContent = "You failed";
    }
  });
  secondBtn1.addEventListener("click", function () {
    if (value > 0) {
      nextQuestion2();
    } else {
      removeElementsByClass("qbtn");
      question.textContent = "You failed";
    }
  });
  thirdBtn1.addEventListener("click", function () {
    if (value > 0) {
      nextQuestion2();
    } else {
      removeElementsByClass("qbtn");
      question.textContent = "You failed";
    }
  });
  fourthBtn1.addEventListener("click", function () {
    value++;
    if (value > 0) {
      nextQuestion2();
    } else {
      removeElementsByClass("qbtn");
      question.textContent = "You failed";
    }
  });
}

function nextQuestion2() {
  questionCounter++;

  var question = document.querySelector(".question");
  question.textContent = questions[questionCounter].question;

  var firstBtn3 = document.getElementById("btn111");
  var secondBtn3 = document.getElementById("btn222");
  var thirdBtn3 = document.getElementById("btn333");
  var fourthBtn3 = document.getElementById("btn444");

  removeElementsByClass("qbtn");

  var firstBtn3 = document.createElement("buttom");
  firstBtn3.setAttribute("id", "btn111");
  firstBtn3.setAttribute("class", "btn btn-primary qbtn");
  firstBtn3.innerHTML = questions[questionCounter].choices[0];
  document.getElementById("myDiv").appendChild(firstBtn3);
  var secondBtn3 = document.createElement("buttom");
  secondBtn3.setAttribute("id", "btn222");
  secondBtn3.setAttribute("class", "btn btn-primary qbtn");
  secondBtn3.innerHTML = questions[questionCounter].choices[1];
  document.getElementById("myDiv").appendChild(secondBtn3);
  var thirdBtn3 = document.createElement("buttom");
  thirdBtn3.setAttribute("id", "btn333");
  thirdBtn3.setAttribute("class", "btn btn-primary qbtn");
  thirdBtn3.innerHTML = questions[questionCounter].choices[2];
  document.getElementById("myDiv").appendChild(thirdBtn3);
  var fourthBtn3 = document.createElement("buttom");
  fourthBtn3.setAttribute("id", "btn444");
  fourthBtn3.setAttribute("class", "btn btn-primary qbtn");
  fourthBtn3.innerHTML = questions[questionCounter].choices[3];
  document.getElementById("myDiv").appendChild(fourthBtn3);
  firstBtn3.addEventListener("click", function () {
    value++;
    if (value == 1) {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You Kinda Passed";
    } else if (value == 2) {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You Passed";
    } else if (value == 3) {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You did great";
    } else {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You failed";
    }
  });
  secondBtn3.addEventListener("click", function () {
    if (value == 1) {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You Kinda Passed";
    } else if (value == 2) {
      removeElementsByClass("qbtn");
      question.textContent = "You Passed";
    } else if (value == 3) {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You did great";
    } else {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You failed";
    }
  });
  thirdBtn3.addEventListener("click", function () {
    if (value == 1) {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You Kinda Passed";
    } else if (value == 2) {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You Passed";
    } else if (value == 3) {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You did great";
    } else {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You failed";
    }
  });
  fourthBtn3.addEventListener("click", function () {
    if (value == 1) {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You Kinda Passed";
    } else if (value == 2) {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You Passed";
    } else if (value == 3) {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You did great";
    } else {
      removeElementsByClass("qbtn");
      removeElementsByClass("title");
      question.textContent = "You failed";
    }
  });
}
