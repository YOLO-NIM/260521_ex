// 변수 : 특정한 메모리에 저장되어 있는 값을 ㅎ출하기 위해서 사용하는 호칭

name = "윌리엄"; // "": 문자열(텍스트)을 표현하기 위한 문법 -> 안쓰면 변수 취급됨

console.log(name);

// let 키워드
let foo; // let 변수명 -> '변수명'으로 메모리에 장소를 만들겠다 (선언 : declaration)
foo = 1; // 할당/대입 (assignment) / 정의 : definition
let bar = 10; // 선언+할당(정의) -> 초기화(initialization)

console.log(foo);
console.log(bar);

// 재할당 O, 재선언 X
foo = 100;
console.log(foo);

// const 키워드
// 초기화 -> 재할당 X
// const a; -> 불가능, 할당도 반드시 같이 진행해야함
const a = 111;
console.log(a);
// const a = 123; -> 불가능, 재선언 X
// a = 222; -> 불가능 재할당 X
// 1. 원주율, 자연계수 e -> 절대 변하면 안되는 값
// 2. 객체를 다룰 때의 속도/안정성

let o = { name: "will", age: 20 };
// o.name
o = 10; // 다른 값을 넣는다? -> 코드 박☆살
console.log(o.name); // undefined
// 변수는 재할당을 받을 수 있기 때문에 메모리 상 가변적인 위치를 받음
// 상수는 재할당이 안되기 때문에 메모리 상 고정적인 길이 -> 약간의 최적화 기능도 한다
