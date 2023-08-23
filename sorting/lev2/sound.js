let audio = null;
function playNote(freq, type) {
  if (audio == null) {
    audio = new AudioContext();
  }
  const dur = 0.1;
  const osc = audio.createOscillator();
  osc.frequency.value = freq;
  osc.start();
  osc.type = type;
  osc.stop(audio.currentTime + dur);
  const node = audio.createGain();
  node.gain.value = 0.1;
  node.gain.linearRampToValueAtTime(0, audio.currentTime + dur);
  osc.connect(node);
  node.connect(audio.destination);
}
