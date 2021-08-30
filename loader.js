// load in nav and footer
fetch("/nav.html").then(b => b.text())
    .then(b => document.getElementById("nav").innerHTML = b);

// fetch("/footer.html").then(b => b.text())
//     .then(b => document.getElementById("footer").innerHTML = b);