let toggle = document.getElementById("toggle");
let status = document.getElementById("status");

toggle.addEventListener("click", function() {

  toggle.classList.toggle("active");

  if(toggle.classList.contains("active")) {
    status.innerText = "ON";
  } else {
    status.innerText = "OFF";
  }

});