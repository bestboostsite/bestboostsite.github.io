let date = new Date();
let hour = date.getHours();
let body = document.querySelector('body');
let div = document.querySelector('.greetings');
let h1 = document.querySelector('.greetingsh1');
let circle = document.querySelector('.circle');
let svg = document.querySelector('.svggreetings');
let opacity = div.style.opacity = 1;

if (hour > 5 && hour < 13) {
  h1.textContent = 'Доброе утро!';
  div.appendChild(h1);
  div.style.backgroundColor = 'lightpink';
  circle.style.backgroundColor = '#fa6164';
  document.documentElement.style.setProperty('--circle_back', 'none');
  svg.style.fill = '#00FF7F';
} else if (hour > 12 && hour < 18) {
  h1.textContent = 'Добрый день!';
  div.appendChild(h1);
  div.style.backgroundColor = 'lightblue';
  circle.style.backgroundColor = 'yellow';
  document.documentElement.style.setProperty('--circle_back', 'none');
  svg.style.fill = '#8bc34a';
} else if (hour > 17 && hour < 24) {
  h1.textContent = 'Добрый вечер!';
  div.appendChild(h1);
  div.style.backgroundColor = '#bc8f8f';
  body.style.backgroundColor = '#212121';
  circle.style.backgroundColor = '#f4a460';
  document.documentElement.style.setProperty('--circle_back', 'none');
  svg.style.fill = '#009688';
} else {
  h1.textContent = 'Доброй ночи!';
  div.appendChild(h1);
  div.style.backgroundColor = '#607d8b';
  body.style.backgroundColor = '#212121';
  circle.style.backgroundColor = 'white';
  document.documentElement.style.setProperty('--circle_back', '#607d8b');
  svg.style.fill = '#273036';
};

function Scroll() {
  body.classList.add('disable-scroll');
};

Scroll();

document.addEventListener('DOMContentLoaded', timer);

function timer() {
  setTimeout(off, 1500)
};

function off() {
  body.classList.remove('disable-scroll');
  let int = setInterval(() => div.style.opacity -= 0.1, 100);
  setTimeout(() => {clearInterval(int); div.style.display = 'none'; div.style.opacity = '0'}, 1100)
};

if(detectIE()){
  div.style.backgroundColor = '#bc8f8f';
  h1.textContent = 'Ваш браузер устарел!';
  div.appendChild(h1);
}
