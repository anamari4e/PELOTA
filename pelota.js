/*
 * CARGAR RECURSOS*/
var c= document.getElementById("canvas");
var ctx= c.getContext("2d");
/*VALORES INICIALES
*/
var centro={x: 100, y: 100};
var radio=50;
var vel={x: 5, y: 2}

/*
*DIBUJAR MUNDO*/
function dibujar() {
    ctx.lineWidth= 4
    ctx.strokeStyle='pink'
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath();
    ctx.arc(centro.x, centro.y, radio, 0, 2 * Math.PI);
    ctx.stroke();
    
}
/*RECALCULAR VALORES
 */
function calcular() {
    centro.x+= vel.x;
    centro.y+= vel.y;
    if (centro.x>canvas.width-radio) {
        vel.x*=-1
    }
    
    if (centro.y>canvas.height-radio) {
        vel.y*=-1
    }
    if (centro.x<=radio) {
        vel.x*=-1
    }
    if (centro.y<=radio) {
        vel.y*=-1
    }
    
    
    
}

/*CICLO DE ANIMACION
 */
function animar() {
    dibujar();
    calcular();
    requestAnimationFrame(animar);
    
}
requestAnimationFrame(animar);




