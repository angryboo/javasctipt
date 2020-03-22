// Array of
// 전달 된 인수를 요소로 갖는 배열 생성

const makeArr = Array(1); // 인수가 하나인 생성자 함수
console.log(makeArr); // [ <1 empty item> ]

const arrayOf = Array.of(1);
console.log(arrayOf); // [ 1 ]
// 생성자 함수와는 다르게 전달된 인수가 1개라도 인수를 요소로 갖는 배열을 생성함


// Array.from
// 유사배열 객체 또는 이터러블 객체를 변환하여 새로운 배열 생성

let arrayFrom = Array.from('Hello');
console.log(arrayFrom); // [ 'H', 'e', 'l', 'l', 'o' ]

const arrayFromObj = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c'
};
arrayFrom = Array.from(arrayFromObj);
console.log(arrayFrom); // [ 'a', 'b', 'c' ]

arrayFrom = Array.from({ length: 5 }, function(v, i) {return i});
console.log(arrayFrom);
// Array.from을 사용해 두번때 인수로 전달한 함수를 통해 값을 만들면서 요소를 채울 수 있음


// Array.isArray
// 주어진 인수가 배열이면 true, 배열이 아니면 false 반환

let arrayIsArray = Array.isArray([]);
console.log(arrayIsArray); // true
arrayIsArray = Array.isArray('song'); // 문자열(유사배열객체)
console.log(arrayIsArray); // false
arrayIsArray = Array.isArray(arrayFromObj); // 순회가능 객체
console.log(arrayIsArray); // false


// Array.prototype.indexOf
// 원본 배열에서 인수로 전달 된 요소를 검색하여 인덱스를 반환
// 원본 배열에 인수로 전달 된 요소가 없음 때 -1 반환

const foodIndex = ['pasta', 'risotto', 'pizza'];
let indexOf = foodIndex.indexOf('pasta');
console.log(indexOf); // 0
indexOf = foodIndex.indexOf('jajjang');
console.log(indexOf);

if (foodIndex.indexOf('jajjang') === -1) {
  foodIndex.push('jajjang'); // -1
  // foodIndex 배열에 요소가 존재하는지 확인 하고 없으면 추가
}
console.log(foodIndex); // [ 'pasta', 'risotto', 'pizza', 'jajjang' ]


// Array.prototype.push
// 인수로 전달받은 모든 값을 배열의 마지막 요소로 추가하고 변경된 length값을 반환함
// 원본 배열을 직접 변경

const arrayPush = [1, 2];
const resultPush = arrayPush.push(3, 4);
console.log(resultPush); // 4
console.log(arrayPush); // [ 1, 2, 3, 4 ]
// push 메소드는 성능 면에서 좋지 않음
// length 프로퍼티를 사용하여 직접 요소를 추가할 수도 있음(push보다 빠름)


// Array.prototype.pop
// 원본배열의 마지막 요소를 제거하고 제거한 요소를 반환함
// 원본 배열을 직접 변경
const arrayPop = [1, 2, 3, 4, 5];
const resultPop = arrayPop.pop();
console.log(resultPop); // 5
console.log(arrayPop); // [ 1, 2, 3, 4 ]


// Array.prototype.unshift
// 인수로 전달받은 모든 값을 원본배열 선두에 요소로 추가하고 변경된 length값을 반환
// 원본 배열을 직접 변경함

const arrUnshift = [1, 2];
const resultUnshift = arrUnshift.unshift(3, 4);
console.log(resultUnshift); // 4
console.log(arrUnshift); // [ 3, 4, 1, 2 ]


// Array.prototype.concat
// 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가한 새로운 배열 반환
// 원본 배열은 변경 안됨

const arrConcat1 = [1, 2];
const arrConcat2 = [3, 4];

const arrConcat = arrConcat1.concat(arrConcat2);
console.log(arrConcat); // [ 1, 2, 3, 4 ]


// Array.prototype.splice
// 원본배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 사용함
// 3개의 매개변수가 있으며 원본 배열을 직접 변경

const arrSplice = [1, 2, 3, 4, 5, 6];
const resultSplice = arrSplice.splice(2, 2, 99, 98);
console.log(arrSplice); // [ 1, 2, 99, 88, 5, 6 ]
console.log(resultSplice); // [ 3, 4 ]


