const $img = document.querySelector('.img');
const $add = document.querySelector('.add');
const $reset = document.querySelector('.reset');
const $text = document.querySelector('.text');

$img.addEventListener('click', (e) => {
  if (e.target.matches('.matrix > li')) {
    if (getComputedStyle(e.target).backgroundColor !== 'rgb(255, 192, 203)') {
      e.target.style.backgroundColor = 'pink';
    } else {
      e.target.removeAttribute('style');
    }
  }
});

$add.addEventListener('click', () => {
  $img.insertAdjacentHTML('beforeend', `<ul class="matrix">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>`);
});

$reset.addEventListener('click', () => {
  const $list = document.querySelectorAll('.matrix > li');
  $list.forEach((list) => list.removeAttribute('style'));
});

$text.addEventListener('click', () => {
  const hello = ['안', '녕', '하', '세', '요'];
  const text = document.querySelectorAll('.matrix > li');
  hello.forEach((v, i) => {
    text[i].textContent = v;
  });
});
