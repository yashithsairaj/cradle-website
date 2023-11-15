let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let slideInde = 0;
showSlide();

function showSlide() {
    let i;
    let slider = document.getElementsByClassName("Slides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }


    slideInde++;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // slides[slideInde - 1].style.display = "block";


    if (slideInde > slider.length) { slideInde = 1 }
    slider[slideInde - 1].style.display = "block";
    dots[slideInde - 1].className += " active";
    setTimeout(showSlide, 2000);

}