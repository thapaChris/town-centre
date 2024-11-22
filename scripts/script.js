let slideIndex = 1;
showSlides(slideIndex);

function navigateSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show current slide and highlight the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) {
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
