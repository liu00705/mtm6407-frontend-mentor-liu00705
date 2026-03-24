const menuToggle = document.getElementById("menuToggle");
const closeMenu = document.getElementById("closeMenu");
const mobileOverlay = document.getElementById("mobileOverlay");

menuToggle.addEventListener("click", () => {
  mobileOverlay.classList.add("show");
  document.body.classList.add("menu-open");
});

closeMenu.addEventListener("click", () => {
  mobileOverlay.classList.remove("show");
  document.body.classList.remove("menu-open");
});

const mobileFeaturesBtn = document.getElementById("mobileFeaturesBtn");
const mobileCompanyBtn = document.getElementById("mobileCompanyBtn");

const mobileFeaturesMenu = document.getElementById("mobileFeaturesMenu");
const mobileCompanyMenu = document.getElementById("mobileCompanyMenu");

const mobileFeaturesArrow = document.getElementById("mobileFeaturesArrow");
const mobileCompanyArrow = document.getElementById("mobileCompanyArrow");

mobileFeaturesBtn.addEventListener("click", () => {
  mobileFeaturesMenu.classList.toggle("show");
  mobileFeaturesArrow.classList.toggle("rotate");
});

mobileCompanyBtn.addEventListener("click", () => {
  mobileCompanyMenu.classList.toggle("show");
  mobileCompanyArrow.classList.toggle("rotate");
});

mobileOverlay.addEventListener("click", (event) => {
  if (event.target === mobileOverlay) {
    mobileOverlay.classList.remove("show");
    document.body.classList.remove("menu-open");
  }
});