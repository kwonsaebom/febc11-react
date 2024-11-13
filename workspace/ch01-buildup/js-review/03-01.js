function func(data1, data2) {
  // 복사된 값 -- 이건 변화함
  data1 += 10;
  data2[0] += 10;
  console.log(data1, data2[0]);
}

var d1 = 80; // number 원시 값  - 숫자, 문자 등등등등 다 - 변화x
var d2 = [80]; // array(object) 참조 - 객체 - 변화하는 값

console.log(typeof d1, typeof d2);

console.log("===== 함수 호출 이전 =====");
console.log(d1, d2[0]);

console.log("===== 함수 호출 =====");
func(d1, d2);

console.log("===== 함수 호출 이후 =====");
console.log(d1, d2[0]);
