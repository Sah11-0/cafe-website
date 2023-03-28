const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector(".nav-menu")
const menuLunchElements = document.querySelectorAll('.menu-lunch');
const menuCoffeeElements = document.querySelectorAll('.menu-coffee');
const menuDessertElements = document.querySelectorAll('.menu-dessert');
const menuLinks = document.querySelectorAll('.menu-links a');



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
})

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
      
