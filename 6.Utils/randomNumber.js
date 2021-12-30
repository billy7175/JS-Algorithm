const random = () => Math.random() >= 0.5;
console.log('1.random : ', random());

const randomNumber = (max) => Math.round(Math.random() * max);
console.log('2.randomNumber : ',randomNumber(10));



const rangeRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
console.log('3.rangeRandomNumber : ',rangeRandomNumber(50, 100));

const randomId = () => Math.random().toString(36).substring(2);
console.log('4.randomId : ', randomId());


const randomHex = () => `#${Math.random().toString(16).slice(2,9).padEnd(6,'0')}`;
console.log('5.randomHex : ', randomHex());

const randomHex02 = () => `#${(0x1000000 + Math.random() * 0xffffff).toString(16).slice(1, 7)}`;

// ✅ res is now a hex value like #c3fd5db
console.log('6.randomHex02 : ', randomHex02())

const data = Array.apply(null, {length: 100000}).map(Function.call, Math.random) // 10만 개 데이터 생성
console.log(data)