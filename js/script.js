document.getElementById('toggleContactForm').addEventListener('click', () => {
  const form = document.getElementById('contactForm');
  form.classList.toggle('visible');
});


  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
  }



document.addEventListener('DOMContentLoaded', function () {
  // Helper to handle form submission
  async function handleFormSubmission(form) {
    // Check honeypot
    const honeypot = form.querySelector('input[name="honeypot"]')?.value;
    if (honeypot && honeypot.trim() !== "") {
      alert("Spam erkannt! Formular wurde blockiert.");
      return;
    }

    // Validate required fields
    const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.border = '2px solid red';
      } else {
        field.style.border = '';
      }
    });

    if (!isValid) {
      alert("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    // Prepare data and send via AJAX
    const formData = new FormData(form);
    const actionUrl = form.getAttribute('action') || 'https://formspree.io/f/myzjponn';

    try {
      const response = await fetch(actionUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        window.location.href = "https://removereinigen.com/thank-you.html";
      } else {
        alert("Fehler beim Senden. Bitte versuchen Sie es später erneut.");
      }
    } catch (error) {
      console.error(error);
      alert("Ein technischer Fehler ist aufgetreten.");
    }
  }

  // Attach to both forms
  const bookingForm = document.querySelector('.booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (event) {
      event.preventDefault();
      handleFormSubmission(bookingForm);
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      handleFormSubmission(contactForm);
    });
  }
});
