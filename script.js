LottieInteractivity.create({
  player: '#bikeLottie',
  mode: 'scroll',
  container: "#bike-wrapper",
  actions: [
    {
      visibility: [0, 1],
      type: 'seek',
      frames: [0, 300]
    }
  ]
});

const bikeLottie = document.getElementById('bikeLottie');

document.querySelector('.container').addEventListener('scroll', () => {
  // Die Breite des Containers und das aktuelle horizontale Scrollen
  const scrollLeft = document.querySelector('.container').scrollTop;
  const docWidth = document.querySelector('.wrapper').scrollWidth - window.innerHeight;

  // Den Fortschritt des Scrollens als Prozentsatz
  const scrollPercent = scrollLeft / docWidth;

  // Die Gesamtzahl der Frames in der Animation
  const totalFrames = bikeLottie.getLottie().totalFrames;

  // Den aktuellen Frame basierend auf dem Scrollprozentsatz setzen
  const currentFrame = Math.round(scrollPercent * totalFrames);

  bikeLottie.getLottie().goToAndStop(currentFrame, true);
});



function toggleOverlay() {
  console.log("clicked");
  var overlay = document.getElementById("overlay-mountain");
  var bike = document.getElementById("bikeLottie");
  if (overlay.style.display === "none") {
    overlay.style.display = "block";
    bike.style.display = "none";
  } else {
    overlay.style.display = "none";
    bike.style.display = "block";
  }
}

function closeCanvas() {
  var colorBlock = document.getElementById("color-block-down");
  console.log("close canvas");
  colorBlock.classList.add("slideDownAndRedirect");

  setTimeout(() => {
    window.location.href = "index.html#city";
  }, 500);

}


function openCanvas() {
  var colorBlock = document.getElementById("color-block");
  var bike = document.getElementById("bikeLottie");

  console.log("open canvas");
  
    colorBlock.classList.add("slideUpAndRedirect");
    bike.style.display = "none";


  setTimeout(() => {
    window.location.href = "off-canvas.html";
  }, 500);

  
}

