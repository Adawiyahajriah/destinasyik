const menuBar = document.querySelector('.menu-bar');
const menuNav = document.querySelector('.menu');
const detailButtons = document.querySelectorAll('.detail-button');
const searchCategory = document.getElementById("searchCategory");

menuBar.addEventListener('click', () => {
  menuNav.classList.toggle('menu-active');
});

const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle('scrolling-active', windowPosition);
  menuNav.classList.remove('menu-active');
});

document.getElementById("searchButton").addEventListener("click", function () {
  const searchQuery = document.getElementById("searchInput").value.toLowerCase();
  const searchCategory = document.getElementById("searchCategory").value;
  const pantaiBoxes = document.querySelectorAll(".pantai .box");

  pantaiBoxes.forEach((box) => {
    const title = box.querySelector("h3").textContent.toLowerCase();
    const description = box.querySelector("p").textContent.toLowerCase();

    // Filter berdasarkan kategori
    if (
      (searchCategory === "all" && (title.includes(searchQuery) || description.includes(searchQuery))) ||
      (searchCategory === "title" && title.includes(searchQuery)) ||
      (searchCategory === "description" && description.includes(searchQuery))
    ) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
});

document.getElementById("searchButton").addEventListener("click", () => {
  const selectedCategory = searchCategory.value; // Ambil nilai kategori
  const searchQuery = document.getElementById("searchInput").value.toLowerCase();
  const pantaiBoxes = document.querySelectorAll(".pantai .box");

  pantaiBoxes.forEach((box) => {
    const title = box.querySelector("h3").textContent.toLowerCase();
    const description = box.querySelector("p").textContent.toLowerCase();

    if (
      (selectedCategory === "all" && (title.includes(searchQuery) || description.includes(searchQuery))) ||
      (selectedCategory === "title" && title.includes(searchQuery)) ||
      (selectedCategory === "description" && description.includes(searchQuery))
    ) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
});




