// Array.prototype.reduce(callback[, initialValue] - 있어도 되고 없어도 됨): 배열의 각 요소에 대해 콜백 함수를 실행
// ⭐️ callback(acc, currentValue, index, array) ⭐️ (누적 값, 현재 값, 인덱스, 원본 배열)
// initialValue가 주어지면 누적값의 초기값으로 사용하고
// initialValue가 주어지지 않으면 배열의 첫번째 요소가 누적값의 초기값으로 사용되고 두번째 요소부터 콜백 함수가 호출

// ⭐️ 콜백함수 + initialValue (선택)⭐️
// 배열 요소 중 홀수의 합계 구하기
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 1. 1이 num으로 감 = 현개 값 (currentValue)

var result = array.reduce((sum, num) => {
  if (num % 2 !== 0) {
    return sum + num; // 홀수면 sum에 num을 누적해서 반환
  } else {
    return sum; // 짝수일때는 이전 sum을 그대로 반환
  }
}, 0); // 2. 0이 sum으로 감 = initialValue 존재하면 누적값의 초기값

var result = array.reduce((sum, num) => {
  return num % 2 ? sum + num : sum;
});
console.log(result);
