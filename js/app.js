const params = new URLSearchParams(window.location.search);
const petKey = params.get("pet");

const pet = PET_DATA[petKey];

document.getElementById("petTitle").innerText = pet.name;

const grid = document.getElementById("categoryGrid");

Object.keys(pet.categories).forEach(categoryKey => {
  const category = pet.categories[categoryKey];

  grid.innerHTML += `
    <a class="pet-card" 
       href="category.html?pet=${petKey}&category=${categoryKey}">
      <h2>${category.name}</h2>
      <p>${category.subcategories?.join(", ") || ""}</p>
    </a>
  `;
});
