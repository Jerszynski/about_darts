{
  const buttonRemoveElement = document.querySelector(
    ".js-buttonTableVisibilityToggle"
  );

  const onButtonRemoveClick = () => {
    const tableElement = document.querySelector(".js-table");

    buttonRemoveElement.innerText = tableElement.classList.toggle(
      "table--hidden"
    )
      ? "Pokaż tabelę"
      : "Ukryj Tabelę";
  };

  const navigationLinkDarkMode = () => {
    const navigationLinkElement =
      document.querySelectorAll(".js-navigationLink");

    navigationLinkElement.forEach((link) => {
      link.classList.toggle("navigation__link--darkMode");
    });
  };

  const tableRowDarkMode = () => {
    const tableRowElement = document.querySelectorAll(".js-tableRow");

    tableRowElement.forEach((row) => {
      row.classList.toggle("table__row--dark");
    });
  };

  const tableCellDarkMode = () => {
    const tableCellHeaderElement = document.querySelectorAll(".js-tableHeader");

    tableCellHeaderElement.forEach((header) => {
      header.classList.toggle("table__cell--headerDark");
    });
  };

  const darkModeButtonElement = document.querySelector(".js-darkModeButton");
  const onDarkModeButtonClick = () => {
    const mainContainerElement = document.querySelector(".js-mainContainer");
    const bodyElement = document.querySelector(".body");

    mainContainerElement.classList.toggle("mainContainer--darkMode");
    bodyElement.classList.toggle("body--darkMode");
    darkModeButtonElement.classList.toggle("darkModeButton");
    buttonRemoveElement.classList.toggle("darkModeButton");

    navigationLinkDarkMode();
    tableRowDarkMode();
    tableCellDarkMode();
  };

  const init = () => {
    darkModeButtonElement.addEventListener("click", onDarkModeButtonClick);

    buttonRemoveElement.addEventListener("click", onButtonRemoveClick);
  };

  init();
}
