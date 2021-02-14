const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const para1 = document.getElementById('text1');
const para2 = document.getElementById('text2');
const para3 = document.getElementById('text3');

/* Я пытался все сделать так, чтобы не нужно было повторять один и тот же
код  раза, но так, чтобы они работали независимо - не вышло. */

let clicks1 = 0;

function colorChange1() {
  clicks1 += 1;
  para1.style.color = colors[clicks1 - 1];
  if (clicks1 > colors.length) {
    clicks1 = 0;
    para1.style.color = 'black';
  }
}

para1.addEventListener('click', colorChange1);

let clicks2 = 0;

function colorChange2() {
  clicks2 += 1;
  para2.style.color = colors[clicks2 - 1];
  if (clicks2 > colors.length) {
    clicks2 = 0;
    para2.style.color = 'black';
  }
}

para2.addEventListener('click', colorChange2);

let clicks3 = 0;

function colorChange3() {
  clicks3 += 1;
  para3.style.color = colors[clicks3 - 1];
  if (clicks3 > colors.length) {
    clicks3 = 0;
    para3.style.color = 'black';
  }
}

para3.addEventListener('click', colorChange3);
