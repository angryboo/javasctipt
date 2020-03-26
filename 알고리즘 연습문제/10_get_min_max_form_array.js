// 배열의 요소 중 최대값/최소값을 반환하는 함수를 완성하라.

function getMaxValueFromArray(array) {
  let temp = array[0];
  for (let i = 1; i < array.length; i++) {
    if (temp < array[i]) temp = array[i];
  }
  return temp;
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  let temp = array[0];
  for (let i = 1; i < array.length; i++) {
    if (temp > array[i]) temp = array[i];
  }
  return temp;
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5


// 배열 고차함수 응용

function getMaxValueFromArrayHof(array) {
  return array.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
}
console.log(getMaxValueFromArrayHof([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArrayHof(array) {
  return array.reduce((acc, cur) => (acc < cur ? acc : cur), 0);
}
console.log(getMinValueFromArrayHof([3, 6, -2, -5, 7, 3])); // -5
