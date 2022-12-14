console.log("test");

// 스크롤 시 뱃지 사라지기
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// _.throttle(함수, 시간) lodash library
window.addEventListener('scroll', _.throttle(function(){
  // console.log(window.scrollY);
  if (window.scrollY > 500){
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {
      opacity: 0,     // 0~1 사이의 중간값이 있는 opcity는 자연스러운 전환 가능
      display: 'none' // 중간값이 없는 display는 자연스러운 전환 불가능
    });
    // badgeEl.style.opacity = '0%';
    gsap.to(toTopEl, .2, {
      x: 0,
    });
  }
  else {
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // badgeEl.style.opacity = '100%';
    gsap.to(toTopEl, .2, {
      x: 100,
    });
  }
}, 300));
toTopEl.addEventListener('click', function() {
  gsap.to(window, .5, {
    scrollTo: 0 // Plug-in
  });
});


// 순차적으로 사진 띄우기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: .7*index,
    opacity: 1
  });
});

// notice 쪽 vertical swiper
// const swiperEl = document.querySelector('.notice .swiper');
// const swiper = new Swiper(swiperEl, {
new Swiper('.notice-line .swiper',{
  direction: 'vertical',
  loop: true,
  autoplay: true
});

// notice 쪽 horizontal swiper
new Swiper('.promotion .swiper',{
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 5000
  },
  // If we need pagination
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

// awards swiper
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});


// promotion 토글 버튼 작동
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    promotionEl.classList.add('hide');
  }
  else {
    promotionEl.classList.remove('hide');
  }
});

// floating animation
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delayTime, dy) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector,         // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {                 // 옵션
    y: dy,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delayTime)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// ScrollMagic을 이용해서 순차적 애니메이팅
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: .8,

  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});
