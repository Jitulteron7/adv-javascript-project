self.onmessage = function (message) {
  let sum = 0;
  for (let i = 0; i < 1e10; i++) {
    sum += i;
  }
  console.log("message from main thread: ", message.data);
  self.postMessage(sum);
};
