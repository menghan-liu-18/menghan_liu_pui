let ans = initializeNum();

// let ansArr = initializeArr();

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

// function initializeArr() {
//     let ansArr = [];

//     if (localStorage.getItem('ansNum') != null) {
//         const getAnsNum = localStorage.getItem('ansNum');
//         ansNum = JSON.parse(getAnsNum);
//     } else {
//         ansNum = 0;
//     } 

//     return ansNum;
// }

function updateNumHeu() {
    const numHue = document.getElementById("num-heu");
    numHue.innerText = ans;
}

function updateNumLo() {
    const numLog = document.getElementById("num-log");
    numLog.innerText = 6 - ans;
}

const graph1 = document.getElementById("graph1");

function updateGraph() {
    const graph1 = document.getElementById("graph1");
    const graph2 = document.getElementById("graph2");
    const getAnsNum = localStorage.getItem('ansNum');
    ans = JSON.parse(getAnsNum);
    const pA = (ans/6)*100;
    const pAS = pA.toString() + '%';
    const pL = ((6-ans)/6)*100;
    const pLS = pL.toString() + '%';
    console.log(pAS);
    console.log(pLS);

    // graph1.style.background = "conic-gradient(#E8CEAE ${pA}%, #E8E7E7 ${pL}%)";
    graph2.style.background = "conic-gradient(#E8CEAE 60%, #E8E7E7 40%)";
}

function update(){
    updateNumHeu();
    updateNumLo();
    updateGraph()
}

update();