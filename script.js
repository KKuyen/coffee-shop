// Slideshow Functionality
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Sidebar Active Link
const links = document.querySelectorAll(".sidebar a");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default navigation

    links.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar a");
  const pages = document.querySelectorAll(".page");

  function showPage(pageId) {
    pages.forEach((page) => {
      if (page.id === pageId) {
        page.style.display = "block";
      } else {
        page.style.display = "none";
      }
    });
    document.getElementById("menu-grid").style.display = "block";
    document.getElementById("here-it-is").style.display = "none";
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
      links.forEach((l) => l.classList.remove("active")); // Xóa lớp active khỏi tất cả liên kết
      link.classList.add("active"); // Thêm lớp active cho liên kết được nhấp

      const pageId = link.getAttribute("data-page"); // Lấy id của trang cần hiển thị
      showPage(pageId);
    });
  });

  // Hiển thị trang mặc định (home)
  showPage("home");
});
// Menu Item Click Event
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    document.getElementById("menu-grid").style.display = "none";
    document.getElementById("here-it-is").style.display = "block";
  });
});
function updateMainImage(imageSrc) {
  document.getElementById("mainImage").src = imageSrc;
  const thumbnails = document.querySelectorAll(".image-gallery img");
  thumbnails.forEach((img) => img.classList.remove("active"));
  event.target.classList.add("active");
}
