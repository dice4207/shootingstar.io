const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

function randomColor() {
    const colors = ["white",  "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createStar() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 5 + 1; // Random star size between 1 and 5
    const color = randomColor();

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function shootingStar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create a trail effect by drawing a translucent black rectangle over the canvas
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    createStar();

    requestAnimationFrame(shootingStar);
}

shootingStar();
