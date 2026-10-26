const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-img");

// Открываем по клику на ссылку-картинку
document.querySelectorAll("a[data-lightbox]").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    lightboxImg.src = this.dataset.lightbox;
    lightboxImg.alt = this.querySelector("img").alt;
    lightbox.classList.add("active");
  });
});

// Закрываем по клику на затемнённую область или на саму картинку
lightbox.addEventListener("click", function () {
  lightbox.classList.remove("active");
  lightboxImg.src = "";
});

// Закрываем по Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && lightbox.classList.contains("active")) {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  }
});
