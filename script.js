// AVEC LA SOURIS

const audios = document.querySelectorAll("audio");
// const key = document.querySelectorAll(".key");

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

const noteJouer = new Set();
const noteEnregistrer = [];
let recording = false;
let playing = false;
// AVEC LE KEYBOARD
document.addEventListener("keydown", playSound);
document.addEventListener("keyup", removeTransition);

function playSound(event) {
  // if(noteEnregistrer[0]) {
  //   const {keyCode, timeCode} = noteEnregistrer[0];
  //   console.log(timeCode);
    
  // }

  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!key) {
    return;
  }

  if (noteJouer.has(key)) {
    return;
  }
  noteJouer.add(key);

  const keyValue = key.dataset.key;
  const audio = [...audios].find((audio) => audio.dataset.key === keyValue);

  if (audio) {
    audio.currentTime = 0;
    audio.play();
    key.classList.toggle("playing");
  }

  if (recording === true) {
    noteEnregistrer.push({
      keyCode: event.keyCode,
      timeCode: Date.now(),
    });
  }
  // console.log(noteEnregistrer);
  
  
  // noteJouer.push(event);
}
function removeTransition(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!key) {
    return;
  }
  noteJouer.delete(key);
  key.classList.toggle("playing");
}

//RECORD ET PLAY §§

let record = document.querySelector("#record");
let play = document.querySelector("#play");
record.addEventListener("click", handleRecord);
play.addEventListener("click", handlePlay);

function handleRecord() {
  record.classList.toggle("playing");
  recording = !recording;
  console.log("recording : " + recording);
}


// function handlePlay(){
//   play.classList.toggle("playing");
//   playing = !playing;
//   // for(let i =0; i<noteEnregistrer.length; i++){
//   //   noteEnregistrer;
//   // }
//   if (noteEnregistrer>0) {
//     // audio.currentTime = 0;
//     noteEnregistrer.play();
//     key.classList.toggle("playing");
//   }
// }



