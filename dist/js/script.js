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

$(document).ready(function () {
  $('.review-cards').slick({
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in ms
    dots: true, // Enable navigation dots
    arrows: true, // Enable next/prev arrows
    responsive: [
      {
        breakpoint: 1024, // Adjust for medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Adjust for small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Data detail pantai (simulasi database)
const pantaiDetails = {
  pantai1: {
    title: "Pantai Indah Ancol",
    img: "assets/img/pantai1.jpg",
    description: "Pantai Indah Ancol menawarkan suasana yang sangat santai dengan pemandangan matahari terbenam yang spektakuler. Tempat ini sangat populer di kalangan wisatawan lokal dan mancanegara. Selain itu, pantai ini juga memiliki berbagai fasilitas yang sangat lengkap untuk kegiatan liburan keluarga.",
    location: "Jakarta, Indonesia",
  },
  pantai2: {
    title: "Pantai Tanjung Lesung",
    img: "assets/img/pantai2.jpg",
    description: "Pantai Tanjung Lesung terletak di Banten, Indonesia. Dikenal dengan pasir putih yang luas dan air laut yang jernih, pantai ini sangat ideal untuk aktivitas air seperti snorkeling dan menyelam. Pemandangan alam yang memukau membuatnya menjadi tujuan favorit bagi wisatawan yang mencari ketenangan.",
    location: "Banten, Indonesia",
  },
  pantai3: {
    title: "Pantai Kuta",
    img: "assets/img/pantai3.jpg",
    description: "Pantai Kuta adalah salah satu pantai terkenal di Bali yang terkenal dengan ombak besar yang sangat ideal untuk berselancar. Selain itu, Kuta juga menawarkan suasana yang hidup dengan berbagai restoran, kafe, dan toko-toko di sekitar pantai.",
    location: "Bali, Indonesia",
  },
  pantai4: {
    title: "Pantai Parangtritis",
    img: "assets/img/pantai4.jpg",
    description: "Pantai Parangtritis terkenal dengan pasir hitamnya yang unik. Pantai ini juga memiliki pemandangan alam yang menakjubkan dan sering kali menjadi tempat wisata favorit bagi mereka yang ingin menikmati suasana pantai yang tenang dan berbeda.",
    location: "Yogyakarta, Indonesia",
  },
  pantai5: {
    title: "Pantai Derawan",
    img: "assets/img/pantai5.jpg",
    description: "Pantai Derawan adalah destinasi tropis yang terkenal dengan keindahan alam bawah laut yang luar biasa. Tempat ini sangat cocok untuk penyelaman dan snorkeling, dengan beragam terumbu karang dan kehidupan laut yang memukau.",
    location: "Kalimantan Timur, Indonesia",
  },
  pantai6: {
    title: "Pantai Labuan Bajo",
    img: "assets/img/pantai6.jpg",
    description: "Pantai Labuan Bajo di Nusa Tenggara Timur adalah pantai eksotis yang terkenal dengan pemandangan bawah laut yang memukau. Selain itu, pantai ini menawarkan suasana yang tenang, sangat cocok untuk relaksasi dan menikmati keindahan alam sekitar.",
    location: "Labuan Bajo, Nusa Tenggara Timur, Indonesia",
  },
  pantai7: {
    title: "Pantai Belitung",
    img: "assets/img/pantai5.jpg",
    description: "Pantai Belitung menawarkan keindahan alam yang luar biasa dengan pasir putih yang lembut dan batu granit besar yang tersebar di sepanjang pantai. Pantai ini adalah tempat yang sempurna untuk menikmati ketenangan dan keindahan alam yang masih alami.",
    location: "Belitung, Sumatra, Indonesia",
  },
  pantai8: {
    title: "Pantai Karimunjawa",
    img: "assets/img/pantai5.jpg",
    description: "Pantai Karimunjawa di Jawa Tengah menawarkan pemandangan laut biru yang jernih dan suasana yang tenang. Ini adalah tempat yang ideal untuk berlibur sambil menikmati kegiatan seperti snorkeling dan menyelam di perairan yang masih alami.",
    location: "Karimunjawa, Jawa Tengah, Indonesia",
  },
};

// Ambil elemen modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

// Fungsi untuk membuka modal
document.querySelectorAll(".btn-detail").forEach((button) => {
  button.addEventListener("click", () => {
    const pantaiId = button.getAttribute("data-id");
    const detail = pantaiDetails[pantaiId];
    if (detail) {
      modalTitle.innerText = detail.title;
      modalImage.src = detail.img;
      modalDescription.innerText = `${detail.description}\n\nLocation: ${detail.location}`;
      modal.style.display = "block";
      document.body.classList.add("modal-open");

      // Initialize the Slick slider when the modal is displayed
      $('.modal-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
  });
});

// Fungsi untuk menutup modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});

// Menutup modal jika pengguna klik di luar modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});




