const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = new Player();
const KeyMinitor = {
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
};
const projectiles = [];

window.addEventListener("keydown", (event) => {
    const key = event.key;
    switch (key) {
        case "a":
            KeyMinitor.a.pressed = true;
            break;

        case "d":
            KeyMinitor.d.pressed = true;
            break;
        case " ":
            projectiles.push(
                new Projectile({
                    position: {
                        x: player.position.x + player.width / 2,
                        y: player.position.y,
                    },
                    velocity: {
                        x: 0,
                        y: -7,
                    },
                })
            );
            break;
    }
});

// const invader = new Invader({
//     position: {
//         x: innerWidth / 2,
//         y: innerWidth / 2
//     }
// })

window.addEventListener("keyup", (event) => {
    const key = event.key;
    switch (key) {
        case "a":
            KeyMinitor.a.pressed = false;
            break;

        case "d":
            KeyMinitor.d.pressed = false;
            break;
        case " ":
            break;
    }
});
const grids = [new Grid()];
let frame = 0;
let randomInterval = Math.floor(Math.random() * 500 + 500);
const invaderProjectiles = [];
const particles = [];
const starts = createStart()



function animate() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    frame++;
    player.update();

    if (frame % randomInterval === 0) {
        // grids.push(new Grid())
        randomInterval = Math.floor(Math.random() * 500 + 500);
    }

    grids.forEach((grid) => {
        grid.update();

        if (frame % 100 === 0 && grid.invaders.length > 0) {
            grid.invaders[
                Math.floor(Math.random() * grid.invaders.length)
            ].shot();
        }
        //
    });
    projectiles.forEach((projectile, index) => {
        if (projectile.isOnSreen()) {
            projectile.update();
        } else {
            setTimeout(() => {
                projectiles.splice(index, 1);
            });
        }
    });
    invaderProjectiles.forEach((invaderProjectile, index) => {
        invaderProjectile.update();
    });

    particles.forEach((item, index) => {
        if(item.apacity <= 0) {
            setTimeout(() => {
                particles.splice(index, 1)
            })
        } else {
            item.update();
        }
    });
    starts.forEach(item => {
        item.update()
    })
    requestAnimationFrame(animate);
}

animate();
