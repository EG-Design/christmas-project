console.log("Hey what are you doing here?");

// Progress bar

var progress = 0;

function updateProgressBar(correctAnswer) {}

// Form logic

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
