function createParticle(invader) {
    for (let i = 0; i < 15; i++) {
        particles.push(new Particle(
            { x: invader.position.x + invader.width / 2, y: invader.position.y + invader.height / 2 },
            {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2
            },
            Math.random() * 3,
            'white'
        ));
    }
}

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

        const colomn = Math.floor(Math.random() * 10 + 3)
        const row = Math.floor(Math.random() * 4 + 3)

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

        this.invaders.forEach((invader, i) => {
            invader.update({velocity: this.velocity})

            projectiles.forEach((projectile, j) => {
                if(projectile.position.y + projectile.radius <= invader.position.y + invader.height && 
                  projectile.position.x + projectile.radius >= invader.position.x &&
                  projectile.position.x - projectile.radius <= invader.position.x + invader.width
                ) {
                    setTimeout(() => {
                        const invaderFound = this.invaders.find(invader2 => invader2 === invader)
                        const projectileFound = projectiles.find(projectile2 => projectile2 === projectile)
                        
                        if(invaderFound && projectileFound) {
                            this.invaders.splice(i, 1)
                            projectiles.splice(j, 1)
                            createParticle(invaderFound)
                        }

                        if(this.invaders.length > 0) {
                            const firstInvader = this.invaders[0]
                            const lastInvader = this.invaders[this.invaders.length - 1]

                            this.width = lastInvader.position.x - firstInvader.position.x + firstInvader.width
                            this.position.x = firstInvader.position.x
                            
                        }
                       
                    })
                }
            })
        })
    }
}