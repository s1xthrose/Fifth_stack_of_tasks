//Задание 1:
/*
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight; */


//Задание 2:
/*
let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

alert(scrollWidth); */


//Задание 3:
/*
<img src="ball.png" width="40" height="40" id="ball"></img>
ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'; */


//Задание 4:
/*
1. clientWidth - определяется по внутренней области указанного элемента,включая отступы, getComputedStyle(elem).width же, действует во внутреннюю границу без padding.
2. getComputedStyle - не всегда определяет ширину, но он может сделать ссылку на строчный элемент.
3. clientWidth - возвращает числа, getComputedStyle(elem).width - строки. */