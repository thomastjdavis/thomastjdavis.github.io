var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

w = canvas.width;
h = canvas.height;

const cursor = {
    x: innerWidth /2,
    y: innerHeight/2,
};

let deltaR = 40;

function klingonWarbird(){
    k_x = deltaR * range(-5,5);
    k_y = deltaR * range(-5,5);

    //sets the klingon ship at (k_x,k_y)//
    c.beginPath();
    c.ellipse(k_x,k_y,3,3,0,0,Math.PI*2);
    c.fill();
    c.closePath(); 
}


function ready(){
    axes();
    klingonWarbird();
}

//dot in the canvas coordinates
function dot(event){
    X = event.layerX;
    Y = event.layerY;
    c.beginPath();
    c.moveTo(0,0);
    c.ellipse(X-7.5,Y-40,3,3,0,0,Math.PI*2);
    c.fill();
    c.closePath();

}

function axes(){
//draws borders
c.beginPath();
c.moveTo(0,0);
c.lineTo(w,0);
c.lineTo(w,h);
c.lineTo(0,h);
c.closePath();

c.closePath();
c.lineWidth = 2;
c.stroke();

//the y and x axis'

c.moveTo(w/2,0);
c.lineTo(w/2,h);
c.closePath();
c.lineWidth=2;
c.stroke();

c.beginPath();
c.moveTo(0,h/2);
c.lineTo(w,h/2);
c.closePath();
c.lineWidth=2;
c.stroke();

grid(deltaR);
}



function grid(d){
    t = 0.2
    nx = (w/2)/d
    ny = (h/2)/d
    

    for(let i=1; i<nx; i++){
        if ( i * d > ((w/2)-d)) {
            break;
        }
        c.beginPath();
        c.moveTo((w/2)+d*i, h);
        c.lineTo((w/2)+d*i, 0);
        c.closePath();
        c.lineWidth=t;
        c.stroke();
        
        c.beginPath();
        c.moveTo((w/2)-d*i, h);
        c.lineTo((w/2)-d*i,0);
        c.closePath();
        c.lineWidth=t;
        c.stroke();
    }
    
    for(let i=1; i<ny; i++){
        if( i * d > ((h/2)-d)){
            break;
        }
        c.beginPath();
        c.moveTo(w, h/2+d*i);
        c.lineTo(0, h/2+d*i);
        c.closePath();
        c.lineWidth=t;
        c.stroke();
        
        c.beginPath();
        c.moveTo(w, h/2-(d*i));
        c.lineTo(0, h/2-(d*i));
        c.closePath();
        c.lineWidth=t;
        c.stroke();
        
    }
    c.closePath();
    //alert("check my work!");
    
}

function giveStandard(x1,x2){
    y1 = x1/(deltaR);
    y2 = x2/(deltaR);
    return "(" + y1 + ", " + (1+(-y2)) + ")";
}


    addEventListener("mousemove",(e)=> {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    document.getElementById('coords').innerHTML = giveStandard(cursor.x-w/2,cursor.y-h/2);//"(" + (cursor.x-w/2) + ", " + (cursor.y-h/2) + ")";
});


addEventListener(
    "touchmove",
    (e) => {
        e.preventDefault();
        cursor.x = e.touches[0].clientX;
        cursor.y = e.touches[0].clientY;
        document.getElementById('coords').innerHTML = giveStandard(cursor.x-w/2,cursor.y-h/2);
    },
    { passive:false }
);

addEventListener("click",dot);


