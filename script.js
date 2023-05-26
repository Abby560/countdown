const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');

const newYears = 'Jan 1, 2024';

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = Math.abs(Math.floor((newYearsDate - currentDate) / 1000));

  const days = Math.ceil(totalSeconds / 3600 / 24 );
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysE1.innerHTML = days;
  hoursE1 .innerHTML=formatTime (hours);
  minsE1.innerHTML = formatTime (mins);
  secondsE1.innerHTML = formatTime(seconds);

}
function formatTime(time) {
  return time < 10 ? `0${time}`: time;
}


// Initial call
countdown();

// Update the countdown every second
setInterval(countdown, 1000);
