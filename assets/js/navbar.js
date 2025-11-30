const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-leafia-main", "shadow-md");
  } else {
    navbar.classList.remove("bg-leafia-main", "shadow-md");
  }
});

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
