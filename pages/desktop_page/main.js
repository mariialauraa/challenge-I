const modal = document.querySelector("dialog")
const openModalAdopt = document.querySelector("#adopt-modal");
const openModalAdopt2 = document.querySelector("#adopt-btn")
const openModalAdopt3 = document.querySelector("#apply-btn")
const closeModalAdopt = document.querySelector("#cancel-btn")

const openButtons = [openModalAdopt, openModalAdopt2, openModalAdopt3];

openButtons.forEach((el) => {
    if (el) {
        el.addEventListener("click", () => modal.showModal());
    }
});

closeModalAdopt.addEventListener("click", () => {
    modal.close()
})

// Redireciona para a página Success
const form = document.getElementById("form");
const btnApplyAdopt = document.getElementById("ok-btn");

btnApplyAdopt.addEventListener("click", () => {
    if (form.checkValidity()) {
        location.href = '../success_page/index.html'
    } else {
        form.reportValidity();
    }
})
