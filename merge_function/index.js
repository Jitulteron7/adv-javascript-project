// function merge(o1, o2) {
//   let final = {};
//   for (let key in o1) {
//     if (o2[key]) {
//       if (typeof o1[key] == "object" && typeof o2[key] == "object") {
//         final[key] = merge(o1[key], o2[key]);
//       } else {
//         if (o1[key] === o2[key]) {
//           final[key] = o1[key];
//         } else {
//           let arr = [o1[key], ...o2[key]];
//           final[key] = Object.assign({}, arr);
//         }
//       }
//     } else {
//       final[key] = o1[key];
//     }
//   }

//   for (let key in o2) {
//     if (o1[key]) {
//       if (typeof o1[key] == "object" && typeof o2[key] == "object") {
//         final[key] = merge(o1[key], o2[key]);
//       }
//     } else {
//       final[key] = o2[key];
//     }
//   }
//   return final;
// }
// let c = {
//   1: "a",
//   2: "b",
//   3: {
//     a: "1",
//     b: {
//       x: "1",
//       y: {
//         1: "a",
//       },
//     },
//   },
// };
// let d = {
//   1: "x",
//   3: "c",
//   4: "y",
// };

// let data = merge(c, d);
// console.log(data);

let dq = [];
dq.unshift(10);
dq.unshift(20);
console.log(dq);
