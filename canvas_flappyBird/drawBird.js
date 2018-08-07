canvas.height = window.innerHeight;
var birdX = canvas.width / 2;
var birdY = canvas.height / 2;
var bird_body = 25;

function drawBird() {
  ctx.beginPath();
  ctx.arc(birdX, birdY, bird_body, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}