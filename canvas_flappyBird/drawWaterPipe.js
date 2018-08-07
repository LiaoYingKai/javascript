var water_pipe_width = 60;
var water_pipe_height = 300;
var water_pipeX = canvas.width - water_pipe_width;
var water_pipeY = 0;
var water_pipe_space = canvas.height / 3;
canvas.height = window.innerHeight;


function drawWaterPipe() {
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(water_pipeX, water_pipeY, water_pipe_width, water_pipe_height);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(water_pipeX, water_pipeY + water_pipe_height + water_pipe_space, water_pipe_width, canvas.height);
  ctx.fill();
  ctx.closePath();
}