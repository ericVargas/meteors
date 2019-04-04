class MeteorMaker {
    constructor(num) {
        this.lvl = [];
    }

    getMeteors(num) {
        console.log('making these bubbles lol');
        for (let i = 0; i < num; i++) {
            this.lvl.push(i);
        }
    }

    printMeteors() {
        console.log('print');
        for (let i = 0; i < this.lvl.length; i++) {
            let meteor = document.createElement('div');
            meteor.setAttribute('class', 'meteor');
            meteor.setAttribute('id', i);
            meteor.addEventListener('click', function gameOver() {
                console.log('GAMEOVER!!!');
                meteor.remove();
                let finished = document.createElement('div');
                finished.setAttribute('id', 'gameover');
                game.appendChild(finished);
                let expl = document.createElement('div');
                expl.setAttribute('class', 'explosion');
                finished.appendChild(expl);
                let over = document.createElement('div');
                over.setAttribute('class', 'over');
                finished.appendChild(over);
            });
            game.appendChild(meteor);
        }
    }
};
