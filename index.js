(function () {
  "use strict";

  // YOUR CODE HERE
})();
let goBtn = document.getElementById("goButton");
let slowBtn = document.getElementById("slowButton");
let stopBtn = document.getElementById("stopButton");

let goLight = document.getElementById("goLight");
let slowLight = document.getElementById("slowLight");
let stopLight = document.getElementById("stopLight");

// PART 1 -----------------
goBtn.addEventListener("click", function (event) {
  goLight.classList.toggle("go");
  if (goLight.classList.contains("go")) {
    // if its on
    console.log(`${event.target.innerText} Bulb on`);
  } else {
    // if its off
    console.log(`${event.target.innerText} Bulb off`);
  }
});

stopBtn.addEventListener("click", function (event) {
  stopLight.classList.toggle("stop");
  if (stopLight.classList.contains("stop")) {
    // if its on
    console.log(`${event.target.innerText} Bulb on`);
  } else {
    // if its off
    console.log(`${event.target.innerText} Bulb off`);
  }
});

slowBtn.addEventListener("click", function (event) {
  slowLight.classList.toggle("slow");
  if (slowLight.classList.contains("slow")) {
    // if its on
    console.log(`${event.target.innerText} Bulb on`);
  } else {
    // if its off
    console.log(`${event.target.innerText} Bulb off`);
  }
});

// PART 2 --------------------

let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
  console.log(i);
  buttons[i].addEventListener("mouseenter", function (event) {
    console.log(`Entered ${event.target.innerText} button`);
  });
  buttons[i].addEventListener("mouseleave", function (event) {
    console.log(`Left ${event.target.innerText} button`);
  });
}

// this doesnt work because the event listener is asking the document
// when the mouse enters to create an object. the object doesnt exist
// until that happens. event here is that object
// let controls = document.getElementById("controls");
// controls.addEventListener("mouseenter", function (event) {
//   console.log(event.target);
//   if (event.target.className == "button") {
//     console.log("in button");
//   }
// });
