const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
}
const min = 0;
const max = colors.length - 1;
let id = 0;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
   id = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(max, min)]
   }, 1000);
    refs.startBtn.disabled = "disabled";
}
function onStopClick() {
    clearInterval(id);
    refs.startBtn.removeAttribute('disabled');
}