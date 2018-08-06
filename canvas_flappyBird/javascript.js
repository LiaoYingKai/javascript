var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
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

var water_pipe_width = 60;
var water_pipe_height = canvas.height;
var water_pipeX = canvas.width - water_pipe_width;
var water_pipeY = 0;
var water_pipe_space = canvas.height / 3;


function drawWaterPipe() {
  ctx.beginPath()
  ctx.fillStyle = "green";
  ctx.fillRect(water_pipeX, water_pipeY, water_pipe_width, water_pipe_height);
  ctx.fill();
  ctx.closePath();
}

var isJump = false;
document.addEventListener("keydown", e => {
  if (e.keyCode == 32) {
    isJump = true;
  }
});
document.addEventListener("keyup", e => {
  if (e.keyCode == 32) {
    isJump = false;
  }
});


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBird();
  drawWaterPipe();
  if (isJump) {
    birdY -= 8;
  } else {
    birdY += 4;
  }
  if (birdY < bird_body || birdY > canvas.height - bird_body) {
    document.location.reload();
  }
  if ((water_pipeX + water_pipe_width) === 0) {
    water_pipeX = canvas.width;
  } else {
    water_pipeX -= 1;
  }
}
setInterval(draw, 10)