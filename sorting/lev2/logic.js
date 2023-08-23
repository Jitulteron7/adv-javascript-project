const arr = [0.9, 0.6, 0.7, 0.5, 0.2, 0.9, 0.6, 0.7, 0.5, 0.2];
const n = 10;
const margin = 30;
const maxHeight = 400;

const cols = [];
const myCanvas = document.getElementById("myCanvas");
myCanvas.height = 500;
myCanvas.width = 600;
const spacing = (myCanvas.width - 2 * margin) / n;
const ctx = myCanvas.getContext("2d");
let moves = [];

reset();

function reset() {
  for (let i = 0; i < n; i++) {
    arr[i] = Math.random();
  }
  moves = [];
  show();
}

function show() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  for (let i = 0; i < n; i++) {
    let x = i * spacing + spacing / 2 + margin;
    let y = myCanvas.height - 2 * margin + margin - i * 5;
    const width = spacing - 10;
    const height = maxHeight * arr[i];
    cols[i] = new Column(x, y, width, height);
    cols[i].draw(ctx);
  }
}
function play() {
  // let copy = [...arr];
  moves = bubbleSort(arr);
}

animation();

function animation() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  let change = false;
  for (let i = 0; i < cols.length; i++) {
    change = cols[i].draw(ctx) || change;
  }
  if (!change && moves.length > 0) {
    const { idx, swap } = moves.shift();
    let [i, j] = idx;
    const type = swap ? "square" : "sin";
    playNote(cols[i].height + cols[j].height, type);
    if (swap) {
      cols[i].moveTo((loc = { x: cols[j].x, y: cols[j].y }));
      cols[j].moveTo((loc = { x: cols[i].x, y: cols[i].y }), -1);
      [cols[i], cols[j]] = [cols[j], cols[i]];
    } else {
      cols[i].jump();
      cols[j].jump();
    }
  }
  requestAnimationFrame(animation);
}
