// 반복문 - 조건이 유지되는 한
// 조건을 1번 만족시킨다고 끝이 x

let n = 0;
while (n < 10) {
  n += 2;
  console.log(n);
}

// 끝 조건이 명확하지 않을 때
while (true) {
  if (Math.random() > 0.5) {
    console.log("동전 던지기 성공!");
    break;
  } else {
    console.log("동전 던지기 실패...");
  }
}

// continue
let w = 0;
while (w < 10) {
  w++; // 홀수일 때는 출력하기
  //   if (w % 2 == 1) {
  //     console.log(w, "홀수입니다.");
  //   } else {
  //     continue;
  //   }
  if (w % 2 == 0) {
    // 짝수일 때
    continue; // 더 이상 로직을 진행시키지 않고 다음 while 순번으로 넘김
  }
  console.log(w, "홀수입니다.");
}
