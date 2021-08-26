# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
This was one of the unique new challenge I completed recently via using JS for the funtionality of the site. Likely the use of JS function.


### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot
![image](https://user-images.githubusercontent.com/42742924/130981007-2955ddfa-9b31-4086-9d46-7d63eb792f1c.png)
![image](https://user-images.githubusercontent.com/42742924/130981118-cc8b518a-46ce-4d93-bf61-a17470f9063b.png)


### Links

- Solution URL: [Ahttps://github.com/Skyz03/Testomonial-Slider](https://github.com/Skyz03/Testomonial-Slider)
- Live Site URL: [https://skyz03.github.io/Testomonial-Slider/](https://skyz03.github.io/Testomonial-Slider/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first Workflow

### What I learned

I learned a lot about JS and its application for adding event listners. Mostly about that images cannot have event listners and need to be subtituted with div and img source in CSS

To see how you can add code snippets, see below:

```html
   <button id="left-btn" class="carousel-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
            <path fill="none" stroke="#8585AC" stroke-width="3" d="M11 1L3 9l8 8" />
          </svg>
   </button>
```
```css
#carousel-container {
  background-image: url("images/pattern-bg.svg"),
    url("images/pattern-curve.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: top center, bottom center;
  background-size: 80%, 100%;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  text-align: center;
  position: relative;
}

#carausel-button-wrapper {
  position: absolute;
  display: flex;
  overflow: hidden;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  top: calc((100vw - 4.4rem) * 0.75 + 2rem);
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 9;
}
```
```js
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
}
```



### Continued development

Can Add Keyboard listners


### Useful resources

- [JS Simple Slider](https://codepen.io/bradtraversy/pen/boydaE) - This helped me for the slider section in JS

## Author

- Website - Skyz03

## Acknowledgments
