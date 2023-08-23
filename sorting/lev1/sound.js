let audio = null;
function play(freq) {
  if (audio == null) {
    audio = new AudioContext();
  }
  const dur = 0.1;
  const osc = audio.createOscillator();
  osc.frequency.value = freq;
  osc.start();
  osc.stop(audio.currentTime + dur);
  const node = audio.createGain();
  node.gain.value = 0.1;

  osc.connect(node);
  node.connect(audio.destination);
}
