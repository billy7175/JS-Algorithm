const random = () => Math.random() >= 0.5;
console.log('1.random : ', random())

const randomNumber = (max) => Math.round(Math.random() * max);
console.log('2.randomNumber : ',randomNumber(10))



const rangeRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
console.log('3.rangeRandomNumber : ',rangeRandomNumber(50, 100))

const randomId = () => Math.random().toString(36).substring(2);
console.log('4.randomId : ', randomId())