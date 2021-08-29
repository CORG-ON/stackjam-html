// NAVBAR
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
})

// SLIDESHOW
var slides = document.getElementsByClassName("mySlides");
var slideIndex = 0;
function showSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlide, 4000);
}
showSlide();