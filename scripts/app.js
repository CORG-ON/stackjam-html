window.addEventListener('DOMContentLoaded', (event) => {


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
});