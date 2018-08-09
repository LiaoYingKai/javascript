canvas.height = window.innerHeight;
var start_button_width = 300;
var start_button_height = 60;
var start_buttonX = (canvas.width - start_button_width) / 2;
var start_buttonY = (canvas.height - start_button_height) / 2;


function start() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#b8291a";
  ctx.fillRect(start_buttonX, start_buttonY, start_button_width, start_button_height);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.font = "36px Arial";
  ctx.fillStyle = "#43c4d7";
  ctx.fillText("S t a r t", start_buttonX + 95, start_buttonY + 40);

  canvas.addEventListener('click', (e) => {
    // if ((e.offsetX > (canvas.width - start_button_width / 2)) || (e.offsetX > (canvas.width + start_button_width / 2))) {
    // if ((e.offsetY > (canvas.height - start_button_height / 2)) || (e.offsetY > (canvas.height + start_button_height / 2))) {
    console.log(e)
    statu = "ongoing";
    can_play = false;
    // }
    // }
  });
}