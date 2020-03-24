// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 인수로 전달받는다.
// s에 존재하는 ‘p’의 개수와 ‘y’의 갯수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라.
// 대소문자를 구별하지 않으며 ‘p’, ‘y’ 모두 하나도 없는 경우는 항상 true를 리턴한다.

function numPY(s) {
  let temp = 0;
  const changeStr = String(s); // 빈 문자열이나 숫자가 매개변수로 오더라도 문자열로 변환하여 대응
  for (let i = 0; i < changeStr.length; i++) {
    if (changeStr.charAt(i) === 'p' || changeStr.charAt(i) === 'P') temp += 1;
    if (changeStr.charAt(i) === 'y' || changeStr.charAt(i) === 'Y') temp -= 1;
  }
  return temp === 0 || false;
}

console.log(numPY('pppyyY')); // true
