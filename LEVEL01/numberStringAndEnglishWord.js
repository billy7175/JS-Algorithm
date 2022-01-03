function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        console.log(i, arr)
        console.log('여기 i :', i)
        answer = arr.join(i);
        console.log(i, answer)
    }

    return Number(answer);
}


console.log(solution("2three45sixseven"));
console.log(['A','B','C','D','E'].join(1))
// test01 commit 

// test01 commit 

