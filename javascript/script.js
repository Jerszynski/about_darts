console.log("Cześć");

let header = document.querySelector(".header");
let button = document.querySelector(".js-button");

button.addEventListener("click", () => {
  header.remove();
});
