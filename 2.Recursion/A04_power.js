function power(base, exponent) {
    if (exponent === 0) return 1
    console.log(`base : ${base} /  exponent : ${exponent} /`)
    return base * power(base, exponent - 1)
}

const result = power(2, 7)
console.log('Result : ', result)

function anotherPower(base, exp){
    powerBase = 0;
    for(let i = 1; i <= exp; i++) {
       //console.log(base ** i)
       powerBase = Math.max(powerBase, base ** i)
    }
    return powerBase;
}
 
console.log(anotherPower(2, 4));

// I highly recommend you to take a look at Chrome's stack feature, if you don't fully understand how stack works then recursion is going to be something tough to grasp, even if you do understand stack recursion can be hard to work with.

// As stated in previous lessons, you need a base case to stop your function to call itself over and over again, at some point it needs to stop. The following code is responsible for that if (exponent === 0) return 1 without this condition your function will run forever. Now considering we passed this arguments to our function power(2, 4) where base = 2 and exponent = 4.

// The very first time we call our power(2, 4) function the code inside the if block doesn't fulfill, because at this point exponent is equal to 4, so we go to the next line return base * power(base, exponent - 1) , here you have base (2) times whatever value your power(base, exponent - 1) function returns, however this time you are adding a different piece of data which is exponent - 1,  this is added to the stack, you are not returning anything yet.

// Repeat the whole process again until you return a value, for this to happen you will need to fulfill the condition (exponent === 0) return 1, so when exponent is finally 0, you will return 1. So another way to look at this line here return base * power(base, exponent - 1) is like this:

// First function in the stack returns 1 (after fulfilling the condition you are finally returning a value)

// base(2) * power(base, exponent -1) = 2  // 2nd call in the stack and returns 2, because remember, your first call in the stack returns 1, it would be the same as saying 2 * 1 = 2

// 2 * 2 = 4 // 3th call in the stack and returns 4

// 2 * 4 = 8 // 4th call in the stack and returns 8

// 2 * 8 = 16 and finally, last call in the stack and returns 2 times 8, which is 16.

// Again this is a hard concept to get, and I'd encourage you to watch the lesson 42. The Call Stack as many times as necessary until you understand how stack works. Recursion can get quite complex depending of the data structure and what you need to do. I heard it's better to use loops whenever we can, although this is not always possible.