document.addEventListener('DOMContentLoaded', () => {
    const openModalAdopt = document.querySelector("#adopt-modal");
    const closeModalbtn = document.querySelector("#cancel-btn");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");

    const toggleModal = () => {
        modal.classList.toggle("hide")
        fade.classList.toggle("hide")
    }

    [openModalAdopt, closeModalbtn, fade].forEach((el) => {
        el.addEventListener("click", () => toggleModal());
    });
});
