class Particle {
    constructor(position, veloctiy, radius, color) {
        this.position = position;
        this.veloctiy = veloctiy
        this.radius = radius
        this.color = color

        this.apacity = 1
    }

    draw() {
        ctx.save()
        ctx.beginPath()
        ctx.globalAlpha = this.apacity
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color;
        ctx.fill()
        ctx.closePath()

        ctx.restore()
    }

    update() {
        this.draw();
        this.position.x += this.veloctiy.x
        this.position.y += this.veloctiy.y

        this.apacity -= 0.01
    }
}