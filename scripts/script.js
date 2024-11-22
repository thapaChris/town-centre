let slideIndex = 0;
let autoSlide;

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  clearInterval(autoSlide); // Clear interval to prevent overlap
  autoSlide = setInterval(showSlides, 4000); // Restart interval
}

// Initialize the slideshow
showSlides();
autoSlide = setInterval(showSlides, 4000);


// rooms section
function showModal(imageSrc, caption) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  modalCaption.textContent = caption;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
