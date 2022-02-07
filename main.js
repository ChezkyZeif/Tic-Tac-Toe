var x = document.createElement("img");
x.setAttribute("src","./images/tictactoex.png");
var o = document.createElement("img");
o.setAttribute("src","./images/tictactoeo.png");
function isWinner(){
    var doomCounter=0;
    //first row
    for(var i = 2; i<4; i++){
        if(document.getElementById("1").innerHTML==document.getElementById(i).innerHTML)
            doomCounter++;
    }
    //second row
    if(doomCounter!=2){
        doomCounter=0;
        for(var i = 5; i<7; i++){
        if(document.getElementById("4").innerHTML==document.getElementById(i).innerHTML)
            doomCounter++;
        }
    }
    //third row
    if(doomCounter!=2){
        doomCounter=0;
        for(var i = 8; i<10; i++){
        if(document.getElementById("7").innerHTML==document.getElementById(i).innerHTML)
            doomCounter++;
        }
    }
    //first column
    if(doomCounter!=2){
        doomCounter=0;
        for(var i = 4; i<8; i+=3){
        if(document.getElementById("1").innerHTML==document.getElementById(i).innerHTML)
            doomCounter++;
        }
    }
    //second column
    if(doomCounter!=2){
        doomCounter=0;
        for(var i = 5; i<9; i+=3){
        if(document.getElementById("2").innerHTML==document.getElementById(i).innerHTML)
            doomCounter++;
        }
    }
    //third column
    if(doomCounter!=2){
        doomCounter=0;
        for(var i = 6; i<10; i+=3){
        if(document.getElementById("3").innerHTML==document.getElementById(i).innerHTML)
            doomCounter++;
        }
    }
    //forward slash
    if(doomCounter!=2){
        doomCounter=0;
        for(var i = 5; i<10; i+=4){
        if(document.getElementById("1").innerHTML==document.getElementById(i).innerHTML)
            doomCounter++;
        }
    }
    //backslash
    if(doomCounter!=2){
        doomCounter=0;
        for(var i = 5; i<8; i+=2){
        if(document.getElementById("3").innerHTML==document.getElementById(i).innerHTML)
            doomCounter++;
        }
    }
    //confirming victory
    if(doomCounter==2){
        if(counter%2==0)
            confirm("O Wins!");
        else
            confirm("X Wins!");
        document.getElementById("1").removeAttribute("onclick");
        document.getElementById("2").removeAttribute("onclick");
        document.getElementById("3").removeAttribute("onclick");
        document.getElementById("4").removeAttribute("onclick");
        document.getElementById("5").removeAttribute("onclick");
        document.getElementById("6").removeAttribute("onclick");
        document.getElementById("7").removeAttribute("onclick");
        document.getElementById("8").removeAttribute("onclick");
        document.getElementById("9").removeAttribute("onclick");
        var playagain=document.createElement("button");
        playagain.setAttribute("onclick","newGame()");
        playagain.innerHTML="Play Again?";
        document.getElementById("body").appendChild(playagain);
    }
    if(counter==9&&doomCounter!=2){
        confirm("Draw....");
        var playagain=document.createElement("button");
        playagain.setAttribute("onclick","newGame()");
        playagain.innerHTML="Play Again?";
        document.getElementById("body").appendChild(playagain);
    }
}
function randomPlace(){
    var table = document.getElementsByTagName("td");
    for(var i = 0; i<table.length;i++){
        if(table[i].hasAttribute("onclick")){
            takePlaceO(document.getElementById(i+1))
            break;
            }
    }
}
function newGame(){
    location.reload();
}
var counter=0;
function takePlaceX(el){
    el.innerHTML="<img src='./images/tictactoex.png'/>";
    counter++;
}
function takePlaceO(el){
    el.innerHTML="<img src='./images/tictactoeo.png'/>";
    el.removeAttribute("onclick");
    counter++;
}
//computer turn functions here
function firstComputerTurn(one, two, three, four, five, six, seven, eight, nine){
    var didMove = false;
    if( !(one.hasAttribute("onclick")) || !(three.hasAttribute("onclick")) || !(seven.hasAttribute("onclick")) || !(nine.hasAttribute("onclick")) ) {
        takePlaceO(five);
        didMove=true;
    }
    else if(!didMove && (!(two.hasAttribute("onclick")) || !(four.hasAttribute("onclick"))) || !(five.hasAttribute("onclick"))) {
        takePlaceO(one);
        didMove=true;
    }
    else if(!didMove && !(six.hasAttribute("onclick")) ){
        takePlaceO(three);
        didMove=true;
    }
    else if(!didMove && !(eight.hasAttribute("onclick")) ){
        takePlaceO(nine);
        didMove=true;
    }
}
function getElementsAttribute(el){
    if(el.hasAttribute("onclick"))
        return null;	
    else
        return el.firstElementChild.getAttribute("src");
}
function secondComputerTurn(one,two,three,four,five,six,seven,eight,nine){
    var didMove=false;
    var compMoving = counter;
    if(!(one.hasAttribute("onclick"))&&!(five.hasAttribute("onclick"))&&!(nine.hasAttribute("onclick"))){
        if( (one.firstElementChild.getAttribute("src") == o.getAttribute("src"))&& (five.firstElementChild.getAttribute("src") == x.getAttribute("src")) && (nine.firstElementChild.getAttribute("src") == x.getAttribute("src")) ){
            takePlaceO(seven);
            didMove=true;
        }
        if(!didMove&& (one.firstElementChild.getAttribute("src") == x.getAttribute("src"))&& (five.firstElementChild.getAttribute("src") == o.getAttribute("src")) && (nine.firstElementChild.getAttribute("src") == x.getAttribute("src")) ){
            takePlaceO(four);
            didMove=true;
        }
    }
    if(!(three.hasAttribute("onclick"))&&!(five.hasAttribute("onclick"))&&!(seven.hasAttribute("onclick"))){
        if(!didMove&& (three.firstElementChild.getAttribute("src") == x.getAttribute("src"))&& (five.firstElementChild.getAttribute("src") == o.getAttribute("src")) && (seven.firstElementChild.getAttribute("src") == x.getAttribute("src")) ){
            takePlaceO(four);
            didMove=true;
        }
    }
    else{
        playerVictory(one,two,three,four,five,six,seven,eight,nine);
        if(compMoving!=counter)
            didMove=true;		
    }
    if(!didMove) 
        if(!(eight.hasAttribute("onclick"))&&!(nine.hasAttribute("onclick"))&&!(seven.hasAttribute("onclick")))
            if(eight.firstElementChild.getAttribute("src")==x.getAttribute("src")&&seven.firstElementChild.getAttribute("src")==x.getAttribute("src")&&nine.firstElementChild.getAttribute("src")==o.getAttribute("src")){
                takePlaceO(five);
                didMove=true;
            }
    if(!didMove) 
        if(!(eight.hasAttribute("onclick"))&&!(nine.hasAttribute("onclick"))&&!(six.hasAttribute("onclick")))
            if(eight.firstElementChild.getAttribute("src")==x.getAttribute("src")&&six.firstElementChild.getAttribute("src")==x.getAttribute("src")&&nine.firstElementChild.getAttribute("src")==o.getAttribute("src")){
                takePlaceO(five);
                didMove=true;
            }
    if(!didMove)
        randomPlace();
    
}
function playerVictory(one,two,three,four,five,six,seven,eight, nine){
    var didMove=false;
    var playX = x.getAttribute("src");
    var i =  getElementsAttribute(one);
    var ii = getElementsAttribute(two);
    var iii = getElementsAttribute(three);
    var iv = getElementsAttribute(four);
    var v = getElementsAttribute(five);
    var vi = getElementsAttribute(six);
    var vii = getElementsAttribute(seven);
    var viii = getElementsAttribute(eight);
    var ix = getElementsAttribute(nine);
//ONE
    if(iv!=null&&vii!=null)
        if(iv == playX && vii == playX) 
            if(one.hasAttribute("onclick") ){
                takePlaceO(one);
                didMove=true;
            }
    if(!didMove)
        if(v!=null&&ix!=null)	
            if(v==playX&&ix==playX) 
                if(one.hasAttribute("onclick") ){
                    takePlaceO(one);
                    didMove=true;
                }
    if(!didMove)
        if(ii!=null&&iii!=null)	
            if(ii==playX&&iii==playX)
                if(one.hasAttribute("onclick")){
                    takePlaceO(one);	
                    didMove=true;
                }
//TWO
    if(!didMove)
        if(v!=null&&viii!=null)
            if(v == playX&&viii==playX)
                if(two.hasAttribute("onclick")){
                    takePlaceO(two);
                    didMove=true;
                }
    if(!didMove)
        if(i!=null&&iii!=null)
            if(i==playX&&iii==playX)
                if(two.hasAttribute("onclick")){
                    takePlaceO(two);
                    didMove=true;
                }
//THREE
    if(!didMove)
        if(vi!=null&&ix!=null)
            if(vi == playX && ix==playX)  
                if(three.hasAttribute("onclick")){
                    takePlaceO(three);	
                    didMove=true;
                }
    if(!didMove)
        if(v!=null&&vii!=null)
            if(v==playX&&vii==playX) 
                if(three.hasAttribute("onclick")){
                    takePlaceO(three);	
                    didMove=true;
                }
    if(!didMove)
        if(i!=null&&ii!=null)
            if(i==playX&&ii==playX)
                if(three.hasAttribute("onclick")){
                    takePlaceO(three);	
                    didMove=true;
                }
//FOUR
    if(!didMove)
        if(i!=null&&vii!=null)
            if(i == playX && vii == playX)
                if( four.hasAttribute("onclick") ){
                    takePlaceO(four);
                    didMove=true;
                }
    if(!didMove)
        if(v!=null&&vi!=null)
            if(v == playX&&vi==playX)
                if( four.hasAttribute("onclick") ){
                    takePlaceO(four);
                    didMove=true;
                }
//FIVE
    if(!didMove)
        if(ii!=null&&viii!=null)
            if(ii==playX && viii==playX) 
                if(five.hasAttribute("onclick")){
                    takePlaceO(five);
                    didMove=true;
                }
    if(!didMove)
         if(i!=null&&ix!=null)	
            if(i==playX&&ix==playX) 
                if(five.hasAttribute("onclick")){
                    takePlaceO(five);
                    didMove=true;
                }
    if(!didMove)
        if(iii!=null&&vii!=null)	
            if(iii == playX&&vii==playX)  
                if(five.hasAttribute("onclick")){
                    takePlaceO(five);	
                    didMove=true;
                }
    if(!didMove)
        if(iv!=null&&vi!=null)
            if(iv==playX&&vi==playX)
                if(five.hasAttribute("onclick")){
                    takePlaceO(five);
                    didMove=true;
                }
//SIX
    if(!didMove)
        if(iii!=null&&ix!=null)
            if(iii == playX&& ix==playX)
                if(six.hasAttribute("onclick")){
                    takePlaceO(six);
                    didMove=true;
                }
    if(!didMove)
        if(iv!=null&&v!=null)
            if(iv==playX&&v==playX)
                if(six.hasAttribute("onclick")){
                    takePlaceO(six);
                    didMove=true;
                }
//SEVEN
    if(!didMove)
        if(i!=null&&iv!=null)
            if(i == playX && iv == playX) 
                if( seven.hasAttribute("onclick")){
                    takePlaceO(seven);
                    didMove=true;
                }
    if(!didMove)
        if(iii!=null&&v!=null)
            if(iii ==playX&&v==playX) 
                if( seven.hasAttribute("onclick")){
                    takePlaceO(seven);
                    didMove=true;
                }
    if(!didMove)
        if(viii!=null&&ix!=null)
            if(viii == playX&&ix==playX) 
                if( seven.hasAttribute("onclick")){
                    takePlaceO(seven);
                    didMove=true;
                }
//EIGHT
    if(!didMove)
        if(ii!=null&&v!=null)
            if(ii == playX && v == playX)
                if(eight.hasAttribute("onclick")){
                    takePlaceO(eight);
                    didMove=true;
                }
    if(!didMove)
        if(vii!=null&&ix!=null)
            if(vii==playX&&ix==playX) 
                if(eight.hasAttribute("onclick")){
                    takePlaceO(eight);
                    didMove=true;
                }
//NINE
    if(!didMove)
        if(iii!=null&&vi!=null)
            if(iii == playX && vi == playX) 
                if(nine.hasAttribute("onclick")){
                    takePlaceO(nine);	
                    didMove=true;
                }
    if(!didMove)
        if(i!=null&&v!=null)
            if(i==playX&&v==playX) 
                if(nine.hasAttribute("onclick")){
                    takePlaceO(nine);
                    didMove=true;
                }
    if(!didMove)
        if(vii!=null&&viii!=null)
            if(vii==playX&&viii==playX)
                if(nine.hasAttribute("onclick")){
                    takePlaceO(nine);
                    didMove=true;
                }
}
function computerVictory(one,two,three,four,five,six,seven,eight, nine){
    var cpuO = o.getAttribute("src");
    var i =  getElementsAttribute(one);
    var ii = getElementsAttribute(two);
    var iii = getElementsAttribute(three);
    var iv = getElementsAttribute(four);
    var v = getElementsAttribute(five);
    var vi = getElementsAttribute(six);
    var vii = getElementsAttribute(seven);
    var viii = getElementsAttribute(eight);
    var ix = getElementsAttribute(nine);
//ONE
    if(iv!=null&&vii!=null)
        if(iv == cpuO && vii == cpuO) 
            if(one.hasAttribute("onclick") )
                takePlaceO(one);
    if(v!=null&&ix!=null)	
        if(v==cpuO&&ix==cpuO) 
            if(one.hasAttribute("onclick") )
                takePlaceO(one);
    if(ii!=null&&iii!=null)	
        if(ii==cpuO&&iii==cpuO)
            if(one.hasAttribute("onclick") )
                takePlaceO(one);	
//TWO
    if(v!=null&&viii!=null)
        if(v == cpuO&&viii==cpuO)
            if(two.hasAttribute("onclick"))
                takePlaceO(two);
    if(i!=null&&iii!=null)
        if(i==cpuO&&iii==cpuO)
            if(two.hasAttribute("onclick"))
                takePlaceO(two);
//THREE
    if(vi!=null&&ix!=null)
        if(vi == cpuO && ix==cpuO)  
            if(three.hasAttribute("onclick"))
                takePlaceO(three);	
    if(v!=null&&vii!=null)
        if(v==cpuO&&vii==cpuO) 
            if(three.hasAttribute("onclick"))
                takePlaceO(three);	
    if(i!=null&&ii!=null)
        if(i==cpuO&&ii==cpuO)
            if(three.hasAttribute("onclick"))
                takePlaceO(three);	
//FOUR
    if(i!=null&&vii!=null)
        if(i == cpuO && vii == cpuO)
            if( four.hasAttribute("onclick") )
                takePlaceO(four);
    if(v!=null&&vi!=null)
        if(v == cpuO&&vi==cpuO)
            if( four.hasAttribute("onclick") )
                takePlaceO(four);
//FIVE
    if(ii!=null&&viii!=null)
        if(ii==cpuO && viii==cpuO) 
            if(five.hasAttribute("onclick"))
                takePlaceO(five);
     if(i!=null&&ix!=null)	
        if(i==cpuO&&ix==cpuO) 
            if(five.hasAttribute("onclick"))
                takePlaceO(five);
    if(iii!=null&&vii!=null)	
        if(iii == cpuO&&vii==cpuO)  
            if(five.hasAttribute("onclick"))
                takePlaceO(five);
    if(iv!=null&&vi!=null)
        if(iv==cpuO&&vi==cpuO)
            if(five.hasAttribute("onclick"))
                takePlaceO(five);
//SIX
    if(iii!=null&&ix!=null)
        if(iii == cpuO&& ix==cpuO)
            if(six.hasAttribute("onclick"))
                takePlaceO(six);
    if(iv!=null&&v!=null)
        if(iv==cpuO&&v==cpuO)
            if(six.hasAttribute("onclick"))
                takePlaceO(six);
//SEVEN
    if(i!=null&&iv!=null)
        if(i == cpuO && iv == cpuO) 
            if( seven.hasAttribute("onclick"))
                takePlaceO(seven);
     if(iii!=null&&v!=null)
        if(iii ==cpuO&&v==cpuO) 
            if( seven.hasAttribute("onclick"))
                takePlaceO(seven);
    if(viii!=null&&ix!=null)
        if(viii == cpuO&&ix==cpuO) 
            if( seven.hasAttribute("onclick"))
                takePlaceO(seven);
//EIGHT
    if(ii!=null&&v!=null)
        if(ii == cpuO && v == cpuO)
            if(eight.hasAttribute("onclick"))
                takePlaceO(eight);
    if(vii!=null&&ix!=null)
        if(vii==cpuO&&ix==cpuO) 
            if(eight.hasAttribute("onclick"))
                takePlaceO(eight);
//NINE
    if(iii!=null&&vi!=null)
        if(iii == cpuO && vi == cpuO) 
            if(nine.hasAttribute("onclick"))
                takePlaceO(nine);
    if(i!=null&&v!=null)
        if(i==cpuO&&v==cpuO) 
            if(nine.hasAttribute("onclick"))
                takePlaceO(nine);
    if(vii!=null&&viii!=null)
        if(vii==cpuO&&viii==cpuO)
            if(nine.hasAttribute("onclick"))
                takePlaceO(nine);
}
function turn(el) {
    takePlaceX(el);
    el.removeAttribute("onclick");	
    //isWinner();
    var one = document.getElementById("1");
    var two = document.getElementById("2");
    var three = document.getElementById("3");
    var four = document.getElementById("4");
    var five = document.getElementById("5");
    var six = document.getElementById("6");
    var seven = document.getElementById("7");
    var eight = document.getElementById("8");
    var nine = document.getElementById("9");
    var compDidTurn = counter;
    if(counter==1)
        firstComputerTurn(one, two, three, four, five, six, seven, eight, nine);
    if(counter==3)
        secondComputerTurn(one, two, three, four, five, six, seven, eight, nine);
    else if(counter>=4){
        computerVictory(one,two,three,four,five,six,seven,eight,nine);
        if(counter<=compDidTurn)
            playerVictory(one,two,three,four,five,six,seven,eight,nine);
        if(counter<=compDidTurn)
            randomPlace();
        isWinner();
    }
            
}