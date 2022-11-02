
# Starbucks-exercise

### 클론코딩 웹사이트

패스트캠퍼스 강의를 들으며 수행한 클론코딩 스타벅스 예제
여러가지 라이브러리, 리소스, API를 사용하는 예제로 기초를 다뤄보기 좋다.

아래는 강의를 들으면서 궁금해서 테스트해봤던 기록

```
// material icon이 동적으로 변경될 수 있는지 궁금했는데, 처음 HTML에서 없는 요소라서 가져오지 못하는 듯.
const materialEl = document.querySelector('.notice .toggle-promotion');
materialEl.addEventListener('click', function() {
  console.log('toggle');
  if (materialEl.innerHTML == '<div class="material-icons">arrow_down</div>')
    materialEl.innerHTML = '<div class="material-icons">upload</div>';
  else
    materialEl.innerHTML = '<div class="material-icons">arrow_down</div>';
});

```