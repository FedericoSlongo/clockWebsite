/* Variable were the date gets saved */
var dateVar;

/* Function that updates time */
function updateTime() {
  /* Waits for a second before updating the time */
  setTimeout(function() {
    /* Gets the current date from the system */
    dateVar = new Date();
    /* dd - mm - yyyy */
    document.getElementById('date').innerText = (dateVar.getDate() < 10 ? "0" +  dateVar.getDate() : dateVar.getDate()) + " - " + ((dateVar.getMonth() + 1) < 10 ? "0" +  (dateVar.getMonth() + 1) : (dateVar.getMonth() + 1) + " - " + dateVar.getFullYear());
    /* h - m - s */
    document.getElementById('fineDate').innerText = ((dateVar.getHours() + 1) < 10 ? "0" +  (dateVar.getHours() + 1) : (dateVar.getHours() + 1)) + " - " + (dateVar.getMinutes() < 10 ? "0" +  dateVar.getMinutes() : dateVar.getMinutes()) + " - " + (dateVar.getSeconds() < 10 ? "0" +  dateVar.getSeconds() : dateVar.getSeconds());
    updateTime();
  }, 100);
}


/* Function to Hide and UnHide the fullscreen button */
function unHideButton(){
  document.getElementById("fullscreenButton").style.background = "rgba(0, 0, 0, 0.3)";
  document.getElementById("fullscreenButton").style.color = "#f1f1f1";
}
function hideButton(){
  document.getElementById("fullscreenButton").style.background = "rgba(0, 0, 0, 0)";
  document.getElementById("fullscreenButton").style.color = "rgba(0, 0, 0, 0)";
}

/* Function to change the background (Not Working) */
function changeToImage(){
  document.getElementById("videoBackground").style.display = "none";
  document.getElementById("videoBackground").src = "./";
  return document.getElementById("videoBackground").src;
}


/* Saves the state of the page in a rudimental way to decide what the button does */
var elem = document.documentElement;
var clicked = false;

function changeState(){
  if(clicked)
      closeFullscreen();
  else
      openFullscreen();

  clicked = !clicked;
}

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

  hideButton();
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}