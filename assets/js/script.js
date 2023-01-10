// Animation btn .intro

const btnInIntro = document.querySelectorAll('.btn-text');

for (let item of btnInIntro) {
     if (item.classList.contains('btn-active') == false) {
          item.addEventListener('mouseover', function () {
               this.classList.add('btn-active');
          });
          item.addEventListener('mouseout', function () {
               this.classList.remove('btn-active');
          });
     }
}


// Scroller on menu link

const smoothLinksMenu = document.querySelectorAll('a[href^="#section__menu"]');
for (let smoothLink of smoothLinksMenu) {
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

const seeallBtnOnIntro = document.querySelector('#scrollSeeAll');
seeallBtnOnIntro.onclick = function () {
     document.querySelector('#section__menu').scrollIntoView({ behavior: "smooth" });
};


// See all BTN


const menuBox = document.querySelector('.menu__box');
const seeAllBtn = document.querySelector('#menu--seeall');
const backgroundMenu = document.querySelector('.backburger');
let arrObject = [menuElementObject.htmlCode, menuElementObject.htmlCode];

function addObject() {
     menuBox.classList.add('_m-auto');
     for (let item of arrObject) {
          menuBox.insertAdjacentHTML('beforeend', item)
     }
};

const seeAllFunc = function () {
     // disappearance btn and added two object
     addObject();
     seeAllBtn.remove();

     // Blur

     backgroundMenu.classList.add('_filterStyle');

     // counter score
     const btnsAdd = document.querySelectorAll('.card-addbag');
     const counterScore = document.querySelector('.header-counter');
     let counter = counterScore.innerHTML;
     for (let item of btnsAdd) {
     item.addEventListener('click', function (e) {
          e.preventDefault();
          counter++
          counterScore.innerHTML = counter;
          if (counterScore.innerHTML > 99) {
               counter--
               alert('Корзина переполнена');
          };
     });
     };
};

seeAllBtn.onclick = seeAllFunc;

// Animation btn-add ~ counter not seeall


const btnsAdd = document.querySelectorAll('.card-addbag');
const counterScore = document.querySelector('.header-counter');
let counter = counterScore.innerHTML;
for (let item of btnsAdd) {
     item.addEventListener('click', function (e) {
          e.preventDefault();
          counter++
          counterScore.innerHTML = counter;
          if (counterScore.innerHTML > 99) {
               counter--
               alert('Корзина переполнена');
          };
     });
};

