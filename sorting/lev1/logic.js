const arr = [];
const n = 10;

const reset = () => {
  for (let i = 0; i < n; i++) {
    arr[i] = Math.random();
  }
  show();
};

function sort() {
  const dummy = [...arr];
  const moves = bubbleSort(dummy);
  animation(moves);
}

function animation(moves) {
  if (moves.length == 0) {
    show();
    return;
  }
  const [i, j] = moves.shift();
  [arr[i], arr[j]] = [arr[j], arr[i]];
  show([i, j]);
  play(200 + arr[i] * 500);
  play(200 + arr[j] * 500);
  setTimeout(() => {
    animation(moves);
  }, 500);
}

//note function name(){} and ()=> {} huge differece. you cannot access ()=>{} before intiaziting
function show(index) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  for (let i = 0; i < n; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] * 100 + "%";
    if (index && (index[0] == i || index[1] == i)) {
      bar.style.backgroundColor = "blue";
    }
    container.appendChild(bar);
  }
}

reset();
