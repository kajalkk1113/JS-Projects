let time = document.getElementById("time");
let day = document.getElementById("day");
let date = document.getElementById("date");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function clock() {

    let now = new Date();

   let hours = now.getHours();
let minutes = String(now.getMinutes()).padStart(2, "0");
let seconds = String(now.getSeconds()).padStart(2, "0");

let period = hours >= 12 ? "PM" : "AM";

hours = hours % 12;

hours = hours || 12;

hours = String(hours).padStart(2, "0");

time.innerHTML = `${hours}:${minutes}:${seconds} ${period}`;

    day.innerHTML = days[now.getDay()];

    date.innerHTML = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

clock();

setInterval(clock, 1000);
