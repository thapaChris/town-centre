let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and set the corresponding dot as active
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Change slide every 5 seconds
  setTimeout(showSlides, 5000);
}

// Show a specific slide when a dot is clicked
function currentSlide(n) {
  slideIndex = n - 1; // Adjust index for zero-based array
  showSlides();
}

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
