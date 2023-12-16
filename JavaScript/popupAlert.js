const containerEL = document.querySelector(".modal");
const btnEl = document.querySelector(".btn-newslette");
const popupContainerEl = document.querySelector(".modal-content");
const closeIconEl = document.querySelector(".modal-close-btn");

btnEl.addEventListener("click", () => {
    containerEL.classList.add("active");
    popupContainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", () => {
    containerEL.classList.remove("active");
    popupContainerEl.classList.add("active");
})
