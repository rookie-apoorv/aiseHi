const params = new URLSearchParams(window.location.search);

const petKey = params.get("pet");
const categoryKey = params.get("category");

const category = PET_DATA[petKey].categories[categoryKey];

document.getElementById("categoryTitle").innerText =
  `${PET_DATA[petKey].name} → ${category.name}`;

const grid = document.getElementById("productGrid");

category.products.forEach(product => {
  grid.innerHTML += `
    <div class="product-card">
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>${product.brand || ""}</p>
      <p>${product.price ? "₹" + product.price : ""}</p>
      <p class="${product.stock ? "in" : "out"}">
        ${product.stock ? "In Stock" : "Out of Stock"}
      </p>
      <a href="product.html?id=${product.id}&pet=${petKey}">
        View Details
      </a>
    </div>
  `;
});
