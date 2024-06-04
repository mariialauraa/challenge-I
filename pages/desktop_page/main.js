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

const form = document.getElementById("form");
const btnApplyAdopt = document.getElementById("ok-btn");

btnApplyAdopt.addEventListener("click", () => {
    if (form.checkValidity()) {
        location.href = '../success_page/index.html'
    } else {
        form.reportValidity();
    }
})

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

const modalDonate = document.querySelector(".second-modal")
const openModalDonate = document.querySelector("#donate-modal")
const openDonateNavBar = document.querySelector("#btn-navbar")
const closeModalDonate = document.querySelector("#close-donate")
const helpModalButton = document.querySelector("#help-btn")
const donateForm = document.getElementById("donate-form")

openDonateButtons = [openModalDonate, openDonateNavBar]

openDonateButtons.forEach((el) => {
    if (el) {
        el.addEventListener("click", () => modalDonate.showModal());
    }
})

closeModalDonate.addEventListener("click", () => {
    modalDonate.close()
})

helpModalButton.addEventListener("click", () => {
    if (donateForm.checkValidity()) {
        location.href = '../success_page/index.html'
    } else {
        donateForm.reportValidity();
    }
})