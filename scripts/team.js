document.querySelectorAll("#team-container li").forEach(function(el) {
  el.addEventListener("click", function() {
    document.getElementById("team-popup").classList.add("active");
    document.getElementById("team-popup-name").innerText = el.querySelector(".team-name").innerText;
    document.getElementById("team-popup-description").innerText = el.querySelector(".team-description").innerText;
  });
});
document.getElementById("team-popup").addEventListener("click", e => e.target.classList.remove("active"));
document.querySelector("#team-popup > div > img").addEventListener("click", () => document.getElementById("team-popup").classList.remove("active"));