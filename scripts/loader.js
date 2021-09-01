// load in nav and footer
fetch("/nav.html").then(b => b.text())
  .then(b => {
    document.getElementById("nav").innerHTML = b;
    const navToggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.links');
    navToggle.addEventListener('click', function () {
      // console.log(links.classList);
      // if (links.classList.contains('show-links')) {
      //     links.classList.remove('show-links');
      // }
      // else {
      //     links.classList.add('show-links');
      // }
      links.classList.toggle('show-links'); // same thing as above
    });
    if (window.scrollY < 105) window.scroll(window.scrollX, 0);
  });

fetch("/footer.html").then(b => b.text())
  .then(b => {
    document.getElementById("footer").innerHTML = b;
    // ********** set date ************
    const date = document.getElementById("date");
    date.innerHTML = new Date().getFullYear();
  });