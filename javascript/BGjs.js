function Function() {
  document.getElementById("bgDropdown").classList.toggle("show");
}

function changeRed() {
  document.body.style.backgroundColor= "#ff3333";
}

function changePink() {
  document.body.style.backgroundColor= "#ff4da6";
}

function changeYellow() {
  document.body.style.backgroundColor= "#ffff33";
}

function changeBlue() {
  document.body.style.backgroundColor= "#80ffff";
}

function changePurple() {
  document.body.style.backgroundColor= "#9900cc";
}

function changeWhite() {
  document.body.style.backgroundColor= "#ffffff";
}

function changeBlack() {
  document.body.style.backgroundColor= "#000000";
}

window.onclick = function(event) {
  if (!event.target.matches('.bgcolor')) {
    var dropdowns = document.getElementsByClassName("drop-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}