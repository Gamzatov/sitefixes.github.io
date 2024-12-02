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

// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//close nav after click mobile
$(document).ready(function () {
    $('.navLink').on('click', function () {
        $('.navbar').toggleClass('expand');

        return false;
    });
});

// gallery 
$(document).ready(function () {

    $("#owl-gallery").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        },
        navigation: true,
       
    });

});

// pop window for gallery
function openPopup(url) {
    const popupOverlay = document.getElementById('popup-overlay');
    const iframe = document.getElementById('popup-iframe');
    iframe.src = url;
    popupOverlay.classList.remove('hidden');
}

function closePopup() {
    const popupOverlay = document.getElementById('popup-overlay');
    const iframe = document.getElementById('popup-iframe');

    iframe.src = '';

    popupOverlay.classList.add('hidden');
}
