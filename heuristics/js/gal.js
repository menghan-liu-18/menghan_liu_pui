function createHeu (heu) {
    const template = document.querySelector('#heu-template');
    const clone = template.content.cloneNode(true);

    const heading = clone.querySelector('.heu-heading')
    heading.innerText = heu;

    const exp = clone.querySelector('.exp');
    heuristics[heu].exp = exp;
    exp.innerText = heuristics[heu].text;
    exp.classList.add("hidden");

    const container = document.getElementById('heu-list');

    const button = clone.querySelector('.heu-sec-tri');
    let count = 0;
    button.onclick = function() {
        heuristics[heu].exp.classList.toggle('hidden');
        count++;
        let deg = count*180;
        button.style.transform = "rotate("+deg+"deg)";;
    }
    container.appendChild(clone)
};


for(const property in heuristics) {
    createHeu (property);
}