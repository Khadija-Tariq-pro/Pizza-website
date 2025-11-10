// Toggle Dark/Light Theme
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
  } else {
    body.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
  }
});

// Toggle Mobile Navigation
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
// OPTIONAL: Smooth scroll to "Order" section when "Order Now" is clicked
document.addEventListener("DOMContentLoaded", () => {
  const orderBtn = document.querySelector(".btn");

  orderBtn?.addEventListener("click", (e) => {
    e.preventDefault(); // prevent default anchor jump
    const target = document.querySelector("#order");

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const guests = document.getElementById("guests").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const type = document.getElementById("type").value;

  // Simple feedback
  alert(`Thank you, ${name}! Your ${type} for ${guests} guests on ${date} at ${time} has been received.`);

  this.reset();
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".fade-up").forEach(section => {
  observer.observe(section);
});
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optional: Save preference to localStorage
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// On load, apply saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});




