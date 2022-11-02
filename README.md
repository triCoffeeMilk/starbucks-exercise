
# Starbucks-exercise

### 클론코딩 웹사이트

패스트캠퍼스 강의를 들으며 수행한 클론코딩 스타벅스 예제
여러가지 라이브러리, 리소스, API를 사용하는 예제로 기초를 다뤄보기 좋다.

아래는 강의를 들으면서 궁금해서 테스트해봤던 기록

###### material icon이 동적으로 변경될 수 있는가?
테스트해보니 처음 HTML을 구성할 때 필요하다고 명시되어있지 않은 요소라서 가져오지 못하는 것처럼 보인다. HTML은 정적인 구조이므로 동적으로 상호작용하는 것이 아님을 명심할 것.
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

###### 요소를 앞뒤로 뒤집어보는 예제
```
.reserve-store .container {
  background-color: orange;
  perspective: 30px;
}
.reserve-store .container .item {
  width: 100px;
  height: 100px;
  backface-visibility: hidden;
  transition: 1s;
}
.reserve-store .container .item:hover {
  transform: rotateY(180deg);
} 
```