var vacation = new Date("Jul 22, 2019 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = vacation - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("clock").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds ";
if (distance <= 0) {
 document.getElementById("clock").innerHTML = "time to go on vacation!"
}
})
