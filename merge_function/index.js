const fs = require("fs");

function merge(o1, o2) {
  let final = {};
  for (let key in o1) {
    if (o2[key]) {
      if (typeof o1[key] == "object" && typeof o2[key] == "object") {
        final[key] = merge(o1[key], o2[key]);
      } else {
        if (o1[key] === o2[key]) {
          final[key] = o1[key];
        } else {
          let arr;
          if (typeof o1[key] === "object" || typeof o2[key] === "object") {
            arr =
              typeof o1[key] === "object"
                ? [{ ...o1[key] }, o2[key]]
                : (arr = [o1[key], { ...o2[key] }]);
          } else {
            arr = [o1[key], o2[key]];
          }

          final[key] = arr;
        }
      }
    } else {
      final[key] = o1[key];
    }
  }

  for (let key in o2) {
    if (!o1[key]) final[key] = o2[key];
  }
  return final;
}

let c = {
  1: "a",
  2: "b",
  3: {
    a: "1",
    b: {
      x: "1",
      y: {
        1: "a",
      },
    },
  },
  5: {
    a: "1",
    b: "2",
  },
};

let d = {
  1: "x",
  3: {
    b: {
      y: {
        2: "b",
      },
    },
  },
  4: "y",
  5: "c",
};

let data = JSON.stringify(merge(c, d));

fs.writeFile("student-3.json", data, (err) => {
  if (err) throw err;
  console.log("Data written to file");
});

console.log(data);
