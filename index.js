const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const player = new Player()
const KeyMinitor = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}
const projectiles = []

window.addEventListener('keydown', (event) => {
    
    const key = event.key
    switch(key) {
        case 'a':
            KeyMinitor.a.pressed = true
        break;

        case 'd':
            KeyMinitor.d.pressed = true
        break;
        case ' ':
            console.log(projectiles)
            projectiles.push(new Projectile({
                position: {
                    x: player.position.x + player.width / 2,
                    y: player.position.y
                },
                velocity: {
                    x: 0,
                    y: -7
                }
            }))
        break
    }
})

window.addEventListener('keyup', (event) => {
    const key = event.key
    switch(key) {
        case 'a':
            KeyMinitor.a.pressed = false
        break;

        case 'd':
            KeyMinitor.d.pressed = false
        break;
        case ' ':

        break
    }
})

function animate() {
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    player.update()

    projectiles.forEach((projectile, index) => {
        if(projectile.isOnSreen()) {
            projectile.update()
        } else {
            setTimeout(() => {
                projectiles.splice(index, 1)
            })
        }
        
    })

    requestAnimationFrame(animate)
}

animate()