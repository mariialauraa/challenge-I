document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.querySelector(".btn-back")

    backBtn.addEventListener("click", () => {
        location.href = '../desktop_page/index.html'
    })
});