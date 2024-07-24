let gameSeq=[];
let userSeq=[];

let level=0;
let started=false;
let score=1;

let h2=document.querySelector("h2");
let h4=document.querySelector("h4");
let btns=["yellow","red","purple","green"];


document.addEventListener("keypress",function(){
    if(started==false){
        started=true;

        levelup();
    }
})
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } ,250 )
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } ,500 )
}

function levelup(){
    userSeq=[];
    score=level*5;
    level++;
    
    h2.innerText=`Level ${level}`;
    let randomIndx=Math.floor(Math.random()*3);
    let randColor=btns[randomIndx];
    let rnbtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    gameFlash(rnbtn);

}
function check(indx){
    
    if(userSeq[indx]===gameSeq[indx]){
        
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200)
        reset();
    }
}

function buttonPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",buttonPress);
}
function reset(){
    started=false;
    level=0;
    gameSeq=[];
    h4.innerHTML=`Previous Highest score:${score} `;


}