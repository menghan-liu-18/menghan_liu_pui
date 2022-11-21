const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenQ = params.get('Num');
console.log(chosenQ);

function answerClick(que) {
    const choiceL = document.getElementById('nav-btn-left');
    const choiceR = document.getElementById('nav-btn-right');
    const intro = document.getElementById('intro-text');
    const nextQ = document.getElementById("next");
    
    if(que.Cor == "A1") {
        choiceL.onclick = function() {
            nextQ.style.display = "block";
            nextQ.href = que.link;
            choiceL.style.backgroundColor = "#379956";
            choiceR.style.border = "thick solid #FFC85B";
            intro.innerText = que.Exp;
            intro.style.fontSize = "22px";
            intro.style.textAlign = "left";
            intro.style.fontFamily = "DM Sans";
            choiceL.disabled = true;
            choiceL.style.pointerEvents = "none";
            choiceR.disabled = true;
            choiceR.style.pointerEvents = "none";
        }

        choiceR.onclick = function() {
            nextQ.style.display = "block";
            nextQ.href = que.link;
            choiceL.style.backgroundColor = "#379956";
            choiceR.style.border = "thick solid #FFC85B";
            intro.innerText = que.Exp;
            intro.style.fontSize = "22px";
            intro.style.textAlign = "left";
            intro.style.fontFamily = "DM Sans";
            choiceL.disabled = true;
            choiceL.style.pointerEvents = "none";
            choiceR.disabled = true;
            choiceR.style.pointerEvents = "none";
        }

    }

    if(que.Cor == "A2") {
        choiceL.onclick = function() {
            nextQ.style.display = "block";
            nextQ.href = que.link;
            choiceR.style.backgroundColor = "#379956";
            choiceL.style.border = "thick solid #FFC85B";
            intro.innerText = que.Exp;
            intro.style.fontSize = "22px";
            intro.style.textAlign = "left";
            intro.style.fontFamily = "DM Sans";
            choiceL.disabled = true;
            choiceL.style.pointerEvents = "none";
            choiceR.disabled = true;
            choiceR.style.pointerEvents = "none";
        }

        choiceR.onclick = function() {
            nextQ.style.display = "block";
            nextQ.href = que.link;
            choiceR.style.backgroundColor = "#379956";
            choiceL.style.border = "thick solid #FFC85B";
            intro.innerText = que.Exp;
            intro.style.fontSize = "22px";
            intro.style.textAlign = "left";
            intro.style.fontFamily = "DM Sans";

            choiceL.disabled = true;
            choiceL.style.pointerEvents = "none";
            choiceR.disabled = true;
            choiceR.style.pointerEvents = "none";
        }
    } 
}

function submitClick(que) {
    const sbm = document.getElementById('submit');
    const ans = document.getElementById('ans');
    const intro = document.getElementById('intro-text');
    const nextQ = document.getElementById("next");
    
    sbm.onclick = function() {
        intro.innerText = que.Exp;
        intro.style.fontSize = "22px";
        intro.style.textAlign = "left";
        intro.style.fontFamily = "DM Sans";
        nextQ.style.display = "block";
        nextQ.href = que.link;
        
        if(ans.value == que.entry) {
            ans.style.backgroundColor = "#379956";
        } else {
            ans.style.border = "thick solid #FFC85B";
        }

        ans.disabled = true;
        sbm.disabled = true;
        sbm.style.pointerEvents = "none";
    }
}

function changeColor(num) {
    j = num - 2;
    for(i = 0;i <= j;i++) {
        const proNextC = document.querySelectorAll('.circle')[i];
        proNextC.style.backgroundColor = "#379956";
        if((j > 0) && (i < j)){
            const proNextL = document.querySelector('.line');
            proNextL.classList.remove("line");
            proNextL.classList.add("line-static");
        }
    }

    const proNextL = document.querySelector('.line');
    proNextL.classList.add("line2");    

    const currC = document.querySelectorAll('.circle')[num-1];
    var delayInMilliseconds = 2000;
    setTimeout(function() {
        currC.style.backgroundColor = "#FFC85B";
    }, delayInMilliseconds);
}

function updateQ() {
    const heading = document.querySelector('h1');
    const intro = document.getElementById('intro-text');

    if(chosenQ == '1') {
        heading.innerText = 'Question 1';

        intro.innerText = question.No1.Prompt;

        const leftBtn = document.getElementById('nav-btn-left');
        leftBtn.innerText = question.No1.A1;

        const rightBtn = document.getElementById('nav-btn-right');
        rightBtn.innerText = question.No1.A2;

        answerClick(question.No1);
    }

    if(chosenQ == '2') {
        heading.innerText = 'Question 2';

        intro.innerText = question.No2.Prompt;

        const leftBtn = document.getElementById('nav-btn-left');
        leftBtn.innerText = question.No2.A1;
        leftBtn.style.fontSize = "22px";

        const rightBtn = document.getElementById('nav-btn-right');
        rightBtn.innerText = question.No2.A2;
        rightBtn.style.fontSize = "22px";

        changeColor(2);

        answerClick(question.No2);
    }

    if(chosenQ == '3') {
        heading.innerText = 'Question 3';

        intro.innerText = question.No3.Prompt;

        const leftBtn = document.getElementById('nav-btn-left');
        leftBtn.innerText = question.No3.A1;

        const rightBtn = document.getElementById('nav-btn-right');
        rightBtn.innerText = question.No3.A2;

        changeColor(3);

        answerClick(question.No3);
    }

    if(chosenQ == '4') {
        heading.innerText = 'Question 4';

        intro.innerText = question.No4.Prompt;

        const leftBtn = document.getElementById('nav-btn-left');
        leftBtn.innerText = question.No4.A1;

        const rightBtn = document.getElementById('nav-btn-right');
        rightBtn.innerText = question.No4.A2;

        changeColor(4);

        answerClick(question.No4);
    }

    if(chosenQ == '5') {
        heading.innerText = 'Question 5';

        intro.innerText = question.No5.Prompt;
        
        changeColor(5);

        submitClick(question.No5);
    }

    if(chosenQ == '6') {
        heading.innerText = 'Question 6';

        intro.innerText = question.No6.Prompt;

        const leftBtn = document.getElementById('nav-btn-left');
        leftBtn.innerText = question.No6.A1;
        leftBtn.style.fontSize = "22px";
        leftBtn.style.lineHeight = "20px";

        const rightBtn = document.getElementById('nav-btn-right');
        rightBtn.innerText = question.No6.A2;
        rightBtn.style.fontSize = "22px";
        rightBtn.style.lineHeight = "20px";

        changeColor(6);

        answerClick(question.No6);
    }
}

updateQ();