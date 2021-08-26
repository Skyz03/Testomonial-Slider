// let sliderCard = document.querySelectorAll("#card");
// let arrowLeft = document.querySelector('#arrow-left');
// let arrowRight = document.querySelector('#arrow-right');
// current = 0;

// function reset() {
//     for (let i = 0; i < sliderCard.length; i++) {
//         sliderCard[i].style.display = "none";
//     }
// }

// function initialSlider() {
//     reset();
//     sliderCard[0].style.display = "flex";
// }

// function slideLeft() {
//     reset();
//     sliderCard[current - 1].style.display = "flex";
//     current--;
// }

// function slideRight() {
//     reset();
//     sliderCard[current + 1].style.display = "flex";
//     current++;
// }

// // Left arrow click
// arrowLeft.addEventListener('click', function () {
//     if (current === 0) {
//         current = sliderCard.length;
//     }
//     slideLeft();
// });

// arrowRight.addEventListener("click", function () {
//     if (current === sliderCard.length - 1) {
//         current = -1;
//     }
//     slideRight();
// });

// initialSlider();
var carouselState = 0;

function init() {
    console.log("document had loaded")
    prepareButtons()

}

function prepareButtons() {
    document.getElementById("left-btn").addEventListener('click', () => {
        validate(0);
    })

    document.getElementById("right-btn").addEventListener('click', () => {
        validate(1);
    })

}

function validate(side) {
    if (side == 0 && carouselState == 1) {
        console.log("beep")
        switchCarousel()
    }

    if (side == 1 && carouselState == 0) {
        console.log("boop")
        switchCarousel()
    }

}

function switchCarousel() {
    const card = document.getElementsByClassName('testimonials-card')
    console.log(card)

    if (carouselState == 0) {
        card[0].style.left = "100vw";
        card[1].style.left = "0";
        carouselState = 1;
        return
    }

    if (carouselState == 1) {
        card[0].style.left = "0"
        card[1].style.left = "-100vw"
        carouselState = 0;
    }
}

document.addEventListener("DOMContentLoaded", init)