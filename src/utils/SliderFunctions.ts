export function plusSlides(n: number): void {
    showSlides(slideIndex += n);
}

export function currentSlide(n: number): void {
    showSlides(slideIndex = n);
}

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n: number): void {
    let i: number;
    const slides = document.getElementsByClassName("slide");

    if (!slides || slides.length === 0) {
        console.error("No se encontraron elementos con la clase 'slide'");
        return;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
    }

    (slides[slideIndex - 1] as HTMLElement).style.display = "block";
}

export default showSlides;