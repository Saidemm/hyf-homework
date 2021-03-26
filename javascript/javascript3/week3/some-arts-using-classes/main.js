
const canvas = document.getElementById('imgCanvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        if (canvas.getContext) {
            context.beginPath();
            context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
            context.strokeStyle = this.fillColor;
            context.fillStyle = context.strokeStyle;
            context.stroke();
            context.fill();
        }

    }    
}

function getRandomColor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return randomFillColor = "rgba(" + r + "," + g + "," + b + ",1)";
}

function createCircle(x, y){
    const circle = new Circle (
        x,
        y,
        Math.floor(Math.random()*80),
        0,
        Math.PI*2,
        getRandomColor()    
    )
    return circle;
}

function drawARandomCircle(){
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const circle = createCircle(x, y); 
    return circle.draw();
}
setInterval(drawARandomCircle, 100);

// Follow the mouse
document.addEventListener("mousemove", e => {
    console.log(e.clientX, e.clientY);
    createCircle(e.clientX, e.clientY).draw();
});





