{
  const toggleTableVisibilityButtonElement = document.querySelector(
    ".js-buttonTableVisibilityToggle"
  );
  const toggleThemeButtonElement = document.querySelector(".js-darkModeButton");

  const onButtonRemoveClick = () => {
    const tableElement = document.querySelector(".js-table");

    toggleTableVisibilityButtonElement.innerText =
      tableElement.classList.toggle("table--hidden")
        ? "Pokaż tabelę"
        : "Ukryj Tabelę";
  };

  const toggleThemeNavigationLink = () => {
    const navigationLinkElement =
      document.querySelectorAll(".js-navigationLink");

    navigationLinkElement.forEach((link) => {
      link.classList.toggle("navigation__link--darkMode");
    });
  };

  const toggleThemeTableRow = () => {
    const tableRowElement = document.querySelectorAll(".js-tableRow");

    tableRowElement.forEach((row) => {
      row.classList.toggle("table__row--dark");
    });
  };

  const toogleThemeTableCell = () => {
    const tableCellHeaderElement = document.querySelectorAll(".js-tableHeader");

    tableCellHeaderElement.forEach((header) => {
      header.classList.toggle("table__cell--headerDark");
    });
  };

  const onToggleThemeButtonClick = () => {
    const mainContainerElement = document.querySelector(".js-mainContainer");
    const bodyElement = document.querySelector(".body");

    mainContainerElement.classList.toggle("mainContainer--darkMode");
    bodyElement.classList.toggle("body--darkMode");
    toggleThemeButtonElement.classList.toggle("darkModeButton");
    toggleTableVisibilityButtonElement.classList.toggle("darkModeButton");

    toggleThemeNavigationLink();
    toggleThemeTableRow();
    toogleThemeTableCell();
  };

  const init = () => {
    toggleThemeButtonElement.addEventListener(
      "click",
      onToggleThemeButtonClick
    );

    toggleTableVisibilityButtonElement.addEventListener(
      "click",
      onButtonRemoveClick
    );
  };

  init();
}
