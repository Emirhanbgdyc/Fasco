const homeButton =document.querySelector('.hero__btn');

//!Buttona ozellik ekleme bolumu

const runEvents = () =>{
    homeButton.addEventListener('mouseover',overEvents);
    homeButton.addEventListener('mouseout',outEvents);
}


const overEvents = () =>{
    homeButton.style.transform = 'scale(1.1)';
};

const outEvents =() =>{
    homeButton.style.transform = 'scale(1)';
}

runEvents();

//! Resimleri javascript yolu ile ekleme kismi

const leftSecImg = document.querySelector('.hero-section-left');

const secImgBox = {
    imgLeft : "./images/left.png",

};

const render ={
    imgLeft : () =>{
        leftSecImg.innerHTML = `<img src="${secImgBox.imgLeft}" alt="Left Image">`;
    },
};

const heroRender =()=>{
    render.imgLeft();
}

heroRender();