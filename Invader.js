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

    update() {
        if (this.image) {
            this.draw();
        }
    }
}
