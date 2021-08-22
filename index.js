let sliderCard = document.querySelectorAll("#card");
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
current = 0;

function reset() {
    for (let i = 0; i < sliderCard.length; i++) {
        sliderCard[i].style.display = "none";
    }
}

function initialSlider() {
    reset();
    sliderCard[0].style.display = "flex";
}

function slideLeft() {
    reset();
    sliderCard[current - 1].style.display = "flex";
    current--;
}

function slideRight() {
    reset();
    sliderCard[current + 1].style.display = "flex";
    current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = sliderCard.length;
    }
    slideLeft();
});

arrowRight.addEventListener("click", function () {
    if (current === sliderCard.length - 1) {
        current = -1;
    }
    slideRight();
});

initialSlider();
