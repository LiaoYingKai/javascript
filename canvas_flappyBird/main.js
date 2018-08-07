var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBird();
  drawWaterPipe();
  drawScore();
  birdCollision();

  if (isJump) {
    birdY -= 8;
  } else {
    birdY += 4;
  }
  if (birdY < bird_body || birdY > canvas.height - bird_body) {
    document.location.reload();
  }
  if ((water_pipeX + water_pipe_width) === 0) {
    score += 1;
    water_pipeX = canvas.width;
    water_pipe_height = 100 + Math.floor((Math.random() * 300) + 100);
  } else {
    water_pipeX -= 4;
  }
  if (score > 10) {
    alert("YOU WIN!!!CONGRATULATIONS!");
    document.location.reload();
  }
  window.requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
// setInterval(draw, 10);