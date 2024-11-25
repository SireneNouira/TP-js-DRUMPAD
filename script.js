const audios = document.querySelectorAll("audio");
const key = document.querySelectorAll(".key");
const lettres = document.querySelectorAll("kbd");
  lettres.forEach((lettre) => {
    lettre.innerHTML;
    console.log(lettre);
  });
// key.forEach((key) => {
//   key.addEventListener("mousedown", playSound);
//   key.addEventListener("mouseleave", removeTransition);
// });

// function playSound(event) {
//   const keyValue = this.dataset.key;
//   const audio = [...audios].find((audio) => audio.dataset.key === keyValue);
//   if (audio) {
//     audio.currentTime = 0;
//     audio.play();
//     event.target.classList.add("playing");
//   }
// }
// function removeTransition(event) {
//   event.target.classList.remove("playing");
// }

key.forEach((key) => {
  key.addEventListener("keydown", playSound);
  key.addEventListener("keyup", removeTransition);
});

function playSound(event) {
  const keyValue = this.dataset.key;
  const audio = [...audios].find((audio) => audio.dataset.key === keyValue);
  
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    event.target.classList.add("playing");
  }
}
function removeTransition(event) {
  event.target.classList.remove("playing");
}

// let record = document.querySelector('#record');
// let play = document.querySelector('#play');
// record.addEventListener("click", handleRecord);

// function handleRecord(){
//     console.log('fff');

// }

// function beatBox() {
//   function simulateKey(e) {
//     // simule la pression d'une touche de clavier
//     // Pour simuler la pression d'une touche, je veux créer et paramétrer un nouvel event js
//     // ensuite je veux dispatch cet event dans le document
//   }
//   function playBeat() {
//     // renvoie une nouvelle promesse
//   }
// //   une chaîne de promesse pour créer un beat
// }
// faireQqc().then(successCallback, failureCallback);
