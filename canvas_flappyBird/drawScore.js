var score = 0;

function drawScore() {
  ctx.font = "24px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score:" + score, 16, 40);
}