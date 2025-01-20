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
const products = {
    "Men's Fashion": [
      { name: "Casual Shirt", brand: "Al Karam", price: "$55.00", status: "In Stock", image: "images/arrivals__grid__img/arrivals-img-three.svg" },
      { name: "Formal Pants", brand: "Al Karam", price: "$75.00", status: "Limited Stock", image: "images/arrivals__grid__img/arrivals-img-three.svg" }
    ],
    "Women's Fashion": [
      { name: "Shiny Dress", brand: "Al Karam", price: "$95.50", status: "Almost Sold Out", image: "images/arrivals__grid__img/arrivals-img-three.svg" },
      { name: "Long Dress", brand: "Al Karam", price: "$95.50", status: "Almost Sold Out", image: "images/arrivals__grid__img/arrivals-img-three.svg" }
    ],
    "Women Accessories": [
      { name: "Handbag", brand: "Al Karam", price: "$120.00", status: "New Arrival", image: "images/arrivals__grid__img/arrivals-img-three.svg" },
      { name: "Scarf", brand: "Al Karam", price: "$25.00", status: "In Stock", image: "images/arrivals__grid__img/arrivals-img-three.svg" }
    ],
    // Diğer kategoriler için benzer yapı...
  };
  
  const buttons = document.querySelectorAll(".arrivals__button");
  const productGrid = document.querySelector(".arrivals__products__grid");
  let displayedCategories = new Set(); 
  

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.textContent.trim();
      
      if (displayedCategories.has(category)) {
       
        displayedCategories.delete(category);
      } else {
 
        displayedCategories.add(category);
      }
      updateProductDisplay(); 
    });
  });
  
  function updateProductDisplay() {
    productGrid.innerHTML = ""; 
    displayedCategories.forEach(category => {
      const categoryProducts = products[category] || [];
      categoryProducts.forEach(product => {
        const productCard = `
          <div class="arrivals__card">
            <img src="${product.image}" class="arrivals__img" alt="${product.name}" />
            <div class="arrivals__textIcon">
              <h3 class="product__name">${product.name}</h3>
              <div class="product__rating">★★★★★</div>
            </div>
            <p class="product__brand">${product.brand}</p>
            <p class="product__reviews">(4.1k) Customer Reviews</p>
            <div class="product__card__bottom">
              <p class="product__price">${product.price}</p>
              <p class="product__status">${product.status}</p>
            </div>
          </div>
        `;
        productGrid.insertAdjacentHTML("beforeend", productCard);
      });
    });
  }
  
  // Varsayılan olarak tüm ürünleri göstermek için:
  // updateProductDisplay();
  