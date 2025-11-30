// --- MOBILE MENU LOGIC START ---
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("hamburger-icon");

  if (menu.classList.contains("hidden")) {
    // Show menu
    menu.classList.remove("hidden");
    // Change icon to close (X)
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    // Hide menu
    menu.classList.add("hidden");
    // Change icon back to bars
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}
// --- MOBILE MENU LOGIC END ---

// Profile Menu Logic
function toggleProfileMenu() {
  const dropdown = document.getElementById("profile-dropdown");
  const chevron = document.getElementById("profile-chevron");

  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
    setTimeout(() => {
      dropdown.classList.remove("opacity-0", "scale-95");
      dropdown.classList.add("opacity-100", "scale-100");
    }, 10);
    chevron.classList.add("rotate-180");
  } else {
    dropdown.classList.remove("opacity-100", "scale-100");
    dropdown.classList.add("opacity-0", "scale-95");
    chevron.classList.remove("rotate-180");
    setTimeout(() => {
      dropdown.classList.add("hidden");
    }, 200);
  }
}

// Close profile menu if clicking outside
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("profile-dropdown");
  const button = document.getElementById("profile-btn");

  if (
    !dropdown.classList.contains("hidden") &&
    !dropdown.contains(event.target) &&
    !button.contains(event.target)
  ) {
    dropdown.classList.remove("opacity-100", "scale-100");
    dropdown.classList.add("opacity-0", "scale-95");
    document.getElementById("profile-chevron").classList.remove("rotate-180");
    setTimeout(() => {
      dropdown.classList.add("hidden");
    }, 200);
  }
});
