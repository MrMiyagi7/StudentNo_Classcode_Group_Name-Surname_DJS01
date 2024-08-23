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

// Function to calculate new velocity considering unit conversion and validation
const calcNewVel = (velocityKmH, accelerationMs2, timeSeconds) => {
  if (
    typeof velocityKmH !== "number" ||
    typeof accelerationMs2 !== "number" ||
    typeof timeSeconds !== "number"
  ) {
    throw new Error("All parameters must be numbers.");
  }

  if (accelerationMs2 < 0 || timeSeconds < 0) {
    throw new Error("Acceleration and time must be non-negative.");
  }
  const accelerationKmh2 = convertMs2ToKmh2(accelerationMs2); // Convert acceleration to km/h^2
  const timeHours = convertSecToHour(timeSeconds);
  const newVelocityKmH = velocityKmH + accelerationKmh2 * timeHours; // Convert time to hours and calculate

  return newVelocityKmH;
};

// Calculate the corrected new distance
const newDistanceKm =
  initialDistanceKm + velocityKmh * convertSecToHour(timeSeconds); // Convert time to hours and calculate distance

// Calculate the corrected remaining fuel
const remainingFuelKg = initialFuelKg - fuelBurnRateKgS * timeSeconds;

// Ensure remaining fuel is not negative
if (remainingFuelKg < 0) {
  throw new Error("Remaining fuel cannot be negative.");
}

const newVelocityKmH = calcNewVel(acccerlartionMs2, velocityKmh, timeSeconds); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (velocityKmh, acccerlartionMs2, timeSeconds) => {
  return velocityKmh + acccerlartionMs2 * timeSeconds;
};

console.log(`Corrected New Velocity: ${newVelocityKmH} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
