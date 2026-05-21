// if

const age = 15;
//true, false
if (age > 13) // 조건식
{
  console.log("중학생입니다");
}

const score = Math.random() * 100; // 0보다 크거나 100보다 작은 숫자
console.log(score);

if (score >= 90) {
  console.log("합격");
} else {
  console.log("불합격");
}

if (score >= 80) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else if (score >= 40) {
  console.log("C");
} else {
  console.log("D");
}
