console.log("Hello world");

// Progress bar

// let currentStep = 0;
// const totalSteps = 3;

// const progressBar = document.getElementById("progress-bar");

// changeStep(1);

// function changeStep(amount) {
//   currentStep += amount;

//   if (currentStep < 0) currentStep = 0;
//   if (currentStep > totalSteps) currentStep = totalSteps;

//   progressBar.value = currentStep;
// }

// Form logic

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

form1.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.getElementById("question-1");
  const userAnswer = input.value.trim();
  const correctAnswer = "0";
  if (userAnswer === correctAnswer) {
    input.setAttribute("aria-invalid", "false");
  } else {
    input.setAttribute("aria-invalid", "true");
  }
});

form2.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.getElementById("question-2");
  const userAnswer = input.value.trim();
  const correctAnswer = "0";
  if (userAnswer === correctAnswer) {
    input.setAttribute("aria-invalid", "false");
  } else {
    input.setAttribute("aria-invalid", "true");
  }
});

form3.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.getElementById("question-3");
  const userAnswer = input.value.trim();
  const correctAnswer = "0";
  if (userAnswer === correctAnswer) {
    input.setAttribute("aria-invalid", "false");
  } else {
    input.setAttribute("aria-invalid", "true");
  }
});

// Cookie clicker game

var score = 0;

function setScore(n) {
  score = n;
  var cookieCount = document.getElementById("cookie-count");
  if (cookieCount) cookieCount.textContent = score;
}

document.addEventListener("DOMContentLoaded", function () {
  setScore(score);

  var cookieImage = document.getElementById("cookie-image");

  if (cookieImage) {
    cookieImage.addEventListener("click", function () {
      setScore(score + 1);
      cookieImage.classList.add("clicked");
      setTimeout(function () {
        cookieImage.classList.remove("clicked");
      }, 120);
    });
  }
});
