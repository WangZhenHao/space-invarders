class Start {
    constructor(position, veloctiy, radius, color) {
        this.position = position;
        this.veloctiy = veloctiy;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if(this.position.y - this.radius >= innerHeight) {
            this.position.y = -this.radius
            this.position.x = innerWidth * Math.random()
        }

        this.draw();
        this.position.x += this.veloctiy.x;
        this.position.y += this.veloctiy.y;
    }
}

function createStart() {
    const list = [];

    for (let i = 0; i < 100; i++) {
        list.push(
            new Start({
                x: innerWidth * Math.random(),
                y: innerHeight * Math.random(),
            }, {
                x: 0,
                y: 0.3
            }, Math.random() * 3, 'white')
        );
    }

    return list;
}
