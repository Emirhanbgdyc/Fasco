//? ---------Bu kisim careouselin javascript kodlari ---------------- 


const leftButton = document.querySelector(".left-btn");
const rightButton = document.querySelector(".right-btn");
const productsImg = document.querySelectorAll(".products-area img");
let idx = 0;

// İlk görseli aktif yap
productsImg[idx].classList.add("active");

// Sağ düğme (sonraki görsel)
rightButton.addEventListener("click", () => {
    idx++;
    changeImages();
});

// Sol düğme (önceki görsel)
leftButton.addEventListener("click", () => {
    idx--;
    changeImages();
});

const changeImages = () => {
    if (idx > productsImg.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = productsImg.length - 1;
    }

    productsImg.forEach((img, i) => {
        img.classList.remove("active", "inactive");
        if (i === idx) {
            img.classList.add("active");
        } else {
            img.classList.add("inactive");
        }
    });
};
//? ---------Bu kisim careouselin javascript kodlari bitisi ---------------- 


const buttons = document.querySelectorAll(".arrivals__buttons");
const productGrid =document.querySelector(".arrivals__products__grid");


buttons.forEach((button) => {
    button.addEventListener("click" , ()=>{
        const category = button.textContent.trim();
        const categoryProducts = products[category] || [];
        renderProducts(categoryProducts);
    });
});