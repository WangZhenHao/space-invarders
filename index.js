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

window.addEventListener('keydown', (event) => {
    console.log(event.key)
    const key = event.key
    switch(key) {
        case 'a':
            KeyMinitor.a.pressed = true
        break;

        case 'd':
            KeyMinitor.d.pressed = true
        break;
        case ' ':

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
    requestAnimationFrame(animate)
}

animate()