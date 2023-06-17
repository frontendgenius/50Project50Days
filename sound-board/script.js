function play_sound(clicked_id) {
  const audio = new Audio(clicked_id + ".mp3");
  audio.play();
}