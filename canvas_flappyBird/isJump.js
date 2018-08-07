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