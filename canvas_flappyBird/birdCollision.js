function birdCollision() {
  if (birdX + bird_body > water_pipeX && birdX + bird_body < water_pipeX + water_pipe_width) {
    console.log("test");
    if (birdY + bird_body > water_pipeY + water_pipe_height + water_pipe_space || birdY - bird_body < water_pipe_height) {
      console.log("gameover");
      document.location.reload();
    }
  }
}