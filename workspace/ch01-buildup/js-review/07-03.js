// Array.prototype.find(callback): 배열의 각 요소에 대해 콜백 함수를 실행
// callback(elem, index)
// true를 반환하는 첫번째 콜백 함수에 전달된 ⭐️ 요소 하나를 반환 ⭐️
// true를 반환하는 콜백 함수가 없을 경우 undefined를 반환

// if 문 필요 없고 그냥 조건 만족하는 첫번째 요소 반환
// 조건문 쓸 때 대괄호 빼야함

// 배열 요소 중 2와 3의 최소 공배수 구하기
var array = [5, 6, 9, 1, 7, 8, 2, 3, 4, 10];

var result = 0;

// -를 반환하는 경우 a, b 정렬
// +를 반환하는 경우 b, a 정렬
// =을 반환하는 경우 그대로

array.sort((a, b) => {
  return a - b;
});

console.log(array);

result = array.find((number) => number % 2 === 0 && number % 3 === 0);

console.log(result);
