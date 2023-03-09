const tableElement = document.querySelector(".js-table");
const buttonRemoveElement = document.querySelector(
  ".js-buttonTableVisibilityToggle"
);
const darkModeButtonElement = document.querySelector(".js-darkModeButton");
const mainContainerElement = document.querySelector(".js-mainContainer");
const navigationLinkElement = document.querySelectorAll(".js-navigationLink");
const bodyElement = document.querySelector(".body");
const tableRowElement = document.querySelectorAll(".js-tableRow");
const tableCellHeaderElement = document.querySelectorAll(".js-tableHeader");

buttonRemoveElement.addEventListener("click", () => {
  buttonRemoveElement.innerText = tableElement.classList.toggle("table--hidden")
    ? "Pokaż tabelę"
    : "Ukryj Tabelę";
});

darkModeButtonElement.addEventListener("click", () => {
  mainContainerElement.classList.toggle("mainContainer--darkMode");
  bodyElement.classList.toggle("body--darkMode");
  darkModeButtonElement.classList.toggle("darkModeButton");
  buttonRemoveElement.classList.toggle("darkModeButton");

  navigationLinkElement.forEach((link) => {
    link.classList.toggle("navigation__link--darkMode");
  });

  tableRowElement.forEach((row) => {
    row.classList.toggle("table__row--dark");
  });

  tableCellHeaderElement.forEach((header) => {
    header.classList.toggle("table__cell--headerDark");
  });
});
