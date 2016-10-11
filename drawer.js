'use strict'

const randomCounts = [0];

function setup() {
    const myCanvas = createCanvas(640, 480);
    myCanvas.parent('hello');
}

function draw() {
    const width = 640;
    const height = 480;
    const index = Math.floor(Math.random(randomCounts.length));
    randomCounts[index]++;

    stroke('blue');
    strokeWeight(1);
    fill(51);
    const w = width/randomCounts.length;

    for ( let x = 0; x < randomCounts.length; x++) {
        rect(x*w, height - randomCounts[x], w - 1, randomCounts[x])
    }
}

class Walker {
    constructor(width, height) {
        this.x = width / 2;
        this.y = height / 2;
    }

    display() {
        stroke('black');
        strokeWeight(1);
        point(this.x, this.y);
    }

    setup() {
        var stepx = Math.floor(Math.random() * 3) - 1;
        var stepy = Math.floor(Math.random() * 3) - 1;
        this.x += stepx;
        this.y += stepy;
    }
}