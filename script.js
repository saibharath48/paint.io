const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorVal = document.getElementById('color');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const sizeText = document.getElementById('size');
const clear = document.getElementById('clear');

let size = 20;
let color = '#000000';
let x;
let y;
let isPressed = false;

colorVal.addEventListener('change', (e) => {
    color = e.target.value;
});

clear.addEventListener('click', ()=> {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

decrease.addEventListener('click', ()=>{
    if (size > 5){
        size--;
        sizeText.innerText = size;
    } 
});

increase.addEventListener('click', ()=>{
    if (size < 50){
        size++;
        sizeText.innerText = size;
    }
});



canvas.addEventListener('mousedown', (e)=>{
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e)=>{
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e)=>{
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}