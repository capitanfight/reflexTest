export class Game {
    constructor() {
        this.last_t = 0;
        this.t = 0;

        this.difficulty = 1;

        requestAnimationFrame(this.loop)
    }

    loop = (t) => {
        let dt = t - this.last_t;
        this.last_t = t;
        this.t = t;
        // if (this.difficulty * 1000 > )

        

        requestAnimationFrame(this.loop)
    }
}