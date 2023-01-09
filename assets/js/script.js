// Animation btn .intro

const btnInIntro = document.querySelectorAll('.btn-text');

for (let item of btnInIntro) {
     if (item.classList.contains('btn-active')==true) {
          
     } else {
          const btnNotActive = item;
          btnNotActive.addEventListener('mouseover', function () {
               this.classList.add('btn-active');
          });
          btnNotActive.addEventListener('mouseout', function () {
               this.classList.remove('btn-active');  
          });
     }
}

// Scroller on menu link

const smoothLinks = document.querySelectorAll('a[href^="#section__menu"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// Scroller on menu

const scrollerOnMenu = document.querySelector('.scroller-onmenu');

scrollerOnMenu.onclick = function () {
     document.querySelector('#section__menu').scrollIntoView({ behavior: "smooth" });
};

// Animation btn-add ~ counter


let counter = 0;
const btnsAdd = document.querySelectorAll('.card-addbag');
const counterScore = document.querySelector('.header-counter');
console.log(counterScore)
for (let item of btnsAdd) {
     item.addEventListener('click', function (e) {
          e.preventDefault();
          counter++
          counterScore.innerHTML = counter;
     });
};