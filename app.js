const countdown = () => {
  const countDate = new Date("Jun 27, 2021 21:00:00 ").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  const milli = 1;
  const seconds = 1000 * milli;
  const minutes = seconds * 60;
  const hour = minutes * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minutes);
  const textSeconds = Math.floor((gap % minutes) / seconds);
  const textmill = Math.floor((gap % seconds) / milli);

  document.querySelector(".Time_container_day").innerText = textDay;
  document.querySelector(".Time_container_Hour").innerText = textHour;
  document.querySelector(".Time_container_minutes").innerText = textMinute;
  document.querySelector(".Time_container_seconds").innerText = textSeconds;
  document.querySelector(".Time_container_milli").innerText = textmill;
};
setInterval(countdown, 10);
