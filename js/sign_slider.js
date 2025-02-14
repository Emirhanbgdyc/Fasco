document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    

    function showSlide(n) {

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        

        slides[n].classList.add('active');
        dots[n].classList.add('active');
        
        currentSlide = n;
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    

    function autoRotate() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    const intervalId = setInterval(autoRotate, 3000);
    

    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        clearInterval(intervalId);
        setInterval(autoRotate, 5000);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabLinks = document.querySelectorAll('.tab-link');
    const formContainers = document.querySelectorAll('.form-container');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetTab = this.getAttribute('data-tab');
            
            tabLinks.forEach(link => link.classList.remove('active'));
            formContainers.forEach(container => container.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(targetTab + '-form').classList.add('active');
        });
    });

    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[n].classList.add('active');
        dots[n].classList.add('active');
        
        currentSlide = n;
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    function autoRotate() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    let intervalId = setInterval(autoRotate, 5000);
    
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        clearInterval(intervalId);
        intervalId = setInterval(autoRotate, 5000);
    });
});
