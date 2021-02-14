const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const para1 = document.getElementById('text1');
const para2 = document.getElementById('text2');
const para3 = document.getElementById('text3');

function colorChange(parameter) {
  let clicks = 0;
  return function () {
    clicks += 1;
    const paragraph = parameter;
    paragraph.style.color = colors[clicks - 1];
    if (clicks > colors.length - 1) {
      clicks = 0;
    }
  };
}

para1.addEventListener('click', colorChange(para1));
para2.addEventListener('click', colorChange(para2));
para3.addEventListener('click', colorChange(para3));
