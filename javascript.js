var dateVar;

// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

function updateTime() {
    setTimeout(function() {
        dateVar = new Date();
        var time = dateVar.getTime();
        document.getElementById('date').innerText = (dateVar.getDate() < 10 ? "0" +  dateVar.getDate() : dateVar.getDate()) + " - " + ((dateVar.getMonth() + 1) < 10 ? "0" +  (dateVar.getMonth() + 1) : (dateVar.getMonth() + 1) + " - " + (dateVar.getFullYear() + 1));
        document.getElementById('fineDate').innerText = (dateVar.getHours() < 10 ? "0" +  dateVar.getHours() : dateVar.getHours()) + " - " + (dateVar.getMinutes() < 10 ? "0" +  dateVar.getMinutes() : dateVar.getMinutes()) + " - " + (dateVar.getSeconds() < 10 ? "0" +  dateVar.getSeconds() : dateVar.getSeconds());
        updateTime();
    }, 100);
}



function unHideButton(){
    document.getElementById("fullscreenButton").style.background = "rgba(0, 0, 0, 0.3)";
    document.getElementById("fullscreenButton").style.color = "#f1f1f1";
}
function hideButton(){
    document.getElementById("fullscreenButton").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("fullscreenButton").style.color = "rgba(0, 0, 0, 0)";
}


/* Get the documentElement (<html>) to display the page in fullscreen */
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