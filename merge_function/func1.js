/// merge two array to form a unique array item
const arr = [
  { id: 1, name: "ram" },
  { id: 2, name: "shaam" },
  { id: 3, name: "gam", roll: 101 },
];
const arr2 = [
  { id: 1, name: "ram", roll: 83 },
  { id: 1, name: "ram" },
  { id: 2, name: "shaam", roll: 100 },
  { id: 3, name: "gam", roll: 101 },
];

const mergeArr = arr.concat(arr2);
console.log(mergeArr, "before");
const uniqueArr = new Array(
  ...new Set(mergeArr.map((ar) => JSON.stringify(ar)))
).map((ar) => JSON.parse(ar));
console.log(uniqueArr, "after");
