window.alert("This website is only for learning purpose");

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let dateDisplay = document.getElementById("date");
let backBtn = document.getElementById("backToIST");

let currentOffset = { hour: 0, min: 0 }; // IST default

function updateClock() {
  let now = new Date();
  now.setHours(now.getHours() + currentOffset.hour);
  now.setMinutes(now.getMinutes() + currentOffset.min);

  hours.textContent = String(now.getHours()).padStart(2, "0");
  minutes.textContent = String(now.getMinutes()).padStart(2, "0");
  seconds.textContent = String(now.getSeconds()).padStart(2, "0");

  let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  dateDisplay.textContent = now.toLocaleDateString("en-US", options);
}
setInterval(updateClock, 1000);
updateClock();

// User greeting
document.getElementById("mySubmit").onclick = function () {
  let username = document.getElementById("mytext").value.trim();
  if (!username) return alert("Please enter your name!");
  document.getElementById("h12").textContent = `Hello ${username}`;
  document.getElementById("mytext").style.display = "none";
  document.getElementById("mySubmit").style.display = "none";
  document.querySelector("label").style.display = "none";
};

// Local time logic
function showLocalTime(wonder) {
  const timer = document.querySelector(".timer");
  timer.style.opacity = 0;

  setTimeout(() => {
    switch (wonder) {
      case "Chichen Itza": currentOffset = { hour: -10, min: -30 }; break;
      case "Colosseum": currentOffset = { hour: -3, min: -30 }; break;
      case "China": currentOffset = { hour: 2, min: 30 }; break;
      case "Petra": currentOffset = { hour: -2, min: -30 }; break;
      case "Machu Picchu": currentOffset = { hour: -10, min: -30 }; break;
      case "Redeemer": currentOffset = { hour: -8, min: -30 }; break;
      case "Taj Mahal": currentOffset = { hour: 0, min: 0 }; break;
    }
    backBtn.classList.remove("hidden");
    timer.style.opacity = 1;
  }, 400);
}

// Back to India Time
backBtn.onclick = () => {
  const timer = document.querySelector(".timer");
  timer.style.opacity = 0;
  setTimeout(() => {
    currentOffset = { hour: 0, min: 0 };
    backBtn.classList.add("hidden");
    timer.style.opacity = 1;
  }, 400);
};
