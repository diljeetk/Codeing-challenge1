const scale = 3;
const worldWidth = 480;
const worldHeight = 240;
const canvas = document.querySelector("canvas");
canvas.width = worldWidth * scale;
canvas.height = worldHeight * scale;
const ctx = canvas.getContext("2d");
const xPos = (canvas.width/2);
const yPos = (canvas.height/2);
const render = (world) => {
    ctx.fillStyle = "#202020";
    ctx.fillRect(0, 0, worldWidth * scale, worldHeight * scale);
    ctx.fillStyle = "green";
    world.forEach((row, y) =>
    row.forEach(
        (alive, x) =>
        alive && ctx.fillRect(xPos +  (x * scale), yPos + (y * scale), scale - 1, scale - 1)
    )
    );
};