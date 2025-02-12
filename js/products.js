const buttons = document.querySelectorAll(".arrivals__button");
const productsContainer = document.querySelector(".arrivals__products__grid");

const products = {
  "Men's Fashion": [
    { name: "Men's Shirt white", image: "images/arrivals__grid__img/erkek-one.jpg", brand: "Beymen", reviews: "1.2k", price: "120.99", status: "Almost Sold Out" },
    { name: "Men's Shirt blue", image: "images/arrivals__grid__img/erkek-2.jpg", brand: "Defacto", reviews: "900", price: "169.99", status: "Almost Sold Out" },
    { name: "Men's Shirt black", image: "images/arrivals__grid__img/erkek-3.jpg", brand: "LCW", reviews: "900", price: "369.99", status: "Almost Sold Out" },
    { name: "Men's Shirt green", image: "images/arrivals__grid__img/erkek-4.jpg", brand: "Zara", reviews: "900", price: "269.99", status: "Almost Sold Out" },
    { name: "Men's Shirt blue white", image: "images/arrivals__grid__img/erkek-5.jpg", brand: "Işıl", reviews: "900", price: "569.99", status: "Almost Sold Out" },
    { name: "Men's Shirt dark blue", image: "images/arrivals__grid__img/erkek-6.jpg", brand: "Nike", reviews: "900", price: "469.99", status: "Almost Sold Out" },
  ],
  "Women's Fashion": [
    { name: "Women's Dress", image: "images/arrivals__grid__img/arrivals-img-one.svg", brand: "Al Karam", reviews: "2.3k", price: "89.99", status: "Almost Sold Out" },
    { name: "Shiny Dress", image: "images/arrivals__grid__img/arrivals-img-two.svg", brand: "Al Karam", reviews: "2.3k", price: "89.99", status: "Almost Sold Out" },
    { name: "Long Dress", image: "images/arrivals__grid__img/arrivals-img-three.svg", brand: "Al Karam", reviews: "2.3k", price: "89.99", status: "Almost Sold Out" },
    { name: "Full Sweater", image: "images/arrivals__grid__img/arrivals-img-four.svg", brand: "Al Karam", reviews: "2.3k", price: "89.99", status: "Almost Sold Out" },
    { name: "Skirt", image: "images/arrivals__grid__img/arrivals-img-five.svg", brand: "Al Karam", reviews: "1.5k", price: "59.99", status: "Available" },
  ],
  "Women Accessories": [
    { name: "Pembe Boncuk Kolye", image: "images/arrivals__grid__img/Accessories/taki1.jpg", brand: "Perla", reviews: "748", price: "100", status: "Available" },
    { name: "Sungit Tasi", image: "images/arrivals__grid__img/Accessories/taki2.jpg", brand: "Perla", reviews: "551", price: "85.00", status: "Available" },
    { name: "Larimar Tasi", image: "images/arrivals__grid__img/Accessories/taki3.jpg", brand: "Perla", reviews: "1051", price: "85.00", status: "Available" },
    { name: "Kirmizi Ve Mavi Tas", image: "images/arrivals__grid__img/Accessories/taki4.jpg", brand: "Perla", reviews: "351", price: "85.00", status: "Available" },
    ],
    "Men Accessories":[
        {}
    ],
};


let activeCategory ="ALL";


const renderProducts = (category) =>{
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


    buttons.forEach((button)=>{
      button.addEventListener("click",()=>{
        const category = button.textContent.trim();

        buttons.forEach((btn)=>{
          btn.classList.remove("active");
        })
        button.classList.add("active");
        activeCategory =category;
        renderProducts(category);
      });
});

renderProducts("ALL");