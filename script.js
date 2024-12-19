let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");


const today = new Date();

const weekDays = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];

const month_array = ['January', 'February' , 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'Novermber', 'December'];



date.innerHTML = today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = month_array[today.getMonth()];
year.innerHTML = today.getFullYear();