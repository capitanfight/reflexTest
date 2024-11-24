const point_tag = document.getElementById("pt");
const start_btn = document.getElementById("start-btn");

const game_duration = 10000;
const target_spec = {
    innerHeight: 50,
    innerWidth: 50,
}

let intervalID;

let targets = [];

const spawn_target = () => {
    let t = document.createElement("div");

    
    t.classList.add("target");
    t.addEventListener("mousedown", remove_target);
    t.removeEventListener("click", remove_target);
    t.style.top = Math.max(Math.random() * window.innerHeight - target_spec.innerHeight, 0) + "px"; 
    t.style.left = Math.max(Math.random() * window.innerWidth - target_spec.innerWidth, 0) + "px";

    document.body.appendChild(t);
    targets.push(t)
}

const remove_target = (e) => {
    document.body.removeChild(e.target)
    point_tag.textContent = parseInt(point_tag.textContent) + 1;
}

function start() {
    start_btn.style.display = "none";

    intervalID = setInterval(spawn_target, 300);
    setTimeout(end, game_duration);
}

function end() {
    start_btn.style.display = "block";

    targets.forEach(t => {
        try {
            document.body.removeChild(t);
        } catch (e) {
            console.error(e)
        }
    });

    clearInterval(intervalID);
}

start_btn.addEventListener("click", start);