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
window.addEventListener("scroll", function () {
  var cafecontain = document.getElementById("cafecontain");
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 100) {
    // Adjust the value as needed
    cafecontain.classList.add("fixed");
  } else {
    cafecontain.classList.remove("fixed");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const snowContainer = document.createElement("div");
  snowContainer.classList.add("snow-container");
  document.body.appendChild(snowContainer);

  function createSnowflake() {
    const snowflake = document.createElement("img");
    snowflake.src = "snowflake.png"; // Đường dẫn đến ảnh tuyết
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * 100 + "vw"; // Vị trí ngẫu nhiên theo chiều ngang
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Thời gian rơi ngẫu nhiên
    snowflake.style.opacity = Math.random(); // Độ trong suốt ngẫu nhiên
    snowflake.style.width = Math.random() * 40 + 20 + "px"; // Kích thước ngẫu nhiên

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove(); // Xóa bông tuyết sau khi rơi xong
    }, 5000); // Sau 5 giây
  }

  setInterval(createSnowflake, 100); // Tạo bông tuyết mới mỗi 100ms
});
