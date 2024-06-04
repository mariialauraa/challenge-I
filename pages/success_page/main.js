const btnBack = document.querySelector(".button-success")

btnBack.addEventListener("click", () => {
    location.href = '../desktop_page/index.html'
})

const modalDonate = document.querySelector(".second-modal")
const openNavBar = document.querySelector(".button-donate")
const closeModalDonate = document.querySelector("#close-donate")
const helpModalButton = document.querySelector("#help-btn")
const donateForm = document.getElementById("donate-form")

openNavBar.addEventListener("click", () => {
    modalDonate.showModal()
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