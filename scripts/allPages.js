// Hamburger menU *********************************************************

const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.menu');

const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');



hamburger.addEventListener ('click',() => {
    navItems.classList.toggle('active');

    line1.classList.toggle('line-1-active');
    line2.classList.toggle('line-2-active');
    line3.classList.toggle('line-3-active');

});

// Sidenav *******************************************************************

const categories = document.querySelector('.categories');
const sidenavwrap = document.querySelector('.sidenav-wrapper');



    categories.addEventListener ('click',() => {
    // nyitja-zárja a sidenavot
    sidenavwrap.classList.toggle('active-categories');
    
    // átírja a gomb szövegét
    if(categories.textContent === 'Kategóriák'){
        categories.textContent = "Vissza"; 
    } else {
    categories.textContent = "Kategóriák"; 
    }
    
});

// Search menü ****************************************************************

const search = document.querySelector ('.searching')
const searchflex = document.querySelector('.search-flex')

search.addEventListener ('click',() => {
    searchflex.classList.toggle('search-active')
})

//Scroll animation

const scrollElements = document.querySelectorAll(".scroll-animation");

scrollElements.forEach(element => {
   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         entry.target.classList.toggle("show", entry.isIntersecting)
       })
     })
   observer.observe(element)
});
