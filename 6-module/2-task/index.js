'use strict';

class Carousel {


  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: '../../assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: '../../assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: '../../assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
  this.el = element;
  this.id;
    // const renderHook = document.querySelector('.carousel-inner');
    
  const nextButton = document.querySelector('.carousel-control-next');
  const prevButton = document.querySelector('.carousel-control-prev');
  nextButton.addEventListener('click', this.nextSlider.bind(this));
  prevButton.addEventListener('click', this.prevSlider);
  
}

render(id) {

let currSliderExist = document.querySelector('.active');
if (currSliderExist) {currSliderExist.remove()};
const currentSlider = document.createElement('div');
currentSlider.setAttribute('data-id', id);
currentSlider.className = "carousel-item active";
currentSlider.innerHTML = `
<img src="${this.slides[id].img}" alt="${this.slides[id].title}">
<div class="container">
    <div class="carousel-caption">
        <h3 class="h1">${this.slides[id].title}</h3>
        <div>
            <a class="btn" href="#" role="button">
                View all DEALS
                <img src="../../assets/icons/icon-angle-white.svg" class="ml-3" alt="">
            </a>
        </div>
    </div>
</div>
`;
this.el.append(currentSlider);
}

nextSlider() {
let oldSliderContent = document.querySelector('.active');
let oldSliderId = document.querySelector('.active').getAttribute('data-id');
this.id = parseInt(oldSliderId++);
console.log(this.id);
// this.render(newId);
}
}

let mySlider = new Carousel(document.querySelector('.carousel-inner'));
mySlider.render(0);


// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
// window.Carousel = Carousel;
