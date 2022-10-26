const fs = require('fs');

// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 풀이
function solution(input) {
  let [a,b] = input[0].split(' ');
  a = BigInt(a);
  b = BigInt(b);
  
  const x = a%b;
  const y = (a-x)/b;
  return y +'\n'+x;
}

console.log(solution(input));