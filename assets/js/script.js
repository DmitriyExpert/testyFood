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
for (let smoothLink of smoothLinksAboutUs) {
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


// Scroller on mobile

const smoothLinksMobile = document.querySelectorAll('a[href^="#section__mobile"]');
for (let smoothLink of smoothLinksMobile) {
     smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
          document.querySelector(id).scrollIntoView({
               behavior: 'smooth',
               block: 'start'
          });
     }); 
};



// Scroller on team


const smoothLinksTeam = document.querySelectorAll('a[href^="#section__customer"]');

for (let smoothLink of smoothLinksTeam) {
     smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
          document.querySelector(id).scrollIntoView({
               behavior: 'smooth',
               block: 'start'
          });
     });
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


// Animation form

const footerForm = document.querySelector('.footer__form');
const footerFormInput = document.querySelector('.footer__inputemail');
const footerFormBtn = document.querySelector('.footer__btnaction--search');

footerFormInput.addEventListener('input', function () {
     if (footerForm.classList.contains('footer__form--borderRed') == true) {
          footerForm.classList.remove('footer__form--borderRed');     
     };

     if (footerFormInput.value == '') {
          
     } else {
          footerFormBtn.classList.remove('footer__btnaction-inactive');    
          footerFormBtn.classList.add('footer__btnaction-active');
     }

     footerFormBtn.addEventListener('click', function (e) {
          e.preventDefault();
          if (footerFormBtn.classList.contains('footer__btnaction-inactive') == true) {
               
          } else {
               if (footerFormInput.value == '') {
                    alert('Write an email in the input field')
                    footerForm.classList.add('footer__form--borderRed');
                    footerFormBtn.classList.remove('footer__btnaction-active');
                    footerFormBtn.classList.add('footer__btnaction-inactive');
               }
               if (footerFormInput.value != '') {
                    alert('Successfully. Your application has been sent');
                    footerFormInput.value = '';
                    footerFormBtn.classList.remove('footer__btnaction-active');  
                    footerFormBtn.classList.add('footer__btnaction-inactive');
               };
          };
     });


});







// Animation Contact Block

const contactFooterBTN = document.querySelector('.footer__contact--btn');
const contactBlock = document.querySelector('.contact__block--serch');

contactFooterBTN.addEventListener('click', function (e) {
     e.preventDefault();
     const contactClassCheck = contactBlock.classList.contains('contact__nav--border');
     if (contactClassCheck == false) {
          contactBlock.classList.remove('contact__b-none');
          contactBlock.classList.add('contact__nav--border');
     } else {
          
     }
     setTimeout(function () {
          contactBlock.classList.add('contact__b-none');
          contactBlock.classList.remove('contact__nav--border');
     }, 1000);
});



// animation burger-menu

const burgerMenuAction = document.querySelector('.burger__menu--action');
const burgerMenuOpen = document.querySelector('.burger__menu--openView');
const burgerMenuNav = document.querySelector('.burger__menu--openView .header__nav');
const burgerMenuClose = document.querySelector('.button--closeBurgerMenu');

burgerMenuAction.addEventListener('click', function () {
     burgerMenuOpen.style.width = '100%';
     setTimeout(function () {
          burgerMenuNav.style.display = 'block';  
     }, 100);
     burgerMenuClose.addEventListener('click', function () {
          burgerMenuOpen.style.width = '0%';
          setTimeout(function () {
               burgerMenuNav.style.display = 'none';
          }, 208);
     });
});




// Animation burger menu close

const burgerMenuItem = document.querySelectorAll('.burger__menu--openView .header__nav .hmenu .hmenu__item a');

for (let scrollLinks of burgerMenuItem) {
     scrollLinks.addEventListener('click', function () {
          burgerMenuOpen.style.width = '0%';
          burgerMenuNav.style.display = 'none';
     });
};




