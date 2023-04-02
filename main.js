const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector(".nav-menu")
const navbarItems = document.querySelector('.navbar ul');
const navLink = document.querySelector('.nav-link')
const menuLunchElements = document.querySelectorAll('.menu-lunch');
const menuCoffeeElements = document.querySelectorAll('.menu-coffee');
const menuDessertElements = document.querySelectorAll('.menu-dessert');
const menuLinks = document.querySelectorAll('.menu-links a');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
})

hamburger.addEventListener('click', () => {
  navbarItems.classList.toggle('show');
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

menuLunchElements.forEach((menuLunchElement) => {
  menuLunchElement.style.display = 'none';
});

menuCoffeeElements.forEach((menuCoffeeElement) => {
  menuCoffeeElement.style.display = 'none';
});

menuDessertElements.forEach((menuDessertElement) => {
  menuDessertElement.style.display = 'none';
});

menuLinks.forEach(function(link, index) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetMenuItem = document.querySelector(this.getAttribute('href'));
    document.querySelectorAll('.menu').forEach(function(menu) {
      menu.style.display = 'none';
    });
    targetMenuItem.style.display = 'flex';
    document.querySelectorAll('.bullet').forEach(function(bullet) {
      bullet.classList.remove('bullet-active');
    });
    document.querySelectorAll('.bullet')[index].classList.add('bullet-active');
  });
});
      
document.getElementById("searchButton").addEventListener("click", search);
function search() {
  let searchInput = document.getElementById("searchInput").value;
  let results = document.querySelectorAll(".searchable");
  for (let i = 0; i < results.length; i++) {
    if (results[i].textContent.indexOf(searchInput) === -1) {
      results[i].style.display = "none";
    } else {
      results[i].style.display = "block";
    }
  }
}

document.getElementById("mag-glass").addEventListener("click", openSearch);
function openSearch() {
  var searchForm = document.getElementById("searchForm");
  searchForm.style.display = "block";
}

document.getElementById("searchForm").addEventListener("submit", search);
function search() {
  let searchInput = document.getElementById("searchInput").value;
}

