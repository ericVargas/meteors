let title = document.getElementById('title');
let p = document.getElementById('how');
let bHow = document.getElementById('bHow');
let bStart = document.getElementById('bStart');

bHow.addEventListener('click', howTo);

function howTo(){
    title.style.display = 'none';
    p.style.display = 'block';
    bHow.style.display = 'none';
}

bStart.addEventListener('click', startG);

function startG(){
    title.style.display = 'none';
    p.style.display = 'none';
    bHow.style.display = 'none';
    document.getElementById('land').id = 'game';
    bStart.style.display = 'none';
}