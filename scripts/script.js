let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  slideIndex += n;

  // Wrap around when navigating out of bounds
  if (slideIndex > document.getElementsByClassName("slide").length) {
    slideIndex = 1; // Go back to the first slide
  } else if (slideIndex < 1) {
    slideIndex = document.getElementsByClassName("slide").length; // Go to the last slide
  }

  showSlides(slideIndex);
}

// Display the current slide
function showSlides(n) {
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
  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block"; // Display the current slide
  }

  if (dots.length > 0 && dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
}

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }


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

