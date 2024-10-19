class Player {
    constructor() {
        const image = new Image()
        image.src = './image/spaceship.png'
        this.velocity = {
            x: 0,
            y: 0
        }
        this.rotation = 0

        image.onload = () => {
            const scalce = 0.15
            this.image = image

            this.width = image.width * scalce
            this.height = image.height * scalce

            this.position = {
                x: innerWidth / 2 - this.width / 2,
                y: innerHeight - this.height - 20
            }
        }

        this.apacity = 1
    }

    draw() {
        ctx.save()
        ctx.globalAlpha = this.apacity
        ctx.translate(
            this.position.x + this.width / 2,
            this.position.y + this.height / 2,
        )
        ctx.rotate(this.rotation)
        ctx.translate(
            -this.position.x - this.width / 2,
            -this.position.y - this.height / 2,
        )
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        ctx.restore()
    }

    update() {
        if(this.image) {
            if(KeyMinitor.a.pressed && this.position.x >= 0) {
                this.velocity.x = -7
                this.rotation = -0.15
            } else if (KeyMinitor.d.pressed && this.position.x + this.width <= innerWidth) {
                this.velocity.x = 7
                this.rotation = 0.15
            } else {
                this.velocity.x = 0
                this.rotation = 0
            }

            this.position.x += this.velocity.x

            this.draw()
        }
    }
}