// Array.prototype.slice
// 인수로 전달된 범위의 요소들을 복사하여 반환.
// 원본 배열은 변경 안됨

const arrSlice = [1, 2, 3];
const resultSlice = arrSlice.slice(0, 1);
console.log(resultSlice); // [ 1 ]


// 배열 고차함수


// Array.prototype.sort
// 배열의 요소 정렬
// 원본 배열 직접 변경

const arrSort = ['b', 'g', 'y', 'd', 'b', 'c'];
arrSort.sort();
console.log(arrSort); // [ 'b', 'b', 'c', 'd', 'g', 'y' ]

const point = [10, 1, 2, 20, 100, 1000, 4, 5];
point.sort();
console.log(point); // [1, 10, 100, 1000, 2, 20, 4, 5]

// Array.prototype.forEach
// 배열을 순회하며 배열의 각 요소에 대하여 전달된 콜백함수 실행
// forEach의 반환값은 언제나 undefined임

const numbers = [1, 2, 3];
let pows = [];

for (let i = 0; i < numbers.length; i++) {
  pows.push(numbers[i] ** 2);
}
console.log(pows); // [1, 4, 9]
// for문으로 배열 순회

pows = [];
numbers.forEach(item => pows.push(item ** 2));
console.log(pows); // [ 1, 4, 9 ]
// forEach로 배열 순회

// array.prototype.map
// 배열을 순회하며 배열의 각 요소에 대하여 인수로 전달된 콜백함수를 실행
// 콜백 함수의 반환값들이 요소로서 추가된 새로운 배열을 반환함
// 원본 배열은 변경 안됨

const arrMap = [1, 2, 3];
const arrRoot = arrMap.map(item => item * 2);
console.log(arrRoot); // [ 2, 4, 6 ]
// map 메소드가 생성하여 반환하는 새로운 배열의 length는 map 메소드를 호출한 배열, 즉 this의 length와 반드시 일치함

// Array.prototype.filter
// 배열을 순회하며 배열의 각 요소에 대하여 인수로 전달 된 콜백함수 실행
// 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열 반환

const arrFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultFilter = arrFilter.filter((item, index) => index > 3);
console.log(resultFilter); // [ 5, 6, 7, 8, 9 ]
// filter 메소드가 생성하여 반환하는 새로운 배열의 length는 filter메소드를 호출한 배열, 즉 this의 length와 같다.


// Array.prototype.reduce
// 배열을 순회하며 콜백함수의 이전 반환값과 배열의 각 요소에 대하여 인수로 전달 된 콜백함수를 실행하여 하나의 결과값을 반환
// 원본 배열은 변경되지 않음

const sumReduce = [1, 2, 3, 4].reduce((a, b, c, d) => a * b, 1);
console.log(sumReduce); // 24

// Array.prototype.some
// 배열을 순회하며 각 요소에 대하여 인수로 전달 된 콜박함수 실행하여 그 결과가 하나라도 참이라면 true, 모두 거짓이라면 false를 반환


let resultSome = [1, 2, 3].reduce((item, index) => item < 2);
console.log(resultSome); // true

// Array.prototype.every
// 배열을 순회하며 각 요소에 대하여 인수로 전달 된 콜박함수 실행하여 그 결과가 모두 참이라면 true, 하나라도 거짓이라면 false를 반환

let resultEvery = [1, 2, 3].every((item, index) => item < 2);
console.log(resultEvery); // false

// Array.prototype.find
// 배열을 순회하며 각 요소에 대하여 인수로 전달된 콜백함수 실행, 그 결과가 참인 첫번때 요소 반환

const arrFind = [1, 2, 3, 4, 5, 5, 6, 7].find(item => item === 5);
console.log(arrFind); // 5

// Array.prototype.findIndex
// 배열을 순회하며 각 요소에 대하여 인수로 전달된 콜백함수 실행, 그 결과가 참인 첫번때 인덱스 반환

const arrFindindex = [1, 2, 3, 4, 5, 5, 6, 7].findIndex(item => item === 5);
console.log(arrFindindex); // 4
