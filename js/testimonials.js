document.addEventListener('DOMContentLoaded',()=>{

    
const testimonials = [

     {
        image :'images/testimonials/testitmonalians.svg',
        quote : "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        rating : 5,
        name:'James K.',
        role :'Traveler',
     },
]

let currentİndex = 0;

const cardContainer = document.querySelector(".testimonials__card");
const testimonialsPrev = document.querySelector(".testimonials__nav prev");
const testimonialsNext = document.querySelector(".testimonials__nav next")

const Rendertestimonials= (index)=>{
    const testimonial = testimonials[index]
    const newContent =
    `
    <div class="testimonials__contentt">
          <div class="testimonials__image">
            <img src="${testimonial.image}" alt="">
          </div>
          <div class="testimonial__info">
            <p class="testimonial__quote">${testimonial.quote}</p>
            <div class="testimonial__rating">
              <span class="star">${testimonial.rating}</span>
              <span class="star">${testimonial.rating}</span>
              <span class="star">${testimonial.rating}</span>
              <span class="star">${testimonial.rating}</span>
              <span class="star">${testimonial.rating}</span>
            </div>
            <hr class="testimonial__seperator">
            <h4 class="testimonial__name">${testimonial.name}</h4>
            <p class="testimonial__role">${testimonial.role}</p>
         </div>
        </div>
    `;

    cardContainer.classList.add(".fade-out");

    setTimeout(() => {
        cardContainer.innerHTML = newContent;
        cardContainer.classList.remove(".fade-out");
        cardContainer.classList.add(".fade-in");
        setTimeout(() => {
            
        },500);
    }, 500);

    


}

    
})