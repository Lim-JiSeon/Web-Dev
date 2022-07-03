const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');
const subscribeBtn = document.querySelector('.channel .subscribe');
const upBtn = document.getElementById("fas fa-thumbs-up")
const downBtn = document.getElementById("fas fa-thumbs-down")


moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

subscribeBtn.addEventListener('click', () => {
    if(subscribeBtn.innerText === 'SUBSCIBE') {
        subscribeBtn.innerText = 'SUBSCIBING';
    } else subscribeBtn.innerText ='SUBSCIBE';
});

let check = true;
upBtn.addEventListener('click', () => {
    let number = upBtn.innerText;
    if(up) {
        number = parseInt(number) + 1;
        check = false;
        upBtn.innerText = number;
        upBtn.style.background = '#045fd4';
        downBtn.style.background = '#909090';
    } else {
        number = parseInt(number) - 1;
        upBtn.innerText = number;
        check = true;
        upBtn.style.background = '#909090';
    }
});

downBtn.addEventListener('click', () => {
    let number = upBtn.innerText;
    if(check) {
        number = parseInt(number) + 1;
        check = false;
        downBtn.innerText = number;
        downBtn.style.background = '#045fd4';
        upBtn.style.background = '#909090';
    } else {
        number = parseInt(number) - 1;
        downBtn.innerText = number;
        check = true;
        downBtn.style.background = '#909090';
    }
});