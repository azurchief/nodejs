var name = "이거 출력되면 name variable(변수)를 제대로 class 처럼 쓴 것!";
var letter =
  "Dear " +
  name +
  "\n\n 의미없는 text content " +
  name +
  " 출력용 " +
  name +
  " 출력용 의미없는 text content 출력용 의미없는 text content 출력용 ";
console.log(letter);

var letter = `Dear ${name} 

"2탄 text content \n\n " ${name} " 출력용 " ${
  1 + 1
} " 출력용 의미없는 text content 출력용 의미${name}없는 text content 출력용"`;
console.log(letter);
