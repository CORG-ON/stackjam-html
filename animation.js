document.addEventListener("scroll", () => {
  for (let el of document.querySelectorAll(".fade-in-3-pre")) {
    if (el.getBoundingClientRect().top - window.innerHeight < -200) {
      el.classList.remove("fade-in-3-pre");
      el.classList.add("fade-in-3");
    }
  }
});