const bubbleSort = (arr) => {
  const n = arr.length;
  const moves = [];
  for (let i = n - 1; i >= 0; i--) {
    let swap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        moves.push([j, j + 1]);
        swap = true;
      }
    }
    if (swap == false) break;
  }
  return moves;
};
