const generateSortedNumberArray = (length) => [...Array(length).keys()]
// ✅ res is [ 0, 1, 2, 3, 4 ]
console.log(generateSortedNumberArray(5))


const booleanArray = (length, value = false) => Array(length).fill(value);

// ✅ res1 is [ false, false ]
console.log(booleanArray(2))
// ✅ res2 is [ true, true ]
console.log(booleanArray(2, true))


const shuffleArray = (target) => [...target].sort(() => Math.random() - 0.5);

const target = [ 1, 2, 3, 4];

// ✅ res1 is now a shuffled array version of target
console.log('Shiffle : ', shuffleArray(target));

// ✅ the utility works with any kind of array values
console.log('Shiffle :', shuffleArray([ 'one', 'two', 'three', 'four' ]));



// const hasOverEffect = () => window.matchMedia('(any-hover: hover)').matches;
// ✅ res will be true for desktop devices and false for mobile ones
// console.log('Detect Hover : ', hasOverEffect());


// const getCookieValue = (name) => document.cookie.match(new RegExp(`${name}=(.*?);`))?.[1];
// ✅ res is the the value of the cookie feature_x
// console.log(getCookieValue('feature_x'))


// const setCookieValue = (name, value, path, domain) =>
    // document.cookie = `${name}=${value};${path ? 'path=' + path + '; ' : ''}${domain ? 'domain='+ domain + '; ' : ''}`
// ✅ updates the value of the cookie named feature_x
// setCookieValue('feature_x', true);