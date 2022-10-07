const navButton = document.querySelector(".nav-toggler");

navButton.addEventListener("click", () => {
  const toggler = document.querySelector("body");

  toggler.classList.toggle("active");
});
