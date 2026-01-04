const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const petKey = params.get("pet");

let foundProduct;

Object.values(PET_DATA[petKey].categories).forEach(cat => {
  cat.products.forEach(p => {
    if (p.id === id) foundProduct = p;
  });
});

document.getElementById("product").innerHTML = `
  <h1>${foundProduct.name}</h1>
  <img src="${foundProduct.image}">
  <p>${foundProduct.description}</p>
  <p><strong>Price:</strong> ₹${foundProduct.price}</p>
  <p><strong>Status:</strong> ${foundProduct.stock ? "In Stock" : "Out of Stock"}</p>

  <a class="cta" href="https://wa.me/91XXXXXXXXXX">WhatsApp Enquiry</a>
`;
