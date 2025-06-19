document.getElementById('toggleContactForm').addEventListener('click', () => {
  const form = document.getElementById('contactForm');
  form.classList.toggle('visible');
});


  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
  }

// anti bot

   document.getElementById('contactForm').onsubmit = function(event) {
    var honeypot = document.querySelector('input[name="honeypot"]').value;
    if (honeypot) {
      event.preventDefault();  // Stop form submission if honeypot is filled
      alert("Spam detected!");
    } else {
      // Proceed with form submission
      // Let FormSubmit handle it
    }
  };





// Get the form element
const bookingForm = document.querySelector('.booking-form');

// Add event listener for form submission
bookingForm?.addEventListener('submit', function(event) {
  // First, check if the honeypot field is filled
  const honeypot = document.querySelector('input[name="honeypot"]').value;
  if (honeypot) {
    // If the honeypot is filled, it's a bot
    event.preventDefault(); // Prevent form submission
    alert("Spam erkannt! Das Formular wurde blockiert.");
    return;
  }

  // Validate required fields
  const requiredFields = bookingForm.querySelectorAll('input[required], select[required], textarea[required]');
  let isValid = true;

  requiredFields.forEach(function(field) {
    if (!field.value.trim()) {
      isValid = false;
      field.style.border = '2px solid red'; // Highlight the missing field
    } else {
      field.style.border = ''; // Remove highlight if filled
    }
  });

  if (!isValid) {
    event.preventDefault(); // Prevent form submission if fields are missing
    alert("Bitte füllen Sie alle Pflichtfelder aus.");
    return; // Stop the submission here if there are missing fields
  }

  // Show confirmation message if everything is valid and honeypot is empty
  alert("Ihre Angaben werden verarbeitet. Bitte warten Sie auf die Bestätigung — dies kann 15–30 Sekunden dauern. Bitte schliessen oder aktualisieren Sie die Seite nicht.");
});
