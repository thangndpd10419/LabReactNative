const class1 = [
  {
    mssv: "PS0000",
    name: "Nguyen Van A",
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: "pass",
  },
  {
    mssv: "PS0001",
    name: "Nguyen Van B",
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: "pass",
  },
];
const class2 = [
  {
    mssv: "PS0002",
    name: "Nguyen Van C",
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: "failed",
  },
  {
    mssv: "PS0003",
    name: "Nguyen Van D",
    avgPoint: 10,
    avgTraningPoint: 10,
    status: "pass",
  },
  {
    mssv: "PS0004",
    name: "Nguyen Van E",
    avgPoint: 10,
    avgTraningPoint: 2,
    status: "pass",
  },
];
// in ra danh sach sinh viên có điểm cao đến thấp
// in ra danh sách sinh viên có điểm rèn luyện từ cao tới thấp
//in thông tin ong vàng index=0

const allStudent = class1
  .concat(class2)
  .filter((student) => student?.status != "failed");

let arr1 = [...allStudent].sort((a, b) => b.avgPoint - a.avgPoint);

let arr2 = [...allStudent].sort(
  (a, b) => b.avgTraningPoint - a.avgTraningPoint
);
//arr1: sap xep theo avg - arr2: theo traning
for (let i in arr1) {
  console.log(arr1[i]);
}
