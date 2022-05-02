'use strict';

const box = document.getElementById('box');
// box.innerHTML = 'член';
const btn = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// console.log(btn[0]);

// console.log(circles);

// console.log(hearts);

// hearts.forEach((item, i) => {
//     console.log(item);
// })

// console.log(oneHeart);

console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

btn[2].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';
box.style.cssText = 'background-color: yellow; width: 500px';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach((item,i)=> {
    item.style.backgroundColor = 'blue';
})

const div = document.createElement('div');
// const text = document.createTextNode('тут i here');


div.classList.add('black');
// div.classList.add('white');
// div.style.borderRadius = '20px';
// document.body.append(div);
// wrapper.appendChild(div);
wrapper.append(div);
// wrapper.insertBefore(div, hearts[1]);
// wrapper.prepend(div);
// hearts[1].after(div);
// hearts[1].before(div);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[1]);

div.innerHTML = '<h1>Hello world</h1>';
// div.textContent = '<h1>Hello world</h1>';

// div.insertAdjacentHTML('beforebegin', '<h2>Hello world</h2>')
div.insertAdjacentHTML('afterend', '<h2>Hello world</h2>')

