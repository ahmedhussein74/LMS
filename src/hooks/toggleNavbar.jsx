const toggleNavbar = (n) => {
  const nav = document.querySelector("nav");
  if (window.screen.width <= 768 && nav) {
    if (nav.style.height == "56px") {
      nav.style.height = `${56 * n + 112}px`;
    } else {
      nav.style.height = "56px";
    }
  }
};

export default toggleNavbar;
