'use strict'
function setup() {
    var myCanvas = createCanvas(640, 480);
    myCanvas.parent('hello');
}

function draw() {
    // if (mouseIsPressed) {
    //     fill(0);
    // } else {
    //     fill(255);
    // }
    // ellipse(mouseX, mouseY, 80, 80);
    // ellipse(50, 50, 80, 80);
    var walker = new Walker(640, 480);
    for (let i = 0; i < 100; i++) {
        walker.setup();
        walker.display();
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