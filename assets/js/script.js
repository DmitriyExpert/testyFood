// lazy loading

const linksOnSite = document.querySelectorAll('img');

for (let item of linksOnSite) {
     item.setAttribute('loading', 'lazy');
};




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
     };
};

//Scrollers


// Scroller on aboutus link

const smoothLinksAboutUs = document.querySelectorAll('a[href^="#scrollFrom--About"]');
for (smoothLink of smoothLinksAboutUs) {
     smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
          document.querySelector(id).scrollIntoView({
               behavior: 'smooth',
               block: 'start'
          });
     });
};


// Scroller on home link

const smoothLinksHome = document.querySelectorAll('a[href^="#section__intro"]');
for (smoothLink of smoothLinksHome) {
     smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
          document.querySelector(id).scrollIntoView({
               behavior: 'smooth',
               block: 'start'
          });
     });
};




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
const seeAllBtn = document.querySelector('.menu--seeall');
const backgroundMenu = document.querySelector('.backburger');
const deleteObjectBtn = document.querySelector('.menu__seeall--close');
let arrObject = [menuElementObject.htmlCode, menuElementObject.htmlCode];

{
     deleteObjectBtn.classList.add('menu--seeall-close_display');
}

function deleteObject() {
     deleteObjectBtn.onclick = function () {
          const wrappersInner = document.querySelectorAll('.menu__box-wrapper');
          
          for (let item of wrappersInner) {
               if (item.classList.contains('wrapper--notdelete')) {
                    
               } else {
                    menuBox.classList.remove('_m-auto');
                    item.remove();
                    menuBox.insertAdjacentHTML('beforeend', btnSeeAll.btnHTML);
                    deleteObjectBtn.classList.add('menu--seeall-close_display');
                    window.location.reload()
               }
          };
     };
};

function addObject() {
     menuBox.classList.add('_m-auto');
     for (let item of arrObject) {
          menuBox.insertAdjacentHTML('beforeend', item)
     }
     deleteObjectBtn.classList.remove('menu--seeall-close_display');
};



const seeAllFunc = function () {
     // disappearance btn and added two object
     addObject();
     seeAllBtn.remove();
     deleteObject();

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



   


// animation fa-stars


const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
     initRatings();
};

function initRatings() {
     let ratingActive, ratingValue;
     for (let index = 0; index < ratings.length; index++) {
          const rating = ratings[index];
          initRating(rating);
     };
     function initRating(rating) {
          initRatingVars(rating);
          setRatingActiveWidth();
          if (rating.classList.contains('rating__set')) {
               setRating(rating);
          };
     };

     function initRatingVars(rating) {
          ratingActive = rating.querySelector('.rating__active');
          ratingValue = rating.querySelector('.rating__value');
     }

     function setRatingActiveWidth(index = ratingValue.innerHTML) {
          const ratingActiveWidth = index / 0.05;
          ratingActive.style.width = `${ratingActiveWidth}%`;
     };
     
     function setRating(rating) {
          const ratingItems = rating.querySelectorAll('.rating__item');
          for (let index = 0; index < ratingItems.length; index++) {
               const ratingItem = ratingItems[index];
               ratingItem.addEventListener('mouseenter', function (e) {
                    initRatingVars(rating);
                    setRatingActiveWidth(ratingItem.value);  
               });
               ratingItem.addEventListener('mouseleave', function (e) {
                    setRatingActiveWidth();
               });
               ratingItem.addEventListener('click', function (e) {
                    initRatingVars(rating);
                    ratingValue.innerHTML = index + 1;
                    setRatingActiveWidth();
               });
          };
     };
};


// slider-Action


$('.single-item').slick();


// Animation SocialBlock

