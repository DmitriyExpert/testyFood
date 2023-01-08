const btnInIntro = document.querySelectorAll('.btn-text');

for (let item of btnInIntro) {
     if (item.classList.contains('btn-active')==true) {
          const btnActive = item;
          console.log(btnActive);
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

