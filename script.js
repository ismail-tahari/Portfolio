document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-btn");
  const contentSections = document.querySelectorAll(".content");

  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons and content sections
      navButtons.forEach((btn) => btn.classList.remove("active"));
      contentSections.forEach((section) => section.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Show corresponding content section
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });

  // Form submission handling
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! I will get back to you soon.");
      contactForm.reset();
    });
  }
});
