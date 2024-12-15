const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
let gradient = ctx.createLinearGradient(0, canvas.height, canvas.width, 0 );
// let gradient = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);
// let gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 100, canvas.width/2, canvas.height/2, 200);

//Azul
// gradient.addColorStop(0, '#4070f4');
// gradient.addColorStop(0.2, 'rgb(64, 112, 244)');
// gradient.addColorStop(0.4, 'rgb(50, 100, 255)');
// gradient.addColorStop(0.6, 'rgb(36, 89, 255)');
// gradient.addColorStop(0.8, 'rgb(21, 77, 255)');
// gradient.addColorStop(1, 'rgb(7, 64, 255)');

//Vermelho
// gradient.addColorStop(0, '#4070f4');
// gradient.addColorStop(0.2, 'rgb(244, 64, 64)');
// gradient.addColorStop(0.4, 'rgb(255, 50, 50)');
// gradient.addColorStop(0.6, 'rgb(255, 36, 36)');
// gradient.addColorStop(0.8, 'rgb(255, 21, 21)');
// gradient.addColorStop(1, 'rgb(255, 7, 7)');

class Symbol {
    constructor(x, y, fontSize, canvasHeight){
        this.characters = '></@!.,0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;

    }
    draw(context){
        this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length))
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
            this.y = 0;
        } else {
            this.y += 1;
        }
    }
}

class Effect {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.fontSize = 25;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];
        this.#initialize();
    }
    #initialize() {
        for(let i = 0; i < this.columns; i++){
            this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
        }
    }

    resize(width, height){
        this.canvasWidth = width
        this.canvasHeight = height
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];
        this.#initialize();
    }
}

const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 160;
const nextFrame = 1000/fps;
let timer = 0;

function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if (timer > nextFrame){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
        ctx.textAlign = 'center';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#986dff' //gradient//'#0aff0a';
        ctx.font = effect.fontSize + 'px monospace';
        effect.symbols.forEach(symbol => symbol.draw(ctx));
        timer = 0;
    } else {
        timer += deltaTime;
    }
    requestAnimationFrame(animate)
}

animate(0);

window.addEventListener('resize', function(){
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;
    effect.resize(canvas.width, canvas.height)
})