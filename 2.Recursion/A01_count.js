function solution (number){
    if(number > 0){
        console.log('현재 숫자는 ', number )
        number = number -1
        solution(number)
    } else {
        console.log(number, ' 에 도달했습니다. 함수를 종료합니다.')
    }
}

solution(100)