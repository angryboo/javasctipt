// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성

function getCount8() {
  let count = 0;
  for (let i = 1; i <= 10000; i++) {
    const temp = String(i);
    for (let j = 0; j < temp.length; j++) {
      if (temp.charAt(j) === '8') count += 1;
    }
  }
  return count;
}

console.log(getCount8()); // 4000
