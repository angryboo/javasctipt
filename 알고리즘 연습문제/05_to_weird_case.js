// toWeirdCase함수는 문자열을 인수로 전달받는다.
// 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라.

// 일반 for 문
function toWeirdCase(s) {
  const temp = [...s];
  for (let i = 0; i < temp.length; i++) {
    temp[i] = i % 2 ? temp[i].toLowerCase() : temp[i].toUpperCase();
  }
  return temp.join('');
}

// 배열 고차 함수 응용
console.log(toWeirdCase('hello world'));

function toWeirdCaseHof(s) {
  let temp = [...s];
  temp = temp.map((str, index) => (index % 2 ? str.toLowerCase() : str.toUpperCase()));
  return temp.join('');
}

console.log(toWeirdCaseHof('hello world'));
