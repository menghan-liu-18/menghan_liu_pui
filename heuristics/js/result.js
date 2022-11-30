let ans = initializeNum();

let ansArr = initializeArr();

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

function initializeArr() {
    let ansArr = [];

    if (localStorage.getItem('ansArr') != null) {
        const getAnsArr = localStorage.getItem('ansArr');
        ansArr = JSON.parse(getAnsArr);
    } else {
        ansArr = [];
    } 

    return ansArr;
}

function updateNumHeu() {
    const numHue = document.getElementById("num-heu");
    numHue.innerText = ans;
}

function updateNumLo() {
    const numLog = document.getElementById("num-log");
    numLog.innerText = 6 - ans;
}

function updateArr() {
    ansArr.push(ans);

    const ansArrString = JSON.stringify(ansArr);
    localStorage.setItem('ansArr', ansArrString);
}


function pie() {
    const getAnsNum = localStorage.getItem('ansNum');
    ans = JSON.parse(getAnsNum);

    const getAnsArr = localStorage.getItem('ansArr');
    ansArr = JSON.parse(getAnsArr);

    const len = ansArr.length;
    let totalNum = 0;
    for(i = 0;i<len;i++){
        totalNum += ansArr[i];
    };
    const oppoNum = len*6 - totalNum;

    var ctx1 = document.getElementById("pie-chartcanvas-1");
    var ctx2 = document.getElementById("pie-chartcanvas-2");

    var data1 = {
        labels: ["heuristics", "logic"],
        datasets: [
            {
                label: "Your Score",
                data: [ans, 6-ans],
                backgroundColor: ["#E8CEAE", "#E8E7E7"],
                borderWidth: [1, 1]
            }
        ]
    }

    var data2 = {
        labels: ["heuristics", "logic"],
        datasets: [
            {
                label: "Others' Scores",
                data: [totalNum, oppoNum],
                backgroundColor: ["#E8CEAE", "#E8E7E7"],
                borderWidth: [1, 1]
            }
        ]
    }

    var chart1 = new Chart(ctx1, {
        type: "pie",
        data: data1,
        options: {}
    });

    var chart2 = new Chart(ctx2, {
        type: "pie",
        data: data2,
        options: {}
    });
};

function update(){
    updateNumHeu();
    updateNumLo();
    updateArr()
    pie();
}

update();