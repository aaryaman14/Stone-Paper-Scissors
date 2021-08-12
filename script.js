var yscore = 0;
var cscore = 0;
var ydisp = document.querySelector("#Y");
var cdisp = document.querySelector("#C");
var messageDisp = document.querySelector("#message");
var resetb = document.querySelector("#reset");
var ran = document.querySelector("#random");
var op1 = document.querySelector("#b1");
var op2 = document.querySelector("#b2");
var op3 = document.querySelector("#b3");
var num = document.querySelector("input");
var playto= document.querySelector("#Play");
var winningScore = 5;
var flag= true;


ydisp.textContent = yscore;
cdisp.textContent = cscore;

op1.addEventListener("click", function () {

    if(flag)
    {
        var random1 = Math.floor(Math.random() * 3) + 1;

    if (random1 === 1) {
        ran.textContent = random1 + ": Stone";
    }
    else if (random1 === 2) {
        ran.textContent = random1 + ": Paper";
    }
    else {
        ran.textContent = random1 + ": Scissors";
    }


    if (random1 === 2) {
        cscore++;
    }

    else if (random1 === 3) {
        yscore++;
    }

    ydisp.textContent = yscore;
    cdisp.textContent = cscore;


    if (yscore === winningScore || cscore === winningScore) {
        flag=false;
        end();
    }
    }
    
});

op2.addEventListener("click", function () {

    if(flag)
    {
        var random2 = Math.floor(Math.random() * 3) + 1;

    if (random2 === 1) {
        ran.textContent = random2 + ": Stone";
    }
    else if (random2 === 2) {
        ran.textContent = random2 + ": Paper";
    }
    else {
        ran.textContent = random2 + ": Scissors";
    }


    if (random2 === 1) {
        yscore++;
    }

    else if (random2 === 3) {
        cscore++;
    }

    ydisp.textContent = yscore;
    cdisp.textContent = cscore;

    if (yscore === winningScore || cscore === winningScore) {
        flag=false;
        end();
    }
    }
    
});

op3.addEventListener("click", function () {

    if(flag)
    {
        var random3 = Math.floor(Math.random() * 3) + 1;

    if (random3 === 1) {
        ran.textContent = random3 + ": Stone";
    }
    else if (random3 === 2) {
        ran.textContent = random3 + ": Paper";
    }
    else {
        ran.textContent = random3 + ": Scissors";
    }


    if (random3 === 1) {
        cscore++;
    }

    else if (random3 === 2) {
        yscore++;
    }

    ydisp.textContent = yscore;
    cdisp.textContent = cscore;

    if (yscore === winningScore || cscore === winningScore) {
        flag=false;
        end();
    }
    }
    
});

num.addEventListener("change",function(){
    winningScore=Number(num.value);
    yscore=0;
    cscore=0;
    ydisp.textContent = yscore;
    cdisp.textContent = cscore;
    playto.textContent="Playing To: "+winningScore;
    flag= true;
});

function end() {
    if (yscore === winningScore) {
        ydisp.classList.add("winner");
        messageDisp.textContent = "You Win!! Press Reset to Play again...";
    }
    else {
        cdisp.classList.add("winner");
        messageDisp.textContent = "You Lose Press Reset to Try again...";
    }

    play();
}

function play()
{
    resetb.addEventListener("click", function () {
        yscore = 0;
        cscore = 0;
        messageDisp.textContent = "Lets Play!!!";
        ydisp.textContent = yscore;
        cdisp.textContent = cscore;
        ran.textContent = "Random";
        ydisp.classList.remove("winner");
        cdisp.classList.remove("winner");
        flag=true;
    });
}


