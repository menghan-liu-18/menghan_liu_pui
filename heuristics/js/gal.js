function createHeu (heu) {
    const template = document.querySelector('#heu-template');
    const clone = template.content.cloneNode(true);

    heading = clone.querySelector('.heu-heading')
    heading.innerText = heu;
    const container = document.getElementById('heu-list');
    container.appendChild(clone)
};


for(const property in heuristics) {
    createHeu (property);
}