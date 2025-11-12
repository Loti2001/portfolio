// Smooth scroll for internal anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form handler (only runs on contact.html)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks for reaching out, Thapelo will get back to you soon!');
    contactForm.reset();
  });
}

// Highlight active nav link based on current page
const navLinks = document.querySelectorAll('.sidebar nav a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
