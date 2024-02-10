import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const flatpickr = require('flatpickr');
const startBtn = document.querySelector('[data-start]');
const inputFlat = document.querySelector('[id="datetime-picker"]');
const spanSeconds = document.querySelector('[data-seconds]');
const spanMinutes = document.querySelector('[data-minutes]');
const spanHours = document.querySelector('[data-hours]');
const spanDays = document.querySelector('[data-days]');

startBtn.disabled = true;
let selectedDate = null;
let timerId = null;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateNow = new Date();
    if (selectedDates[0] < dateNow) {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
};

flatpickr(inputFlat, options);

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    startBtn.disabled = true;
    const date = new Date();
    let timer = convertMs(selectedDate.getTime() - date.getTime());
    if (
      timer.seconds === -1 &&
      timer.minutes === -1 &&
      timer.hours === -1 &&
      timer.days === -1
    ) {
      clearInterval(timerId);
    } else {
      {
        spanSeconds.textContent = timer.seconds.toString().padStart(2, '0');
        spanMinutes.textContent = timer.minutes.toString().padStart(2, '0');
        spanHours.textContent = timer.hours.toString().padStart(2, '0');
        spanDays.textContent = timer.days.toString().padStart(2, '0');
      }
    }
  }, 1000);
});
