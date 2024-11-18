class Color {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        if (a != undefined)
            this.a = a;
        else
            this.a = 255;
    }

    getRgb() {
        return "rgb(" +
            String(this.r) + ", " +
            String(this.g) + ", " +
            String(this.b) +
            ")"
    }
}

class ScoreboardElement {
    constructor(name, points, backgroundColor, father) {
        this.name = name;
        this.points = points;
        
        this.container = document.createElement("div");
        this.container.classList.add("element-container");
        
        this.nameTag = document.createElement("span");
        this.nameTag.classList.add(["element-name-tag", "tag"]);
        this.nameTag.textContent = this.name;
        
        this.pointTag = document.createElement("span");
        this.pointTag.classList.add(["element-point-tag", "tag"]);
        this.pointTag.textContent = this.points;

        this.setBackgroundColor(backgroundColor);
        
        this.container.appendChild(this.nameTag);
        this.container.appendChild(this.pointTag);
        father.appendChild(this.container);
    }

    setBackgroundColor(color) {
        if (!(color instanceof Color)) throw new Error("The argument passed is not an instance of the class 'Color'");

        this.backgroundColor = color;
        this.nameTag.style.backgroundColor = color.getRgb();
    }

    hide() {
        this.container.classList.add("hide");
    }

    show() {
        this.container.classList.remove("hide");
    }
}

class Scoreboard {
    constructor() {

    }
}

// const e = new ScoreboardElement("ajsbd", 0, new Color(0, 0, 0), document.body);