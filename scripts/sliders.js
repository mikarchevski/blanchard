var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    speed: 2000,
    effect: "fade",
    crossFade: true,
    autoplay: {
      disableOnInteraction: false,
    },
  });
  



var swiper1 = new Swiper(".gallerySwiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  
  spaceBetween: 30,
  
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '/'+
                '<span class="' + totalClass + '"></span>';
        },
      },
      breakpoints: {
        640: {
          grid: {
            rows: 2,
          },
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
          lazy: true,
        },
        1268: {
          grid: {
            rows: 2,
          },
          slidesPerView: 2,
          slidesPerGroup:2,
          spaceBetween: 21,
          lazy: true,
        },
        1660: {
          grid: {
            rows: 2,
          },
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 22,
          lazy: true,
        },
        1700:{
          grid: {
            rows: 2,
          },
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 23,
          lazy: true,
        },
      },
  });


// let elems = document.querySelectorAll('.gallery-swiper-slide');
    
    
//     for (let elem of elems) {
//         let attrs = elem.getAttribute('style');
//         let styles = attrs.split(';');
//         let ind = styles.indexOf(" margin-top: 49px");
//         if (ind === 2 || ind === 3){
//             elem.style.marginTop = "13px";
//         }
//     }  
//  window.onload = function() {
//     // let elems = document.querySelectorAll('.gallery-swiper-slide');
    
    
//     // for (let elem of elems) {
//     //     let attrs = elem.getAttribute('style');
//     //     let styles = attrs.split(';');
//     //     let ind = styles.indexOf(" margin-top: 49px");
//     //     if (ind === 2 || ind === 3){
//     //         elem.style.marginTop = "13px";
//     //     }
//     // }  
//  }

  var swiper2 = new Swiper(".publications__Swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    navigation: {
        nextEl: ".publications-swiper-button-next",
        prevEl: ".publications-swiper-button-prev",
      },
    pagination: {
      el: ".publications-swiper-pagination",
      clickable: true,
      type: "fraction",
        renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '/'+
                '<span class="' + totalClass + '"></span>';
        },
    },
    breakpoints: {
        
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      993:{
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      994: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1659:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 42,
      },
      1661:{
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 43,
      },
    },
  });

  var swiper3 = new Swiper(".projects__Swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 1,
    },
    spaceBetween: 50,
    navigation: {
        nextEl: ".projects-swiper-button-next",
        prevEl: ".projects-swiper-button-prev",
      },
      breakpoints: {
        240: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        568: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 41,
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
        },
        1400:{
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
        },
        1500:{
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 40,
        },
        1700:{
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40,
        }
      },
  });

  var swiper4 = new Swiper(".eventSwiper", {
    spaceBetween: 15,
    pagination: {
      el: ".event-swiper-pagination",
    },
    breakpoints: {
      540: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1200:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 40,
      }
    },
  }); 


  var swiper = new Swiper(".gallerySwiperMobile", {

    breakpoints: {
      320:{
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".gallery-swiper-mobile-button-next",
          prevEl: ".gallery-swiper-mobile-button-prev",
        },
        pagination: {
          el: ".gallery-swiper-mobile-pagination",
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + '/'+
                  '<span class="' + totalClass + '"></span>';
          },
        },
      },
      600: {
        grid:{
          rows:2, 
        },
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: ".gallery-swiper-mobile-button-next",
          prevEl: ".gallery-swiper-mobile-button-prev",
        },
        pagination: {
          el: ".gallery-swiper-mobile-pagination",
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + '/'+
                  '<span class="' + totalClass + '"></span>';
          },
        },
      },
      768: {
        grid:{
          rows:2, 
        },
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: ".gallery-swiper-mobile-button-next",
          prevEl: ".gallery-swiper-mobile-button-prev",
        },
      pagination: {
          el: ".gallery-swiper-mobile-pagination",
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + '/'+
                  '<span class="' + totalClass + '"></span>';
          },
        },
      },
      992: {
        grid:{
          rows:2, 
        },
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: ".gallery-swiper-mobile-button-next",
          prevEl: ".gallery-swiper-mobile-button-prev",
        },
      pagination: {
          el: ".gallery-swiper-mobile-pagination",
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + '/'+
                  '<span class="' + totalClass + '"></span>';
          },
        },
      },
    },
  });

