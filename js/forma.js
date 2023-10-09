const speakerForm = document.querySelector(
  ".js-speaker-form"
);
const speakerModalForm = document.querySelector(
  ".js-speaker-modal-form"
);

if (speakerForm) {
  speakerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );
    closeModal();
  });
}

if (speakerModalForm) {
  speakerModalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );
    closeModal();
  });
}
