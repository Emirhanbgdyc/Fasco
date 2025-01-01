(function(){

    const homeButton =document.querySelector('.hero__btn');
    const carouselHome = document.querySelectorAll(".item");
    const scrollHeaderWrapper =document.querySelector('.header-wrapper');


//?Scroll Degismesi Baslangic

let add = 150;

window.addEventListener('scroll',()=>{
    // console.log(window.scrollY , scrollHeaderWrapper.offsetHeight);

    if(window.scrollY > scrollHeaderWrapper.offsetHeight + add){
        scrollHeaderWrapper.classList.add('move');
    }else{
        scrollHeaderWrapper.classList.remove('move');
    }
})

//?Scroll Degismesi Bitis


//!Buttona ozellik ekleme bolumu

const runEvents = () =>{
    homeButton.addEventListener('mouseover',overEvents);
    homeButton.addEventListener('mouseout',outEvents);
    
    //? Carousel Events

    carouselHome.forEach((item)=>{
        item.addEventListener('mouseover',overEvents)
        item.addEventListener('mouseout',outEvents)
    })
};


const overEvents = (event) =>{
    event.target.style.transform = 'scale(1.1)'; 
};

const outEvents =(event) =>{
    event.target.style.transform = 'scale(1)';
}



//! Resimleri javascript yolu ile ekleme kismi

const leftSecImg = document.querySelector('.hero-section-left');
const rightSecImg = document.querySelector('.hero-section-right');



const secImgBox = {
    imgLeft : "./images/left.png",
    imgRight : "./images/right.png",

};

const render ={
    imgLeft : () =>{
        leftSecImg.innerHTML = `<img src="${secImgBox.imgLeft}" alt="Left Image">`;
    },
    imgRight :()=>{
        rightSecImg.innerHTML = `<img src="${secImgBox.imgRight}" alt="">`
    },
};

const heroRender =()=>{
    render.imgLeft();
    render.imgRight();
}


//! OWL CAREOUSEL

const initializeCareousel =()=>{
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive:{
            0:{items:1},
            600:{items:3},
            1000:{items:5}
        }
    });
}; 

//? Tum Fonksiyonlarin toplandigi kisimm...

const initialize = ()=>{
    runEvents();
    heroRender();
    initializeCareousel();
}

initialize();



})();