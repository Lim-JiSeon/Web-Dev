const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');
const subscribeBtn = document.querySelector('.channel .subscribe');
const first = document.querySelector('#first')

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

subscribeBtn.addEventListener('click', () => {
    if(subscribeBtn.innerText === 'SUBSCIBE') {
        subscribeBtn.innerText = 'SUBSCIBING';
    } else subscribeBtn.innerText ='SUBSCIBE';
});

first.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/sub1.html'
});

/*
let check = true;
let number1 = upBtn.innerText;
let number2 = downBtn.innerText;
const upBtn = document.querySelector("#upBtn");
const downBtn = document.getElementById("downBtn");

upBtn.addEventListener('click', () => {
    document.getElementById("up").textContent= 'hello';
});

downBtn.addEventListener('click', () => {
    if(check) {
        check = false;
        downBtn.innerText = parseInt(number2) + 1;
    } else {
        check = true;
        downBtn.innerText = parseInt(number2) - 1;
    }
    downBtn.innerText = toString(number2);
});
*/