function topMenu(){
  let intervalId;
  let intervalId1;
  document.querySelectorAll('.top__filters-list-item-label').forEach(e => {
      e.addEventListener('click', e => {
          let menu = e.currentTarget.dataset.path   
          let label = e.currentTarget.dataset.path;
          document.querySelectorAll('.top__filters-list-item-content').forEach(e => {
            
            document.querySelectorAll('.top__filters-list-item-label').forEach(l=>{
              let currentBtn = document.querySelector(`[data-path=${label}]`);
              if (!currentBtn.classList.contains('open')){
                l.classList.remove('top__filters-list-item-label--active');
                l.classList.remove('open');
                currentBtn.classList.add('top__filters-list-item-label--active');
                  intervalId1 = setTimeout(() => {
                    currentBtn.classList.add('open');
                }, 0);
              }
      
              if (currentBtn.classList.contains('open')){
                clearTimeout(intervalId1);
                currentBtn.classList.remove('top__filters-list-item-label--active');
                intervalId1 = setTimeout(() => {
                  currentBtn.classList.remove('top__filters-list-item-label--active');
                  currentBtn.classList.remove('open');
                },0);
              }
              let currentMenu = document.querySelector(`[data-target=${menu}]`);
            
              if (!currentMenu.classList.contains('open')) {
                  e.classList.remove('top__filters-list-item-content--active');
                  e.classList.remove('open');
                  currentMenu.classList.add('top__filters-list-item-content--active');
                  intervalId = setTimeout(() => {
                      currentMenu.classList.add('open');
                  }, 0);
              }
  
              if (currentMenu.classList.contains('open')) {
                  clearTimeout(intervalId);
                  currentMenu.classList.remove('top__filters-list-item-content--active');
                  intervalId = setTimeout(() => {
                      currentMenu.classList.remove('open');
                  }, 0);
              }
  
              window.onclick = f => {
                  if (f.target == currentMenu || f.target == document.querySelector(`[data-path=${menu}]`)) {
                      return;
                  } else {
                      currentMenu.classList.remove('top__filters-list-item-content--active');
                      currentMenu.classList.remove('open');
                      currentBtn.classList.remove('top__filters-list-item-label--active');
                      currentBtn.classList.remove('open');
                  }
              }
            });
          
          });
         
      });
  });
}

topMenu();


//selector
function gallerySelector(){
  let selectorHeader = document.querySelector('.gallery__desc-filter-selector-header');
  let selectorOptions = document.querySelector('.gallery__desc-filter-selector-options');
  let selectItem = document.querySelectorAll('.gallery__desc-filter-selector-options-item');
  let selectorIcon = document.querySelector('.gallery__desc-filter-selector-header-icon');


  selectorHeader.addEventListener('click', ()=>{
    selectorOptions.classList.toggle('gallery__desc-filter-selector-options--active');
    selectorIcon.classList.toggle('gallery__desc-filter-selector-header-icon--active');
  });

  
  selectItem.forEach( item => {
    item.addEventListener('click', ()=> {
      let currentValue = document.querySelector('.gallery__desc-filter-selector-header-current');
      currentValue.innerHTML = item.innerHTML;
      selectorOptions.classList.toggle('gallery__desc-filter-selector-options--active');
      selectorIcon.classList.toggle('gallery__desc-filter-selector-header-icon--active');
    });
  });
}

gallerySelector();

//selector
function gallerySelectorMobile(){
  let selectorHeader = document.querySelector('.gallery__desc-filter-selector-header-mobile');
  let selectorOptions = document.querySelector('.gallery__desc-filter-selector-options-mobile');
  let selectItem = document.querySelectorAll('.gallery__desc-filter-selector-options-item-mobile');
  let selectorIcon = document.querySelector('.gallery__desc-filter-selector-header-icon-mobile');


  selectorHeader.addEventListener('click', ()=>{
    selectorOptions.classList.toggle('gallery__desc-filter-selector-options-mobile--active');
    selectorIcon.classList.toggle('gallery__desc-filter-selector-header-icon-mobile--active');
  });

  
  selectItem.forEach( item => {
    item.addEventListener('click', ()=> {
      let currentValue = document.querySelector('.gallery__desc-filter-selector-header-current-mobile');
      currentValue.innerHTML = item.innerHTML;
      selectorOptions.classList.toggle('gallery__desc-filter-selector-options-mobile--active');
      selectorIcon.classList.toggle('gallery__desc-filter-selector-header-icon-mobile--active');
    });
  });
}

gallerySelectorMobile();

function gallerySliderHover(){
  let sliderImg = document.querySelectorAll('.gallery-swiper-img');
  sliderImg.forEach(e=>{
    e.addEventListener('mouseover', e=>{
      let item = e.currentTarget.dataset.path;
      sliderImg.forEach(e=>{
        let currentImg = document.querySelector(`[data-path=${item}]`);


        if (!currentImg.classList.contains('hover')){
          e.classList.remove('hover');
          e.classList.remove('gallery-swiper-img--active');
          currentImg.classList.add('gallery-swiper-img--active');
        }
      });
    });
  });
};

gallerySliderHover();

