import { Game } from "./game.js"

const point_tag = document.getElementById("point-tag");

const spawn_target = () => {
    let t = document.createElement("div");

    t.classList.add("target");
    t.onclick = remove_target;
    t.style.top = (Math.random() * window.innerHeight) + "px"; 
    t.style.left = (Math.random() * window.innerWidth) + "px";

    document.body.appendChild(t);
}

const remove_target = (e) => {
    document.body.removeChild(e.target)
    point_tag.textContent = parseInt(point_tag.textContent) + 1;
}

function start() {
    setInterval(spawn_target, 300)
}

start()