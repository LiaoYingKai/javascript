var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
var v = 0;
var statu = "start";
var can_play = false;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBird();
  drawWaterPipe();
  drawScore();
  document.addEventListener('keydown', e => {
    birdCollision();
    if (e.keyCode === 32) {
      can_play = true;
    }
  });
  if (can_play) {
    if (isJump) {
      birdY -= 8;
      v = 0;
    } else {
      birdY += v;
    }
    if (birdY < bird_body || birdY > canvas.height - bird_body / 2) {
      statu = "ending";
      can_play = false;
      console.log(statu);
    }
    if ((water_pipeX + water_pipe_width) === 0) {
      water_pipeX = canvas.width;
      water_pipe_height = 100 + Math.floor((Math.random() * 300) + 100);
      score += 1;
    } else {
      water_pipeX -= 4;
    }
    if (score > 10) {
      statu = "ending";
      can_play = false;
      console.log(statu);
      // document.location.reload();
    } else {}
    if (!isJump) {
      v += 0.5;
    }
  }
}

function status() {
  if (statu === "start") {
    resetBird();
    resetWaterPipe();
    start();
    requestAnimationFrame(status);
  } else if (statu === "ongoing") {
    draw();
    requestAnimationFrame(status);
  } else if (statu === "ending") {
    end();
    requestAnimationFrame(status);
  }
}

requestAnimationFrame(status);