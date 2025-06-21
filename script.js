function toggleMusica() {
  const audio = document.getElementById("musicaFondo");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

console.log("🎶 Música activada para la fiesta animada de Juan Felipe 🎂");
