// Optional: Detect if form is submitted and show a message
const bookingForm = document.querySelector('.booking-form');

bookingForm?.addEventListener('submit', function () {
  alert("Thank you! Your booking has been sent successfully.");
});


document.getElementById('toggleContactForm').addEventListener('click', () => {
  const form = document.getElementById('contactForm');
  form.classList.toggle('visible');
});


  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
  }

