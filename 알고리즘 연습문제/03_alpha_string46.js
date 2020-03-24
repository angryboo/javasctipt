// alphaString46 함수는 문자열 s를 매개변수로 입력받는다. s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 alphaString46 함수를 완성

function alphaString46(s) {
  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== '0' && !+s.charAt(i)) return false;
    temp += 1;
  }
  return (temp >= 4 && temp <= 6) || false;
}

console.log(alphaString46('0000a'));
