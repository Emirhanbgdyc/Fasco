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
// HTML'deki butonlar ve ürünler için referansları alıyoruz
const buttons = document.querySelectorAll(".arrivals__button");
const productsContainer = document.querySelector(".arrivals__products__grid");

// Örnek ürün verileri (Her kategori için farklı ürünler)
const products = {
  "Men's Fashion": [
    { name: "Men's Shirt", image: "images/arrivals__grid__img/arrivals-img-three.svg", brand: "Al Karam", reviews: "1.2k", price: "49.99", status: "Available" },
    { name: "Men's Jeans", image: "images/arrivals__grid__img/arrivals-img-three.svg", brand: "Al Karam", reviews: "900", price: "69.99", status: "Available" },
    { name: "Men's Jeans", image: "images/arrivals__grid__img/arrivals-img-three.svg", brand: "Al Karam", reviews: "900", price: "69.99", status: "Available" },
  ],
  "Women's Fashion": [
    { name: "Women's Dress", image: "images/arrivals__grid__img/arrivals-img-one.svg", brand: "Al Karam", reviews: "2.3k", price: "89.99", status: "Almost Sold Out" },
    { name: "Skirt", image: "images/arrivals__grid__img/arrivals-img-three.svg", brand: "Al Karam", reviews: "1.5k", price: "59.99", status: "Available" },
  ],
  "Women Accessories": [
    { name: "Handbag", image: "images/handbag.jpg", brand: "Al Karam", reviews: "3.1k", price: "120.00", status: "Available" },
    { name: "Earrings", image: "images/earrings.jpg", brand: "Al Karam", reviews: "500", price: "25.00", status: "Available" },
  ],
};


let activeCategory = null;

// Butonlara tıklama olaylarını ekliyoruz
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.textContent.trim();


    if (activeCategory === category) {
      productsContainer.innerHTML = ""; 
      activeCategory = null;
    } else {
    
      activeCategory = category;
      productsContainer.innerHTML = "";
      const productsHTML = products[category]
        .map((product) => {
          return `
            <div class="arrivals__card">
              <img src="${product.image}" class="arrivals__img" alt="${product.name}" />
              <div class="arrivals__textIcon">
                <h3 class="product__name">${product.name}</h3>
                <div class="product__rating">★★★★★</div>
              </div>
              <p class="product__brand">${product.brand}</p>
              <p class="product__reviews">(${product.reviews}) Customer Reviews</p>
              <div class="product__card__bottom">
                <p class="product__price">$${product.price}</p>
                <p class="product__status">${product.status}</p>
              </div>
            </div>
          `;
        })
        .join("");

      productsContainer.innerHTML = productsHTML; 
    }
  });
});
