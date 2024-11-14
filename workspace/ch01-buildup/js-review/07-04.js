// Array.prototype.filter(callback): 배열의 각 요소에 대해 콜백 함수를 실행
// callback(elem, index)
// true를 반환하는 첫번째 콜백 함수에 전달된 요소 전부를 ⭐️ 배열로 반환 ⭐️
// true를 반환하는 콜백 함수가 없을 경우 undefined를 반환

// if 문 필요 없고 그냥 조건 만족하는 ⭐️  모든 요소 배열로 반환 ⭐️
// 조건문 쓸 때 대괄호 빼야함

// 배열 요소 중 홀수의 합계 구하기
var array = [5, 6, 9, 1, 7, 8, 2, 3, 4, 10];

var result = 0;

array.filter((num) => num % 2 === 1).forEach((num) => (result += num));
console.log(result);
