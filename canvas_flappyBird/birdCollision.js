function birdCollision() {
  if (birdX + bird_body > water_pipeX && birdX + bird_body < water_pipeX + water_pipe_width) {
    // console.log("test");
    if (birdY + bird_body > water_pipeY + water_pipe_height + water_pipe_space || birdY - bird_body < water_pipe_height) {
      // console.log("gameover");
      statu = "ending";
      can_play = false;
      // console.log(statu);
      // window.cancelAnimationFrame(draw);

      // document.location.reload();
      // window.requestAnimationFrame(draw);

    }
  }
}