class Invader {
    constructor({ position }) {
        this.position = position
        const image = new Image();
        image.src = "./image/invader.png";
        image.onload = () => {
            const scalce = 1;
            this.image = image;

            this.width = image.width * scalce;
            this.height = image.height * scalce;
        };
    }
    draw() {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }

    update({ velocity }) {
        if (this.image) {
            this.position.x += velocity.x;
            this.position.y += velocity.y;
            
            this.draw();
        }
    }
    shot() {
        invaderProjectiles.push(new InvaderProjectile({
            position: {
                x: this.position.x + this.width / 2,
                y: this.position.y + this.height
            },
            velocity: {
                x: 0,
                y: 2
            }
        }))
    }
}
