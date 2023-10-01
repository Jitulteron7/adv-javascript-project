const worker = new Worker("worker.js");
const btn1 = document.getElementById("sumId");
const btn2 = document.getElementById("changeColor");

btn1.addEventListener("click", () => {
  worker.postMessage("hello");
});

worker.onmessage = function (message) {
  console.log("message from worker: ", message);
  alert("sum is " + message.data);
};

btn2.addEventListener("click", () => {
  console.log("click");
  if (document.body.style.background == "red") {
    document.body.style.background = "green";
  } else {
    document.body.style.background = "red";
  }
});
