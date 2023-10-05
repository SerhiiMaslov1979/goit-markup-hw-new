(() => {
  document
    .querySelector(".js-speaker-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      new FormData(e.currentTarget).forEach((value, name) =>
        console.log(`${name}: ${value}`)
      );
    });
})();

(() => {
  document
    .querySelector(".js-speaker-modal-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      new FormData(e.currentTarget).forEach((value, name) =>
        console.log(`${name}: ${value}`)
      );
    });
})();
