const oldData = [
  { code: "ab", name: "son moi" },
  { code: "ac", name: "sua rua mat" },
  { code: null, name: null },
  { code: null, name: "" },
];

// -map() được sử dụng để tạo một mảng mới, trong đó mỗi phần tử là một cặp [key, value].
//Object.fromEntries() nhận vào mảng các cặp [key, value] và chuyển nó thành một đối tượng.

const obj = Object.fromEntries(oldData.map((item) => [item.code, item]));
console.log(obj);

const newData = (obj) => {
  Object.keys(obj).forEach((key) => {
    const item = obj[key];
    if (!item.code || !item.name || item.name === null || item.name === "") {
      delete obj[key];
    }
  });
  return obj;
};
const filteredObj = newData(obj);
console.log("Filtered obj:", filteredObj);
