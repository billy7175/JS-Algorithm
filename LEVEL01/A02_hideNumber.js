
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}


console.log("결과 : " + hide_numbers('01012345678'));