window.onload = function () {
  var texts = [
    "I'm Computer Engineer",
    "I'm Web Developer",
    "I'm Enthusiastic Learner",
    "I'm Good Programmer",
  ];
  var textIndex = 0;
  var textElement = document.getElementById("text");

  setInterval(function () {
    textElement.innerHTML = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
  }, 1000);
};
