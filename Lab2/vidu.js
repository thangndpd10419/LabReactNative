// nhập vào 2 số a ,b
// ỉn ra số lượng số chắnx số lể trong [a,b]
let chan = 0;
let le = 0;
function chanLe(a, b) {
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      chan++;
    } else {
      le++;
    }
  }
  return { chan, le };
}
let cl = chanLe(2, 6);
console.log(cl.chan);
console.log(cl.le);
