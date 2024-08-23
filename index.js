// Given Parameters
const velocityKmh = 10000; // velocity (km/h)
const acccerlartionMs2 = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const initialFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgS = 0.5; // fuel burn rate (kg/s)

// Helper Functions
const convertMs2ToKmh2 = (accMs2) => accMs2 * 12960; //1 m/s^2 = 12960 km/h^2
const convertSecToHour = (Sec) => Sec / 3600; // 3600 seconds = 1 hour

// Calculate the corrected new distance
const newDistanceKm =
  initialDistanceKm + velocityKmh * convertSecToHour(timeSeconds); // Convert time to hours and calculate distance

const remainingFuelKg = fuelBurnRateKgS * timeSeconds; //calculates remaining fuel
const newVelocityKmH = calcNewVel(acccerlartionMs2, velocityKmh, timeSeconds); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (velocityKmh, acccerlartionMs2, timeSeconds) => {
  return velocityKmh + acccerlartionMs2 * timeSeconds;
};

console.log(`Corrected New Velocity: ${newVelocityKmH} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
