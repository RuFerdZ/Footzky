function myFunction() {
  document.getElementById("dropdownList").classList.toggle("show");
}

function colorRed() {
  document.body.style.color= "#cc0000";
}

function colorGreen() {
  document.body.style.color= "#00802b";
}

function colorYellow() {
  document.body.style.color= "#e6e600";
}

function colorBlue() {
  document.body.style.color= "#0000cc";
}

function colorBlack() {
  document.body.style.color= "#000000";
}

function colorWhite() {
  document.body.style.color= "#ffffff";
}



window.onclick = function(event) {
  if (!event.target.matches('.fontcolor')) {
    var dropdowns = document.getElementsByClassName("down-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}