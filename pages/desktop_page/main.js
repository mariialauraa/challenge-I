const modal = document.querySelector(".first-modal")
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

// Redireciona para a página Adoptables
const btnViewAdopt = document.querySelector(".btn-green")
const btnViewAdopt2 = document.querySelector(".btn-view")

const viewAdoptButtons = [btnViewAdopt, btnViewAdopt2];

viewAdoptButtons.forEach((el) => {
    if (el) {
        el.addEventListener("click", () => {
            location.href = '../adoptables_page/index.html';
        })
    }
})

// Donate Modal
const modalDonate = document.querySelector(".second-modal")
const openModalDonate = document.querySelector("#donate-modal")
const closeModalDonate = document.querySelector("#close-donate")

openModalDonate.addEventListener("click", () => {
    modalDonate.showModal()
})

closeModalDonate.addEventListener("click", () => {
    modalDonate.close()
})