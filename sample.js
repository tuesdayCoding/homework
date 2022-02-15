function solution(s) {
  var answer = 0;
  const numObj = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (const num of Object.keys(numObj)) {
    console.log(`TCL ~ [sample.js] ~ line ~ 17 ~ num`, num);
    s = s.replace(new RegExp(num, "g"), numObj[num]);
  }
  answer = Number(s);
  return answer;
}

solution("one4seveneight");
