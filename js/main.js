const menuBtn = document.querySelector('.menu__btn')
const menuMobile = document.querySelector('.header__menu-list')

menuBtn.addEventListener('click', ()=>{
    menuMobile.classList.toggle('menu--open')
});

const swiperOne = new Swiper('.feedback__slider', {

    loop: true,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  

  });

  
const swiperTwo = new Swiper('.certificates__slider', {

    
    slidesPerView: '3',
    spaceBetween: '20',
  
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
   
    },


  

  });

  const accordeon = document.querySelector('.accordeon')
  const accordeonTItles = accordeon.querySelectorAll('.accordeon__title')

  accordeonTItles.forEach.call(accordeonTItles, function(accordeonTitle){
    accordeonTitle.addEventListener('click', function(){
      const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

      accordeonTitle.classList.toggle('accordeon__text--active');
      currentText.classList.toggle('accordeon__text--visible');

      if (currentText.classList.contains('accordeon__text--visible')) {
        currentText.style.maxHeight = currentText.scrollHeight + 'px'
      } else {
        currentText.style.maxHeight = null
      }
    });
  });