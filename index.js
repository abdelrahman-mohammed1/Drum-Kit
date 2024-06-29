let elements = document.querySelectorAll("button.drum");
for (let i = 0; i < elements.length; i++) {
  let ele = elements[i];
  ele.addEventListener("click", function () {
    makeSound(ele.innerHTML);
    makeAnimation(ele.innerHTML);
  });
}

document.addEventListener("keydown", function (e) {
  makeSound(e.key);
  makeAnimation(e.key);
});

function makeSound(key) {
  let sound;
  switch (key) {
    case "w":
      sound = new Audio("./sounds/tom-1.mp3");
      sound.play();
      break;
    case "a":
      sound = new Audio("./sounds/tom-2.mp3");
      sound.play();
      break;
    case "s":
      sound = new Audio("./sounds/tom-3.mp3");
      sound.play();
      break;
    case "d":
      sound = new Audio("./sounds/tom-4.mp3");
      sound.play();
      break;
    case "j":
      sound = new Audio("./sounds/snare.mp3");
      sound.play();
      break;
    case "k":
      sound = new Audio("./sounds/crash.mp3");
      sound.play();
      break;
    case "l":
      sound = new Audio("./sounds/kick-bass.mp3");
      sound.play();
      break;
    default:
      break;
  }
}

function makeAnimation(current) {
  const buttonElement = document.querySelector(`.${current}`);
  buttonElement.classList.toggle("pressed");
  setTimeout(function () {
    buttonElement.classList.toggle("pressed");
  }, 300);
}
const year = new Date().getFullYear();
document.querySelector(
  "footer"
).innerHTML = `Made with ❤️ Abdulrahman Mohamed in ${year}.`;
