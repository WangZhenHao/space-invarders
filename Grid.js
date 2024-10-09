class Grid {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        }

        this.velocity = {
            x: 3,
            y: 0
        }

        this.invaders = []

        const colomn = 10
        const row = 4

        this.width = colomn * 30

        for(let x = 0; x < colomn; x++) {
            for(let y = 0; y < row; y++) {
                this.invaders.push(new Invader({
                    position: {
                        x: x * 30,
                        y: y * 30
                    }
                }))
            }
        }
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y

        this.velocity.y = 0
        if(this.position.x + this.width >= innerWidth || this.position.x <= 0) {
            this.velocity.x = -this.velocity.x
            this.velocity.y = 30
        }

        this.invaders.forEach(invader => {
            invader.update({velocity: this.velocity})
        })
    }
}