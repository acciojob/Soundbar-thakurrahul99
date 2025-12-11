//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsSection = document.getElementById("buttons");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  buttonsSection.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.classList.add("btn", "stop");
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", stopSongs);

buttonsSection.appendChild(stopBtn);

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
