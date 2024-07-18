const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

const MainImg = document.getElementById('MainImg');
const smallimg = document.getElementsByClassName('small-img');

function changewin(){
    window.location.href='sproduct.html'; 
}

function changeimgf2(){
    MainImg.src = smallimg[1].src;
}

function cartpg(){
    window.location.href='cart.html'
}