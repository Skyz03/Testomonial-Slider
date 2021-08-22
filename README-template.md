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
This was one of the unique new challenge I completed recently via using JS for the funtionality of the site.


### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot
![Screenshot 2021-08-22 at 19-41-01 Frontend Mentor Coding Bootcamp Testimonials Slider](https://user-images.githubusercontent.com/42742924/130357840-60fe9c63-c131-4f69-a243-223e89126818.png)


### Links

- Solution URL: [Ahttps://github.com/Skyz03/Testomonial-Slider](https://github.com/Skyz03/Testomonial-Slider)
- Live Site URL: [https://skyz03.github.io/Testomonial-Slider/](https://skyz03.github.io/Testomonial-Slider/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learned a lot about JS and its application for adding event listners. Mostly about that images cannot have event listners and need to be subtituted with div and img source in CSS

To see how you can add code snippets, see below:

```html
  <div class="arrows">
      <div id="arrow-left" class="arrow" alt=""></div>
      <div id="arrow-right" class="arrow" alt=""></div>
    </div>
```
```css
#arrow-left {
  content: "";
  background: url(images/icon-prev.svg) no-repeat;
  height: 100%;
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 11.3px;
}
```
```js
arrowRight.addEventListener("click", function () {
    if (current === sliderCard.length - 1) {
        current = -1;
    }
    slideRight();
});

initialSlider();
}
```



### Continued development

Can Add Keyboard listners plus many more such as imporoved CSS Layout.


### Useful resources

- [JS Simple Slider](https://codepen.io/bradtraversy/pen/boydaE) - This helped me for the slider section in JS

## Author

- Website - Skyz03

## Acknowledgments
