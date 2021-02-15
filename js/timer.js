// set todays date
var today = new Date();
// translate month number to the abbr string
const month = today.toLocaleString("en", { month: "short" });

// set the future date of "coming"
var futureDate = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  today.getDate()
);

// write the future date to the html
document.getElementById("datum").innerHTML =
  futureDate.getDate() +
  " " +
  futureDate.toLocaleString("en", { month: "short" }) +
  " " +
  futureDate.getFullYear();

// animated countdown
var x = setInterval(function () {
  today = new Date();
  var distance = futureDate.getTime() - today.getTime();

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}, 1000); // repeat this every 1000 ms - 1 second
