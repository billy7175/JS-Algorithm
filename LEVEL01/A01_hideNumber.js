
function hide_numbers(string) {
  const length = string.length - 4;
  return "*".repeat(length)+string.substring(length)
}


console.log("결과 : " + hide_numbers('01012345678'));