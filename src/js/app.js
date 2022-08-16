export default function calculateLife(lifes) {
  let result;
  if (lifes.health > 50) {
    result = 'green';
  }
  if (lifes.health < 50 && lifes.health > 15) {
    result = 'yellow';
  }
  if (lifes.health < 15) {
    result = 'red';
  }
  return result;
}
