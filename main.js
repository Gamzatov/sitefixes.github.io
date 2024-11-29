$(document).ready(function () {
    $('#menu-icon').on('click', function () {
        $('.navbar').toggleClass('expand');
        return false;
    });
});


// arrow parallax animation
window.addEventListener('scroll', () => {
    const image = document.querySelector('.image-container img');
    const container = document.querySelector('.scroll-container');

    const containerRect = container.getBoundingClientRect();

    if (containerRect.top < window.innerHeight && containerRect.bottom > 0) {
        const scrollFraction = 1 - containerRect.top / window.innerHeight;
        const translateY = Math.min(scrollFraction * 100, 100);
        image.style.transform = `translateY(-${translateY}px)`;
    }
});

// burger button
class NavigationController {
    constructor() {
        this.burgerToggle();
    }

    burgerToggle = () => {
        let burger = document.querySelector('.menu-toggle')
        burger.addEventListener('click', () => {
            // IE supported method: using multiple classList.toggle
            burger.classList.toggle('burger')
            burger.classList.toggle('times')
        })
    }
}

new NavigationController();