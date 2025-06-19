// Optional: Detect if form is submitted and show a message
const bookingForm = document.querySelector('.booking-form');

bookingForm?.addEventListener('submit', function () {
  alert("Information is being processed. Please wait for confirmation — this may take 15–30 seconds. Do not close or refresh the page.");
});


document.getElementById('toggleContactForm').addEventListener('click', () => {
  const form = document.getElementById('contactForm');
  form.classList.toggle('visible');
});


  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
  }

