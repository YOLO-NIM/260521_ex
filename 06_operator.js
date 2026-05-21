// 연산자 -> 1개 이상의 피연산자를 대상으로 변환, 계산 -> 그 결과값

// 산술연산자 (+, -, *, /, %)
// 숫자
console.log(30 + 7);
console.log(30 - 7);
console.log(30 * 7);
console.log(30 / 7); // 소수점 연산까지 진행
console.log(30 % 7); // 몫 말고 나머지만 출력
// 일반적인 사칙연산 계산 우선 순위를 따름(*,/ > +,-)
console.log(30 - 5 * 3);
// ()를 쓰면 우선 순위를 지정할 수 있음
console.log((30 - 5) * 3);
// 참고 : 부동소수점 (java 때 설명할 것임)

// 대입/할당 연산자 <- 변수/상수에 값을 넣음
let a = 0; // = <- 연산자
a = a + 5; // 계산
// 왼쪽 : 변수 네임스페이스 = 새로운 값(기존 변수에다가 무언가 계산한...)
console.log(a);

a += 10; // a = a + 10, + - * / % 모두 대응 가능
console.log(a);

// 비교 연산자
// == -> =은 이미 더 중요해 보이는 할당에 써버림
console.log("100 == 10", 100 == 10); // 맞으면 true, 틀리면 false
console.log("100 >= 10", 100 >= 10);
console.log("10 >= 10", 10 >= 10);
console.log("100 <= 10", 100 <= 10);
console.log("10 <= 10", 10 <= 10);
console.log("100 != 10", 100 != 10);
console.log("고양이 == 개", "고양이" == "개"); // 동등연산자
console.log("고양이 != 개", "고양이" != "개");
console.log("개 == 개", "개" == "개");
// "고양이" + "개" = "고양이개"
console.log(1 + "1"); // 11
console.log(1 + "1" * 1); // 2
// 문자와 숫자가 만나면 둘 중에 하나가 형 변환 -> +는 문자열의 연산이 있으니 숫자가 문자열로 바뀜
console.log(2 * "2");
// +를 제외한 나머지 연산들은 문자열 연산이 없으므로 숫자로 자동 변환
console.log(1 == "1"); // 1 -> "1" == "1"
// 일치 연산자 (형 변환을 하지 않는다 -> 그대로 둔다)
console.log(1 === "1"); // false
console.log(1 !== "1"); // true
//truthy, falsy
console.log("0" == 0);
console.log("" == 0);
console.log("0" == "");

// 논리 연산자
// 1개 이상의 값에 대해서 논리적 평가값(true, false)을 합성, 변환하는 연산자
// &&(and), ||(or), !(not)
console.log("=======================");
const b1 = 100 > 10;
console.log(b1);
console.log(!b1); // not(!) : true => false
const b2 = 50 < 20;
console.log(b2);
// b1도 true고 b2도 true일 때 true => 모든 조건을 만족시켜야 true
console.log(b1 && b2); // false
// b1도 false고 b2도 false일 때 false => 모두 false여야 false
console.log(b1 || b2); // true

// ! <- 이건 이해가 감
// &&, || -> 단축연산
// || -> 맨 처음에 true, -> a || b -> a가 true면 => 무조건 true
// && -> 맨 처음이 false, -> a && b -> a가 false => 무조건 false