function catalogCountrySelector() {
let intervalId2;
 document.querySelectorAll('.catalog__about-countries-list-item-link-img').forEach(e=>{
  e.addEventListener('click', e=>{
    let item = e.currentTarget.dataset.path;
    document.querySelectorAll('.catalog__about-countries-list-item-link-img').forEach(e=>{
    
    let currentItem = document.querySelector(`[data-path=${item}]`);

    if (!currentItem.classList.contains('test')){
      e.classList.remove('test');
      e.classList.remove('catalog__about-countries-list-item-link-img--active');
      currentItem.classList.add('catalog__about-countries-list-item-link-img--active');
      intervalId2 = setTimeout(() =>{
          currentItem.classList.add('test');
        },0);
      };
    if (currentItem.classList.contains('test')){
      clearTimeout(intervalId2);
      currentItem.classList.remove('test');
      currentItem.classList.remove('catalog__about-countries-list-item-link-img--active');
    }
    })
    
  })
 })
};

catalogCountrySelector();

function publicationsFilter(){
  document.querySelectorAll('.publications__desc-filter-list-item-name').forEach(item=>{
    item.addEventListener('click',()=>{
      item.classList.toggle('publications__desc-filter-list-item-name--active');
    });
  });
};

publicationsFilter();


function showAllEvents(){
  let showAllBtn = document.querySelector('.events__showall');
  showAllBtn.innerHTML = 'Все события';
  showAllBtn.addEventListener('click',()=>{
    let eventList = document.querySelector('.events__list');
    if (showAllBtn.innerHTML =='Все события'){
      showAllBtn.innerHTML ='Показать меньше'
    } else showAllBtn.innerHTML ='Все события'
    eventList.classList.toggle('events__list-all');
    
  });
};

showAllEvents();

function burgerMenu(){
  let burger =  document.querySelector('.header__mobile-burger')
  let overlay = document.querySelector('.header__mobile-overlay');
  burger.addEventListener('click',()=>{
   overlay.classList.add('header__mobile-overlay--show');
   document.querySelector('body').classList.add('body--active');
   document.querySelectorAll('.header__mobile-burger-span').forEach(e =>{
     e.classList.add('header__mobile-burger-span--active');
   });
   window.onclick = f=>{
     document.querySelectorAll('.header__mobile-burger-span').forEach(e=>{
       if(f.target == document.querySelector('.header__mobile-burger')){
         return true;
       } else {
         e.classList.remove('header__mobile-burger-span--active')
         overlay.classList.remove('header__mobile-overlay--show');
         document.querySelector('body').classList.remove('body--active');
       }
     })
       
     };
  
  });
 };
 
 burgerMenu();


 function publicationsSelector(){
  let selectorHeader = document.querySelector('.publications__desc-mobile-filter-selector');
  let selectorIcon = document.querySelector('.publications__desc-mobile-filter-selector-icon');
  let selectorOptions = document.querySelector('.publications__desc-mobile-filter-selector-options');
  // let items =;


  selectorHeader.addEventListener('click', ()=>{
    selectorOptions.classList.toggle('publications__desc-mobile-filter-selector-options--active');
    selectorIcon.classList.toggle('publications__desc-mobile-filter-selector-icon--active');
    document.querySelectorAll('.publications__desc-mobile-filter-selector-options-item-name').forEach(item=>{
      item.classList.toggle('publications__desc-mobile-filter-selector-options-item-name--show');
    });
  });

  document.querySelectorAll('.publications__desc-mobile-filter-selector-options-item-name').forEach(item=>{
    item.addEventListener('click',()=>{
      item.classList.toggle('publications__desc-mobile-filter-selector-options-item-name--active');
      // document.querySelectorAll('.publications__desc-mobile-filter-selector-options-item-name-close').forEach(e=>{
        
      //   e.classList.toggle('publications__desc-mobile-filter-selector-options-item-name-close--active');

      // });
      // close.classList.toggle('publications__desc-mobile-filter-selector-options-item-name-close--active')
      // item.nextEl.classList.toggle('publications__desc-mobile-filter-selector-options-item-name--close--active');
      });
    });

    let intervalId;
    document.querySelectorAll('.publications__desc-mobile-filter-selector-options-item-name').forEach(e=>{
      e.addEventListener('click',e=>{
        let menu = e.currentTarget.dataset.path;
        let currentItem = document.querySelector(`[data-target=${menu}]`);
        if (!currentItem.classList.contains('open')){
          currentItem.classList.add('publications__desc-mobile-filter-selector-options-item-name-close--active');
          intervalId= setTimeout(()=>{
            currentItem.classList.add('open');
          },0);
        };
        if (currentItem.classList.contains('open')){
          currentItem.classList.remove('publications__desc-mobile-filter-selector-options-item-name-close--active');
          intervalId= setTimeout(()=>{
            currentItem.classList.remove('open');
          },0);
        };
      });
    });
    

  
  // selectItem.forEach( item => {
  //   item.addEventListener('click', ()=> {
  //     let currentValue = document.querySelector('.gallery__desc-filter-selector-header-current-mobile');
  //     currentValue.innerHTML = item.innerHTML;
  //     selectorOptions.classList.toggle('publications__desc-mobile-filter-selector-options-item--active');
  //     selectorIcon.classList.toggle('publication__desc-mobile-filter-selector-icon--active');
  //   });
  // });
}

publicationsSelector();
