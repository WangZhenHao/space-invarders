class Player {
    constructor() {
        const image = new Image()
        image.src = './image/spaceship.png'

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
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        if(this.image) {
            this.draw()
        }
    }
}