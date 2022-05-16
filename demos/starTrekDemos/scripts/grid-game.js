function range(min,max){
    return Math.floor(Math.random()*(max-min+1) ) + min;
}
function excludeRange(min,max,exclusion){
    num = Math.floor(Math.random()*(max-min+1) ) + min;
    if (exclusion.includes(num)){
       num = excludeRange(min,max,exclusion);
    }
    return num;
}
function placeObstacle(x,y){
    obstacle = document.getElementById("("+x+","+y+")")
    obstacle.innerText = "*";
}

function assembleGame(){
    K = klingonWarbird()
    E = enterprise(K['kx'],K['ky'])
    startGame = document.querySelector("input#startGame")
    startGame.style.visibility ="hidden"

   
    enterpriseLocation = document.querySelector("#Enterprise")
    warbirdLocation = document.querySelector("#Warbird")

    enterpriseLocation.innerText = "("+E['ex']+","+E['ey']+")";
    warbirdLocation.innerText="("+K['kx']+","+K['ky']+")"; 

    data={
        klingonLocation:[K['kx'],K['ky']],
        playerLocation:[E['ex'],E['ex']]
    };

    dx = E['ex']-K['kx']
    dy = E['ey']-K['ky']

    r = Math.sqrt((dx)^2+(dy)^2)
    theta_RADIANS = Math.atan2(dy,dx);
    theta_DEGREES = Math.atan2(dy,dx)* 180/Math.PI;

    var elt = document.getElementById('calculator');
    var calculator = Desmos.GraphingCalculator(elt,{
        expressions:false,lockViewport:true
    });
    calculator.setMathBounds({
        left:0.75,
        right:5.25,
        bottom:0.75,
        top:5.25
    });
    //graphs a right triangle corresponding to the two points of the 
    //klingons, the enterprise, and a point that makes it a right triangles 
    calculator.setExpression({ 
        id: 'points', 
        latex: `[(${K['kx']},${K['ky']}),(${K['kx']},${E['ey']}),(${E['ex']},${E['ey']}),(${K['kx']},${K['ky']})]`,
        lines:true
    
    });
    

    toggleButton = document.querySelector("input#showGraph");
    toggleButton.style.visibility="visible";
    alert("Spock says: There is a klingon vessel nearby. I advise you to strike before they do. ")
}

function klingonWarbird(){
    k_x = range(1,5);
    k_y = range(1,5);
    k =  document.getElementById("("+k_x+","+k_y+")")
    k.innerText = "K";
    return {
        "kx": k_x,
        "ky": k_y    
    }
}
//x,y are the coordinates of the Klingon Warbird
//player position randomly chosen to avoid the same column/row 
function enterprise(x,y){
    e_x = excludeRange(1,5,[x]);
    e_y = excludeRange(1,5,[y]);
    e =  document.getElementById("("+e_x+","+e_y+")")
    e.innerText = "E";
    return {
        "ex": e_x,
        "ey": e_y    
    }
}

function toggleVisibility(){
    var elt = document.getElementById('calculator');
    toggleButton = document.querySelector("input#showGraph");
    if( elt.style.visibility =='visible'){
        elt.style.visibility= '';
        toggleButton.value='Show graph'
    } else{
        elt.style.visibility='visible';
        toggleButton.value='Hide graph'
    }
    
    
}