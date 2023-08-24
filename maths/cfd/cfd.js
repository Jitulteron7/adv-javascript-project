const nx = 50; // Number of grid cells in x-direction
const ny = 50; // Number of grid cells in y-direction
const dt = 0.01; // Time step
const viscosity = 0.1; // Viscosity coefficient
const density = 1.0; // Density

// Initialize velocity and pressure fields
const u = [];
const v = [];
const p = [];


// Call simulate() in a loop to advance the simulation
