const audios = document.querySelectorAll("audio");

const noteJouer = new Set();
const noteEnregistrer = [];
let recording = false;
let playing = false;
let timeCode = [];

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
    timeCode.push(Date.now());
    let premiereTemps = timeCode[0];
    timeCode.forEach((temps) => {
      interval = temps - premiereTemps;
    });
    noteEnregistrer.push({
      keyCode: event.keyCode,
      interval,
    });
  }
  // console.log(noteEnregistrer);
}
function removeTransition(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!key) {
    return;
  }
  noteJouer.delete(key);
  key.classList.toggle("playing");
}

// PLAY §§

let record = document.querySelector("#record");
let play = document.querySelector("#play");
record.addEventListener("click", handleRecord);
play.addEventListener("click", handlePlayAsync);

function handleRecord() {
  record.classList.toggle("playing");
  recording = !recording;
  // console.log("recording : " + recording);
}

function handlePlayAsync() {
  const promesse = new Promise((resolve, reject) => {

    let tempsTotal = 0;

    noteEnregistrer.forEach((element) => {


      tempsTotal = element.interval;

      setTimeout(() => {
        play.classList.add("playing");

        const keyboardEvent = new KeyboardEvent("keydown", {
          keyCode: element.keyCode,
        });
        const keyboardEvent2 = new KeyboardEvent("keyup", {
          keyCode: element.keyCode,
        });
        document.dispatchEvent(keyboardEvent);



        setTimeout(() => {
          document.dispatchEvent(keyboardEvent2);
        }, 300);

      }, element.interval);


    });
setTimeout(() => {
     resolve(play.classList.remove("playing"));
    }, tempsTotal + 300);
  
// promesse.then(() => {
//     play.classList.remove("playing");
//   });
    
 
// promesse.catch();
  });

}

// function handlePlay() {
//   play.classList.toggle("playing");
//   playing = !playing;

//   if (noteEnregistrer > 0) {
//     noteEnregistrer.setTimeout(timeCode);
//     noteEnregistrer.currentTime = 0;
//     noteEnregistrer.play();
//     // console.log(noteEnregistrer);
//   }
// }
