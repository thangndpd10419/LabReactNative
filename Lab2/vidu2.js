let arr;
let dem = 0;
function demSo(a) {
  arr = a.toString().split("");
  for (let i in arr) {
    if (arr[i] == "0") {
      dem++;
    }
  }
  return dem;
}

let v = demSo(100010001);
console.log(v);

// cáhc 2
let j = 100010001001001;
let dem2 = 0;
do {
  let s = j % 10;
  if (s == 0) {
    dem2++;
  }
  j = Math.floor(j / 10);
} while (j > 0);

console.log(dem2);
