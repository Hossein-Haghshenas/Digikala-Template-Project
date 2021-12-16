const timeLoop = setInterval(function () {
  let text = document.querySelectorAll(".timer");

  let countDownTime = new Date("Jan 5, 2023 15:37:25").getTime();
  let time = new Date().getTime();
  const diference = countDownTime - time;

  let hours = Math.floor(
    (diference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((diference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diference % (1000 * 60)) / 1000);

  for (var i = 0; i < text.length; i++) {
    text[i].innerHTML = hours + i + ":" + minutes + ":" + seconds;
  }
}, 1000);
