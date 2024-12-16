const homeButton =document.querySelector('.hero__btn');



const runEvents = () =>{
    homeButton.addEventListener('mouseover',overEvents);
}


const overEvents = () =>{
    homeButton.style.backgroundColor ='#ffffff';
};

runEvents();