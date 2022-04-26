const planButton = document.querySelectorAll(".plan_item button");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__action--negative");
const hamNavBtn = document.querySelector(".toggle-button");
const mobileNavList = document.querySelector(".mobile-nav");
const planBtnClickHandler = () => {
  modal.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 100);
};
const closeModalHandler = () => {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.style.display = "none";
  setTimeout(() => {
    backdrop.classList.remove("open");
  }, 100);
  mobileNavList.classList.remove("open");
};

const hamNavBtnHandler = () => {
  mobileNavList.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 100);
};
for (let i = 0; i < planButton.length; i++) {
  planButton[i].addEventListener("click", planBtnClickHandler);
}
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeModalHandler);
}
backdrop.addEventListener("click", closeModalHandler);
hamNavBtn.addEventListener("click", hamNavBtnHandler);
