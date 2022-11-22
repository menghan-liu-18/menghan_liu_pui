let ans = initializeNum();

function initializeNum() {
    let ansNum = 0;

    if (localStorage.getItem('ansNum') != null) {
        const getAnsNum = localStorage.getItem('ansNum');
        ansNum = JSON.parse(getAnsNum);
    } else {
        ansNum = 0;
    } 

    return ansNum;
}

function updateNumHeu() {
    const numHue = document.getElementById("num-heu");
    numHue.innerText = ans;
}

function updateNumLo() {
    const numLog = document.getElementById("num-log");
    numLog.innerText = 6 - ans;
}

updateNumHeu();
updateNumLo();