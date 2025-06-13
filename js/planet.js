// Modal functionality
const modal = document.getElementById("backModal");

function showBackModal() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function hideBackModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function goBackHome() {
  window.location.href = "../index.html";
}

// Close modal when clicking outside
document.addEventListener("click", (event) => {
  if (event.target === modal) {
    hideBackModal();
  }
});

// Dropdown functionality
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownBtn = document.querySelector(".dropdown-btn");

function toggleDropdown() {
  if (dropdown && dropdownContent) {
    dropdown.classList.toggle("active");
    if (window.innerWidth <= 768) {
      dropdownContent.style.display = dropdown.classList.contains("active")
        ? "block"
        : "none";
    }
  }
}

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (dropdown && dropdownContent && !dropdown.contains(event.target)) {
    dropdown.classList.remove("active");
    if (window.innerWidth <= 768) {
      dropdownContent.style.display = "none";
    }
  }
});

// Add click handler to dropdown button
document.addEventListener("DOMContentLoaded", () => {
  if (dropdownBtn) {
    dropdownBtn.addEventListener("click", toggleDropdown);
  }
});
