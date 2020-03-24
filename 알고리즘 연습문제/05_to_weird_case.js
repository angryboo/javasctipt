// toWeirdCase함수는 문자열을 인수로 전달받는다.
// 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라.

function toWeirdCase(s) {
  const str = [...s];
  for (let i = 0; i < str.length; i++) {
    str[i] = i % 2 ? str[i].toLowerCase() : str[i].toUpperCase();
  }
  return str.join('');
}

console.log(toWeirdCase('hello world'));
