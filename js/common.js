// 검색 버튼 클릭 시 검색 창 나타내기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  // searchInputEl.removeAttribute('placeholder');
  searchInputEl.setAttribute('placeholder', '');
});

// what is this year?
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();