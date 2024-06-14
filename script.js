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
  const currentFrame = Math.round((scrollPercent * totalFrames * 4) % totalFrames);

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

function toggleOcean() {
  console.log("clicked");
  var ocean = document.getElementById("bg-waves");
  var beach = document.getElementById("bg-sand");
  var foam = document.getElementById("bg-foam");
  var duck = document.getElementById("duck-wrapper");
  var nar = document.getElementById("circle-nar");
  var san = document.getElementById("circle-san");
  var path = document.getElementById("ocean-tour");
  var bike = document.getElementById("bikeLottie");

  if (ocean.style.display === "none") {
    ocean.style.display = "block";
    beach.style.display = "block";
    foam.style.display = "block";
    duck.style.display = "block";
    nar.style.display = "none";
    san.style.display = "none";
    path.style.display = "none";
    bike.style.display = "none";
  } else {
    ocean.style.display = "none";
    beach.style.display = "none";
    foam.style.display = "none";
    duck.style.display = "none";
    nar.style.display = "block";
    san.style.display = "block";
    path.style.display = "block";
    bike.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const duckWrapper = document.getElementById('duck-wrapper');
  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;
  const lerpFactor = 0.1; // Faktor für die Verzögerung

  document.addEventListener('mousemove', (event) => {
      mouseX = event.clientX - duckWrapper.offsetWidth / 2;
      mouseY = event.clientY - duckWrapper.offsetHeight / 2;
  });

  function animate() {
      // Interpolation der aktuellen Position zur Zielposition (Mausposition)
      currentX += (mouseX - currentX) * lerpFactor;
      currentY += (mouseY - currentY) * lerpFactor;

      duckWrapper.style.transform = `translate(${currentX}px, ${currentY}px)`;

      requestAnimationFrame(animate);
  }

  // Start der Animation
  animate();
});