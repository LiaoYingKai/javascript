canvas.height = window.innerHeight;
var restart_button_width = 300;
var restart_button_height = 60;
var restart_buttonX = (canvas.width - restart_button_width) / 2;
var restart_buttonY = (canvas.height - restart_button_height) / 2;

var scoreX = restart_buttonX + 90;
var scoreY = canvas.height / 2 - 50;


function end() {

  ctx.fillStyle = "#b8291a";
  ctx.fillRect(restart_buttonX, restart_buttonY, restart_button_width, restart_button_height);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.font = "36px Arial";
  ctx.fillStyle = "#43c4d7";
  ctx.fillText("R e  S t a r t", restart_buttonX + 55, restart_buttonY + 40);

  ctx.beginPath();
  ctx.font = "36px Arial";
  ctx.fillStyle = "#43c4d7";
  ctx.fillText("Score : " + score, scoreX, scoreY);

  canvas.addEventListener('click', () => {
    // console.log(statu);
    statu = "start";
    // console.log(statu);
    // document.location.reload();

  });

}