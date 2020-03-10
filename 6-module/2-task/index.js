'use strict';
class Carousel {
 
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: '/assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: '/assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: '/assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
  this.id = 0;
  this.el = element;
  

document.addEventListener('click', this.onClick.bind(this));
// let dots = document.getElementsByClassName("carousel-indicators");

this.render();
  
}

render() {

let initialDiv = document.createElement('div');
initialDiv.className = "main-carousel carousel slide";
initialDiv.id = "mainCarousel";
initialDiv.innerHTML = `
<ol class="carousel-indicators">
<li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
<li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
<li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
</ol>
<div class="carousel-inner">
<!--Вот здесь будет активный слайд-->

</div>

<button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</button>
<button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</button>
`;




this.el.append(initialDiv);

let currSliderExist = document.querySelector('.carousel-item');
if (currSliderExist) {
  currSliderExist.remove()
};
const currentSlider = document.createElement('div');
currentSlider.setAttribute('data-id', this.id);
currentSlider.className = "carousel-item active";
currentSlider.innerHTML = `
<img width="500px" height="300px" src="${this.slides[this.id].img}" alt="${this.slides[this.id].title}">
<div class="container">
    <div class="carousel-caption">
        <h3 class="h1">${this.slides[this.id].title}</h3>
        <div>
            <a class="btn" href="#" role="button">
                View all DEALS
                <img  src="/assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                            
            </a>
        </div>
    </div>
</div>
`;
document.querySelector('.carousel-inner').append(currentSlider);

this.prevActiveIndicator;


if (this.prevActiveIndicator) {
  this.prevActiveIndicator.classList.remove('active');
}
let nextActiveIndicator = document.querySelector(`*[data-slide-to='${this.id}']`);
nextActiveIndicator.classList.add('active');
this.prevActiveIndicator = nextActiveIndicator;
}


nextSlider() {
  this.id == this.slides.length -1 ? this.id = 0 : this.id += 1;
  this.render();
  };
  
  prevSlider() {
    this.id == 0 ? this.id = this.slides.length - 1 : this.id -= 1;  
    this.render();
    };

   
    onClick(event) {
     let action = event.target.closest('button');
     let slide = event.target.closest('li');
 
      //Prev Button
      if (action && action.className == 'carousel-control-prev') {
        this.prevSlider()
      }

      //Next Button
      if (action && action.className == 'carousel-control-next') {
        this.nextSlider()
      }

     //Dots
      if (slide && slide.dataset.slideTo) {
      this.id = slide.dataset.slideTo;
      this.render();
         }
           }
      }
let mySlider = new Carousel(document.querySelector('body'));


// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
// window.Carousel = Carousel;

