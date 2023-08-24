const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

const nx = 50;
const ny = 50;
const particleSize = 10; // Increase the particle size for better visibility

canvas.width = nx * particleSize;
canvas.height = ny * particleSize;

// Draw particle grid
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      const x = i * particleSize;
      const y = j * particleSize;
      
      ctx.fillStyle = 'blue';
      ctx.fillRect(x, y, particleSize, particleSize);
    }
  }
}

// Animation loop
function animate() {
  drawParticles();
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
